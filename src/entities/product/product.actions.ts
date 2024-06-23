'use server'

import type { DetailProductType, SearchedProductType } from './product.types'
import {
    scrapeAmazonProductsImages,
    scrapeDetailAmazonProduct,
    scrapeSearchedAmazonProductList,
    scrapeTodaysDealsProductList,
} from './product.scrape'
import {
    getPageContent,
    getPageContentWithScroll,
} from '@/shared/utils/puppeteer'
import { checkEnvVariable } from '@/shared/utils'
import { getBrightDataOptions } from '@/shared/lib'
import * as cheerio from 'cheerio'
import axios from 'axios'

export async function requestGetAmazonProductsImages() {
    try {
        const options = getBrightDataOptions()
        const { data } = await axios.get(
            'https://www.amazon.com/ref=nav_logo',
            options
        )

        const $ = cheerio.load(data)
        const amazonProductsImages = scrapeAmazonProductsImages($) || []

        return amazonProductsImages
    } catch (error: any) {
        throw new Error(`Failed to scrape product images: ${error.message}`)
    }
}

export const requestGetTodayDealsAmazonProductList = async () => {
    try {
        const todayDealsUrl = checkEnvVariable(
            process.env.AMAZON_TODAY_DEALS_URL
        )

        const content = await getPageContentWithScroll(todayDealsUrl)
        const $ = cheerio.load(content)

        const todayDetailProducts = scrapeTodaysDealsProductList($)

        return todayDetailProducts
    } catch (error: any) {
        throw new Error(`Failed to scrape today deals: ${error.message}`)
    }
}

export const requestGetSearchedProductList = async (
    url: string
): Promise<SearchedProductType[]> => {
    try {
        const options = getBrightDataOptions()
        const { data } = await axios.get(url, options)

        const $ = cheerio.load(data)
        const searchedProducts = scrapeSearchedAmazonProductList($) || []

        return searchedProducts
    } catch (error: any) {
        throw new Error(
            `Failed to scrape searched product list: ${error.message}`
        )
    }
}

export async function requestGetDetailAmazonProduct(
    url: string
): Promise<DetailProductType> {
    try {
        const options = getBrightDataOptions()
        const { data } = await axios.get(url, options)

        const $ = cheerio.load(data)
        const amazonProduct = scrapeDetailAmazonProduct($)

        return amazonProduct
    } catch (error: any) {
        throw new Error(`Failed to scrape detail product: ${error.message}`)
    }
}
