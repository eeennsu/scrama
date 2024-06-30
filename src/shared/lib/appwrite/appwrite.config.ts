// import { checkEnvVariable } from '@/shared/utils'
// import { Account, Client, Databases } from 'appwrite'

import { checkEnvVariable } from '@/shared/utils'

// const client = new Client()

// const appwriteEndPoint = checkEnvVariable(process.env.APPWRITE_ENDPOINT)
// const appwriteProject = checkEnvVariable(process.env.APPWRITE_PROJECT_ID)

// client.setEndpoint(appwriteEndPoint).setProject(appwriteProject)

// export const account = new Account(client)
// export const database = new Databases(client)

// export { ID } from 'appwrite'

export const appwriteEndPoint = checkEnvVariable(process.env.APPWRITE_ENDPOINT)
export const appwriteProject = checkEnvVariable(process.env.APPWRITE_PROJECT_ID)
export const appwriteCreateAdminKey = checkEnvVariable(process.env.APPWRITE_CREATE_ADMIN_KEY)
