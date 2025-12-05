import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {LaptopIcon} from 'lucide-react'
import BarChart from './EmployeesBarChart'

const EmployeesChart = () => {
  return (
    <Card className='mt-4 pb-4'>
      <CardHeader>
        <CardTitle className='text-2xl flex items-center gap-2'>
          <LaptopIcon />
          <span>Employee work location trends</span>
        </CardTitle>
      </CardHeader>
      <CardContent className='px-4 pb-0'>
        <BarChart />
      </CardContent>
    </Card>
  )
}

export default EmployeesChart
