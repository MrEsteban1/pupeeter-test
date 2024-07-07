import puppeteer from "puppeteer";

export async function openWebPage(url, slowMotion = 400) {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: slowMotion,
    });

    const page = await browser.newPage();
    await page.goto(url);

    await browser.close();
  } catch (error) {
    console.log("Error using openWebPage(): " + error.message);
  }
}

// export default openWebPage;
