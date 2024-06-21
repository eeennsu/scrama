'use client'

import { SearchedProductType } from '@/entities/product/product.types'
import { Button } from '@/shared/ui/components/button'
import { FormEvent, useState, type FC } from 'react'
import { ProductCard } from './searched-product-card'
import { useRouter } from 'next/navigation'

export const Searchbar: FC = () => {
    const router = useRouter()

    const [searchText, setSearchText] = useState<string>('')
    const [searchedProducts, setSearchedProducts] = useState<
        SearchedProductType[]
    >([])

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (searchText.length <= 1) {
            alert('Please enter two or more characters to search')
            return
        }

        router.push(`/search?q=${searchText}`)
    }

    return (
        <div className='flex flex-col gap-6'>
            <form
                className='flex flex-wrap gap-4 mt-12 items-center'
                onSubmit={handleSubmit}
                onReset={() => setSearchText('')}
            >
                <input
                    type='text'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder='input a product name'
                    className='searchbar-input'
                />
                <Button
                    type='submit'
                    disabled={searchText.length <= 2}
                >
                    Search
                </Button>
            </form>
            <div className='flex flex-wrap gap-4'>
                {Array.isArray(searchedProducts) &&
                    searchedProducts.length > 0 &&
                    searchedProducts?.map((product) => (
                        <ProductCard
                            key={product.title}
                            product={product}
                        />
                    ))}
            </div>
        </div>
    )
}
