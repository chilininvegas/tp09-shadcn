import LightDarkToggle from '@/components/LightDarkToggle'

type Props = {
  children?: React.ReactNode
}

const SignedOutLayout = ({children}: Props) => {
  return (
    <>
      <div className='flex flex-col gap-4 min-h-screen items-center justify-center p-24'>
        {children}
      </div>
      <LightDarkToggle className='fixed right-2 top-1/2' />
    </>
  )
}

export default SignedOutLayout
