// By making this a client component, it's now rendered entirely on the client side,
// which prevents hydration mismatches.
// The icons are rendered after React takes control of the DOM, so any modifications
// by browser extensions don't cause hydration errors.
'use client'

import Link from 'next/link'
import {PersonStandingIcon} from 'lucide-react'

const MenuTitle = () => {
  return (
    <h4 className='flex items-center' suppressHydrationWarning>
      <PersonStandingIcon size={40} className='text-primary' />
      <Link href='/dashboard'>SupportMe</Link>
    </h4>
  )
}

export default MenuTitle
