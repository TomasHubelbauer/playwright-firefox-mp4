const playwright = require('playwright');
const path = require('path');

process.on('uncaughtException', error => { throw error; });
process.on('unhandledRejection', error => { throw error; });

void async function () {
  const browser = await playwright.firefox.launch();
  const page = await browser.newPage();
  await page.goto(path.join(__dirname, 'demo.html'));
  await page.waitForFunction(() => document.querySelector('video').readyState === 4);
  await page.screenshot({ path: path.join(__dirname, 'screenshot.png') });
  await browser.close();
}()
