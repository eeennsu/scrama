import { getLoggedInUser } from '@/shared/lib/appwrite/api/user.api'
import { PATH_KEYS } from '@/shared/route'
import type { NextPage } from 'next'
import { redirect } from 'next/navigation'

const Page: NextPage = async () => {
    const user = await getLoggedInUser()

    if (!user) {
        redirect(PATH_KEYS.signIn())
    }

    return <main>User Profile Page</main>
}

export default Page
