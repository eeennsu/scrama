'use client'

import type { FC } from 'react'
import { heroImages } from '@/shared/constants'
import Imagegallery, { ReactImageGalleryItem } from 'react-image-gallery'
import Image from 'next/image'

const heroImagesWithStyles = heroImages.map((image) => ({
    ...image,
    renderItem: (item: ReactImageGalleryItem) => {
        return (
            <figure className='w-[464px] h-[464px] relative '>
                <Image
                    src={item.original}
                    alt={item.originalAlt || 'hero'}
                    fill
                    className='object-cotain w-full h-full'
                />
            </figure>
        )
    },
}))

export const HeroCarousel: FC = () => {
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
                className='max-xl:hidden absolute -left-[16%] rotate-[4deg] -bottom-[22%] z-10'
            />
        </section>
    )
}
