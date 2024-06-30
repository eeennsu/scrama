import type { FC } from 'react'
import {
    ProductInfoCard,
    ProductPrice,
    ProductTitle,
    ProductDescriptions,
} from '@/features/product'
import { DetailProductType } from '@/entities/product'
import Image from 'next/image'

interface Props {
    product: DetailProductType
    url: string
}

export const ProductData: FC<Props> = ({ product, url }) => {
    return (
        <article className='flex flex-col gap-8'>
            <section className='flex gap-28 xl:flex-row flex-col-reverse'>
                <div className='flex-1 flex flex-col'>
                    <ProductTitle
                        title={product.title}
                        url={url}
                    />

                    <ProductPrice
                        price={product?.price}
                        lastMonthPurchases={product?.lastMonthPurchases}
                        rating={product?.rating}
                        reviewsCount={product?.reviewsCount}
                    />

                    <section className='my-7 flex flex-col gap-5'>
                        <div className='flex gap-5 flex-wrap'>
                            <ProductInfoCard
                                title='Brand'
                                icon='/assets/icons/brand.svg'
                                label={product?.brand}
                            />
                            <ProductInfoCard
                                title='Stock'
                                icon='/assets/icons/database.svg'
                                label={product?.isAvaliable ? 'In Stock' : 'Out of Stock'}
                            />
                            <ProductInfoCard
                                title='Import'
                                icon='/assets/icons/plane.svg'
                                label={product?.delivery?.importCost}
                            />
                            <ProductInfoCard
                                title='Delivery'
                                icon='/assets/icons/truck.svg'
                                label={product?.delivery?.deliveryCost}
                            />
                        </div>
                    </section>
                </div>

                <figure className='flex-grow xl:max-w-[50%] relative w-[580px] h-[400px] flex items-center max-w-full py-16 border border-white-200 rounded-lg'>
                    <Image
                        src={product?.image || '/assets/images/amazon.png'}
                        alt={product?.title || 'product'}
                        fill
                        className='mx-auto object-contain'
                    />
                </figure>
            </section>

            <ProductDescriptions descriptions={product?.descriptions} />
        </article>
    )
}
