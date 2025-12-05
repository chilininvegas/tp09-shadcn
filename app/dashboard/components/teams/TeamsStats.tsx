import {Avatar, AvatarFallback} from '@/components/ui/avatar'
import {Button} from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {ListChecksIcon, PieChartIcon, StarIcon, UsersIcon} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import TeamDistPieChart from './TeamDistPieChart'
import SupportTixResolved from './SupportTixResolved'
import {teamLeaders} from '@/data/data'

export const TeamsStats = () => {
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4'>
        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base'>Total teams</CardTitle>
          </CardHeader>
          <CardContent className='flex justify-between items-center'>
            <div className='flex gap-2'>
              <UsersIcon />
              <div className='text-5xl font-bold'>{teamLeaders.length}</div>
            </div>
            <div>
              <Button size='xs' asChild>
                <Link href='/dashboard/teams'>View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base flex justify-between items-center'>
              <span>Team leaders</span>
              <StarIcon className='text-yellow-500' />
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            {teamLeaders.map((teamLeader) => (
              <TooltipProvider
                key={`${teamLeader.firstName}${teamLeader.lastName}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className='h-12 w-12'>
                      {!!teamLeader.avatar && (
                        <Image
                          src={teamLeader.avatar}
                          alt={`${teamLeader.firstName} ${teamLeader.lastName} avatar`}
                        />
                      )}
                      <AvatarFallback>
                        {teamLeader.firstName[0]}
                        {teamLeader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamLeader.firstName} {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>

        {/* Override 'gap-6' in Card component */}
        <Card className='gap-0'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-base flex justify-between items-center'>
              <span>Team distribution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TeamDistPieChart />
          </CardContent>
        </Card>
      </div>

      <Card className='my-4'>
        <CardHeader>
          <CardTitle className='text-2xl flex items-center gap-2'>
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='pb-0'>
          <SupportTixResolved />
        </CardContent>
      </Card>
    </>
  )
}

export default TeamsStats
