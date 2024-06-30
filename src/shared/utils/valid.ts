export const converAmazonLink = (searchText: string): string => {
    const trimedSearchText = searchText?.trim()

    if (!searchText || trimedSearchText === '') {
        return ''
    }
    const encodedSearchText = encodeURIComponent(trimedSearchText)

    return `https://www.amazon.com/s?k=${encodedSearchText}`
}

export const isValidAmazonLink = (url: string): boolean => {
    try {
        const parsedUrl = new URL(url)
        const hostname = parsedUrl.hostname

        return (
            hostname.includes('amazon.com') ||
            hostname.includes('amazon.') ||
            hostname.includes('amazon')
        )
    } catch (error) {
        return false
    }
}

export const checkEnvVariable = (env: string | undefined) => {
    if (!env) {
        throw new Error('Environment variable is not set')
    }

    return env
}
