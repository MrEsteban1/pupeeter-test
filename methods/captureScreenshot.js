import puppeteer from "puppeteer";

/**
 * Function to navigate in a page and make a screenshot to save it on a folder
 * @param {string} url 
 * @param {string} delay  || delay in milliseconds
 */
export async function captureScreenshot(url, delay = 200) {
  try {
    const browser = await puppeteer.launch({
      headless: false, //option means that the browser will be visible
      slowMo: delay,  //option adds a delay of 200 milliseconds between each operation
    });

    const page = await browser.newPage(); //This line opens a new page (tab) in the browser.
    await page.goto(url);  //This line navigates the page to the specified url.
    await page.screenshot({ path: "./screenshot/example.png" }); //This line captures a screenshot of the page and saves it to ./screenshot/example.png.

    await browser.close(); //This line closes the browser
  } catch (error) {
    console.log("Error using capureScreenshot() " + error.message);
  }
}
