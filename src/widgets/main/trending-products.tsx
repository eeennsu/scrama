import type { FC } from 'react'

export const TrendingProducts: FC = async () => {
    // const allProducts = await getAllProducts()

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
