import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {PersonStanding} from 'lucide-react'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className='container mx-auto max-w-4xl py-8'>
      <div className='mb-6 flex justify-center items-center relative'>
        <PersonStanding size={50} className='text-primary' />
        <div className='absolute right-0'>
          <Button asChild>
            <Link href='/dashboard'>Back to Dashboard</Link>
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className='text-3xl text-center'>
            About This Project
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-2 text-sm leading-relaxed'>
          <p>
            A modern dashboard application for employee management, team
            organization, and data visualization.
          </p>

          <div className='w-4/5 mx-auto'>
            <h2 className='pt-4 text-xl font-semibold'>Technology Stack</h2>
            <ul className='mt-3 ml-5 list-disc'>
              <li>
                <strong>Next.js 16</strong> - React framework with App Router
                and Turbopack
              </li>
              <li>
                <strong>React 19</strong> - Latest React version
              </li>
              <li>
                <strong>TypeScript</strong> - Type-safe development
              </li>
              <li>
                <strong>Tailwind CSS v4</strong> - Utility-first CSS framework
              </li>
              <li>
                <strong>shadcn/ui</strong> - Beautiful, accessible component
                library
              </li>
              <li>
                <strong>Radix UI</strong> - Unstyled, accessible components
              </li>
              <li>
                <strong>TanStack Table</strong> - Data table library
              </li>
              <li>
                <strong>Lucide React</strong> - Icon library
              </li>
              <li>
                <strong>next-themes</strong> - Theme management
              </li>
              <li>
                <strong>Recharts</strong> - Data visualization
              </li>
            </ul>
          </div>

          <div className='w-4/5 mx-auto'>
            <h2 className='pt-4 text-xl font-semibold'>Features</h2>
            <ul className='mt-3 ml-5 list-disc list-inside'>
              <li>Employee statistics with interactive charts</li>
              <li>Team distribution visualization</li>
              <li>Support tickets analytics</li>
              <li>Work location trends (Office vs WFH)</li>
              <li>Complete directory of 143 employees</li>
              <li>Sortable and paginated data tables</li>
              <li>Avatar support with fallback initials</li>
              <li>Team leader badges</li>
              <li>9 teams organized by Greek letters</li>
              <li>Tab-based team navigation</li>
              <li>Pagination (7 members per page)</li>
            </ul>
          </div>

          <div className='w-4/5 mx-auto'>
            <h2 className='pt-4 text-xl font-semibold'>User Experience</h2>
            <ul className='mt-3 ml-5 list-disc list-inside'>
              <li>Fully responsive (mobile & desktop)</li>
              <li>Dark/light mode support</li>
              <li>WCAG compliant for accessibility</li>
              <li>Mobile drawer navigation</li>
              <li>Smooth animations and transitions</li>
              <li>Skeleton loading states</li>
            </ul>
          </div>

          <div className='w-4/5 mx-auto'>
            <h2 className='pt-4 text-xl font-semibold'>Acknowledgement</h2>
            <ul className='mt-3 ml-5 list-disc list-inside'>
              <li>
                Based on Udemy course &quot;Shadcn UI & Next JS - Build
                beautiful dashboards with shadcn&quot; by Tom Phillips
              </li>
              <li>
                Additional development with assistance from Claude (Anthropic
                AI)
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AboutPage
