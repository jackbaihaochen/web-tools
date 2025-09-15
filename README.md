# web-tools

基于 React + TypeScript + Vite 的在线工具站点（Ant Design）。

开发

- 安装依赖：`npm install`
- 本地开发：`npm run dev`
- 构建：`npm run build`
- 预览构建结果：`npm run preview`

部署

- 方式 A：启用 GitHub Pages 的 GitHub Actions 部署（推荐）。仓库 Settings → Pages → Source 选 “GitHub Actions”。工作流见 `.github/workflows/deploy.yml`。
- 方式 B：使用 `docs` 目录托管。执行 `npm run deploy:docs`，然后在 Settings → Pages 选择 “Deploy from a branch” 并将目录设为 `main /docs`。
- 已在 `vite.config.ts` 设置 `base: '/web-tools/'`；使用 HashRouter，无需服务器重写规则。

结构

- `src/layouts/SiteLayout.tsx`：站点统一头部、导航与脚部
- `src/pages/*`：各页面（首页、JSON 工具、FAQ、隐私）
- `src/styles/global.css`：全局样式与暗色主题微调
- `src/theme/ThemeProvider.tsx`：Ant Design 明暗主题切换（localStorage 记忆）

静态资源与站点图标

- 将静态资源放在 `public/` 目录（构建时会原样拷贝到产物根目录）。
- 站点图标：`public/web-tool-box-icon.png`（源图）
- 多尺寸图标（同源图拷贝）：
  - `public/web-tool-box-icon-192.png`
  - `public/web-tool-box-icon-512.png`
  - `public/favicon-32.png`
  - `public/favicon.ico`
- Web App Manifest：`public/site.webmanifest`
- `index.html` 已配置 favicon、apple-touch-icon 与 manifest 链接；Vite 会将 `%BASE_URL%` 替换为 `base`。

跳转页（兼容旧外链）

- 位于 `public/` 下并随构建产物发布：
  - `public/404.html` → 重定向至 `/web-tools/`
  - `public/faq.html` → 重定向至 `/#/faq`
  - `public/privacy.html` → 重定向至 `/#/privacy`
  - `public/tools/json-formatter/index.html` → 重定向至 `/#/json-formatter`
  - 这些页面也已内置 favicon 与 manifest 引用。
