import type { FC } from 'react'
import { requestGetTodayDealsAmazonProductList } from '@/entities/product'
import { TodaysDealsProductCard } from '@/features/main'

export const TodaysDealsProducts: FC = async () => {
    const todaysDealsProduct = await requestGetTodayDealsAmazonProductList()

    return (
        <section className='flex flex-col gap-7 px-6 md:px-20 xl:pt-20 pb-8 mx-auto'>
            <h2 className='text-gray-900 text-[32px] font-semibold'>
                Today&apos;s deals
            </h2>

            <div className='flex flex-wrap max-xl:justify-center gap-4 xl:gap-x-8 xl:gap-y-12'>
                {todaysDealsProduct?.length > 0 &&
                    todaysDealsProduct?.map((product, i) => (
                        <TodaysDealsProductCard
                            key={product?.id || i}
                            product={product}
                        />
                    ))}
            </div>
        </section>
    )
}
