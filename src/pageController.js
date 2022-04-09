const pageScraper = require('./pageScraper');

async function scrapeAll(browserInstance) {
	let browser;
	try {
		browser = await browserInstance;
	}
	catch(err) {
		console.log("Could not instantiate browser instance => ", err);
	}

	const urls = [
		'https://oiacastleluxuryhotel.reserve-online.net/?checkin=2022-05-26&rooms=1&nights=1&adults=2&currency=USD',
		'https://oiacastleluxuryhotel.reserve-online.net/?checkin=2022-05-28&rooms=1&nights=1&adults=2&currency=USD',
	];
	let isAnAvailability = false;
	for (const url of urls) {
		try {
			const html = await pageScraper.scraper(browser, url);
			if (html.includes('>Book This<')) {
				isAnAvailability = true;
			};
		}
		catch(err) {
			console.log("Could not resolve url => ", err);
		}
	}

	browser.close();
	
	if (isAnAvailability) {
		// Message your wife person
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance);
