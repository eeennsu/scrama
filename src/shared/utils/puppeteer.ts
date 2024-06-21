import type { Page, GoToOptions } from 'puppeteer'
import puppeteer from 'puppeteer'
import { scrollPageToBottom } from 'puppeteer-autoscroll-down'

export const getPageContent = async (
    url: string,
    options: GoToOptions = { waitUntil: 'networkidle2' }
): Promise<string> => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(url, options)

    await scrollPageToBottom(page, { size: 250, delay: 100, stepsLimit: 10 })

    const content = await page.content()
    await browser.close()

    return content
}
