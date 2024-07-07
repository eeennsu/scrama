import type { FC } from 'react'
import type { DisplayProductType } from '@/entities/product'
import { Card, CardContent, CardFooter } from '@/shared/ui/components/card'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    product: DisplayProductType
}

export const DisplayProductCard: FC<Props> = ({ product }) => {
    const Component = () => {
        return (
            <Card className='w-[310px] group shadow-md'>
                <CardContent className='flex flex-col w-full pb-3 pt-6 gap-3'>
                    <figure className='relative w-[260px] h-[200px] overflow-hidden'>
                        <Image
                            src={product?.image || 'assets/images/amazon.png'}
                            alt={product?.title || 'todays deals product'}
                            className='object-cover rounded-md group-hover:scale-105 transition-all duration-300'
                            fill
                            quality={100}
                        />
                    </figure>
                </CardContent>
                <CardFooter className='flex justify-center'>
                    <h3 className='text-lg font-semibold line-clamp-2'>{product?.title}</h3>
                </CardFooter>
            </Card>
        )
    }

    return product?.url ? (
        <Link href={product?.url}>
            <Component />
        </Link>
    ) : (
        <Component />
    )
}
