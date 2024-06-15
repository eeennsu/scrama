import { z } from 'zod'
import { AmazonProductSchema } from './product.zod'

export type AmazonProductType = z.infer<typeof AmazonProductSchema>
