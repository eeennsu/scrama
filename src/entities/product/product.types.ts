import { z } from 'zod'
import { SearchedProductSchema, TodaysDealsProduct } from './product.zod'

export type SearchedProductType = z.infer<typeof SearchedProductSchema>
export type TodaysDealsProductType = z.infer<typeof TodaysDealsProduct>
