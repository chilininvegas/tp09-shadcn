import {cn} from '@/lib/utils'

function Skeleton({className, ...props}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='skeleton'
      className={cn('relative overflow-hidden rounded-md bg-accent', className)}
      {...props}
    >
      <div className='absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-black/10 dark:via-white/20 to-transparent' />
    </div>
  )
}

export {Skeleton}
