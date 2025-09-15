import { Card, List, Typography, Space, Tag } from 'antd';
import { Link } from 'react-router-dom';

const tools = [
  {
    key: 'json-formatter',
    name: 'JSON 格式化',
    desc: '在线美化 / 压缩 / 校验 / 复制 / 下载',
    path: '/json-formatter',
    tags: ['开发者', '格式化']
  },
];

export default function Home() {
  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <div className="hero">
        <Typography.Title level={2} style={{ marginBottom: 0 }}>在线工具箱</Typography.Title>
        <Typography.Text type="secondary">纯前端 · 隐私友好 · 持续扩充</Typography.Text>
      </div>

      <div>
        <Typography.Title level={3}>工具目录</Typography.Title>
        <List
          grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2 }}
          dataSource={tools}
          renderItem={(item) => (
            <List.Item key={item.key}>
              <Link to={item.path}>
                <Card hoverable title={item.name}>
                  <Space direction="vertical">
                    <div>{item.desc}</div>
                    <div>
                      {item.tags.map(t => <Tag key={t}>{t}</Tag>)}
                    </div>
                  </Space>
                </Card>
              </Link>
            </List.Item>
          )}
        />
      </div>

      <div>
        <Typography.Title level={3}>常见问题（FAQ）</Typography.Title>
        <Typography.Paragraph type="secondary">
          更多问题参见 <Link to="/faq">FAQ 全文</Link>。
        </Typography.Paragraph>
      </div>
    </Space>
  );
}

