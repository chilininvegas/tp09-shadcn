import {
  UsersIcon,
  UserCheck2Icon,
  UserRoundXIcon,
  BadgeCheckIcon,
  AlertTriangleIcon,
  PartyPopperIcon
} from 'lucide-react'
import EmployeesCard from './EmployeesCard'

const EmployeesStats = () => {
  const totalEmployees = 143
  const employeesPresent = 117
  const employeesPresentPct = Number(
    ((employeesPresent / totalEmployees) * 100).toFixed(1)
  )

  let icon: React.ReactNode | null = null
  let footerIcon: React.ReactNode | null = null
  let footerStatus: 'good' | 'bad' | 'none' = 'none'
  let footerText = ''

  if (employeesPresentPct >= 75) {
    icon = <UserCheck2Icon />
    footerStatus = 'good'
    footerIcon = <BadgeCheckIcon />
    footerText = `${employeesPresentPct}% of employees are present`
  } else if (employeesPresentPct < 75) {
    icon = <UserRoundXIcon />
    footerStatus = 'bad'
    footerIcon = <AlertTriangleIcon />
    footerText = `Only ${employeesPresentPct}% of employees are present`
  }

  const employeeOfTheMonth = 'Chi Lin'

  return (
    <div className='grid lg:grid-cols-3 gap-4'>
      <EmployeesCard
        title='Total employees'
        icon={<UsersIcon />}
        infoText={totalEmployees.toString()}
        btnText='View all'
        footerIcon={null}
        footerText=''
        footerStatus='none'
      />
      <EmployeesCard
        title='Employees present'
        icon={icon}
        infoText={employeesPresent.toString()}
        btnText=''
        footerIcon={footerIcon}
        footerText={footerText}
        footerStatus={footerStatus}
      />
      <EmployeesCard
        title='Employee of the month'
        icon={<UsersIcon />}
        infoText={employeeOfTheMonth}
        btnText=''
        footerIcon={<PartyPopperIcon className='text-primary' />}
        footerText={`Congratulations ${employeeOfTheMonth}!`}
        footerStatus='none'
        avatar='/images/cm.jpg'
      />
    </div>
  )
}

export default EmployeesStats
