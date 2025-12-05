'use client'

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import {supportTixResolvedData as data} from '@/data/data'

const SupportTixResolved = () => {
  return (
    <ResponsiveContainer height={350} width='100%'>
      <LineChart data={data}>
        <Tooltip
          labelClassName='font-bold'
          itemStyle={{padding: '0px 0px'}}
          wrapperClassName='!text-sm dark:!bg-black rounded-md dark:!border-border'
          formatter={(value, name) => [
            value,
            (name as string).charAt(0).toUpperCase() + (name as string).slice(1)
          ]}
        />
        <XAxis fontSize={12} dataKey='name' stroke='#888888' />
        <YAxis fontSize={12} stroke='#888888' />
        <CartesianGrid strokeDasharray='3' />
        <Line type='monotone' dataKey='delta' stroke='#84cc16' />
        <Line type='monotone' dataKey='alpha' stroke='#3b82f6' />
        <Line type='monotone' dataKey='canary' stroke='#f97316' />
        <Legend
          formatter={(value) => <span className='capitalize'>{value}</span>}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default SupportTixResolved
