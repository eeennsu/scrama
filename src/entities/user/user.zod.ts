import { z } from 'zod'

export const UserSchema = z.object({
    email: z.string().email(),
})

export const UserSignUpFormSchema = z.object({
    username: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirmation: z.string().min(8),
})

export const UserSignInFormSchema = UserSignUpFormSchema.pick({
    email: true,
    password: true,
})

export const RequestUserSignUpSchema = UserSignUpFormSchema.pick({
    email: true,
    password: true,
    username: true,
})

export const RequestUserSignInSchema = UserSignInFormSchema
