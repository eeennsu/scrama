import { CircleHelp } from 'lucide-react'
import Image from 'next/image'
import type { FC } from 'react'

interface Props {
    title: string
    icon: string
    label?: string
}

export const ProductInfoCard: FC<Props> = ({ title, icon, label }) => {
    return (
        <div className='flex-1 min-w-[200px] flex items-center border-l-[3px] rounded-xl bg-white-100 px-5 py-4 shadow-lg'>
            <figure className='flex min-w-[62px] gap-1.5 items-center flex-col'>
                <Image
                    src={icon}
                    alt={label || title}
                    width={24}
                    height={24}
                />
                <figcaption className='text-base'>{title}</figcaption>
            </figure>

            <div className='flex items-center h-full flex-1 text-center justify-center text-lg font-bold text-gray-800'>
                {label ?? <CircleHelp />}
            </div>
        </div>
    )
}
