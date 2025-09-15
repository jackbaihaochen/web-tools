import { Typography } from 'antd';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function Privacy() {
  const { t } = useTranslation();
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>{t('privacy.title')}｜{t('brand')}</title>
          <meta name="description" content={t('privacy.subtitle')} />
          <link rel="canonical" href="https://jackbaihaochen.github.io/web-tools/privacy.html" />
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'PrivacyPolicy',
              name: t('privacy.title'),
              url: 'https://jackbaihaochen.github.io/web-tools/privacy.html',
              description: t('privacy.subtitle')
            })}
          </script>
        </Helmet>
      </HelmetProvider>
      <div className="hero">
        <Typography.Title level={2} style={{ marginBottom: 0 }}>{t('privacy.title')}</Typography.Title>
        <Typography.Text type="secondary">{t('privacy.subtitle')}</Typography.Text>
      </div>

      <div className="box">
        <Typography.Title level={3}>{t('privacy.h1')}</Typography.Title>
        <Typography.Paragraph>
          {t('privacy.p1')}
        </Typography.Paragraph>
        <ul>
          <li>{t('privacy.li1')}</li>
          <li>{t('privacy.li2')}</li>
          <li>{t('privacy.li3')}</li>
        </ul>
      </div>

      <div className="box">
        <Typography.Title level={3}>{t('privacy.h2')}</Typography.Title>
        <Typography.Paragraph>{t('privacy.p2')}</Typography.Paragraph>
      </div>

      <div className="box">
        <Typography.Title level={3}>{t('privacy.h3')}</Typography.Title>
        <Typography.Paragraph>{t('privacy.p3')}</Typography.Paragraph>
      </div>

      <div className="box">
        <Typography.Title level={3}>{t('privacy.h4')}</Typography.Title>
        <Typography.Paragraph>{t('privacy.p4')}</Typography.Paragraph>
      </div>
    </div>
  );
}
