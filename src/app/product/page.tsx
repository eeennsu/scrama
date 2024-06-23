import { requestGetDetailAmazonProduct } from '@/entities/product'
import { ProductData } from '@/widgets/product'
import { NextPage } from 'next'

interface Props {
    searchParams: {
        [key: string]: string | undefined
    }
}
const DetailProductPage: NextPage<Props> = async ({ searchParams }) => {
    let url = searchParams?.url

    if (!url) {
        throw new Error('url params is required')
    }

    url = decodeURIComponent(url)

    const product = await requestGetDetailAmazonProduct(url)

    return (
        <article className='flex flex-col gap-16 flex-wrap px-6 md:px-20 py-6 xl:py-12'>
            <ProductData
                product={product}
                url={url}
            />
            {/* 
            {similarProducts && similarProducts?.length > 0 && (
                <div className='py-14 flex flex-col gap-2 w-full'>
                    <p className='section-text'>Similar Products</p>

                    <div className='flex flex-wrap gap-10 mt-7 w-full'>
                        {similarProducts.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            )} */}
        </article>
    )
}

export default DetailProductPage
