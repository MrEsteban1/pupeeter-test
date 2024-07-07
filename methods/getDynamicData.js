import puppeteer from "puppeteer";

export async function getSpecificData(url) {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto(url);

  const data = await page.evaluate(() => {
    const quotes = [...document.querySelectorAll(".quote")];
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
  //   await browser.close();
}
