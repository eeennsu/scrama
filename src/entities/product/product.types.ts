import { z } from 'zod'
import {
    DetailProductSchema,
    SearchedProductSchema,
    TodaysDealsProductSchema,
} from './product.zod'

export type DetailProductType = z.infer<typeof DetailProductSchema>
export type TodaysDealsProductType = z.infer<typeof TodaysDealsProductSchema>
export type SearchedProductType = z.infer<typeof SearchedProductSchema>
