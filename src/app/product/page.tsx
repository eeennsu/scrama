import { requestGetDetailAmazonProduct } from '@/entities/product'
import { ProductComments, ProductData } from '@/widgets/product'
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
        <main className='flex flex-col gap-16 flex-wrap px-6 md:px-20 py-6 xl:py-12'>
            <ProductData
                product={product}
                url={url}
            />
            {product?.comments.length > 0 && (
                <ProductComments comments={product?.comments} />
            )}
        </main>
    )
}

export default DetailProductPage
