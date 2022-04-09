const pageScraper = require('./pageScraper');

async function scrapeAll(browserInstance) {
	let browser;

	try {
		browser = await browserInstance;
		const html = await pageScraper.scraper(browser);
		console.log(html.includes('>Book This<'));
	}
	catch(err) {
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance);
