import type { FC } from 'react'

interface Props {
    type: 'sign-in' | 'sign-up'
}

export const HeadTitle: FC<Props> = ({ type }) => {
    return (
        <h1 className='text-center text-3xl font-bold text-gray-800  dark:text-white tracking-tight leading-tight'>
            {type === 'sign-in' ? 'Login' : 'Sign Up'}
        </h1>
    )
}
