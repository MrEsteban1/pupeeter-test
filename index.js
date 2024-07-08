import minimist from "minimist";
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
// We use minimist so its posible to choose method and a url
const args = minimist(process.argv.slice(2))

async function main() {
  console.log(`--------\nMetodo: ${args.m} | url: ${args.u} \n--------`)

  switch (args.m) {
    case 'screenshot':
      await captureScreenshot(args.u || urlsExample[0])
      break
    case 'navigate':
      await navigateWebPage(urlsExample[2]);
      break
    case 'openWeb':
      await openWebPage(args.u || urlsExample[0]);
      break
    case 'specific':
      await getSpecificData(urlsExample[1])
      break
    case 'getdata':
      await getDataFromPage(urlsExample[2]);
      break
    case 'pdf':
      await generatePdf(args.u || urlsExample[3]);
      break
    default:
      console.log("No se especifico metodo para realizar. Intentelo nuevamente!")
      break
  }
}

main();
