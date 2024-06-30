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
