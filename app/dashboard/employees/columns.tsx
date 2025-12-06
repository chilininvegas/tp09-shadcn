// https://ui.shadcn.com/docs/components/data-table
'use client'

import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {Badge} from '@/components/ui/badge'
import {ColumnDef} from '@tanstack/react-table'
import {StaticImageData} from 'next/image'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Employee = {
  id: number
  firstName: string
  lastName: string
  teamName: string
  isTeamLeader: boolean
  avatar?: StaticImageData
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'avatar',
    header: '',
    cell: ({row}) => {
      const initials =
        `${row.original.firstName.charAt(0)}${row.original.lastName.charAt(0)}`.toUpperCase()
      return (
        <Avatar className='h-10 w-10'>
          {row.original.avatar ? (
            <AvatarImage src={row.original.avatar.src} alt={initials} />
          ) : (
            <AvatarFallback>{initials}</AvatarFallback>
          )}
        </Avatar>
      )
    }
  },
  {
    accessorKey: 'firstName',
    header: 'First Name'
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name'
  },
  {
    accessorKey: 'teamName',
    header: 'Team',
    cell: ({row}) => {
      return <span className='capitalize'>{row.original.teamName}</span>
    }
  },
  {
    accessorKey: 'isTeamLeader',
    header: '',
    cell: ({row}) => {
      return row.original.isTeamLeader ? (
        <Badge variant='success'>Team leader</Badge>
      ) : null
    }
  }
]
