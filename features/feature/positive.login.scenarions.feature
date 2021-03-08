Feature: Testing the positive login functionalities of a dojo site 


  Background:
    Given given I navigate to dojo site


  Scenario Outline: As a user, with unregistered account, I should not be able to log in successfully to dojo site with valid details.
    When I enter a valid email address as "<myEmailAddress>"
    And I enter a valid password as "<myPassword>"
    And click the login button
    Then I should get unsuccessfully log in message"<unsuccessfulMessage>"


    Examples:
      | myEmailAddress                | myPassword                            |unsuccessfulMessage |
      |tomsmith@gmail.com             |SuperSecretPassword!                   |Email and password combination not recognised |
      |foobar@gmail.com               |barfoo                                 |Email and password combination not recognised |




  Scenario Outline: I could verify that the email text box could accept all standard email types with the log in button remained enable
    When I enter a valid email address as "<myEmailAddress>"
    And I enter a valid password as "<myPassword>"
    Then I could verify that the login button is enabled for standard email types

    Examples:
      | myEmailAddress                | myPassword           |
      | tomsmith@gmail.com            | SuperSecretPassword! |
      | foobar@gmail.co.uk            | barfoo               |
      | tomsmith@yahoo.com            | SuperSecretPassword! |
      | tomsmith@aol.com.uk           | SuperSecretPassword! |
      | tomsmith@aol.com.uk           | SuperSecretPassword! |
      | tomsmith@hotmail.com          | SuperSecretPassword! |






  Scenario Outline: As a user, I could verify that the login button is enable while attempting logging in with  alphanumeric value in email and password text field
    When I enter a valid email address as "<myEmailAddress>"
    And I enter a valid password as "<myPassword>"
    Then I could verify that the login button is enabled alphanumeric log in

    Examples:
      | myEmailAddress                              | myPassword                 |
      |343tomsmith2434@gmail.com                   | SuperSecr543455etPassword! |
      |foo435556343bar@hotmail.com                 | 3545barfoo2455             |





  Scenario Outline: As a user, I could verify that the password text field accept one as a minimum character.
    When I enter a valid email address as "<myEmailAddress>"
    And I enter a valid password as "<myPassword>"
    Then I could verify that the login button still enabled for password minimum character

    Examples:
      |myEmailAddress               | myPassword           |
      |tomsmith@gmail.com           | .                    |
      |tomsmith@gmail.com           | !                    |
      |tomsmith@gmail.com           | c                    |
      |tomsmith@gmail.com           | 6                    |
      |tomsmith@gmail.com           | &                    |




  Scenario Outline: As a user, I could verify that the password text field accept combination of special characters
    When I enter a valid email address as "<myEmailAddress>"
    And I enter a valid password as "<myPassword>"
    Then I could verify that the login button still enabled when aceept special character

    Examples:
      |myEmailAddress                          | myPassword                  |

      |tomsmith@gmail.com                      | &£$^&*&%&SecretPsome        |
      |tomsmith@gmail.com                      | Super"£^^*&%^"£9asswo       |
      |foo435556343bar@gmail.com               | SuperSecre&*($%%*^&         |
      |foo435556343bar@gmail.com               | 345$£%^&&Super^$^&&Secre575 |

