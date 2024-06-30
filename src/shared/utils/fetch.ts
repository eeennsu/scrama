export const retryFetch = async <T>({
    fetch,
    condition,
    retryCount = 5,
    delay = 100,
}: {
    fetch: () => Promise<T>
    condition: (data: T) => boolean
    retryCount?: number
    delay?: number
}) => {
    let count = 0
    let error

    while (count < retryCount) {
        try {
            const response = await fetch()

            if (condition(response)) return response
            count++
        } catch (err: any) {
            count++
            error = err
        }

        await new Promise((resolve) => setTimeout(resolve, delay))
    }

    if (count === retryCount) {
        throw new Error(`Failed to fetch data after ${retryCount} retries: ${error.message}`)
    }
}
