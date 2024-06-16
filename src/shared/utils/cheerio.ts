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

export const extractPrice = (...elements: Cheerio<Element>[]): number => {
    let foundPrice = ''

    for (const element of elements) {
        element.each((i, el) => {
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
