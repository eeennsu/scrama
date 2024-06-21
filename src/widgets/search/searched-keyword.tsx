import type { FC } from 'react'

interface Props {
    keyword: string
}

export const SearchedKeyword: FC<Props> = ({ keyword }) => {
    return (
        <h1 className='text-2xl font-semibold text-gray-800'>
            Searched Keyword <span className='text-blue-600'>{keyword}</span>
        </h1>
    )
}
