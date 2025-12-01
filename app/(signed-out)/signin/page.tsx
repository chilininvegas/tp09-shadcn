'use client'

import Link from 'next/link'
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {Button} from '@/components/ui/button'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {PersonStanding} from 'lucide-react'

const formSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string()
})

// Child of (signed-out) group so component will display at center of page
const SigninPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),  // Link 'react-hook-form' with 'zod' for validation
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = () => {
    console.log('Successfully signed in')
  }

  return (
    <>
      <PersonStanding size={50} className='text-primary'/>
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl'>Sign In</CardTitle>
          <CardDescription>Sign in to your SupportMe account</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form className='flex flex-col gap-4' onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField control={form.control} name='email' render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='john@example.com' {...field} />
                  </FormControl>
                  <FormDescription>Email you signed up to SupportMe with.</FormDescription>
                  {/* Error message from React context */}
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name='password' render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder='password' type='password' {...field} />
                  </FormControl>
                  {/* Error message from React context */}
                  <FormMessage />
                </FormItem>
              )} />
              <Button type='submit'>Sign In</Button>
            </form>
          </Form>
        </CardContent>
        
        {/* 'flex' class already added to CardFooter in card.tsx */}
        <CardFooter className='justify-between'>
          <small>Don&apos;t have an account?</small>
          <Button variant='outline' size='sm' asChild>
            <Link href='/signup'>Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default SigninPage
