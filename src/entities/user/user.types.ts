import { z } from 'zod'
import {
    RequestUserSignUpSchema,
    RequestUserSignInSchema,
    UserSchema,
    UserSignInFormSchema,
    UserSignUpFormSchema,
} from './user.zod'

export type UserType = z.infer<typeof UserSchema>
export type UserSignInFormType = z.infer<typeof UserSignInFormSchema>
export type UserSignUpFormType = z.infer<typeof UserSignUpFormSchema>

export type RequestUserSignUpType = z.infer<typeof RequestUserSignUpSchema>
export type RequestUserSignInType = z.infer<typeof RequestUserSignInSchema>
