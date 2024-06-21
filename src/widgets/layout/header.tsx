import type { FC } from 'react'
import { navIcons } from '@/shared/constants'
import Image from 'next/image'
import Link from 'next/link'

export const Header: FC = () => {
    return (
        <header className='w-full'>
            <nav className='nav'>
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

                    <p className='nav-logo'>
                        Amazon{'  '}
                        <span className='text-blue-700'>Scraping</span>
                    </p>
                </Link>
            </nav>
        </header>
    )
}
