'use client'

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import {data} from './data'

const EmployeesBarChart = () => {
  return (
    <ResponsiveContainer width='100%' minHeight={420}>
      {/* Target tooltip cursor as descendant of BarChart */}
      <BarChart
        data={data}
        className='[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800'
      >
        <XAxis dataKey='name' stroke='#888888' tickLine={false} />
        <YAxis stroke='#888888' />

        {/* Use '!' because Tailwind CSS classes are overridden by the recharts tooltip styles */}
        <Tooltip
          separator=': '
          labelClassName='font-bold'
          wrapperClassName='!text-sm dark:!bg-black rounded-md dark:!border-border'
          itemStyle={{padding: '0px 0px'}}
          formatter={(value, name) => {
            if (name === 'office') return [value, 'Office']
            if (name === 'wfh') return [value, 'Home']
          }}
        />

        <Legend
          iconType='circle'
          formatter={(value) => {
            if (value === 'office') return <span>Office</span>
            if (value === 'wfh') return <span>Home</span>
          }}
        />

        <Bar dataKey='office' fill='#EC4899' stackId={1} />
        <Bar dataKey='wfh' fill='#6B7280' stackId={1} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default EmployeesBarChart
