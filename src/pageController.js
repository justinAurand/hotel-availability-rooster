const pageScraper = require('./pageScraper');
const sendSms = require('./sendSms');

async function scrapeAll(browserInstance) {
	let browser;
	try {
		browser = await browserInstance;
	}
	catch(err) {
		console.log("Could not initialize browser instance => ", err);
	}

	const urls = [
		'https://oiacastleluxuryhotel.reserve-online.net/?checkin=2022-05-26&rooms=1&nights=1&adults=2&currency=USD',
		'https://oiacastleluxuryhotel.reserve-online.net/?checkin=2022-05-28&rooms=1&nights=1&adults=2&currency=USD',
	];
	for (const url of urls) {
		try {
			const html = await pageScraper.scraper(browser, url);
			if (html.includes('>Book This<')) {
				await sendSms(`${url} available!`);
			};
		}
		catch(err) {
			console.log("Could not resolve url => ", err);
		}
	}

	browser.close();
}

module.exports = (browserInstance) => scrapeAll(browserInstance);
