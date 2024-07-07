import { captureScreenshot } from "./methods/captureScreenshot.js";
import { generatePdf } from "./methods/generatePdfFromPage.js";
import { getDataFromPage } from "./methods/getDataFromPage.js";
import { getSpecificData } from "./methods/getDynamicData.js";
import { navigateWebPage } from "./methods/navigateWebPage.js";
import { openWebPage } from "./methods/openWebPage.js";

const urlsExample = [
  "https://www.google.com/",
  "https://quotes.toscrape.com",
  "https://www.example.com",
  "https://www.typescriptlang.org/download/",
];

async function main() {
  // await openWebPage("https://www.google.com/");
  // await captureScreenshot(urlExample);
  // await navigateWebPage(urlExample2);
  // await getDataFromPage(urlsExample[2]);
  //await getSpecificData(urlsExample[1]);
  await generatePdf(urlsExample[3]);
}

main();
