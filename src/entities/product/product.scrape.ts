import type {
    TodaysDealsProductType,
    SearchedProductType,
} from './product.types'
import type { CheerioAPI } from 'cheerio'
import { extractDescriptions, extractPrice } from '@/shared/utils'
export const scrapeDetailAmazonProduct = (
    $: CheerioAPI
): SearchedProductType => {
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

    const amazonProduct: SearchedProductType = {
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

    return amazonProduct
}

export const scrapeTodaysDealsProductList = (
    $: CheerioAPI
): TodaysDealsProductType[] => {
    const todaysDealsProductList: TodaysDealsProductType[] = []

    $('div[data-testid="virtuoso-item-list"] div[data-test-index]').each(
        (_, el) => {
            const id = $(el).attr('data-testid')?.trim()

            const title = $(el)
                .find('.ProductCard-module__title_awabIOxk6xfKvxKcdKDH')
                .text()
            .trim()

            const discountedPercent = $(el)
                .find(
                    'div[data-component="dui-badge"] div.style_badgeLabel__dD0Hv'
                )
                .text()
                .trim()

            const avaliableCoupon = $(el)
                .find('div[data-component="dui-coupon-badge"]')
                .text()
                .trim()

            const image = $(el)
                .find('img.ProductCardImage-module__image_SU6C7KYJpko3vQ2fK7Kf')
                .attr('src')

            const link = $(el).find('a.a-link-normal').attr('href')

            const todaysDealsProduct: TodaysDealsProductType = {
                id,
                title,
                discountedPercent,
                avaliableCoupon,
                image,
                link,
            }

            todaysDealsProductList.push(todaysDealsProduct)
        }
    )

    return todaysDealsProductList
}
