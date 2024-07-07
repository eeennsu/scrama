import type { FC } from 'react'
import { PATH_KEYS } from '@/shared/route'
import Image from 'next/image'
import Link from 'next/link'

export const Header: FC = () => {
    return (
        <header className='w-full border-b'>
            <nav
                aria-label='header nav menu'
                className='flex justify-between items-center px-6 md:px-20 py-4  max-w-[1500px] mx-auto w-full'
            >
                <Link
                    href={PATH_KEYS.main()}
                    className='flex items-center gap-1'
                >
                    <Image
                        src='/assets/icons/logo.svg'
                        width={27}
                        height={27}
                        alt='logo'
                    />

                    <p className='font-spaceGrotesk text-[21px] font-bold text-gray-700'>Scrama</p>
                </Link>
            </nav>
        </header>
    )
}
