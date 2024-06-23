import type { FC } from 'react'
import { ExternalLink } from 'lucide-react'
import { Interactions } from './interactions'
import { DetailProductType } from '@/entities/product'
import Link from 'next/link'

interface Props {
    title: DetailProductType['title']
    url: string
}

export const ProductTitle: FC<Props> = ({ title, url }) => {
    return (
        <section className='flex justify-between items-start gap-5 flex-wrap pb-6'>
            <div className='flex flex-col gap-3'>
                <p className='text-[28px] text-gray-800 font-semibold'>
                    {title}
                </p>
            </div>

            <div className='flex items-center gap-3'>
                <Link
                    href={url || 'https://www.amazon.com'}
                    target='_blank'
                    className='inline-flex gap-2 items-center px-3 py-2 bg-white-200 rounded-md hover:opacity-75'
                >
                    <span className='text-sm'>Go to Amazon</span>
                    <ExternalLink
                        className='text-black opacity-50 hover:opacity-100'
                        size={18}
                    />
                </Link>

                <Interactions
                    url={url}
                    title={title}
                />
            </div>
        </section>
    )
}
