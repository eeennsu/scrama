import { getLoggedInUser } from '@/shared/lib/appwrite/api/user.api'
import type { NextPage } from 'next'
import { redirect } from 'next/navigation'

const Page: NextPage = async () => {
    const user = await getLoggedInUser()

    if (!user) {
        redirect('/sign-in')
    }

    return <main>User Profile Page</main>
}

export default Page
