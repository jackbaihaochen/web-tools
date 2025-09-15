import { Typography } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Privacy() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>隐私声明｜在线工具箱</title>
          <meta name="description" content="在线工具箱隐私声明：本网站为纯前端实现，不收集、不存储、不上传你的任何输入数据。" />
          <link rel="canonical" href="https://jackbaihaochen.github.io/web-tools/privacy.html" />
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'PrivacyPolicy',
              name: '在线工具箱隐私声明',
              url: 'https://jackbaihaochen.github.io/web-tools/privacy.html',
              description: '本网站所有工具为纯前端实现，不收集、不存储、不上传你的任何输入数据。'
            })}
          </script>
        </Helmet>
      </HelmetProvider>
      <div className="hero">
        <Typography.Title level={2} style={{ marginBottom: 0 }}>隐私声明</Typography.Title>
        <Typography.Text type="secondary">纯前端 · 零数据上传 · 隐私友好</Typography.Text>
      </div>

      <div className="box">
        <Typography.Title level={3}>我们如何处理你的数据</Typography.Title>
        <Typography.Paragraph>
          本网站所有工具均在浏览器本地运行，涉及的数据处理（如解析、转换、格式化等）均发生在你的设备内存中。
        </Typography.Paragraph>
        <ul>
          <li>不收集任何输入内容</li>
          <li>不将数据发送至服务器</li>
          <li>不进行持久化存储（除非你主动下载到本地）</li>
        </ul>
      </div>

      <div className="box">
        <Typography.Title level={3}>Cookie 与追踪</Typography.Title>
        <Typography.Paragraph>本站默认不使用 Cookie，不内置第三方分析或广告追踪脚本。</Typography.Paragraph>
      </div>

      <div className="box">
        <Typography.Title level={3}>第三方依赖</Typography.Title>
        <Typography.Paragraph>当前版本仅使用浏览器原生能力，无需任何后端服务或外部 API。</Typography.Paragraph>
      </div>

      <div className="box">
        <Typography.Title level={3}>联系我们</Typography.Title>
        <Typography.Paragraph>如对隐私有进一步疑问或建议，欢迎通过 GitHub 提交 Issue 与我们联系。</Typography.Paragraph>
      </div>
    </div>
  );
}
