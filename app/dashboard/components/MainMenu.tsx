// By making this a client component, it's now rendered entirely on the client side,
// which prevents hydration mismatches.
// The icons are rendered after React takes control of the DOM, so any modifications
// by browser extensions don't cause hydration errors.
'use client'

import MenuItem from './MenuItem'
import MenuTitle from './MenuTitle'
import MenuFooter from './MenuFooter'

const MainMenu = () => {
  return (
    <nav className='flex flex-col bg-muted overflow-y-auto p-4'>
      <MenuTitle />
      <hr className='dark:text-black text-zinc-300 my-4' />
      <ul className='grow'>
        <MenuItem path='/dashboard'>Dashboard</MenuItem>
        <MenuItem path='/dashboard/teams'>Teams</MenuItem>
        <MenuItem path='/dashboard/employees'>Employees</MenuItem>
        <MenuItem path='/dashboard/account'>Account</MenuItem>
        <MenuItem path='/dashboard/settings'>Settings</MenuItem>
      </ul>
      <MenuFooter />
    </nav>
  )
}

export default MainMenu
