#Build a NodeJS-Cucumber framework for UI
#⦁	Launch opencart url
#⦁	Verify title
#⦁	Click on Login link and Enter invalid values in username and password
#⦁	Click on Login button
#⦁	Verify the error message
#⦁	Close the browser
#⦁	Create a HTML report.

Feature: Launch opencart url and test for a negative login scenario
      
    Scenario: User should not be able to login the url on giving incorrect credentials 
        Given User navigates to "https://www.opencart.com/" 
        And the title is verified of the home page
        When user clicks on the login link to give incorrect email id and password
       And clicks on Login button
        Then Verify the error message and close the browser 
     