import React from 'react'
import { Table, Tag, Space, Button } from 'antd'
import type { TableProps } from 'antd'
import styles from './CampaignTable.module.less'

interface DataType {
  key: string
  name: string
  status: 'active' | 'paused' | 'ended'
  budget: number
  spend: number
}

const statusMap = {
  active: { color: 'green', text: '投放中' },
  paused: { color: 'orange', text: '已暂停' },
  ended: { color: 'red', text: '已结束' }
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '广告系列名称',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <Tag color={statusMap[status].color} key={status}>
        {statusMap[status].text}
      </Tag>
    )
  },
  {
    title: '预算',
    dataIndex: 'budget',
    key: 'budget',
    render: (text) => `¥ ${text.toLocaleString()}`
  },
  {
    title: '花费',
    dataIndex: 'spend',
    key: 'spend',
    render: (text) => `¥ ${text.toLocaleString()}`
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button type="link">查看数据</Button>
        <Button type="link">编辑</Button>
      </Space>
    )
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: '夏季大促 - 服装推广系列',
    status: 'active',
    budget: 5000,
    spend: 2345.6
  },
  {
    key: '2',
    name: '新品上市 - 电子产品预热',
    status: 'active',
    budget: 10000,
    spend: 8760.5
  },
  {
    key: '3',
    name: '品牌宣传 - 官方账号涨粉',
    status: 'paused',
    budget: 3000,
    spend: 1500
  },
  {
    key: '4',
    name: '五一活动 - 线下门店引流',
    status: 'ended',
    budget: 8000,
    spend: 7980.2
  }
]

const CampaignTable: React.FC = () => (
  <div className={styles.tableContainer}>
    <h3 className={styles.tableTitle}>广告系列列表</h3>
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
  </div>
)

export default CampaignTable
