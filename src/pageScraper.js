const scraperObject = {
	url: 'https://oiacastleluxuryhotel.reserve-online.net/?checkin=2022-05-28&rooms=1&nights=1&adults=2&currency=USD',
	async scraper(browser) {
		let page = await browser.newPage();

		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
		let bodyHtml = await page.evaluate(() => document.documentElement.outerHTML);
		await browser.close();

		return bodyHtml;
	}
}

module.exports = scraperObject;
