const scraperObject = {
	async scraper(browser, url) {
		let page = await browser.newPage();
		await page.setCacheEnabled(false);

		await page.goto(url);
		let bodyHtml = await page.evaluate(() => document.documentElement.outerHTML);

		return bodyHtml;
	}
}

module.exports = scraperObject;
