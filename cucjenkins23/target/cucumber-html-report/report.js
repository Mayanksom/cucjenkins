$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/s.srinadhuni/eclipse-workspace/Selenium_Nextgen/cucjenkins/features/logintest.feature");
formatter.feature({
  "name": "login to demowebshop",
  "description": "  login to demo web shop",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login to demo webshop",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I launch the demo web shop page",
  "keyword": "Given "
});
formatter.step({
  "name": "I provide valid \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "I shall be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "karthik456@gmail.com",
        "karthik456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login to demo webshop",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I launch the demo web shop page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginstepdefs.i_launch_the_demo_web_shop_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide valid \"karthik456@gmail.com\" and \"karthik456\"",
  "keyword": "When "
});
formatter.match({
  "location": "loginstepdefs.i_provide_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginstepdefs.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I shall be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdefs.i_shall_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
});