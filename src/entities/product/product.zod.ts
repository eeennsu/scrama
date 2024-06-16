import { z } from 'zod'

export const PriceSchema = z.object({
    discountedPrice: z.number().optional(),
    discountedPercent: z.number().optional(),
    originalPrice: z.number().optional(),
    currency: z.string().optional(),
    history: z.array(z.object({ price: z.number() })).optional(),
})

export const AmazonProductSchema = z
    .object({
        id: z.string().optional(),
        title: z.string().optional(),
        price: PriceSchema,
        url: z.string().url().optional(),
        images: z.array(z.string()).optional(),
        descriptions: z.array(z.string()).optional(),
        isAvaliable: z.boolean().optional(),
        brand: z.string().optional(),
        category: z.string().optional(),
        reviewsCount: z.number().optional(),
        star: z.number().optional(),
    })
    .readonly()
