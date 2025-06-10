import React from 'react'
import { Col, Row } from 'antd'
import DataCard from './components/DataCard'
import TrendChart from './components/TrendChart'
import CampaignTable from './components/CampaignTable'

const Dashboard: React.FC = () => {
  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={12} lg={6}>
          <DataCard
            title="今日消耗"
            value={1128.93}
            precision={2}
            prefix="¥"
            change={11.2}
            description="相较昨日"
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <DataCard
            title="展示次数"
            value={98550}
            precision={0}
            change={-5.8}
            description="相较昨日"
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <DataCard
            title="点击次数"
            value={3450}
            precision={0}
            change={8.1}
            description="相较昨日"
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
          <DataCard
            title="平均点击成本 (CPC)"
            value={0.33}
            precision={2}
            prefix="¥"
            change={2.3}
            description="相较昨日"
          />
        </Col>
      </Row>

      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <TrendChart />
        </Col>
      </Row>

      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <CampaignTable />
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
