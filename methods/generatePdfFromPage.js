import puppeteer from "puppeteer";
/**
 * Navigates to a page and convert the content of the page to pdf and save it on a folder.
 * @param {string} url 
 */
export async function generatePdf(url) {
  try {
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

    await browser.close()

    console.log("PDF generated!")
  } catch (error) {
    console.log("Error using generatePdfFromPage(): " + error.message)
  }

}
