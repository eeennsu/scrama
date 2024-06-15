'use client'

import { scrapeAndStoreProduct } from '@/entities/product'
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

    console.log(searchedProducts)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const amazonProductLink = converAmazonLink(searchText)

        if (amazonProductLink === '' || !amazonProductLink) {
            alert('유효하지 않은 검색입니다. 다시 시도해주세요')
            return
        }

        try {
            setIsLoading(true)

            const searchedProducts =
                await scrapeAndStoreProduct(amazonProductLink)

            searchedProducts && setSearchedProducts(searchedProducts)
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
            >
                <input
                    type='text'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder='Enter product link'
                    className='searchbar-input'
                />
                <Button
                    type='submit'
                    disabled={searchText.length <= 2 || isLoading}
                >
                    {isLoading ? 'Searching...' : 'Search'}
                </Button>
            </form>
            <div className='flex flex-wrap gap-4'>
                {Array.isArray(searchedProducts) &&
                    searchedProducts.length > 0 &&
                    searchedProducts?.map((product) => (
                        <ProductCard
                            key={product.link}
                            product={product}
                        />
                    ))}
            </div>
        </div>
    )
}
