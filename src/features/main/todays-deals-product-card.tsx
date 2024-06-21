import { Fragment, type FC } from 'react'
import { TodaysDealsProductType } from '@/entities/product'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/shared/ui/badge'

interface Props {
    product: TodaysDealsProductType
}

export const TodaysDealsProductCard: FC<Props> = ({ product }) => {
    const Comp = product?.url ? Link : Fragment

    return (
        <Comp href={product?.url || ''}>
            <Card className='w-[310px] group shadow-md'>
                <CardContent className='flex flex-col w-full pt-6 gap-2'>
                    <figure className='relative w-[260px] h-[200px] overflow-hidden'>
                        <Image
                            src={product?.image || 'assets/images/amazon.png'}
                            alt={product?.title || 'todays deals product'}
                            className='object-cover rounded-md group-hover:scale-105 transition-all duration-300'
                            fill
                            quality={100}
                        />
                    </figure>
                    <div className='p-2 flex flex-wrap gap-1'>
                        <Badge variant='secondary'>
                            {product?.discountedPercent}
                        </Badge>

                        {product?.avaliableCoupon && (
                            <Badge>{product?.avaliableCoupon}</Badge>
                        )}
                    </div>
                </CardContent>
                <CardFooter>
                    <h3 className='text-sm font-semibold line-clamp-2'>
                        {product?.title}
                    </h3>
                </CardFooter>
            </Card>
        </Comp>
    )
}
