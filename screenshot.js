const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const moodleSiteUrl = process.env.MOODLE_SITE_URL || 'http://localhost:8080/moodle';
    const phpVersion = process.argv[2] || 'default';
    await page.goto(moodleSiteUrl);
    await page.screenshot({path: `moodle${phpVersion}.png`});
    await browser.close();
})();
