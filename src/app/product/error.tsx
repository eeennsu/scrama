'use client'

import type { NextPage } from 'next'
import { ErrorLayout } from '@/features/error'

interface Props {
    error: Error & { digest?: string }
    reset: () => void
}

const ErrorPage: NextPage<Props> = ({ error, reset }) => {
    return (
        <ErrorLayout
            error={error}
            reset={reset}
        />
    )
}

export default ErrorPage
