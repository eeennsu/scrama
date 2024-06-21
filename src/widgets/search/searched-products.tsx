import type { FC } from 'react'
import { SearchX } from 'lucide-react'
import { SearchedProductType } from '@/entities/product'
import Image from 'next/image'
import { SearchedProductCard } from '@/features/main'

interface Props {
    products: SearchedProductType[]
}

export const SearchedProducts: FC<Props> = ({ products }) => {
    console.log(products.length)
    return (
        <>
            {products.length <= 0 ? (
                <p className='text-gray-800 text-lg text-center'>
                    {' '}
                    <SearchX /> No products found.
                </p>
            ) : (
                <section className='grid grid-cols-1 xl:grid-cols-2 space-x-4 space-y-8'>
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
