'use server'

import type { DetailProductType, SearchedProductType } from './product.types'
import { checkEnvVariable } from '@/shared/utils'
import axios from 'axios'
import {
    scrapeDetailAmazonProduct,
    scrapeSearchedAmazonProductList,
    scrapeTodaysDealsProductList,
} from './product.scrape'
import * as cheerio from 'cheerio'
import { getPageContent } from '@/shared/utils/puppeteer'
import { getBrightDataOptions } from '@/shared/lib'

export const requestGetTodayDealsAmazonProductList = async () => {
    try {
        const todayDealsUrl = checkEnvVariable(
            process.env.AMAZON_TODAY_DEALS_URL
        )

        const content = await getPageContent(todayDealsUrl)
        const $ = cheerio.load(content)

        const todayDetailProducts = scrapeTodaysDealsProductList($) || []

        return todayDetailProducts
    } catch (error: any) {
        throw new Error(`Failed to scrape today deals: ${error.message}`)
    }
}

export const requestSearchedProductList = async (
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
        throw new Error(`Failed to scrape product: ${error.message}`)
    }
}
