'use server'

import { createSessionClient } from './account.api'

// appwrite의 account 객체를 이용해 세션 정보가 확인하여 로그인한 사용자의 정보를 반환
export async function getLoggedInUser() {
    try {
        const session = await createSessionClient()

        if (!session?.account) {
            return null
        }

        return await session.account.get()
    } catch (error) {
        console.error(error)
        return null
    }
}
