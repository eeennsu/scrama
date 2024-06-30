import type { FC } from 'react'
import { PATH_KEYS } from '@/shared/route'
import Link from 'next/link'

export const SignInFooter: FC = () => {
    return (
        <footer
            aria-label='sign up footer'
            className='text-center mt-4'
        >
            <p className='text-sm inline-flex gap-3 text-gray-600'>
                Not a member yet?
                <Link
                    href={PATH_KEYS.signUp()}
                    className='text-blue-600 hover:text-blue-800 ml-1'
                >
                    Sign up now
                </Link>
            </p>
        </footer>
    )
}
