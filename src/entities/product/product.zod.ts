import { z } from 'zod'

export const AmazonProductSchema = z.object({
    title: z.string(),
    price: z.string(),
    image: z.string().url().optional(),
    link: z.string().url().optional(),
})
