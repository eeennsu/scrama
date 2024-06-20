'use client'

import { scrapeDetailAmazonProduct } from '@/entities/product'
import { AmazonProductType } from '@/entities/product/product.types'
import { Button } from '@/shared/ui/components/button'
import { converAmazonLink } from '@/shared/utils'
import { FormEvent, useState, type FC } from 'react'
import { ProductCard } from './product-card'

export const Searchbar: FC = () => {
    const [searchText, setSearchText] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [searchedProducts, setSearchedProducts] = useState<
        AmazonProductType[]
    >([])

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (searchText.length <= 1) {
            alert('Please enter a valid amazon product link')
            return
        }

        const searchLink = converAmazonLink(searchText)

        try {
            setIsLoading(true)

            const searchedProducts = await scrapeDetailAmazonProduct(searchLink)

            // TODO: Implement the search functionality
        } catch (error: any) {
            throw new Error(error)
        } finally {
            setIsLoading(false)
        }
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
                    placeholder='Enter amazon product link'
                    className='searchbar-input'
                />
                <Button
                    type='reset'
                    variant='outline'
                    disabled={isLoading}
                >
                    reset
                </Button>
                <Button
                    type='submit'
                    disabled={searchText.length <= 2 || isLoading}
                >
                    {isLoading ? 'Loading...' : 'Search'}
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
