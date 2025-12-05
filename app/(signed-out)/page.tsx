// The landing page uses PersonStandingIcon from Lucide React, which renders SVG elements.
// Browser extensions like Dark Reader modify these SVG elements by adding attributes like:
//   style={{--darkreader-inline-stroke:"currentColor"}}
//   data-darkreader-inline-stroke=""
// By making the landing page a client component, it now renders entirely on the client side,
// preventing the mismatch between server-rendered HTML and client-rendered HTML.
'use client'

import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {PersonStandingIcon} from 'lucide-react'

const LandingPage = () => {
  return (
    <>
      <h1 className='flex gap-2 items-center'>
        <PersonStandingIcon size={50} className='text-primary' />
        SupportMe
      </h1>
      <p>The best dashboard to manage customer support</p>
      <div className='flex gap-2 items-center'>
        <Button asChild>
          <Link href='/signin'>Sign In</Link>
        </Button>
        <small>or</small>
        <Button asChild variant={'outline'}>
          <Link href='/signup'>Sign Up</Link>
        </Button>
      </div>
    </>
  )
}

export default LandingPage
