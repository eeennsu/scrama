'use client'

import { useState, type FC } from 'react'
import { Fragment } from 'react/jsx-runtime'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'
import { SignInUser, UserSignInFormSchema, UserSignInFormType } from '@/entities/user'
import { Loader2 } from 'lucide-react'
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

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const form = useForm({
        resolver: zodResolver(UserSignInFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = async (data: UserSignInFormType) => {
        try {
            setIsLoading(true)
            await SignInUser(data)

            navigate.back()
        } catch (error) {
            console.error(error)

            navigate.refresh()
        }
    }

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
                                        isSemibold
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
                                        isSemibold
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type='submit'
                        disabled={isLoading}
                    >
                        {!isLoading ? (
                            'Login'
                        ) : (
                            <Fragment>
                                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                Please wait..
                            </Fragment>
                        )}
                    </Button>
                </form>
            </FormProvider>
        </section>
    )
}
