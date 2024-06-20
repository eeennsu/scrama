import { scrapeTodayDealsAmazonProducts } from '@/entities/product'
import type { FC } from 'react'

export const TodayDeals: FC = async () => {
    const todayDealsProduct = await scrapeTodayDealsAmazonProducts()

    return (
        <section className='trending-section'>
            <h2 className='section-text'>Trending</h2>

            <div className='flex flex-wrap gap-x-8 gap-y-16'>
                ProductCards
                {/* {allProducts?.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))} */}
            </div>
        </section>
    )
}
