import puppeteer from "puppeteer";

export async function generatePdf(url) {
  const browser = await puppeteer.launch({
    headless: "false",
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 750,
    height: 500,
    deviceScaleFactor: 1,
    isMobile: true,
    hasTouch: false,
    isLandscape: false,
  });

  await page.goto(url, { waitUntil: "networkidle0" });
  await page.emulateMediaType("screen");

  await page.pdf({
    format: "A4",
    printBackground: true,
    path: `./pdfs/${url.slice(6).replaceAll(".", "").replaceAll("/", "")}.pdf`, //Works if url starts with https://
  });
}
