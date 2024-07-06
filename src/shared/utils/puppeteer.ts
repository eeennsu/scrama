import type { GoToOptions } from 'puppeteer'
import { scrollPageToBottom } from 'puppeteer-autoscroll-down'
import puppeteer from 'puppeteer'

export const getPageContentWithScroll = async (
    url: string,
    options: GoToOptions = { waitUntil: 'networkidle2' }
): Promise<string> => {
    const browser = await puppeteer.launch({
        executablePath: process.env.CHROME_BINARY_PATH,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()

    await page.goto(url, options)

    await scrollPageToBottom(page, { size: 250, delay: 100, stepsLimit: 10 })

    const content = await page.content()
    await browser.close()

    return content
}

export const getPageContent = async (
    url: string,
    options: GoToOptions = { waitUntil: 'networkidle2' }
): Promise<string> => {
    const browser = await puppeteer.launch({
        executablePath: process.env.CHROME_BINARY_PATH,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()
    await page.goto(url, options)

    const content = await page.content()
    await browser.close()

    return content
}
