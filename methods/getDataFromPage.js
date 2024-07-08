import puppeteer from "puppeteer";

/**
 * Navigates to a page and extract data from html, the instructions are specific for this case.
 * @param {string} url  
 */
export async function getDataFromPage(url) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(url);

  //The code runs a script on the page to get the text inside the first <h1> and the first <p> tags. It stores this text in a data object.
  const data = await page.evaluate(() => {
    let title = document.querySelector("h1").innerText;
    let description = document.querySelector("p").innerText;

    return {
      title,
      description,
    };
  });

  console.log(data);
  await browser.close();
}
