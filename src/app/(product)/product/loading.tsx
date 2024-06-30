import type { FC } from 'react'
import { Skeleton } from '@/shared/components/ui/skeleton'

const ProductLoading: FC = () => {
    return (
        <section className='flex flex-col gap-16 flex-wrap px-6 md:px-20 py-6 xl:py-12'>
            <section className='flex gap-28 xl:flex-row flex-col'>
                <div className='flex-1 flex flex-col'>
                    <section className='flex justify-between flex-col items-start gap-5 flex-wrap pb-6'>
                        <div className='flex flex-col gap-3'>
                            <Skeleton className='w-96 h-28' />
                        </div>
                        <div className='flex items-center gap-3'>
                            <Skeleton className='w-36 h-10' />
                            <Skeleton className='w-10 h-10' />
                            <Skeleton className='w-10 h-10' />
                        </div>
                    </section>
                    <section className='flex items-center flex-wrap gap-10 py-6'>
                        <section className='flex flex-col gap-2'>
                            <Skeleton className='w-24 h-10' />
                            <Skeleton className='w-16 h-6' />
                        </section>
                        <section className='flex flex-col gap-4'>
                            <div className='flex gap-3'>
                                <Skeleton className='w-24 h-10 rounded-[27px]' />
                                <Skeleton className='w-24 h-10 rounded-[27px]' />
                            </div>
                            <Skeleton className='w-32 h-4' />
                        </section>
                    </section>
                    <section className='my-7 flex flex-col gap-5'>
                        <div className='flex gap-5 flex-wrap'>
                            <Skeleton className='w-52 h-24 rounded-xl' />
                            <Skeleton className='w-52 h-24 rounded-xl' />
                            <Skeleton className='w-52 h-24 rounded-xl' />
                            <Skeleton className='w-52 h-24 rounded-xl' />
                        </div>
                    </section>
                </div>
                <figure className='flex-grow xl:max-w-[50%] relative w-[580px] h-[400px] flex items-center max-w-full py-16 border border-white-200 rounded-lg'>
                    <Skeleton className='w-full h-full' />
                </figure>
            </section>
            <section className='flex flex-col gap-16'>
                <div className='flex flex-col gap-5'>
                    <Skeleton className='w-36 h-8' />
                    <ul className='flex flex-col gap-4'>
                        <Skeleton className='w-full h-6' />
                        <Skeleton className='w-full h-6' />
                        <Skeleton className='w-full h-6' />
                        <Skeleton className='w-full h-6' />
                        <Skeleton className='w-full h-6' />
                        <Skeleton className='w-full h-6' />
                        <Skeleton className='w-full h-6' />
                        <Skeleton className='w-full h-6' />
                        <Skeleton className='w-full h-6' />
                    </ul>
                </div>
            </section>
        </section>
    )
}

export default ProductLoading
