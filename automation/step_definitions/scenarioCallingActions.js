const { Given, When, Then} = require("cucumber");
const actions = require("../pages/actions.js");


//<--------------Global-------------->
Given("user navigates to online shopping website", function() {
    actions.OpenBrowser();
  });

When("title of Login page is {string}", function(title) {
    actions.WebsiteTitle(title);
  });
Then ("user checkout", function(){
    actions.CheckOut();
 });


//<--------------Technical Excercise #1-------------->
Then("user select smallest size", function () {
    actions.SelectSize();
}); 





//<--------------Technical Excercise #2-------------->
Then("user select the lowest priced t-shirt", function () {
  actions.LowestPrice();
}); 