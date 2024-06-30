export const navUserMenu: NavUserMenu[] = [
    { src: '/assets/icons/user.svg', alt: 'user', href: '/user' },
    { src: '/assets/icons/logout.svg', alt: 'logout', href: null },
]

export type NavUserMenu = {
    src: string
    alt: string
    href: string | null
}
