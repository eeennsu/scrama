'use client'

import { scrapeAndStoreProduct } from '@/entities/product'
import { AmazonProductType } from '@/entities/product/product.types'
import { Button } from '@/shared/ui/components/button'

import { converAmazonLink, isValidAmazonLink } from '@/shared/utils'
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

        const isValid = isValidAmazonLink(searchText)

        if (!isValid) {
            alert('유효하지 않은 검색입니다. 다시 시도해주세요')
            return
        }

        try {
            setIsLoading(true)

            const searchedProducts = await scrapeAndStoreProduct(searchText)

            // searchedProducts && setSearchedProducts(searchedProducts)
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
