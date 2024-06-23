import { ProductCommentType } from '@/entities/product'
import cheerio, { Cheerio, CheerioAPI, Element } from 'cheerio'

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

export const extractDescriptions = ($: CheerioAPI): string[] => {
    const descriptions: string[] = []

    $('#feature-bullets')
        .find('span.a-list-item')
        .each((_, el) => {
            const description = $(el).text().trim()

            if (description) {
                descriptions.push(description)
            }
        })

    if (descriptions.length === 0) {
        $('ul.a-unordered-list.a-vertical.a-spacing-small li').each(
            (_, element) => {
                const description = $(element).text().trim()
                if (description) {
                    descriptions.push(description)
                }
            }
        )
    }

    return descriptions
}

export const extractLastMonthPurchases = (
    element: Cheerio<Element>
): number | null => {
    const purchasesText = element
        .find('.a-size-base.a-color-secondary:contains("bought in past month")')
        .text()
        .trim()

    const boughtInPastMonthNumber = parseInt(
        purchasesText.replace(/[^0-9]/g, ''),
        10
    )

    if (isNaN(boughtInPastMonthNumber)) {
        return null
    }

    return boughtInPastMonthNumber
}

export const extractComments = ($: CheerioAPI): ProductCommentType[] => {
    const comments: ProductCommentType[] = []

    $('div[data-hook="review"].review').each((i, el) => {
        const comment = $(el)

        const rating = comment
            .find('span.a-icon-alt')
            .text()
            .trim()
            .replace(' out of 5 stars', '')
        const content = comment
            .find('.reviewText.review-text-content')
            .text()
            .trim()

        const authorName = comment.find('span.a-profile-name').text().trim()
        const authorImage = comment.find('img').first().attr('data-src')
        const date = comment.find('.review-date').text().trim()

        comments.push({
            id: i,
            author: {
                name: authorName,
                image: authorImage,
            },
            rating,
            content,
            date,
        })

        if (comments.length >= 3) return false
    })

    return comments
}
