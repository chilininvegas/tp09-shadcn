'use client'

import Link from 'next/link'
import {Avatar, AvatarFallback} from '@/components/ui/avatar'
import LightDarkToggle from '@/components/LightDarkToggle'

const MenuFooter = () => {
  return (
    <footer className='flex gap-2 items-center' suppressHydrationWarning>
      <Avatar>
        <AvatarFallback className='bg-pink-300 dark:bg-pink-800'>
          CL
        </AvatarFallback>
      </Avatar>
      <Link href='/'>Sign out</Link>
      <LightDarkToggle className='ml-auto' />
    </footer>
  )
}

export default MenuFooter
