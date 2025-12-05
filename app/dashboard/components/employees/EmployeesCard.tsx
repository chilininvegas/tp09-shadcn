'use client'

import Link from 'next/link'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {Avatar, AvatarImage, AvatarFallback} from '@/components/ui/avatar'
import {cn} from '@/lib/utils'

interface EmployeesCardProps {
  title: string
  icon: React.ReactNode
  infoText: string
  btnText: string
  footerIcon: React.ReactNode
  footerText: string
  footerStatus: 'good' | 'bad' | 'none'
  className?: string
  avatar?: string
}

const EmployeesCard = ({
  title,
  icon,
  infoText,
  btnText,
  footerIcon,
  footerText,
  footerStatus,
  avatar
}: EmployeesCardProps) => {
  return (
    <Card className={cn('flex flex-col', avatar ? 'border-pink-500' : '')}>
      <CardHeader className='pb-0'>
        <CardTitle className='text-base'>{title}</CardTitle>
      </CardHeader>

      <CardContent className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          {avatar ? (
            <Avatar className='size-10'>
              <AvatarImage src={avatar} alt={infoText} />
              <AvatarFallback>{infoText.charAt(0)}</AvatarFallback>
            </Avatar>
          ) : (
            icon
          )}
          <div className={cn('font-bold', avatar ? 'text-3xl' : 'text-2xl')}>
            {infoText}
          </div>
        </div>
        <Button asChild size='xs' className={btnText === '' ? 'hidden' : ''}>
          <Link href='/dashboard/employees'>{btnText}</Link>
        </Button>
      </CardContent>

      <CardFooter className='mt-auto text-muted-foreground'>
        <span
          className={cn(
            'flex gap-2 items-center',
            footerStatus === 'good'
              ? 'text-green-500'
              : footerStatus === 'bad'
                ? 'text-red-500'
                : 'text-gray-500'
          )}
        >
          {footerIcon} {footerText}
        </span>
      </CardFooter>
    </Card>
  )
}

export default EmployeesCard
