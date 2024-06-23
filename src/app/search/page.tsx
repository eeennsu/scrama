import type { FC } from 'react'
import { requestGetSearchedProductList } from '@/entities/product'
import { converAmazonLink } from '@/shared/utils'
import { SearchedKeyword, SearchedProducts } from '@/widgets/search'

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
        await requestGetSearchedProductList(amazonSearchedLink)

    return (
        <>
            <SearchedKeyword keyword={keyword} />
            {!!searchedProducts && (
                <SearchedProducts products={searchedProducts} />
            )}
        </>
    )
}

export default SearchPage
