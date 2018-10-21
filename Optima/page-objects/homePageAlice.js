var webdriver = require('selenium-webdriver');
By = webdriver.By;

class homePageAlice{

  debitAccountAlice() {
    //Total debit balance for Alice
    var debitBal =driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/span[2]'));
     
    driver.sleep(2000);
      
    //Verification of the total debit balance for Alice
      debitBal.getText().then(function (text) {
        console.log("Total available debit balance for Alice is: "+text);

        var debitBalanceToVerify = "£ 8,600"; //Expected total debit balance for Alice
          if (text == debitBalanceToVerify) {
            console.log("Verification of total available debit balance for Alice has succeeded!");
        }
          else {
            console.log("Verification of total availbale debit balance for Alice has failed!");
        }
      })
   
    driver.sleep(2000);
   
    //First debit account for Alice
    driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div[2]/div[2]/div/h5/b')).then(function(elem){
    driver.actions().mouseMove(elem).perform();
   
    driver.sleep(2000);
   
    //Available balance of first debit account for Alice
    var debit1 =driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[3]/div/div/div[2]'));
        
    driver.sleep(2000);
   
    debit1.getText().then(function (text) {
      console.log("Halifax debit account available balance for Alice is: "+text);
    }) 
   
    driver.sleep(2000);
   
    })

    //Second debit account for Alice
    driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div[3]/div[2]/div/h5/b')).then(function(elem){
    driver.actions().mouseMove(elem).perform();
   
    driver.sleep(2000);
   
    //Available balance of second debit account for Alice
    var debit2 =driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[3]/div/div/div[2]'));
   
    driver.sleep(2000);
   
    debit2.getText().then(function (text) {
      console.log("HSBC debit account available balance for Alice is: "+text);
    }) 
   
    driver.sleep(2000);
   
    })

    //Third debit account for Alice
    driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div[4]/div[2]/div/h5/b')).then(function(elem){
    driver.actions().mouseMove(elem).perform();
   
    driver.sleep(2000);
   
    //Available balance of third debit account for Alice
    var debit3 =driver.findElement(By.xpath('/html/body/div[2]/div/div[2]/div/div[3]/div/div/div[2]'));
   
    driver.sleep(2000);
   
    debit3.getText().then(function (text) {
      console.log("Barclays debit account available balance for Alice is: "+text);
    }) 
   
    driver.sleep(2000);
   
    })
  } 

  creditAccountAlice(){
    
    //Total credit outstanding for Alice
    var creditBal =driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[1]/div[2]/div[2]/span[4]'));
   
    driver.sleep(2000);

    //Verification of the total credit outstanding for Alice
    creditBal.getText().then(function (text) {
     console.log("Total Credit Outstanding is: "+text);
     var creditBalanceToVerify = "£ 3,800";  //Expected total credit outstanding for Alice
     if (text == creditBalanceToVerify) {
        console.log("Verification of total credit outstanding for Alice has succeeded!");
      }
     else {
       console.log("Verification of total credit outstanding for Alice has failed!");
      }
    })

    driver.sleep(2000);

    //First credit outstanding for Alice
    var credit1 = driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/div[2]/div[2]/div[2]/div/h5/b'));
   
    driver.sleep(2000);

    credit1.getText().then(function (text) {
     console.log("Natwest credit outstanding to be paid by Alice is: "+text);
    })

    driver.sleep(2000);

    //Second credit outstanding for Alice
    var credit2 = driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/div[2]/div[3]/div[2]/div/h5/b'));
   
    driver.sleep(2000);

    credit2.getText().then(function (text) {
     console.log("RBS credit outstanding to be paid by Alice is: "+text);
    })

    driver.sleep(2000);

    //Third credit outstanding for Alice
    var credit3 = driver.findElement(By.xpath('html/body/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/div[2]/div[4]/div[2]/div/h5/b'));
   
    driver.sleep(2000);

    credit3.getText().then(function (text) {
     console.log("Barclays credit outstanding to be paid by Alice is: "+text);
    })

    driver.sleep(2000);
  }

  yesButtonClick(){
     //Yes button on home page 
      driver.findElement(By.css('.Rectangle-4')).click(); 
      driver.sleep(2000);
  }

}

module.exports = new homePageAlice();