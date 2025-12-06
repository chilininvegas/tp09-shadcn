'use client'

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {DataTable} from '@/components/ui/data-table'
import {columns, Employee} from './columns'

interface EmployeesTableProps {
  data: Employee[]
}

const EmployeesTable = ({data}: EmployeesTableProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees ({data.length} total)</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  )
}

export default EmployeesTable
