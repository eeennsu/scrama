import { z } from 'zod'
import { UserSchema } from './user.zod'

export type UserType = z.infer<typeof UserSchema>
