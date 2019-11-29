class Actions {
    OpenBrowser() {
        browser.url("https://react-shopping-cart-67954.firebaseapp.com/");
        browser.maximizeWindow();
    }

    WebsiteTitle(title) {
        const assert = require("assert");
        assert.equal(browser.getTitle(), title);
    }

    SelectSize(){
        const sizeSmall = $('.checkmark=S');
        sizeSmall.click()
        browser.pause(1000)
        $$('div.shelf-item__buy-btn').map(shirts => shirts.click());
    }

    CheckOut(){
        const clickCheckout = $('.buy-btn=Checkout');
        clickCheckout.click();
        browser.pause(1000);
    }

    LowestPrice(){
        $('div > select').selectByVisibleText('Lowest to highest')
        browser.pause(1000)
        $('div.shelf-container > div:nth-child(2)').click()
        browser.pause(1000)
        $('div > select').selectByVisibleText('Highest to lowest')
        browser.pause(1000)
        $('div.shelf-container > div:nth-child(17)').click()
    }

}



module.exports = new Actions();