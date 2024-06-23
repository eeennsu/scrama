import type { FC } from 'react'
import { SearchX } from 'lucide-react'
import { SearchedProductType } from '@/entities/product'
import { SearchedProductCard } from '@/features/main'

interface Props {
    products: SearchedProductType[]
}

export const SearchedProducts: FC<Props> = ({ products }) => {
    return (
        <>
            {products.length <= 0 ? (
                <p className='text-gray-800 text-lg gap-2 mt-10 flex items-center justify-center'>
                    <SearchX /> No products found.
                </p>
            ) : (
                <section className='grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6'>
                    {products?.map((product, i) => (
                        <SearchedProductCard
                            key={product?.id || i}
                            product={product}
                        />
                    ))}
                </section>
            )}
        </>
    )
}
