import type { FC } from 'react'
import { requestGetTodayDealsAmazonProductList } from '@/entities/product'
import { TodaysDealsProductCard } from '@/features/main'

export const TodaysDeals: FC = async () => {
    const todaysDealsProduct = await requestGetTodayDealsAmazonProductList()

    return (
        <section className='trending-section'>
            <h2 className='section-text'>Today&apos;s deals</h2>

            <div className='flex flex-wrap gap-x-8 gap-y-12'>
                {todaysDealsProduct?.length > 0 &&
                    todaysDealsProduct?.map((product) => (
                        <TodaysDealsProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
            </div>
        </section>
    )
}
