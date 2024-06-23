import { ProductCommentType } from '@/entities/product'
import { ProductComment } from '@/features/product'
import type { FC } from 'react'

interface Props {
    comments: ProductCommentType[]
}

export const ProductComments: FC<Props> = ({ comments }) => {
    return (
        <section className='flex flex-col gap-5'>
            <h3 className='text-3xl text-gray-800 font-bold'>Comments</h3>
            <section className='flex flex-col'>
                {comments?.map((comment, i) => (
                    <ProductComment
                        key={i}
                        comment={comment}
                    />
                ))}
            </section>
        </section>
    )
}
