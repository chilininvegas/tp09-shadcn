'use client'

import {ReactNode, useState} from 'react'
import {MenuIcon} from 'lucide-react'
import {useMediaQuery} from '@/hooks/use-media-query'
import {Drawer, DrawerTrigger, DrawerContent} from '@/components/ui/drawer'
import MainMenu from './components/MainMenu'
import MenuTitle from './components/MenuTitle'

const DashboardLayout = ({children}: {children: ReactNode}) => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='grid md:grid-cols-[250px_1fr] h-screen'>
      {isMobile ? (
        <nav className='p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border'>
          <MenuTitle />
          <Drawer
            direction='right'
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenChange={(open) => setMobileMenuOpen(open)}
          >
            <DrawerTrigger>
              <MenuIcon size={24} />
            </DrawerTrigger>
            {/* DrawerContent renders as a React Portal, so md:hidden does not apply here */}
            <DrawerContent>
              <MainMenu />
            </DrawerContent>
          </Drawer>
        </nav>
      ) : (
        <MainMenu />
      )}

      <div className='overflow-y-auto pt-2 px-4'>
        <h1 className='pb-4'>Welcome back, Chi</h1>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
