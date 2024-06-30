import type { NextPage } from 'next'
import { PropsWithChildren } from 'react'

const SearchLayout: NextPage<PropsWithChildren> = ({ children }) => {
    return <main className='flex flex-col flex-1 px-6 md:px-20 py-12 gap-7'>{children}</main>
}

export default SearchLayout
