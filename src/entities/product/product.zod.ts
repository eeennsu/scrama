import { z } from 'zod'

export const SearchedProductPriceSchema = z.object({
    discountedPrice: z.number().nullish(),
    discountedPercent: z.number().nullish(),
    originalPrice: z.number().optional(),
    currency: z.string().optional(),
    history: z.array(z.object({ price: z.number() })).nullish(),
})

export const SearchedProductSchema = z.object({
    id: z.string().optional(),
    title: z.string().optional(),
    price: SearchedProductPriceSchema,
    url: z.string().url().optional(),
    images: z.array(z.string()).optional(),
    descriptions: z.array(z.string()).optional(),
    isAvaliable: z.boolean().optional(),
    brand: z.string().optional(),
    category: z.string().optional(),
    reviewsCount: z.number().optional(),
    star: z.number().optional(),
})

export const TodaysDealsProduct = z.object({
    id: z.string().optional(),
    title: z.string().optional(),
    discountedPercent: z.string().optional(),
    avaliableCoupon: z.string().nullish(),
    image: z.string().optional(),
    link: z.string().url().optional(),
})
