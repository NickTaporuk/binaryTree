import puppeteer from "puppeteer";

describe("", () => {
  it.skip("should skip", function() {

  });
  // let browser;
  // let page;
  //
  // beforeEach(async () => {
  //   browser = await puppeteer.launch({
  //     headless: false,
  //     devtools: true,
  //     slowMo: 250
  //   });
  //
  //   page = await browser.newPage();
  // });
  //
  // afterEach(async () => {
  //   await browser.close();
  // });
  //
  // it.skip("should load page", async function() {
  //   await page.goto("http://localhost:3000");
  //
  //   await page.click('[data-hook="hi-button"]');
  //
  //   const value = await page.$eval('[data-hook="hi-text"]', (el) => {
  //     return el.innerHTML;
  //   });
  //
  //   await page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  //   expect(value).toBe("Hi. Provide some info");
  // });
});
