import { requestSearchedProductList } from '@/entities/product'
import { converAmazonLink } from '@/shared/utils'
import { SearchedKeyword, SearchedProducts } from '@/widgets/search'

import type { FC } from 'react'

interface Props {
    searchParams: {
        [key: string]: string | undefined
    }
}

const SearchPage: FC<Props> = async ({ searchParams }) => {
    const keyword = searchParams?.q

    if (!keyword) {
        throw new Error('Keyword is required.')
    }

    const amazonSearchedLink = converAmazonLink(keyword)
    const searchedProducts =
        await requestSearchedProductList(amazonSearchedLink)

    return (
        <main className='flex flex-col flex-1 px-6 md:px-20 py-12 gap-7'>
            <SearchedKeyword keyword={keyword} />
            {!!searchedProducts && (
                <SearchedProducts products={searchedProducts} />
            )}
        </main>
    )
}

export default SearchPage
