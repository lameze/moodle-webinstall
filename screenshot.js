const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/moodle');
    await page.screenshot({path: 'moodle.png'});
    await browser.close();
})();
