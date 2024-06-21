import type { FC } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/shared/ui/components/card'
import type { SearchedProductType } from '@/entities/product/product.types'
import { formatPrice } from '@/shared/utils'
import Image from 'next/image'

interface Props {
    product: SearchedProductType
}

export const SearchedProductCard: FC<Props> = ({ product }) => {
    return (
        <Card className='flex-1 flex gap-2 w-full h-full'>
            <CardHeader className='flex items-center'>
                <figure className='relative w-[100px] h-[100px]'>
                    <Image
                        src={product?.image || 'assets/images/amazon.png'}
                        alt={product?.title || 'searched product'}
                        fill
                        className='object-cover rounded-md'
                    />
                </figure>
            </CardHeader>
            <CardContent>
                <CardTitle>{product?.title}</CardTitle>
                <CardDescription>
                    {product?.price && (
                        <span className='text-sm font-semibold'>
                            {formatPrice(+product?.price)}
                        </span>
                    )}
                </CardDescription>
            </CardContent>
        </Card>
    )
}
