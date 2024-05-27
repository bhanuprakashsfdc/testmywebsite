const puppeteer = require('puppeteer');

exports.captureScreenshot = async (url, width, height) => {
    let browser;
    try {
        // Ensure the URL includes a protocol
        if (!/^https?:\/\//i.test(url)) {
            url = 'http://' + url;
        }

        browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({ width: parseInt(width, 10), height: parseInt(height, 10) });
        await page.goto(url);
        const screenshot = await page.screenshot({ fullPage: true });
        return screenshot;
    } catch (error) {
        console.error('Error capturing screenshot:', error);
        throw error;
    } finally {
        if (browser) {
            await browser.close();
        }
    }
};
