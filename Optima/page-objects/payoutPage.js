var webdriver = require('selenium-webdriver');
By = webdriver.By;

class payoutPage{

  agreePayButtonClick(){
    //Agree and pay button
    var agreePay=driver.findElement(By.css(".optimize-btt"));
    driver.executeScript("arguments[0].scrollIntoView()", agreePay); //Keeps the element in screenview

    driver.sleep(300);

    agreePay.click(); 
    driver.sleep(2000);
  }
}

module.exports = new payoutPage();