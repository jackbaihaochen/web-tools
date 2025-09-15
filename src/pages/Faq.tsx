import { Collapse, Typography } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Faq() {
  const items = [
    {
      key: '1',
      label: '为什么说隐私友好？',
      children: <p>所有工具均为纯前端实现，数据只在你的浏览器内存中处理，既不存储也不上传。</p>,
    },
    {
      key: '2',
      label: '支持哪些浏览器？',
      children: <p>主流现代浏览器（Chrome、Edge、Firefox、Safari）的最近两个大版本均支持，移动端也可正常使用。</p>,
    },
    {
      key: '3',
      label: '后续会增加哪些工具？',
      children: <p>路线包含 JSON↔YAML 转换、Base64 编解码、正则测试、哈希/编码工具、文本与图片处理等。</p>,
    },
    {
      key: '4',
      label: '是否开源？',
      children: <p>本项目前端代码托管在 GitHub，欢迎贡献 PR 或提出建议。</p>,
    },
  ];

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>常见问题（FAQ）｜在线工具箱</title>
          <meta name="description" content="关于在线工具箱的常见问题：隐私、数据处理、功能路线、开源与反馈等。" />
          <link rel="canonical" href="https://jackbaihaochen.github.io/web-tools/faq.html" />
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                { '@type': 'Question', name: '为什么说隐私友好？', acceptedAnswer: { '@type': 'Answer', text: '所有操作均在浏览器本地完成，不上传你的数据。' } },
                { '@type': 'Question', name: '支持哪些浏览器？', acceptedAnswer: { '@type': 'Answer', text: '现代浏览器（Chrome、Edge、Firefox、Safari）最新两个大版本均可。' } }
              ]
            })}
          </script>
        </Helmet>
      </HelmetProvider>
      <div className="hero">
        <Typography.Title level={2} style={{ marginBottom: 0 }}>常见问题（FAQ）</Typography.Title>
        <Typography.Text type="secondary">关于隐私、安全与功能规划</Typography.Text>
      </div>
      <Collapse items={items} defaultActiveKey={["1"]} />
    </div>
  );
}
