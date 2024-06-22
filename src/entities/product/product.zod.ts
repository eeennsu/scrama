import { z } from 'zod'

export const SearchedProductPriceSchema = z.object({
    discountedPrice: z.number().nullish(),
    discountedPercent: z.number().nullish(),
    originalPrice: z.number().optional(),
    currency: z.string().optional(),
    history: z.array(z.object({ price: z.number() })).nullish(),
})

export const CarouselProductImageSchema = z.object({
    image: z.string().url().optional(),
    url: z.string().url().optional(),
})

export const CommonProductSchema = z.object({
    id: z.string().optional(),
    title: z.string().optional(),
    url: z.string().url().optional(),
    image: z.string().url().optional(),
    rating: z.string().optional(),
})

export const TodaysDealsProductSchema = CommonProductSchema.omit({
    rating: true,
}).extend({
    image: z.string().url().optional(),
    discountedPercent: z.string().optional(),
    avaliableCoupon: z.string().nullish(),
    comment: z.string().optional(),
    purchasesLastMonth: z.number().optional(),
})

export const SearchedProductSchema = CommonProductSchema.extend({
    membership: z.string().nullish(),
    price: z.string().nullish(),
    stock: z.string().nullish(),
    lastMonthPurchases: z.number().nullish(),
})

export const DetailProductSchema = CommonProductSchema.extend({
    price: SearchedProductPriceSchema,
    descriptions: z.array(z.string()).optional(),
    isAvaliable: z.boolean().optional(),
    brand: z.string().optional(),
    category: z.string().optional(),
    reviewsCount: z.number().optional(),
})
