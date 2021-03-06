var webdriver = require('selenium-webdriver');
By = webdriver.By;

class homePageJohn{

  debitAccountJohn(){

    //Total debit balance for John
   var debitBal =driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/span[2]'));
   
    driver.sleep(2000);
    
    //Verification of the total debit balance for John
    debitBal.getText().then(function (text) {
      console.log("Total avaialable debit balance for John is: "+text);
      var debitBalanceToVerify = "£ 4,800"; //Expected total debit balance for John
      if (text == debitBalanceToVerify) {
        console.log("Verification of total available debit balance for John has succeeded!");
      }
      else {
        console.log("Verification of total available debit balance for John has failed!");
      }
    })
     
    driver.sleep(2000);
     
    //First debit account for John
    driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div[2]/div[2]/div/h5/b')).then(function(elem){
    driver.actions().mouseMove(elem).perform();
     
    driver.sleep(2000);
    
    //Available balance of first debit account for John
    var debit1 =driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[3]/div/div/div[2]'));
        
    driver.sleep(2000);
     
    debit1.getText().then(function (text) {
      console.log("Halifax debit account available balance for John is: "+text);
    }) 
     
    driver.sleep(2000);
     
    })

    //Second debit account for John
    driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div[3]/div[2]/div/h5/b')).then(function(elem){
    driver.actions().mouseMove(elem).perform();
     
    driver.sleep(2000);
    
     //Available balance of second debit account for John
    var debit2 =driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[3]/div/div/div[2]'));
        
    driver.sleep(2000);
     
    debit2.getText().then(function (text) {
      console.log("HSBC debit account available balance for John is: "+text);
    }) 
     
    driver.sleep(2000);
     
    })

    //Third debit account for John
    driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div[4]/div[2]/div/h5/b')).then(function(elem){
    driver.actions().mouseMove(elem).perform();
     
    driver.sleep(2000);
     
    //Available balance of third debit account for John
    var debit3 =driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[3]/div/div/div[2]'));
        
    driver.sleep(2000);
     
    debit3.getText().then(function (text) {
      console.log("Barclays debit account available balance for John is: "+text);
    }) 
     
    driver.sleep(2000);
     
    })
  }

  creditAccountJohn(){

    //Total credit outstanding for John
    var creditBal =driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/span[4]'));
   
    driver.sleep(2000);

    //Verification of the total credit outstanding for John
    creditBal.getText().then(function (text) {
      console.log("Total credit outstanding for John is: "+text);
      var creditBalanceToVerify = "£ 4,600"; //Expected total credit outstanding for John
      if (text == creditBalanceToVerify) {
        console.log("Verification of total credit outstanding for John has succeeded!");
      }
      else {
        console.log("Verification of total credit outstanding for John has failed!");
      }
    })

    driver.sleep(2000);

    //First credit outstanding for John
    var credit1 = driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div/h5/b'));
   
    driver.sleep(2000);

    credit1.getText().then(function (text) {
      console.log("Natwest credit outstanding to be paid by John is: "+text);
    })

    driver.sleep(2000);
 
    //Second credit outstanding for John
    var credit2 = driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/div[2]/div[3]/div[2]/div/h5/b'));
   
    driver.sleep(2000);

    credit2.getText().then(function (text) {
     console.log("RBS credit outstanding to be paid by John is: "+text);
    })

    driver.sleep(2000);

    //Third credit outstanding for John
    var credit3 = driver.findElement(By.xpath('html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/div[2]/div[4]/div[2]/div/h5/b'));
   
    driver.sleep(2000);

    credit3.getText().then(function (text) {
     console.log("Barclays credit outstanding to be paid by John is:"+text);
    })

    driver.sleep(2000);
  }
}

module.exports = new homePageJohn();