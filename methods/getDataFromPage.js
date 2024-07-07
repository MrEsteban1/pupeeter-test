import puppeteer from "puppeteer";

export async function getDataFromPage(url) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(url);

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
