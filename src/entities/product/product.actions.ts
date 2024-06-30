'use server'

import type { DetailProductType, SearchedProductType } from './product.types'
import {
    scrapeAmazonProductsImages,
    scrapeDetailAmazonProduct,
    scrapeSearchedAmazonProductList,
    scrapeTodaysDealsProductList,
} from './product.scrape'
import { getBrightDataOptions } from '@/shared/lib'
import { retryFetch } from '@/shared/utils'
import * as cheerio from 'cheerio'
import axios from 'axios'

export async function requestGetAmazonProductsImages() {
    const fetch = async () => {
        try {
            const options = getBrightDataOptions()
            const { data } = await axios.get('https://www.amazon.com/ref=nav_logo', options)

            const $ = cheerio.load(data)
            const amazonProductsImages = scrapeAmazonProductsImages($) || []

            return amazonProductsImages
        } catch (error: any) {
            throw new Error(`Failed to scrape product images: ${error.message}`)
        }
    }

    return retryFetch({
        fetch,
        condition: (images) => images.length > 0,
    })
}

export const requestGetTodayDealsAmazonProductList = async () => {
    try {
        const options = getBrightDataOptions()
        const todayDealsUrl =
            'https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522'

        const { data } = await axios.get(todayDealsUrl, options)
        const $ = cheerio.load(data)

        const todayDetailProducts = scrapeTodaysDealsProductList($) || []

        return todayDetailProducts
    } catch (error: any) {
        throw new Error(`Failed to scrape today deals: ${error.message}`)
    }
}

export const requestGetSearchedProductList = async (url: string): Promise<SearchedProductType[]> => {
    try {
        const options = getBrightDataOptions()
        const { data } = await axios.get(url, options)

        const $ = cheerio.load(data)
        const searchedProducts = scrapeSearchedAmazonProductList($) || []

        return searchedProducts
    } catch (error: any) {
        throw new Error(`Failed to scrape searched product list: ${error.message}`)
    }
}

export async function requestGetDetailAmazonProduct(url: string): Promise<DetailProductType> {
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
