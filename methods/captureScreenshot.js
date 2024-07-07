import puppeteer from "puppeteer";

export async function captureScreenshot(url, slowMo = 200) {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 200,
    });

    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ path: "./screenshot/example.png" });

    await browser.close();
  } catch (error) {
    console.log("Error using capureScreenshot() " + error.message);
  }
}
