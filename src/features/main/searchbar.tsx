'use client'

import { Button } from '@/shared/ui/components/button'
import { FormEvent, useState, type FC } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/shared/lib'

interface Props {
    inputClassName?: string
    buttonClassName?: string
}

export const Searchbar: FC<Props> = ({ inputClassName, buttonClassName }) => {
    const router = useRouter()

    const [searchText, setSearchText] = useState<string>('')

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (searchText.length <= 1) {
            alert('Please enter two or more characters to search')
            return
        }

        router.replace(`/search?q=${searchText}`)
    }

    return (
        <div className='flex flex-col gap-6'>
            <form
                className='flex flex-wrap gap-4 items-center'
                onSubmit={handleSubmit}
                onReset={() => setSearchText('')}
            >
                <input
                    type='text'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder='input a product name'
                    className={cn(
                        'flex-1 min-w-[200px] w-full px-4 py-3 border placeholder:font-normal border-gray-300 rounded-lg shadow-xs text-lg focus:outline-none  placeholder:text-slate-300 font-medium text-slate-800 focus:shadow-md',
                        inputClassName
                    )}
                />
                <Button
                    type='submit'
                    className={cn('text-lg px-4 py-3 h-full', buttonClassName)}
                    disabled={searchText.length <= 2}
                >
                    Search
                </Button>
            </form>
        </div>
    )
}
