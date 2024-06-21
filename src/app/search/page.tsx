import { SearchedKeyword } from '@/widgets/search'
import type { FC } from 'react'

interface Props {
    searchParams: {
        q?: string
    }
}

const SearchPage: FC<Props> = ({ searchParams }) => {
    const keyword = searchParams?.q

    if (!keyword) {
        throw new Error('Keyword is required.')
    }

    return (
        <main className='flex flex-col flex-1'>
            <SearchedKeyword keyword={keyword} />
        </main>
    )
}

export default SearchPage
