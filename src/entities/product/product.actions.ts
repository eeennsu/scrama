'use server'

import type { SearchedProductType } from './product.types'
import { checkEnvVariable } from '@/shared/utils'
import axios, { AxiosRequestConfig } from 'axios'
import {
    scrapeDetailAmazonProduct,
    scrapeTodaysDealsProductList,
} from './product.scrape'
import * as cheerio from 'cheerio'
import { getPageContent } from '@/shared/utils/puppeteer'

const getBrightDataOptions = (): AxiosRequestConfig & Record<string, any> => {
    const username = String(checkEnvVariable(process.env.BRIGHT_DATA_USERNAME))
    const password = String(checkEnvVariable(process.env.BRIGHT_DATA_PASSWORD))
    const port = Number(checkEnvVariable(process.env.BRIGHT_DATA_PORT))
    const session_id = (1000000 * Math.random()) | 0

    return {
        headers: {
            'User-Agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
        },
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }
}

export async function requestGetDetailAmazonProduct(
    url: string
): Promise<SearchedProductType> {
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
