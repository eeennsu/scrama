import { z } from 'zod'

export const AmazonProductSchema = z
    .object({
        id: z.string().optional(),
        title: z.string().optional(),
        price: z.object({
            discountedPrice: z.number().optional(),
            discountedPercent: z.number().optional(),
            originalPrice: z.number().optional(),
            currency: z.string().optional(),
        }),
        imageUrls: z.array(z.string()).optional(),
        isAvaliable: z.boolean().optional(),
        brand: z.string().optional(),
        star: z.number().optional(),
    })
    .readonly()
