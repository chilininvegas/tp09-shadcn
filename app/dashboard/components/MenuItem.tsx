'use client'

import {ReactNode} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {cn} from '@/lib/utils'

const MenuItem = ({path, children}: {path: string; children: ReactNode}) => {
  const pathname = usePathname()
  const isActive = pathname === path

  return (
    <li>
      <Link
        href={path}
        className={cn(
          'block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foregrond hover:text-foreground',
          isActive &&
            'bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground'
        )}
      >
        {children}
      </Link>
    </li>
  )
}

export default MenuItem
