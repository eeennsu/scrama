import type { FC } from 'react'
import { Searchbar } from '@/features/main'
import { HeroCarousel } from '@/features/main/hero-carousel'
import Image from 'next/image'

export const Intro: FC = () => {
    return (
        <section className='px-6 md:px-20 py-24'>
            <div className='flex max-xl:flex-col gap-16'>
                <div className='flex flex-col justify-center'>
                    <p className='flex gap-2 text-sm font-medium text-gray-900'>
                        Smart Shopping Starts Here:
                        <Image
                            src='/assets/icons/arrow-right.svg'
                            alt='arrow-right'
                            width={16}
                            height={16}
                        />
                    </p>
                    <h1 className='text-gray-800 mt-6 font-semibold tracking-[-1.2px] text-6xl leading-[72px]'>
                        Master Amazon Scraping by
                        <span className='font-bold italic'> Next.js</span>
                    </h1>
                    <p className='text-gray-800 mt-3'>
                        Powerful, self-serve product and growth analytics to
                        help you convert, engage, and retain more.
                    </p>
                    <Searchbar />
                </div>
                <HeroCarousel />
            </div>
        </section>
    )
}
