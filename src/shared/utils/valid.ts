export const converAmazonLink = (searchText: string): string => {
    const trimedSearchText = searchText?.trim()

    if (!searchText || trimedSearchText === '') {
        return ''
    }
    const encodedSearchText = encodeURIComponent(trimedSearchText)

    return `https://www.amazon.com/s?k=${encodedSearchText}`
}
