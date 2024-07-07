import type { NextPage } from 'next'
import { HeadTitle } from '@/widgets/sign-up'
import { SignInFooter } from '@/widgets/sign-in'

const Page: NextPage = () => {
    return (
        <main className='mx-auto w-full max-w-screen-sm flex flex-col gap-4 flex-1 mb-44 justify-center'>
            <HeadTitle type='sign-in' />

            <SignInFooter />
        </main>
    )
}

export default Page
