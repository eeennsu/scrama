// 'use server'

// import { Account, Client } from 'node-appwrite'
// import { appwriteCreateAdminKey, appwriteEndPoint, appwriteProject } from '../appwrite.config'
// import { cookies } from 'next/headers'

// // next 쿠키에 있는 세션을 이용해 appwrite client에 세션을 설정하고 account 객체를 반환
// export async function createSessionClient() {
//     const client = new Client().setEndpoint(appwriteEndPoint).setProject(appwriteProject)

//     const session = cookies().get('session')

//     if (!session || !session.value) {
//         console.log('No session found')
//         return null
//     }

//     client.setSession(session.value)

//     return {
//         get account() {
//             return new Account(client)
//         },
//     }
// }

// // appwrite admin client를 생성하고 account 객체를 반환
// export async function createAdminClient() {
//     const client = new Client()
//         .setEndpoint(appwriteEndPoint)
//         .setProject(appwriteProject)
//         .setKey(appwriteCreateAdminKey)

//     return {
//         get account() {
//             return new Account(client)
//         },
//     }
// }
