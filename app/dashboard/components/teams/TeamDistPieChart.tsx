'use client'

import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from 'recharts'
import {teamDistData as data} from '@/data/data'

const TeamDistPieChart = () => {
  return (
    <ResponsiveContainer width='100%' height={200}>
      <PieChart>
        <Tooltip
          labelClassName='font-bold'
          itemStyle={{padding: '0px 0px'}}
          wrapperClassName='dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-black !text-sm dark:!bg-black rounded-md dark:!border-border'
        />
        <Pie data={data} dataKey='value' nameKey='name'>
          {data.map((item, i) => (
            <Cell key={i} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default TeamDistPieChart
