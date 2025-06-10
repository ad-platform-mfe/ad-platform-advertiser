import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import styles from './TrendChart.module.less'

const data = [
  { name: '06-01', 花费: 4000, 展示量: 2400 },
  { name: '06-02', 花费: 3000, 展示量: 1398 },
  { name: '06-03', 花费: 2000, 展示量: 9800 },
  { name: '06-04', 花费: 2780, 展示量: 3908 },
  { name: '06-05', 花费: 1890, 展示量: 4800 },
  { name: '06-06', 花费: 2390, 展示量: 3800 },
  { name: '06-07', 花费: 3490, 展示量: 4300 }
]

const TrendChart: React.FC = () => {
  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>核心指标趋势</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="花费"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="展示量" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TrendChart
