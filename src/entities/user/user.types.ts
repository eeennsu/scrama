import { z } from 'zod'
import { UserLoginSchema, UserSchema, UserSignUpSchema } from './user.zod'

export type UserType = z.infer<typeof UserSchema>
export type UserLoginType = z.infer<typeof UserLoginSchema>
export type UserSignUpType = z.infer<typeof UserSignUpSchema>
