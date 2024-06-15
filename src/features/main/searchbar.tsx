'use client'

import { useState, type FC } from 'react'

export const Searchbar: FC = () => {
    const handleSubmit = () => {}
    const [searchText, setSearchText] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <form
            className='flex flex-wrap gap-4 mt-12'
            onSubmit={handleSubmit}
        >
            <input
                type='text'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder='Enter product link'
                className='searchbar-input'
            />

            <button
                type='submit'
                className='searchbar-btn'
                disabled={searchText.length <= 2}
            >
                {isLoading ? 'Searching...' : 'Search'}
            </button>
        </form>
    )
}
