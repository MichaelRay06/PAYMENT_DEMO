Feature: Testing the negative login functionalities of a dojo site


  Scenario: As a user, attempt logging in while the email and password text are empty
    Given given I navigate to dojo site
    Then I expect the log in button not to be clickable


  Scenario Outline: As a user, when I  attempt logging in with an incomplete email address I should get an error message
    Given given I navigate to dojo site
    When I enter a valid email address as "<myEmailAddress>"
    And I enter a valid password as "<myPassword>"
    Then I expect to get invalid email error message incomplete email as "<incompleteEmailMessage>"

    Examples:
      |myEmailAddress               | myPassword           |incompleteEmailMessage|
      |michaelo.ray@yahoo.c         | SuperSecretPassword! |Invalid email address|
      |michaelo.ray@yahoo.co.uk3    | SuperSecretPassword! |Invalid email address|
      |michaelo.rayyahoo.co.uk      | SuperSecretPassword! |Invalid email address|
      |@gmail.com                   | SuperSecretPassword! |Invalid email address|
      |michaelo  ray@yahoo.co.uk    | SuperSecretPassword! |Invalid email address|





  Scenario Outline: As a user, I could verify that the email text field dose not accept combination of special characters
    Given given I navigate to dojo site
    When I enter a valid email address as "<myEmailAddress>"
    When I click the email text field
    Then I expect to get invalid email error message combination of special character as "<invalidSpecialChatEmailMessage>"

    Examples:
      |myEmailAddress                     |invalidSpecialChatEmailMessage |
      | jhfrk$^$@gmail.com                |Invalid email address|
      |jhfrk~@gmail.com                   |Invalid email address|
      |michaelo  ray@yahoo.co.uk          |Invalid email address|







  Scenario Outline: As a user,I could verify that the email text field is case sensitive
    Given given I navigate to dojo site
    When I enter a valid email address as "<myEmailAddress>"
    When I click the email text field
    Then I should get an email case sentitive error message "<caseSensitiveMessage>"


    Examples:
      | myEmailAddress                                    |caseSensitiveMessage |
      |michaelo.ray@gmail.COM                             |Invalid email address |
      |michaelo.ray@yahoo.CO.UK                           |Invalid email address|








































