export const formatPrice = (price: number): string => {
    return price.toLocaleString('en-US', {
        currency: 'USD',
    })
}

export const convertToStars = (rating: string, entire: number = 5) => {
    const parsedRating = parseFloat(rating)
    const fullStars = Math.floor(parsedRating)
    const halfStar = parseFloat(rating) > fullStars ? 1 : 0
    const emptyStars = entire - (fullStars + halfStar)

    return {
        fullStars,
        halfStar,
        emptyStars,
    }
}
