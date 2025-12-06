'use client'

import {useState, useEffect} from 'react'
import {employees} from '@/data/data'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs'
import {DataTable} from '@/components/ui/data-table'
import {Skeleton} from '@/components/ui/skeleton'
import {columns, Employee} from '../employees/columns'

const teams = [
  'alpha',
  'beta',
  'gamma',
  'delta',
  'epsilon',
  'zeta',
  'eta',
  'theta',
  'canary'
] as const

const TeamsPage = () => {
  const [activeTeam, setActiveTeam] = useState<string>('alpha')
  const [isLoading, setIsLoading] = useState(true)

  const handleTabChange = (value: string) => {
    setIsLoading(true)
    setActiveTeam(value)
  }

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  return (
    <div>
      <h2 className='mb-4'>Teams</h2>
      <Tabs
        value={activeTeam}
        onValueChange={handleTabChange}
        className='w-full'
      >
        <TabsList className='w-full flex-wrap h-auto'>
          {teams.map((team) => (
            <TabsTrigger key={team} value={team} className='capitalize'>
              {team}
            </TabsTrigger>
          ))}
        </TabsList>

        {teams.map((team) => {
          const teamMembers = employees.filter(
            (emp) => emp.teamName === team
          ) as Employee[]
          return (
            <TabsContent key={team} value={team}>
              {isLoading ? (
                <Card>
                  <CardHeader>
                    <CardTitle className='capitalize'>{team} Team</CardTitle>
                  </CardHeader>
                  <CardContent className='grid grid-cols-[60px_1fr_1fr_1fr_1fr] gap-4 items-center'>
                    <Skeleton className='size-10 rounded-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='size-10 rounded-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='size-10 rounded-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='size-10 rounded-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='size-10 rounded-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='size-10 rounded-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='size-10 rounded-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                    <Skeleton className='h-8 w-full' />
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle className='capitalize'>
                      {team} Team ({teamMembers.length} members)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <DataTable
                      columns={columns}
                      data={teamMembers}
                      pageSize={7}
                    />
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          )
        })}
      </Tabs>
    </div>
  )
}

export default TeamsPage
