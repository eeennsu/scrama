import { z } from 'zod'

export const UserSchema = z.object({
    email: z.string().email(),
})

export const UserLoginSchema = z.object({})

export const UserSignUpSchema = z.object({
    username: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirmation: z.string().min(8),
})
