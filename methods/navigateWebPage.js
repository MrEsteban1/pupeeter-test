import puppeteer from "puppeteer";
import { sleep } from "../helpers/sleep.js";

/**
 * Function to navigate in a page and click an 'a' element that has href value to '/login'
 * @param {string} url 
 */
export async function navigateWebPage(url) {
  try {
    const browser = await puppeteer.launch({
      slowMo: slowMotion,
      headless: false,
    });

    const page = await browser.newPage();
    await page.goto(url);
    await page.click('a[href="/login"]'); //waits for the page to simulate a user clicking

    await sleep(2); //delay execution in 2 seconds
    await browser.close();
  } catch (error) {
    console.log("Error using navigateWebPage() " + error.message);
  }
}
