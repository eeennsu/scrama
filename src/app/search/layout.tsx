import type { Metadata, NextPage } from 'next'
import type { PropsWithChildren } from 'react'

interface Props {
    searchParams: {
        q?: string
    }
}

export const generateMetadata = async ({
    searchParams,
}: Props): Promise<Metadata> => {
    let query = searchParams?.q

    if (query && query.length > 10) {
        query = query.substring(0, 10)
    }

    return {
        title: `Searched ${query?.toUpperCase()}`,
        description: `This page is searched ${query}'s page.`,
    }
}

const SearchLayout: NextPage<PropsWithChildren> = ({ children }) => {
    return <>{children}</>
}

export default SearchLayout
