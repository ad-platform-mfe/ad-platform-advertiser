import React from 'react'
import { Statistic } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import styles from './DataCard.module.css'

interface DataCardProps {
  title: string
  value: number | string
  precision?: number
  prefix?: React.ReactNode
  suffix?: string
  change?: number // 正数表示上升，负数表示下降
  description: string
}

const DataCard: React.FC<DataCardProps> = ({
  title,
  value,
  precision = 2,
  prefix,
  suffix,
  change,
  description
}) => {
  const renderChange = () => {
    if (change === undefined) return null
    const isPositive = change >= 0
    return (
      <span className={isPositive ? styles.positive : styles.negative}>
        {isPositive ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        {Math.abs(change)}%
      </span>
    )
  }

  return (
    <div className={styles.card}>
      <Statistic
        title={<span className={styles.title}>{title}</span>}
        value={value}
        precision={precision}
        prefix={prefix}
        suffix={suffix}
        valueStyle={{ color: '#3f8600' }}
      />
      <div className={styles.footer}>
        <span className={styles.description}>{description}</span>
        {renderChange()}
      </div>
    </div>
  )
}

export default DataCard
