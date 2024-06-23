import type { FC } from 'react'
import type { SearchedProductType } from '@/entities/product/product.types'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/shared/ui/components/card'
import { Badge } from '@/shared/ui/components/badge'
import { FileQuestion, HeartOff, Star, StarOff } from 'lucide-react'
import { cn } from '@/shared/lib'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    product: SearchedProductType
}

export const SearchedProductCard: FC<Props> = ({ product }) => {
    const isNotLongLeft = !!product?.stock

    const ProductCard = () => {
        return (
            <Card
                className={cn(
                    'flex w-full h-full items-center group',
                    isNotLongLeft && 'border-2 border-orange-400'
                )}
            >
                <CardHeader className='pr-2'>
                    <figure className='relative w-[130px] h-[130px]'>
                        <Image
                            src={product?.image || 'assets/images/amazon.png'}
                            alt={product?.title || 'searched product'}
                            fill
                            className='object-cover rounded-md'
                            quality={100}
                        />
                        {isNotLongLeft && (
                            <figcaption className='-bottom-7 left-0 right-0 justify-center absolute text-xs flex gap-2 font-medium items-center text-gray-600'>
                                <i>Left in stock:</i>
                                <span className='text-gray-900 font-bold'>
                                    {product?.stock || 123}
                                </span>
                            </figcaption>
                        )}
                    </figure>
                </CardHeader>
                <CardContent className='py-4 flex flex-col gap-5 flex-1'>
                    <CardTitle className='line-clamp-3 text-2xl group-hover:underline'>
                        {product?.title}
                    </CardTitle>
                    <div className='flex flex-col gap-2 truncate'>
                        <div className='flex justify-between'>
                            {!product?.price && !product.membership && (
                                <FileQuestion
                                    size={16}
                                    className='text-gray-800'
                                />
                            )}
                            <div className='flex items-end gap-1.5'>
                                {product?.price && (
                                    <span className='text-lg font-semibold text-gray-700'>
                                        {product?.price}
                                    </span>
                                )}
                                {product?.membership && (
                                    <span className='text-xs leading-6 font-medium text-gray-400'>
                                        {product?.membership}
                                    </span>
                                )}
                            </div>

                            <Badge
                                variant='outline'
                                className='flex gap-1 items-center bg-yellow-200'
                            >
                                {product?.rating ? (
                                    <>
                                        <Star
                                            className='text-yellow-500'
                                            size={16}
                                        />
                                        {product?.rating}
                                    </>
                                ) : (
                                    <StarOff size={14} />
                                )}
                            </Badge>
                        </div>
                        <div className='flex justify-between gap-2 text-sm'>
                            {
                                <p className='text-sm flex gap-2 font-medium items-center text-gray-500'>
                                    Last month purchases:
                                    {product?.lastMonthPurchases ? (
                                        <span className='text-gray-900 inline-flex gap-0.5 font-bold'>
                                            {product?.lastMonthPurchases}
                                            <span className='text-gray-600 font-normal'>
                                                K
                                            </span>
                                        </span>
                                    ) : (
                                        <HeartOff size={16} />
                                    )}
                                </p>
                            }
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return product?.url ? (
        <Link
            className='flex-1'
            href={`/product?url=${encodeURIComponent(product?.url)}`}
        >
            <ProductCard />
        </Link>
    ) : (
        <div className='flex-1'>
            <ProductCard />
        </div>
    )
}
