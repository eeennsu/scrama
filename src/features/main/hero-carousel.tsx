'use client'

import { useMemo, type FC } from 'react'
import { CarouselProductImageType } from '@/entities/product'
import { useRouter } from 'next/navigation'
import Imagegallery, { ReactImageGalleryItem } from 'react-image-gallery'
import Image from 'next/image'
interface Props {
    productImages: CarouselProductImageType[]
}

export const HeroCarousel: FC<Props> = ({ productImages }) => {
    const router = useRouter()

    const heroImagesWithStyles = useMemo(
        () =>
            productImages?.reduce<ReactImageGalleryItem[]>((acc, product) => {
                return [
                    ...acc,
                    {
                        original: product?.image || 'assets/images/amazon.png',
                        originalAlt: 'hero',
                        renderItem: (item) => {
                            return (
                                <figure
                                    key={item?.original}
                                    className='w-[464px] h-[464px] relative'
                                    onClick={() =>
                                        product?.url &&
                                        router.push(product?.url)
                                    }
                                >
                                    <Image
                                        src={item.original}
                                        alt={item.originalAlt || 'hero'}
                                        fill
                                        className='object-contain w-full h-full'
                                    />
                                </figure>
                            )
                        },
                    },
                ]
            }, []),
        [productImages, router]
    )

    return (
        <section className='bg-gray-100 rounded-lg p-8 relative'>
            <Imagegallery
                items={heroImagesWithStyles}
                showThumbnails={false}
                showPlayButton={false}
                showFullscreenButton={false}
                slideInterval={3000}
                slideDuration={400}
                showBullets
                autoPlay
            />
            <Image
                src='assets/icons/hand-drawn-arrow.svg'
                alt='arrow'
                width={176}
                height={176}
                className='max-xl:hidden absolute -left-[16%] rounded-md rotate-[4deg] -bottom-[22%] z-10'
            />
        </section>
    )
}
