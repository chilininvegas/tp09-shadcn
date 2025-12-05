// By making this a client component, it's now rendered entirely on the client side,
// which prevents hydration mismatches.
// The icons are rendered after React takes control of the DOM, so any modifications
// by browser extensions don't cause hydration errors.
'use client'

import {PersonStandingIcon} from 'lucide-react'

const MenuTitle = () => {
  return (
    <h4 className='flex items-center'>
      <PersonStandingIcon size={40} className='text-primary' />
      SupportMe
    </h4>
  )
}

export default MenuTitle
