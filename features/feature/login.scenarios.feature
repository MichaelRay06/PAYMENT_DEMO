
Feature: Testing the negative login of a dojo site

Scenario Outline: As a user, I attempt to log in into dojo site entry just email without password
Given given I navigate to dojo site
When I enter a valid email address as "<myEmailAddress>"
When I click the password text field
Then I expect to get password error message as "<passwordMessage>"

Examples:
| myEmailAddress            |passwordMessage  |
| tomsmith                  |Password required|


  Scenario Outline: As a user, I attempt to log in into dojo site, entry just password without email and verify that I should  get email error message
    Given given I navigate to dojo site
    And I enter a valid password as "<myPassword>"
    When I click the email text field
    Then I expect to get email error message as "<emailMessage>"

    Examples:
      | myPassword           |emailMessage|
      | SuperSecretPassword! |Email required|