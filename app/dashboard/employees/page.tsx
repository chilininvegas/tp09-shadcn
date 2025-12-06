import {employees} from '@/data/data'
import EmployeesTable from './EmployeesTable'

// Simulate data fetching delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const EmployeesPage = async () => {
  // Simulate 3 second delay
  await delay(3000)

  return <EmployeesTable data={employees} />
}

export default EmployeesPage
