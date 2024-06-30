'use client'

import { useState, type FC } from 'react'
import { Fragment } from 'react/jsx-runtime'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserSignUpFormSchema } from '@/entities/user/user.zod'
import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'
import { UserSignUpFormType, signUpUser } from '@/entities/user'
import { PATH_KEYS } from '@/shared/route'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
    Form as FormProvider,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/shared/components/ui/form'

export const SignUpForm: FC = () => {
    const navigate = useRouter()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const form = useForm({
        resolver: zodResolver(UserSignUpFormSchema),
        defaultValues: {
            email: '',
            password: '',
            passwordConfirmation: '',
            username: '',
        },
    })

    const onSubmit = async ({
        email,
        password,
        passwordConfirmation,
        username,
    }: UserSignUpFormType) => {
        if (password !== passwordConfirmation) {
            form.setError('passwordConfirmation', {
                message: 'Passwords do not match',
            })

            return
        }

        try {
            setIsLoading(true)
            await signUpUser({ email, password, username })

            navigate.push(PATH_KEYS.signIn())
        } catch (error) {
            console.error(error)
            navigate.refresh()
        } finally {
            setIsLoading(false)
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
                        name='username'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='username'
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
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type='email'
                                        placeholder='username@email.com'
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

                    <FormField
                        control={form.control}
                        name='passwordConfirmation'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password Confirmation</FormLabel>
                                <FormControl>
                                    <Input
                                        type='password'
                                        placeholder='password confirmation'
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
                            'Submit'
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
