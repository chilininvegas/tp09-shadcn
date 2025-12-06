// By making this a client component, it's now rendered entirely on the client side,
// which prevents hydration mismatches.
// The icons are rendered after React takes control of the DOM, so any modifications
// by browser extensions don't cause hydration errors.
'use client'

import {cn} from '@/lib/utils'
import MenuItem from './MenuItem'
import MenuTitle from './MenuTitle'
import MenuFooter from './MenuFooter'

const MainMenu = ({className}: {className?: string}) => {
  return (
    <nav
      className={cn('md:bg-muted overflow-auto p-4 flex flex-col', className)}
    >
      <header className='hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4'>
        <MenuTitle />
      </header>
      <ul className='py-4 grow'>
        <MenuItem path='/dashboard'>Dashboard</MenuItem>
        <MenuItem path='/dashboard/teams'>Teams</MenuItem>
        <MenuItem path='/dashboard/employees'>Employees</MenuItem>
        <MenuItem path='/about'>About</MenuItem>
        <MenuItem path='/terms'>Terms & Conditions</MenuItem>
      </ul>
      <MenuFooter />
    </nav>
  )
}

export default MainMenu
