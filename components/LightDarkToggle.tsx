'use client'

import {useTheme} from 'next-themes'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from '@/components/ui/tooltip'
import {Button} from '@/components/ui/button'
import {MoonIcon, SunIcon} from 'lucide-react'

const LightDarkToggle = ({className}: {className?: string}) => {
  const {setTheme, resolvedTheme} = useTheme()

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className={className}
          onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
          }}
        >
          <Button variant='outline'>
            <SunIcon className='block dark:hidden' />
            <MoonIcon className='hidden dark:block' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span className='hidden dark:inline'>Enable light mode</span>
          <span className='inline dark:hidden'>Enable dark mode</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default LightDarkToggle
