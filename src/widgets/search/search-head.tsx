import { Searchbar } from '@/features/main'
import type { FC } from 'react'

interface Props {
    keyword: string
}

export const SearchHead: FC<Props> = ({ keyword }) => {
    return (
        <section className='flex w-full max-lg:flex-col max-lg:gap-4 items-center justify-between'>
            <h1 className='text-2xl font-semibold text-gray-800'>
                Searched Keyword <span className='text-blue-600 truncate'>{keyword}</span>
            </h1>

            <Searchbar
                inputClassName='lg:min-w-[400px] text-base px-3.5 py-2.5'
                buttonClassName='px-3.5 py-2.5 text-base'
            />
        </section>
    )
}
