Feature: login to demowebshop
  login to demo web shop

  Scenario Outline: login to demo webshop
    Given I launch the demo web shop page
    When I provide valid "<email>" and "<password>"
    And click on login button
    Then I shall be able to login successfully

    Examples: 
      | email                | password   |
      | karthik456@gmail.com | karthik456 |
