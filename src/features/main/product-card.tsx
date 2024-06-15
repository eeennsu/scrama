import { Fragment, type FC } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/shared/ui/components/card'
import type { AmazonProductType } from '@/entities/product/product.types'
import { formatPrice } from '@/shared/utils'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    product: AmazonProductType
}

export const ProductCard: FC<Props> = ({ product }) => {
    const Comp = product?.link ? Link : Fragment

    return (
        <Comp
            href={product?.link || ''}
            className='group'
        >
            <Card className='w-[274px] h-[300px] flex flex-col items-center'>
                <CardHeader className='min-h-[122px] w-full flex flex-col'>
                    <CardTitle className='flex-1 line-clamp-2'>
                        {product.title}
                    </CardTitle>
                    <CardDescription>
                        {product?.price && formatPrice(+product.price)}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <figure className='relative w-[180px] h-[150px] group-hover:scale-110 transition-all duration-300'>
                        <Image
                            src={product?.image || 'assets/images/amazon.png'}
                            alt={`${product.title} image`}
                            fill
                            className='object-cover overflow-hidden'
                        />
                    </figure>
                </CardContent>
            </Card>
        </Comp>
    )
}
