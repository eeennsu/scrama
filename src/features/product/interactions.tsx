'use client'

import type { DetailProductType } from '@/entities/product'
import { useState, type FC } from 'react'
import { Copy, CopyCheck } from 'lucide-react'
import Image from 'next/image'

interface Props {
    title: DetailProductType['title']
    url: string
}

export const Interactions: FC<Props> = ({ title, url }) => {
    const [isCopyed, setIsCopyed] = useState<boolean>(false)

    const onCopy = () => {
        navigator.clipboard.writeText(url)
        setIsCopyed(true)
    }

    const onShare = () => {
        navigator.share &&
            navigator.share({
                title: 'Amazon Product',
                text: `${title?.slice(0, 14) || 'Amazon Product'}...`,
                url: window.location.href,
            })
    }

    return (
        <>
            <button
                className='p-2 bg-white-200 rounded-md'
                onClick={onCopy}
            >
                {isCopyed ? (
                    <CopyCheck size={18} />
                ) : (
                    <Copy
                        className='opacity-60 hover:opacity-100'
                        size={18}
                    />
                )}
            </button>

            <button
                className='p-2 bg-white-200 rounded-md'
                onClick={onShare}
            >
                <Image
                    className='opacity-60 hover:opacity-100'
                    src='/assets/icons/share.svg'
                    alt='share'
                    width={20}
                    height={20}
                />
            </button>
        </>
    )
}
