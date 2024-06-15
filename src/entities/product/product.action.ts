'use server'

import type { AmazonProductType } from './product.types'
import { generateTitle } from '@/shared/utils'
import { load } from 'cheerio'

export async function scrapeAndStoreProduct(productUrl: string) {
    try {
        const scrapedProduct = await scrapeAmazonProduct(productUrl)

        const $ = load(scrapedProduct)
        const products: AmazonProductType[] = []

        $('.s-result-item').each((i, el) => {
            const product = $(el)

            const priceWhole = product.find('.a-price-whole').text()
            const priceFraction = product.find('.a-price-fraction').text()
            const price = priceWhole + priceFraction
            const image = product.find('.s-image').attr('src')
            const link = product
                .find('.a-link-normal.a-text-normal')
                .attr('href')
            const title = generateTitle(product, link)

            if (title !== '' && price !== '') {
                products.push({
                    title,
                    price,
                    image,
                    link,
                })
            }
        })

        return products
    } catch (error: any) {
        console.error(error)
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}

export async function scrapeAmazonProduct(productUrl: string) {
    try {
        // BrightData proxy configuration

        const response = await fetch(productUrl, {
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
            },
        })

        if (!response.ok) {
            throw new Error(`http error status: ${response.statusText}`)
        }

        const data = await response.text()

        return data
    } catch (error: any) {
        console.error(error)
        throw new Error(`Failed to scrape product: ${error.message}`)
    }
}

// export async function getAllProducts() {
//     try {

//     } catch (error: any) {
//         console.error(error)
//         throw new Error(`Failed to fetch products: ${error.message}`)
//     }
// }
