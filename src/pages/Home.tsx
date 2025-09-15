import { Card, List, Typography, Space, Tag } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const tools = [
    {
      key: 'json-formatter',
      name: t('home.tools.json.name'),
      desc: t('home.tools.json.desc'),
      path: '/json-formatter',
      tags: [t('home.tools.json.tagDev'), t('home.tools.json.tagFmt')]
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
      <HelmetProvider>
        <Helmet>
          <title>{t('home.title')}｜{t('home.tools.json.name')}</title>
          <meta name="description" content={t('home.subtitle')} />
          <link rel="canonical" href="https://jackbaihaochen.github.io/web-tools/" />
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: t('home.title'),
              url: 'https://jackbaihaochen.github.io/web-tools/',
              about: t('home.subtitle')
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: t('home.title'),
              url: 'https://jackbaihaochen.github.io/web-tools/'
            })}
          </script>
        </Helmet>
      </HelmetProvider>
      <div className="hero">
        <Typography.Title level={2} style={{ marginBottom: 0 }}>{t('home.title')}</Typography.Title>
        <Typography.Text type="secondary">{t('home.subtitle')}</Typography.Text>
      </div>

      <div>
        <Typography.Title level={3}>{t('home.catalog')}</Typography.Title>
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
        <Typography.Title level={3}>{t('home.faqTitle')}</Typography.Title>
        <Typography.Paragraph type="secondary">
          <Link to="/faq">{t('home.faqMore')}</Link>
        </Typography.Paragraph>
      </div>
    </Space>
  );
}
