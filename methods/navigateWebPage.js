import puppeteer from "puppeteer";
import { sleep } from "../helpers/sleep.js";

export async function navigateWebPage(url, slowMotion = 200) {
  try {
    const browser = await puppeteer.launch({
      slowMo: slowMotion,
      headless: false,
    });

    const page = await browser.newPage();
    await page.goto(url);
    await page.click('a[href="/login"]');

    await sleep(2);
    await browser.close();
  } catch (error) {
    console.log("Error using navigateWebPage() " + error.message);
  }
}
