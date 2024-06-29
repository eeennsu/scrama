import type { GoToOptions } from 'puppeteer'
import { scrollPageToBottom } from 'puppeteer-autoscroll-down'
import puppeteer from 'puppeteer-core'
import chromium from 'chrome-aws-lambda'

const setupPuppeteer = async () => {
    const browser = await puppeteer.launch({
        args: chromium.args,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
    })

    return browser
}

export const getPageContentWithScroll = async (
    url: string,
    options: GoToOptions = { waitUntil: 'networkidle2' }
): Promise<string> => {
    const browser = await setupPuppeteer()

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
    const browser = await setupPuppeteer()
    const page = await browser.newPage()
    await page.goto(url, options)

    const content = await page.content()
    await browser.close()

    return content
}
