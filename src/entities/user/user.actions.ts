'use server'

import { createAdminClient, createSessionClient } from '@/shared/lib/appwrite/api/account.api'
import { ID } from 'node-appwrite'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { PATH_KEYS } from '@/shared/route'

export async function signUpUser(email: string, password: string, username: string) {
    const { account } = await createAdminClient()

    await account.create(ID.unique(), email, password, username)
    const session = await account.createEmailPasswordSession(email, password)

    cookies().set('session', session.secret, {
        path: '/', // 쿠키가 전체 도메인에 대해 유효함을 의미
        httpOnly: true, // 쿠키가 http(s) 프로토콜을 통해서만 접근 가능함을 의미, 클라이언트 사이드 스크립트(docuemnt.cookie)에서 쿠키에 접근할 수 없음, xss 공격 방지
        secure: true, // 쿠키가 안전한 연결 (https) 를 통해서만 전송된다. 이는 쿠키 데이터가 인터넷을 통해 전송될 때 암호화 되어있음을 보장하여 데이터의 보안을 강화
        sameSite: 'strict', // 현재 방문 중인 사이트에서만 사용될 수 있도록 제한, 다른ㅅ ㅏ이트에서 현재 사이트로 링크를 ㅌ통해 접근할 때 쿠키가 전송되지 않음 (csrf 공격 방지)
    })

    redirect(PATH_KEYS.signIn())
}

export async function logoutUser() {
    const session = await createSessionClient()

    if (!session?.account) {
        throw Error('No session found')
    }

    cookies().delete('session')
    await session.account.deleteSession('current')

    redirect(PATH_KEYS.main())
}
