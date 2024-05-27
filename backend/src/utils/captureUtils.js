const puppeteer = require('puppeteer');

exports.captureScreenshot = async (url, width, height) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: parseInt(width, 10), height: parseInt(height, 10) });
    await page.goto(url);
    const screenshot = await page.screenshot({ fullPage: true });
    await browser.close();
    return screenshot;
};
