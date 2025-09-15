import React, { PropsWithChildren, useMemo } from 'react';
import { Layout, Menu, theme, Typography, Space, Switch, Tooltip, Select } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useThemeMode } from '@/theme/ThemeProvider';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Header, Content, Footer } = Layout;

function useRoutesLabels() {
  const { t } = useTranslation();
  return [
    { key: '/', label: t('nav.home') },
    { key: '/json-formatter', label: t('nav.json') },
    { key: '/faq', label: t('nav.faq') },
    { key: '/privacy', label: t('nav.privacy') },
  ];
}

export default function SiteLayout({ children }: PropsWithChildren) {
  const { token } = theme.useToken();
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggle, lang, setLang } = useThemeMode();
  const { t } = useTranslation();
  const [search, setSearch] = useSearchParams();
  const routes = useRoutesLabels();

  const selectedKeys = useMemo(() => {
    const m = routes.map(r => r.key);
    const found = m.find(k => location.pathname.startsWith(k)) || '/';
    return [found === '/' ? '/' : found];
  }, [location.pathname]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ position: 'sticky', top: 0, zIndex: 10, display: 'flex', alignItems: 'center' }}>
        <div style={{ color: token.colorText, fontWeight: 700, marginRight: 16, whiteSpace: 'nowrap' }}>{t('brand')}</div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedKeys}
          items={routes}
          onClick={(e) => navigate(e.key)}
          style={{ flex: 1, minWidth: 0 }}
        />
        <Space>
          <Select
            size="small"
            value={lang}
            style={{ width: 110 }}
            options={[
              { value: 'zh', label: t('lang.zh') },
              { value: 'en', label: t('lang.en') },
              { value: 'ja', label: t('lang.ja') },
            ]}
            onChange={(v) => {
              setLang(v as any);
              search.set('lang', v);
              setSearch(search, { replace: true });
            }}
          />
          <Tooltip title={isDark ? t('theme.toLight') : t('theme.toDark')}>
            <Switch
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
              checked={isDark}
              onChange={toggle}
            />
          </Tooltip>
        </Space>
      </Header>
      <Content style={{ padding: '16px' }}>
        <div className="container">
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', borderTop: `1px solid ${token.colorBorderSecondary}` }}>
        <Typography.Text type="secondary">
          © {new Date().getFullYear()} {t('brand')}
        </Typography.Text>
      </Footer>
    </Layout>
  );
}
