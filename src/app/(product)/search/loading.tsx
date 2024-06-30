import { Skeleton } from '@/shared/ui/components/skeleton'
import type { FC } from 'react'

const SearchLoading: FC = () => {
    return (
        <section className='mt-[68px] grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6'>
            {Array.from({ length: 10 }).map((_, i) => (
                <Skeleton
                    key={i}
                    className='flex-1 h-[204px]'
                />
            ))}
        </section>
    )
}

export default SearchLoading
