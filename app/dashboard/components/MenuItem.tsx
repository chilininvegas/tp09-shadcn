'use client'

import {ReactNode, useContext} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {cn} from '@/lib/utils'
import {DrawerContext} from '@/components/ui/drawer'

const MenuItem = ({path, children}: {path: string; children: ReactNode}) => {
  const {onClose} = useContext<{onClose?: () => void}>(DrawerContext)
  const pathname = usePathname()
  const isActive = pathname === path

  return (
    <li>
      <Link
        href={path}
        className={cn(
          'block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground',
          isActive &&
            'bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground'
        )}
        onClick={() => onClose?.()}
      >
        {children}
      </Link>
    </li>
  )
}

export default MenuItem
