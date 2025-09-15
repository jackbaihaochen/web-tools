import React, { PropsWithChildren, useMemo } from 'react';
import { Layout, Menu, theme, Typography, Space, Switch, Tooltip } from 'antd';
import { BulbOutlined, MoonOutlined } from '@ant-design/icons';
import { useThemeMode } from '@/theme/ThemeProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const routes = [
  { key: '/', label: '首页' },
  { key: '/json-formatter', label: 'JSON 格式化' },
  { key: '/faq', label: 'FAQ' },
  { key: '/privacy', label: '隐私' },
];

export default function SiteLayout({ children }: PropsWithChildren) {
  const { token } = theme.useToken();
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggle } = useThemeMode();

  const selectedKeys = useMemo(() => {
    const m = routes.map(r => r.key);
    const found = m.find(k => location.pathname.startsWith(k)) || '/';
    return [found === '/' ? '/' : found];
  }, [location.pathname]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ position: 'sticky', top: 0, zIndex: 10, display: 'flex', alignItems: 'center' }}>
        <div style={{ color: token.colorText, fontWeight: 700, marginRight: 16, whiteSpace: 'nowrap' }}>在线工具箱</div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedKeys}
          items={routes}
          onClick={(e) => navigate(e.key)}
          style={{ flex: 1, minWidth: 0 }}
        />
        <Space>
          <Tooltip title={isDark ? '切换为浅色' : '切换为深色'}>
            <Switch
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<BulbOutlined />}
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
          © {new Date().getFullYear()} 在线工具箱
        </Typography.Text>
      </Footer>
    </Layout>
  );
}
