const browserObject = require('./src/browser');
const cron = require('node-cron');
const { DateTime } = require('luxon');
const scraperController = require('./src/pageController');

cron.schedule('10 * * * *', () => {
    const time = DateTime.now().toFormat('h:mma');
    console.log(`${time} Checking availability...`);
    let browserInstance = browserObject.startBrowser();
    scraperController(browserInstance);
});
