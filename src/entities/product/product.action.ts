'use server'

import type { AmazonProductType } from './product.types'
import {
    checkEnvVariable,
    extractDescriptions,
    extractPrice,
} from '@/shared/utils'
import * as cheerio from 'cheerio'
import axios from 'axios'

export async function scrapeAndStoreDetailProduct(url: string) {
    try {
        // connectToDB()

        const scrapedProduct = await scrapeDetailAmazonProduct(url)

        if (!scrapedProduct) return

        // TODO: scrapeAmazonProduct list
    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}

export async function scrapeDetailAmazonProduct(
    url: string
): Promise<AmazonProductType> {
    const username = String(checkEnvVariable(process.env.BRIGHT_DATA_USERNAME))

    const password = String(checkEnvVariable(process.env.BRIGHT_DATA_PASSWORD))

    const port = Number(checkEnvVariable(process.env.BRIGHT_DATA_PORT))
    const sessionId =
        Date.now().toString(36) + Math.random().toString(36).substr(2)
    const options = {
        auth: {
            username: `${username}-session-${sessionId}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }

    try {
        const { data } = await axios.get(url, options)
        const $ = cheerio.load(data)

        const id = $('[data-component-type="s-search-result"]')
            .first()
            .attr('data-asin')

        const title = $('#productTitle').text().trim()

        const discountedPrice = extractPrice(
            $('span.a-price span.a-offscreen'),
            $('.priceToPay span.a-price-whole'),
            $('a.size.base .a-color-price'),
            $('.a-button-selected .a-color-base'),
            $('.a-price.a-text-price')
        )

        const originalPrice = extractPrice(
            $('#priceblock_ourprice'),
            $('.a-price.a-text-price span.a-offscreen'),
            $('#listPrice'),
            $('#priceblock_dealprice'),
            $('.a-size-base.a-color-price')
        )
        const discountedPercent = +$('.savingPercentage')
            .text()
            .replace(/[-%]/g, '')

        const currency = $('.a-price-symbol').text().trim().slice(0, 1)

        const availabilty = $('#availability').text().trim().toLocaleLowerCase()

        const imageElements =
            $('#imglbkFront').attr('data-a-dynamic-image') ||
            $('#landingImage').attr('data-a-dynamic-image')

        const images = Object.keys(JSON.parse(imageElements || '{}'))

        const descriptions = extractDescriptions($('#feature-bullets'))

        const star = $('#acrPopover')
            .attr('title')
            ?.match(/[\d.]+/)
            ?.at(0)

        const brand = $('#bylineInfo').text().trim().split(' ')?.at(2)

        const amazonProduct: AmazonProductType = {
            id,
            title,
            price: {
                discountedPrice,
                discountedPercent: discountedPercent || undefined,
                originalPrice,
                currency: currency || '$',
            },
            images,
            descriptions,
            isAvaliable: availabilty === 'in stock',
            brand,
            star: Number(star) || undefined,
        }

        console.log(amazonProduct)

        return amazonProduct
    } catch (error: any) {
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
