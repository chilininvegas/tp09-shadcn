import {ReactNode} from 'react'
import MainMenu from './components/MainMenu'

const DashboardLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className='grid grid-cols-[250px_1fr] h-screen'>
      <MainMenu />
      <div className='overflow-y-auto py-2 px-4'>
        <h1 className='pb-4'>Welcome back, Chi</h1>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
