import type { FC } from 'react'
import { ProductCommentType } from '@/entities/product'
import Image from 'next/image'

interface Props {
    comment: ProductCommentType
}

export const ProductComment: FC<Props> = ({ comment }) => {
    return (
        <div className='flex items-start space-x-6 p-4 border-b border-gray-200'>
            <Image
                src={comment?.author?.image || '/icons/avatar.svg'}
                alt={`${comment?.author?.name}'s avatar`}
                width={36}
                height={36}
                className='rounded-full'
            />
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-2'>
                    <span className='font-semibold'>{comment?.author?.name || 'Amazon'}</span>
                    <span className='text-xs text-gray-500'>{comment?.date}</span>
                </div>
                <p>{comment?.content}</p>
            </div>
        </div>
    )
}
