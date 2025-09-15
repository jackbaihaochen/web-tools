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
