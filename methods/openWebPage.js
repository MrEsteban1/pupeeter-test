import puppeteer from "puppeteer";

/**
 * Function to navigate in a page and click an 'a' element that has href value to '/login'
 * @param {string} url 
 * @param {string} delay  || delay in milliseconds
 */
export async function openWebPage(url, delay = 400) {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: delay,
    });

    const page = await browser.newPage();
    await page.goto(url);

    await browser.close();
  } catch (error) {
    console.log("Error using openWebPage(): " + error.message);
  }
}