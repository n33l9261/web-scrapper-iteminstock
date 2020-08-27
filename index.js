const puppeteer = require('puppeteer');
URL = `https://www.flipkart.com/realme-x2-pearl-green-64-gb/p/itm75023903eb431`;

(async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(URL, { waitUntil: 'networkidle0' });

 
  let data = await page.evaluate(() => {
      try{
    let status = document.querySelector('div[class="_9-sL7L"]').innerText;

    return {
      status
    }
    }
    catch{
        let status = "In stock";
        return {
            status
          }
    }
  });


  
    console.log(data.status);
  
  await browser.close();
})();