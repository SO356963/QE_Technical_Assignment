var webdriver = require('selenium-webdriver');
By = webdriver.By;

module.exports = function () {

  //Navigates to Opencart url
  this.Given(/^User navigates to "([^"]*)"$/, (text) => {
    return helpers.loadPage('https://www.opencart.com/')
      .then(() => {
        console.log("URL has been launched!" + text);
      })
  })

  //Verifies the home page title
  this.Given(/^the title is verified of the home page$/, function () {
    driver.getTitle().then(function (title) {
      var titletoverify = "OpenCart - Open Source Shopping Cart Solution";
      console.log("Title obtained from the webpage: " + title);
      if (title == titletoverify) {
        console.log("Page title verification successful!");
      }
      else {
        console.log("Page title verification failed!");
      }
    })
  })

  //User tries to login by giving invalid mail id and password
  this.When(/^user clicks on the login link to give incorrect email id and password$/, function () {
    driver.findElement(By.css('.btn-link.navbar-btn')).click();
    driver.sleep(2000);
    driver.findElement(By.id('input-email')).sendKeys("abc123xyz@gmail.com");
    driver.sleep(2000);
    driver.findElement(By.id('input-password')).sendKeys("inValiDpa$$worD");
    driver.sleep(2000);
  })

  //User clicks Login button
  this.When(/^clicks on Login button$/, function () {
    driver.findElement(By.xpath('//form/div[3]/div[1]/button[1]')).click();
    driver.sleep(2000);
  })

  //User verifies error message and browser is closed
  this.Then(/^Verify the error message and close the browser$/, function () {
    var s = "No match for E-Mail and/or Password.\n×";
    driver.findElement(By.css('.alert-danger')).getText().then(function (txt) {
      console.log("Alert failure txt is: " + txt);
      if (txt == s) {
        console.log("Alert verified: true");
      }
      else {
        console.log("Alert verified: false");
      };
    });
  })
};