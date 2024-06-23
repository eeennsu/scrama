import type { FC } from 'react'
import { DetailProductType } from '@/entities/product'

interface Props {
    descriptions: DetailProductType['descriptions']
}

export const ProductDescriptions: FC<Props> = ({ descriptions }) => {
    return (
        <section className='flex flex-col gap-5'>
            <h3 className='text-3xl text-gray-800 font-bold'>Description</h3>

            <ul className='flex flex-col gap-4 text-gray-800'>
                {descriptions?.map((description, i) => (
                    <li
                        className='list-disc'
                        key={i}
                    >
                        {description}
                    </li>
                ))}
            </ul>
        </section>
    )
}
