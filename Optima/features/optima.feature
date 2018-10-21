Feature: Use Optima app to suggest best payout plan to a user by using lower AER debit account to pay off higher APR credit outstandings
     
    Scenario Outline: 1 :Offering a new Lloyds saving account of higher AER to a user whose total credit outstandings are lesser than his total debit accounts balance
        Given user navigates to "<url>"
        When user enters the login name "<login_name>"
        And enters the password "<password>"
        Then click on Sign In button 
        And verify the total debit account balance for alice
        And verify the total credit account balance for alice
        Then user clicks on yes button to optimise his/her savings
        Then user clicks on Agree and Pay button on payout page
        Then user clicks on Switch Now button on the offerings page
        And verify the alert text
        And user logs out from the application

    Examples:
    |url                      |login_name    |password    |
    |http://localhost:3004/#/ |alice         |wonderland  |

    Scenario Outline: 2 :Offering a new Lloyds credit card of lower APR to a user whose total credit outstandings are more than his total debit accounts balance
        Given user navigates to "<url>"
        When user enters the login name "<login_name>"
        And enters the password "<password>"
        Then click on Sign In button 
        And verify the total debit account balance for john
        And verify the total credit account balance for john
        Then user clicks on yes button to optimise his/her savings
        Then user clicks on Agree and Pay button on payout page
        Then user clicks on Switch Now button on the offerings page
        And verify the alert text
        And user logs out from the application

    Examples:
    |url                      |login_name   |password  |
    |http://localhost:3004/#/ |john         |doe       |

