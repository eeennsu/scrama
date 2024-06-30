import type { FC } from 'react'
import { TodaysDealsProductType } from '@/entities/product'
import { Card, CardContent, CardFooter } from '@/shared/components/ui/card'
import { Badge } from '@/shared/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { PATH_KEYS } from '@/shared/route'

interface Props {
    product: TodaysDealsProductType
}

export const TodaysDealsProductCard: FC<Props> = ({ product }) => {
    const Component = () => {
        return (
            <Card className='w-[310px] group shadow-md'>
                <CardContent className='flex flex-col w-full pb-3 pt-6 gap-3'>
                    <figure className='relative w-[260px] h-[200px] overflow-hidden'>
                        <Image
                            src={product?.image || 'assets/images/amazon.png'}
                            alt={product?.title || 'todays deals product'}
                            className='object-cover rounded-md group-hover:scale-105 transition-all duration-300'
                            fill
                            quality={100}
                        />
                    </figure>
                    <div className='flex flex-wrap gap-1'>
                        {product?.price && (
                            <Badge
                                variant='secondary'
                                className='text-sm'
                            >
                                {product?.price}
                            </Badge>
                        )}

                        {product?.discounted && (
                            <Badge className='text-sm'>{product?.discounted}</Badge>
                        )}
                    </div>
                </CardContent>
                <CardFooter>
                    <h3 className='text-sm font-semibold line-clamp-2'>{product?.title}</h3>
                </CardFooter>
            </Card>
        )
    }

    return product?.url ? (
        <Link href={PATH_KEYS.product().concat(`?url=${encodeURIComponent(product?.url)}`)}>
            <Component />
        </Link>
    ) : (
        <Component />
    )
}
