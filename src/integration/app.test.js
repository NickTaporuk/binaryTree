const path = require("path");
const fs = require("fs");

const dir = `./screenshots/${+(new Date())}`;
!fs.existsSync(dir) && fs.mkdirSync(dir);

describe("app", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000");
  });

  it("should display a react logo", async () => {
    await expect(page).toMatch("React");
    // await page.screenshot({path: dir + '/screenshot.png'});
  });

  afterAll(async (browser) => {
    // await browser.close();
    console.log(browser);
  });
});
