# web-tools

基于 React + TypeScript + Vite 的在线工具站点（Ant Design）。

开发

- 安装依赖：`npm install`
- 本地开发：`npm run dev`
- 构建：`npm run build`
- 预览构建结果：`npm run preview`

部署

- GitHub Pages 项目页建议使用 `base: '/web-tools/'`（已在 `vite.config.ts` 配置）。
- 使用 HashRouter，无需服务器重写规则。

结构

- `src/layouts/SiteLayout.tsx`：站点统一头部、导航与脚部
- `src/pages/*`：各页面（首页、JSON 工具、FAQ、隐私）
- `src/styles/global.css`：全局样式与暗色主题微调
