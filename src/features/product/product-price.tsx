import type { FC } from 'react'
import { DetailProductType } from '@/entities/product'
import { convertToStars, formatPrice } from '@/shared/utils'
import { Star, StarHalf } from 'lucide-react'
import Image from 'next/image'

interface Props {
    price: DetailProductType['price']
    rating: DetailProductType['rating']
    reviewsCount: DetailProductType['reviewsCount']
    lastMonthPurchases: DetailProductType['lastMonthPurchases']
}

export const ProductPrice: FC<Props> = ({ price, rating, lastMonthPurchases, reviewsCount }) => {
    const { fullStars, halfStar, emptyStars } = convertToStars(rating || '0')

    return (
        <section className='flex items-center flex-wrap gap-10 py-6 border-y border-y-yellow-200'>
            <section className='flex flex-col gap-2'>
                <p className='text-[34px] text-gray-800 font-bold'>
                    {price?.currency} {formatPrice(price?.discountedPrice || 0)}
                </p>

                {price?.discountedPrice !== price?.originalPrice && (
                    <p className='text-lg text-black opacity-50 line-through'>
                        {price?.currency} {formatPrice(price?.originalPrice || 0)}
                    </p>
                )}
            </section>

            <section className='flex flex-col gap-4'>
                {rating && reviewsCount ? (
                    <div className='flex gap-3'>
                        <div className='flex items-center gap-2 px-4 py-2.5 bg-yellow-100 rounded-[27px]'>
                            {
                                <div className='flex items-center gap-1'>
                                    {Array.from({
                                        length: fullStars,
                                    }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className='text-yellow-500'
                                            size={18}
                                        />
                                    ))}
                                    {Array.from({
                                        length: halfStar,
                                    }).map((_, i) => (
                                        <StarHalf
                                            key={i}
                                            className='text-yellow-500'
                                            size={18}
                                        />
                                    ))}
                                    {Array.from({
                                        length: emptyStars,
                                    }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className='opacity-45'
                                            size={18}
                                        />
                                    ))}
                                </div>
                            }
                            <p className='text-sm text-primary-orange font-semibold'>{rating}</p>
                        </div>

                        <div className='flex items-center gap-2 px-4 py-2.5 bg-white-200 rounded-[27px]'>
                            <Image
                                src='/assets/icons/comment.svg'
                                alt='comment'
                                width={16}
                                height={16}
                            />

                            <p className='text-xs text-blue-800 font-semibold'>
                                {reviewsCount.toLocaleString()} Reviews
                            </p>
                        </div>
                    </div>
                ) : null}

                {lastMonthPurchases ? (
                    <p className='text-xs text-black opacity-50'>
                        <span className='text-primary-green font-semibold'>{lastMonthPurchases}K</span>
                        &nbsp; bought in past month
                    </p>
                ) : null}
            </section>
        </section>
    )
}
