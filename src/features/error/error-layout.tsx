'use client'

import type { FC } from 'react'
import { useEffect } from 'react'

interface Props {
    error: Error & { digest?: string }
    reset: () => void
}

export const ErrorLayout: FC<Props> = ({ error, reset }) => {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <main className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
            <div className='bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-center'>
                <h1 className='text-2xl font-bold text-gray-800 mb-4'>Oops! Something went wrong</h1>
                <p className='text-gray-600 mb-4 break-words'>
                    {error.message}
                    {error.digest && <span className='mt-2 text-sm text-gray-500'>Error digest: {error.digest}</span>}
                </p>
                <button
                    onClick={() => reset()}
                    className='mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                >
                    Try again
                </button>
            </div>
        </main>
    )
}
