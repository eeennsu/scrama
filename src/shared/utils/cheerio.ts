import cheerio, { Cheerio, Element } from 'cheerio'

export const generateTitle = (
    product: Cheerio<Element>,
    link?: string
): string => {
    const title = product
        .find('.a-size-medium.a-color-base.a-text-normal')
        .text()

    // If title is empty
    if (title === '') {
        const urlSegment = link

        if (typeof urlSegment === 'string') {
            const urlSegmentStripped = urlSegment.split('/')[1]
            const title = urlSegmentStripped.replace(/-/g, ' ')

            return title
        }
    }

    return title
}

export const extractSearchedProductPrice = (
    element: Cheerio<Element>
): string => {
    return (
        element.find('span.a-price span.a-offscreen').first().text().trim() ||
        element
            .find('div[data-cy="secondary-offer-recipe"] span.a-color-base')
            .first()
            .text()
            .trim() ||
        element
            .find('div[data-cy="price-recipe"] .a-row.a-size-base.a-color-base')
            .eq(1)
            .text()
            .trim()
    )
}

export const extractPrice = (...elements: Cheerio<Element>[]): number => {
    let foundPrice = ''

    for (const element of elements) {
        element.each((_, el) => {
            if (foundPrice) return false

            const priceText = cheerio(el).text().trim()

            // 숫자가 소숫점이 아닌 모든 문자를 제거
            if (priceText) {
                const cleanedPrice = priceText.replace(/[^0-9.]/g, '')

                if (cleanedPrice) {
                    foundPrice = cleanedPrice
                    return false
                }
            }
        })

        if (foundPrice) break
    }

    return Number(foundPrice)
}

export const extractDescriptions = (element: Cheerio<Element>): string[] => {
    const descriptions = [] as string[]

    element.find('span.a-list-item').each((i, el) => {
        const description = cheerio(el).text().trim()
        descriptions.push(description)
    })

    return descriptions
}

export const extractLastMonthPurchases = (
    element: Cheerio<Element>
): number => {
    const purchasesText = element
        .find('.a-size-base.a-color-secondary:contains("bought in past month")')
        .text()
        .trim()

    const purchasesMatch = purchasesText.match(/(\d+(\.\d+)?[KMB]?)/)

    let lastMonthPurchases = 0
    if (purchasesMatch) {
        const purchasesValue = purchasesMatch[0]
        if (purchasesValue.includes('K')) {
            lastMonthPurchases = parseFloat(purchasesValue) * 1000
        } else if (purchasesValue.includes('M')) {
            lastMonthPurchases = parseFloat(purchasesValue) * 1000000
        } else if (purchasesValue.includes('B')) {
            lastMonthPurchases = parseFloat(purchasesValue) * 1000000000
        } else {
            lastMonthPurchases = parseFloat(purchasesValue)
        }
    }

    return lastMonthPurchases
}
