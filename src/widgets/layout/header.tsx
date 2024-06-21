import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Header: FC = () => {
    return (
        <header className='w-full'>
            <nav className='flex justify-between items-center px-6 md:px-20 py-4'>
                <Link
                    href='/'
                    className='flex items-center gap-1'
                >
                    <Image
                        src='/assets/icons/logo.svg'
                        width={27}
                        height={27}
                        alt='logo'
                    />

                    <p className='font-spaceGrotesk text-[21px] font-bold text-gray-700'>
                        Amazon{'  '}
                        <span className='text-blue-700'>Scraping</span>
                    </p>
                </Link>
            </nav>
        </header>
    )
}
