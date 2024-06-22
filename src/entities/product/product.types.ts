import { z } from 'zod'
import {
    CarouselProductImageSchema,
    DetailProductSchema,
    SearchedProductSchema,
    TodaysDealsProductSchema,
} from './product.zod'

export type CarouselProductImageType = z.infer<
    typeof CarouselProductImageSchema
>
export type DetailProductType = z.infer<typeof DetailProductSchema>
export type TodaysDealsProductType = z.infer<typeof TodaysDealsProductSchema>
export type SearchedProductType = z.infer<typeof SearchedProductSchema>
