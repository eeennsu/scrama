'use client'

import { useMemo, type FC } from 'react'
import { CarouselProductImageType } from '@/entities/product'
import { useRouter } from 'next/navigation'
import Imagegallery, { ReactImageGalleryItem } from 'react-image-gallery'
import Image from 'next/image'
import Link from 'next/link'
interface Props {
    productImages?: CarouselProductImageType[]
}

export const HeroCarousel: FC<Props> = ({ productImages }) => {
    const router = useRouter()

    const heroImagesWithStyles = useMemo(
        () =>
            (productImages || dummyImages)?.reduce<ReactImageGalleryItem[]>((acc, product) => {
                return [
                    ...acc,
                    {
                        original: product?.image || 'assets/images/amazon.png',
                        originalAlt: 'hero',
                        renderItem: (item) => {
                            return (
                                <Link
                                    href={
                                        product?.url
                                            ? `/product?url=${encodeURIComponent(product?.url)}`
                                            : 'https://www.amazon.com'
                                    }
                                >
                                    <figure
                                        key={item?.original}
                                        className='w-[464px] h-[464px] relative'
                                        onClick={() => product?.url && product?.url && router.push(product?.url)}
                                    >
                                        <Image
                                            src={item.original}
                                            alt={item.originalAlt || 'hero'}
                                            fill
                                            className='object-contain w-full h-full'
                                        />
                                    </figure>
                                </Link>
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

const dummyImages = [
    { image: '/assets/images/hero-1.svg', alt: 'smartwatch' },
    { image: '/assets/images/hero-2.svg', alt: 'bag' },
    { image: '/assets/images/hero-3.svg', alt: 'lamp' },
    { image: '/assets/images/hero-4.svg', alt: 'air fryer' },
    { image: '/assets/images/hero-5.svg', alt: 'chair' },
].map((item) => ({ ...item, url: null }))
