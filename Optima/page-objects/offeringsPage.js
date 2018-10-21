var webdriver = require('selenium-webdriver');
By = webdriver.By;

class offeringsPage{

    switchNowButtonClick(){
        //switch now button on offerings page
        var switchNow=driver.findElement(By.css(".switch-button"));
        driver.executeScript("arguments[0].scrollIntoView()", switchNow); // Keeps the element in screenview
    
        driver.sleep(300);
    
        switchNow.click();
        driver.sleep(2000);
    }

    verifyAlertText(){
        //Alert text after clicking on switch now button
        var switchAlert =driver.findElement(By.css('.Toastify__toast-body'));

        driver.sleep(2000);

        switchAlert.getText().then(function (text) {
          console.log("Alert text is:-- "+text);
          //Expected alert text
          var alertTextToVerify = "Your transaction is being processed. You will receive confirmation message within 24 hrs. !";
          if (text == alertTextToVerify) {
             console.log("Verification of alert text has succeeded!");
            }
          else {
             console.log("Verification of alert text has failed!");
           }
        }) 

        driver.sleep(2000);
    }

    logout(){

        //Logout button on offerings page
        var logOut=driver.findElement(By.css(".logout"));
        driver.executeScript("arguments[0].scrollIntoView()", logOut); //Keeps the element in screeview
    
        driver.sleep(300);
    
        logOut.click();
        driver.sleep(2000);
    }
}

module.exports = new offeringsPage();