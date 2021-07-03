
const webdriver = require('selenium-webdriver');
// const firefox = require('selenium-webdriver/firefox');
(async () => {
        let driver = new webdriver.Builder()
                .forBrowser('chrome')
                .setFirefoxOptions()
                .build();
                //getting url
        await driver.get('http://the-internet.herokuapp.com/shadowdom');
        //to get both element
        (await driver.findElements(webdriver.By.css('[slot="my-text"]'))).forEach(async singleItem => {

                let tagName = await singleItem.getTagName();
                if (tagName == 'span') {
                        let text = await singleItem.getText();
                        console.log(text);
                } else if (tagName == 'ul') {
                        (await singleItem.findElements(webdriver.By.tagName('li'))).forEach(async singleListItem => {
                                let text = await singleListItem.getText();
                                console.log(text);
                        });
                }
        });
})();






