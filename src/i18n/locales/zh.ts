export default {
  brand: '在线工具箱',
  nav: {
    home: '首页',
    json: 'JSON 格式化',
    faq: 'FAQ',
    privacy: '隐私'
  },
  theme: {
    toLight: '切换为浅色',
    toDark: '切换为深色'
  },
  lang: {
    zh: '中文',
    en: 'English',
    ja: '日本語'
  },
  home: {
    title: '在线工具箱',
    subtitle: '纯前端 · 隐私友好 · 持续扩充',
    catalog: '工具目录',
    faqTitle: '常见问题（FAQ）',
    faqMore: 'FAQ 全文',
    tools: {
      json: {
        name: 'JSON 格式化',
        desc: '在线美化 / 压缩 / 校验 / 复制 / 下载',
        tagDev: '开发者',
        tagFmt: '格式化'
      }
    }
  },
  json: {
    title: 'JSON 格式化工具',
    subtitle: '一键格式化、压缩、校验、复制与下载',
    input: '输入',
    output: '输出',
    beautify: '美化',
    minify: '压缩',
    validate: '校验',
    clear: '清空',
    copy: '复制',
    download: '下载 .json',
    ok: '已完成',
    valid: '语法有效',
    placeholder: '{"hello":"world"}',
    note: '本工具在浏览器本地完成 JSON 解析与格式化（调用 JavaScript 原生 JSON.parse 与 JSON.stringify）。不会上传你的数据。'
  },
  faq: {
    title: '常见问题（FAQ）',
    subtitle: '关于隐私、安全与功能规划',
    q1: '为什么说隐私友好？',
    a1: '所有工具均为纯前端实现，数据只在你的浏览器内存中处理，既不存储也不上传。',
    q2: '支持哪些浏览器？',
    a2: '主流现代浏览器（Chrome、Edge、Firefox、Safari）的最近两个大版本均支持，移动端也可正常使用。',
    q3: '后续会增加哪些工具？',
    a3: '路线包含 JSON↔YAML 转换、Base64 编解码、正则测试、哈希/编码工具、文本与图片处理等。',
    q4: '是否开源？',
    a4: '本项目前端代码托管在 GitHub，欢迎贡献 PR 或提出建议。'
  },
  privacy: {
    title: '隐私声明',
    subtitle: '纯前端 · 零数据上传 · 隐私友好',
    h1: '我们如何处理你的数据',
    p1: '本网站所有工具均在浏览器本地运行，涉及的数据处理（如解析、转换、格式化等）均发生在你的设备内存中。',
    li1: '不收集任何输入内容',
    li2: '不将数据发送至服务器',
    li3: '不进行持久化存储（除非你主动下载到本地）',
    h2: 'Cookie 与追踪',
    p2: '本站默认不使用 Cookie，不内置第三方分析或广告追踪脚本。',
    h3: '第三方依赖',
    p3: '当前版本仅使用浏览器原生能力，无需任何后端服务或外部 API。',
    h4: '联系我们',
    p4: '如对隐私有进一步疑问或建议，欢迎通过 GitHub 提交 Issue 与我们联系。'
  }
};

