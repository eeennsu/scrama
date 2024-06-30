import { checkEnvVariable } from '@/shared/utils'

export const appwriteEndPoint = checkEnvVariable(process.env.APPWRITE_ENDPOINT)
export const appwriteProject = checkEnvVariable(process.env.APPWRITE_PROJECT_ID)
export const appwriteCreateAdminKey = checkEnvVariable(process.env.APPWRITE_CREATE_ADMIN_KEY)
