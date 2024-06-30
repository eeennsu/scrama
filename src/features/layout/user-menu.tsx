import type { FC } from 'react'
import { navUserMenu } from '@/shared/constants'
import { getLoggedInUser } from '@/shared/lib/appwrite/api/user.api'
import { UserMenuItem } from './user-menu-item'
import { Button } from '@/shared/ui/components/button'
import Link from 'next/link'

export const UserMenu: FC = async () => {
    const user = false

    return (
        <ul className='flex gap-4'>
            {user ? (
                navUserMenu.map((menu) => (
                    <UserMenuItem
                        key={menu.src}
                        {...menu}
                    />
                ))
            ) : (
                <Link href='/user/sign-in'>
                    <Button>Login</Button>
                </Link>
            )}
        </ul>
    )
}
