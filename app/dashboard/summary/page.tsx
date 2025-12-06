import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'

const SummaryPage = () => {
  return (
    <div className='space-y-6'>
      <h2>Project Summary</h2>

      {/* Technology Stack */}
      <Card>
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='space-y-2 list-disc list-inside'>
            <li>
              <strong>Next.js 16</strong> - React framework with App Router and
              Turbopack
            </li>
            <li>
              <strong>React 19</strong> - Latest React version with improved
              performance
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
              <strong>TanStack Table</strong> - Powerful table library for data
              display
            </li>
            <li>
              <strong>Lucide React</strong> - Icon library
            </li>
            <li>
              <strong>next-themes</strong> - Theme management for dark/light
              mode
            </li>
            <li>
              <strong>Recharts</strong> - Charting library for data
              visualization
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold mb-2'>Dashboard</h3>
              <ul className='space-y-1 list-disc list-inside ml-4'>
                <li>Employee statistics with interactive charts</li>
                <li>Team distribution visualization</li>
                <li>Support tickets analytics</li>
                <li>Work location trends (Office vs WFH)</li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold mb-2'>Employees</h3>
              <ul className='space-y-1 list-disc list-inside ml-4'>
                <li>Complete employee directory (143 employees)</li>
                <li>Sortable and paginated data table</li>
                <li>Avatar support with fallback initials</li>
                <li>Team leader badges</li>
                <li>Loading skeletons with shimmer animation</li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold mb-2'>Teams</h3>
              <ul className='space-y-1 list-disc list-inside ml-4'>
                <li>9 teams organized by Greek letters</li>
                <li>Tab-based navigation between teams</li>
                <li>Team member listings with pagination (7 per page)</li>
                <li>Smooth loading transitions</li>
                <li>Real-time member count display</li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold mb-2'>UI/UX</h3>
              <ul className='space-y-1 list-disc list-inside ml-4'>
                <li>Responsive design (mobile & desktop)</li>
                <li>Dark/light mode support</li>
                <li>Accessible components (WCAG compliant)</li>
                <li>Mobile drawer navigation</li>
                <li>Smooth animations and transitions</li>
                <li>Skeleton loading states</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Acknowledgement */}
      <Card className='mb-8'>
        <CardHeader>
          <CardTitle>Acknowledgement</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='text-muted-foreground'>
            This project is based on the Udemy course{' '}
            <strong className='text-foreground'>
              "Shadcn UI & Next JS - Build beautiful dashboards with shadcn"
            </strong>{' '}
            by instructor{' '}
            <strong className='text-foreground'>Tom Phillips</strong>. The
            course provided the foundation and structure for building modern,
            accessible dashboards using Next.js and shadcn/ui.
          </p>
          <p className='text-muted-foreground'>
            Additional development and enhancements were completed with the
            assistance of{' '}
            <strong className='text-foreground'>Claude (Anthropic AI)</strong>,
            an AI assistant that helped with code implementation, bug fixes,
            accessibility improvements, and feature development. The
            collaboration included creating reusable components, optimizing user
            experience, implementing loading states, and ensuring best practices
            throughout the application.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default SummaryPage
