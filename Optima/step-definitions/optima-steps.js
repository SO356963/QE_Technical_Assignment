var loginPage = require('../page-objects/loginPage');
var homePageAlice = require('../page-objects/homePageAlice');
var homePageJohn = require('../page-objects/homePageJohn');
var payoutPage = require('../page-objects/payoutPage');
var offeringsPage = require('../page-objects/offeringsPage');

module.exports = function () {
  
  //Navigates to OB_POC url
  this.Given(/^user navigates to "([^"]*)"$/, function(url){
    driver.get(url);
  })
 
  //User enters the login name
  this.When(/^user enters the login name "([^"]*)"$/, function (login_name) {
    loginPage.enterLoginName(login_name);
  })

  //User enters the password
  this.When(/^enters the password "([^"]*)"$/, function (password) {
   loginPage.enterPassword(password);
  })

  //User clicks on Sign In button
  this.Then(/^click on Sign In button$/, function () {
    loginPage.clickSignInButton();
  })

  //Debit account verification for Alice
  this.Then(/^verify the total debit account balance for alice$/, function () {
    homePageAlice.debitAccountAlice();
 })

 //Credit account verification for Alice
 this.Then(/^verify the total credit account balance for alice$/, function () {
   homePageAlice.creditAccountAlice();
 })

 //Debit account verification for John
 this.Then(/^verify the total debit account balance for john$/, function () {
    homePageJohn.debitAccountJohn();
  })

 //Credit account verification for John
 this.Then(/^verify the total credit account balance for john$/, function () {
   homePageJohn.creditAccountJohn();
 })

  //User clicks on Yes button to optimise savings
  this.Then(/^user clicks on yes button to optimise his\/her savings$/, function () {
    homePageAlice.yesButtonClick();
  })

  //User clicks on Agree and Pay button
  this.Then(/^user clicks on Agree and Pay button on payout page$/, function () {
    payoutPage.agreePayButtonClick();
  })

  //User clicks on Switch Now button on offerings page
  this.Then(/^user clicks on Switch Now button on the offerings page$/, function () {
    offeringsPage.switchNowButtonClick();
  })

  //Verify the alert text after clicking on switch now button
  this.Then(/^verify the alert text$/, function () {
   offeringsPage.verifyAlertText();
  })

  //User clicks on logs out from application
  this.Then(/^user logs out from the application$/, function () {
    offeringsPage.logout();
  })
};