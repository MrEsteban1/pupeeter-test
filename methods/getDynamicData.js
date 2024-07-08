import puppeteer from "puppeteer";

/**
 * Navigates to a page and extract data from html, the instructions are specific for this case.
 * Data can be extract as an array and handle it in the moment.
 * @param {string} url 
 */
export async function getSpecificData(url) {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto(url);

  const data = await page.evaluate(() => {
    const quotes = [...document.querySelectorAll(".quote")]; //It selects all elements with the class "quote" and converts the NodeList to an array

    //It maps over each "quote" element to extract [quotes, aurhor, tag]
    const data = quotes.map((quote) => {
      const quoteText = quote.querySelector(".text").innerText;
      const author = quote.querySelector(".author").innerText;
      const tags = [...quote.querySelectorAll(".tag")].map(
        (tag) => tag.innerText
      );

      return { quoteText, author, tags };
    });
    return data;
  });

  console.log(data);
}
