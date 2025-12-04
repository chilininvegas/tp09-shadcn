'use client'

import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {Button} from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {PasswordInput} from '@/components/ui/password-input'
import {Checkbox} from '@/components/ui/checkbox'
import {CalendarIcon, PersonStanding} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {Calendar} from '@/components/ui/calendar'
import {format} from 'date-fns'

const formSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    accountType: z.enum(['individual', 'business']),
    companyName: z.string().optional(),
    numEmployees: z.number().optional(),
    dob: z.date().refine(
      (date) => {
        const today = new Date()
        const eighteenYearsAgo = new Date(
          today.getFullYear() - 18,
          today.getMonth(),
          today.getDate()
        )
        return date <= eighteenYearsAgo
      },
      {
        message: 'You must be at least 18 years old to sign up'
      }
    ),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .regex(/[A-Z]/, 'Password must contain at least 1 capital letter')
      .regex(
        /[!@#$&()`.+,\-/":;'<>=\[\]\\^_{|}~]/,
        'Password must contain at least 1 special character'
      ),
    passwordConfirm: z.string(),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: 'You must accept the terms and conditions'
    })
  })
  .superRefine((data, ctx) => {
    if (data.accountType === 'business') {
      // Validate companyName is provided for business accounts
      if (!data.companyName || data.companyName.trim() === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Company name is required for business accounts',
          path: ['companyName']
        })
      }

      // Validate numEmployees is provided and >= 1 for business accounts
      if (!data.numEmployees || data.numEmployees < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Number of employees must be at least 1',
          path: ['numEmployees']
        })
      }
    }

    // Validate passwords match
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['passwordConfirm']
      })
    }
  })

// Child of (signed-out) group so component will display at center of page
const SignupPage = () => {
  const router = useRouter()
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), // Link 'react-hook-form' with 'zod' for validation
    defaultValues: {
      email: '',
      accountType: 'individual',
      companyName: '',
      numEmployees: undefined,
      dob: undefined,
      password: '',
      passwordConfirm: '',
      acceptTerms: false
    }
  })

  // Watch the accountType field to conditionally render business fields
  const accountType = form.watch('accountType')

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('Sign up form data:', data)
    router.push('/dashboard')
  }

  return (
    <>
      <PersonStanding size={50} className='text-primary' />
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl'>Sign Up</CardTitle>
          <CardDescription>Sign up for a new SupportMe account</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              className='flex flex-col gap-4'
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name='email'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='john@example.com' {...field} />
                    </FormControl>
                    {/* Error message from React context */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='dob'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover
                      open={isCalendarOpen}
                      onOpenChange={setIsCalendarOpen}
                    >
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant='outline'
                            className='w-full justify-between text-left font-normal normal-case'
                          >
                            <span className='text-sm text-muted-foreground'>
                              {field.value
                                ? format(field.value, 'PPP')
                                : 'Pick a date'}
                            </span>
                            <CalendarIcon className='h-4 w-4' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='single'
                          defaultMonth={field.value}
                          selected={field.value}
                          onSelect={(date) => {
                            field.onChange(date)
                            setIsCalendarOpen(false)
                          }}
                          fixedWeeks={true}
                          captionLayout='dropdown'
                          disabled={(date) => date >= new Date()}
                          className='font-sans'
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='accountType'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Account Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className='w-full'>
                          <SelectValue placeholder='Select an account type' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='individual'>Individual</SelectItem>
                        <SelectItem value='business'>Business</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {accountType === 'business' && (
                <>
                  <FormField
                    control={form.control}
                    name='companyName'
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder='Acme Inc.' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='numEmployees'
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>Number of Employees</FormLabel>
                        <FormControl>
                          <Input
                            type='number'
                            placeholder='50'
                            min={1}
                            value={field.value ?? ''}
                            onChange={(e) =>
                              field.onChange(
                                e.target.value
                                  ? parseInt(e.target.value)
                                  : undefined
                              )
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <FormField
                control={form.control}
                name='password'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder='••••••••'
                        {...field}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='passwordConfirm'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder='••••••••'
                        {...field}
                        value={field.value ?? ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='acceptTerms'
                render={({field}) => (
                  <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className='space-y-1 leading-none'>
                      <FormLabel>I accept the terms and conditions</FormLabel>
                      <FormDescription>
                        By signing up you agree to our{' '}
                        <Link
                          href='/terms'
                          target='_blank'
                          className='text-blue-600 hover:underline hover:underline-offset-4 dark:text-blue-400'
                        >
                          terms and conditions
                        </Link>
                        .
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button type='submit'>Sign Up</Button>
            </form>
          </Form>
        </CardContent>

        {/* 'flex' class already added to CardFooter in card.tsx */}
        <CardFooter className='justify-between'>
          <small>Already have an account?</small>
          <Button variant='outline' size='sm' asChild>
            <Link href='/signin'>Sign In</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default SignupPage
