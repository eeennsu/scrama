import type { AxiosRequestConfig } from 'axios'
import { checkEnvVariable } from '../utils'
import { userAgentList } from '../constants'

export const getBrightDataOptions = (): AxiosRequestConfig & Record<string, any> => {
    const username = String(checkEnvVariable(process.env.BRIGHT_DATA_USERNAME))
    const password = String(checkEnvVariable(process.env.BRIGHT_DATA_PASSWORD))
    const port = Number(checkEnvVariable(process.env.BRIGHT_DATA_PORT))
    const session_id = (1000000 * Math.random()) | 0

    return {
        headers: {
            'User-Agent': userAgentList[Math.floor(Math.random() * userAgentList.length)],
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
