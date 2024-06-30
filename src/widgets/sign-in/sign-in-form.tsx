'use client'

import type { FC } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserLoginSchema } from '@/entities/user/user.zod'
import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'

import {
    Form as FormProvider,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/shared/components/ui/form'

export const SignInForm: FC = () => {
    const navigate = useRouter()

    const form = useForm({
        resolver: zodResolver(UserLoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = async () => {}

    return (
        <section className='w-full flex'>
            <FormProvider {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='flex flex-col gap-6 w-full'
                >
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type='email'
                                        placeholder='email@example.com'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        type='password'
                                        placeholder='password'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type='submit'>Login</Button>
                </form>
            </FormProvider>
        </section>
    )
}
