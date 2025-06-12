import React, { useState, useEffect } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import styles from './TrendChart.module.less'

const initialData = [
  { name: '06-01', 花费: 4000, 展示量: 2400 },
  { name: '06-02', 花费: 3000, 展示量: 1398 },
  { name: '06-03', 花费: 2000, 展示量: 9800 },
  { name: '06-04', 花费: 2780, 展示量: 3908 },
  { name: '06-05', 花费: 1890, 展示量: 4800 },
  { name: '06-06', 花费: 2390, 展示量: 3800 },
  { name: '06-07', 花费: 3490, 展示量: 4300 }
]

const TrendChart: React.FC = () => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const lastDataPoint = prevData[prevData.length - 1]
        const lastDate = parseInt(lastDataPoint.name.split('-')[1], 10)
        const nextDate = lastDate < 30 ? lastDate + 1 : 1
        const newName = `06-${nextDate.toString().padStart(2, '0')}`

        const newSpend = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000
        const newImpressions =
          Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000

        const newDataPoint = {
          name: newName,
          花费: newSpend,
          展示量: newImpressions
        }

        const newData = [...prevData.slice(1), newDataPoint]
        return newData
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>核心指标趋势</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <defs>
            <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="花费"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorSpend)"
          />
          <Area
            type="monotone"
            dataKey="展示量"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorImpressions)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TrendChart
