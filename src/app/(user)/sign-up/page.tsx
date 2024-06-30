import type { NextPage } from 'next'
import { getLoggedInUser } from '@/shared/lib/appwrite/api/user.api'
import { PATH_KEYS } from '@/shared/route'
import { HeadTitle, SignUpForm } from '@/widgets/sign-up'
import { redirect } from 'next/navigation'

const SignUpPage: NextPage = async () => {
    const user = await getLoggedInUser()

    if (user) redirect(PATH_KEYS.signIn())

    return (
        <main className='mx-auto w-full max-w-screen-sm flex flex-col gap-4 flex-1 mb-28 justify-center'>
            <HeadTitle type='sign-up' />
            <SignUpForm />
        </main>
    )
}

export default SignUpPage
