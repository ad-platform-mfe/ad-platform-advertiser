import React from 'react'
import { Breadcrumb, Layout, theme } from 'antd'
import Dashboard from './pages/Dashboard'

const { Content } = Layout

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb
            style={{ margin: '16px 0' }}
            items={[{ title: '首页' }, { title: '概览' }]}
          />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            <Dashboard />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
