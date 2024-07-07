import type { FC } from 'react'
import { requestGetDispayProducts } from '@/entities/product'
import { DisplayProductCard } from '@/features/main'

export const DisplayProducts: FC = async () => {
    const displayProducts = await requestGetDispayProducts()

    return (
        <section className='flex flex-col gap-7 px-6 md:px-20 xl:pt-20 pb-8 mx-auto'>
            <h2 className='text-gray-900 text-[32px] font-semibold'>Amazon Products</h2>

            <div className='flex flex-wrap max-xl:justify-center gap-4 xl:gap-x-8 xl:gap-y-12'>
                {Array.isArray(displayProducts) &&
                    displayProducts?.length > 0 &&
                    displayProducts?.map((product, i) => (
                        <DisplayProductCard
                            key={product?.id || i}
                            product={product}
                        />
                    ))}
            </div>
        </section>
    )
}
