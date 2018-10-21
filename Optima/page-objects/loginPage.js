var webdriver = require('selenium-webdriver');
By = webdriver.By;

class loginPage{

    enterLoginName(login_name) {
        //Clears the username
        driver.findElement(By.id('username')).clear(); 
        driver.sleep(1000);

        //Inputs the username
        driver.findElement(By.id('username')).sendKeys(login_name);
        driver.sleep(1000);
    } 

    enterPassword(password) {
        //Clears the password
        driver.findElement(By.id('pwd')).clear();
        driver.sleep(1000);
    
        //Inputs the password
        driver.findElement(By.id('pwd')).sendKeys(password);
        driver.sleep(1000);
    } 

    clickSignInButton() {
        //Clicks sign in button
        driver.findElement(By.css(".button_background")).click();
        driver.sleep(2000);
    } 
}

module.exports = new loginPage();
