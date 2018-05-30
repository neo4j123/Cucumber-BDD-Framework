$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("End2End_Test.feature");
formatter.feature({
  "line": 1,
  "name": "Automated End2End Tests",
  "description": "Description: The purpose of this feature is to test End 2 End Integration",
  "id": "automated-end2end-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "",
  "id": "automated-end2end-tests;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he search for \"dress\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "choose to buy the first item",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "moves to checkout from mini cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter \"\u003ccustomer\u003e\" personal details on checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select same delivery address",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select payment method as \"check\" payment",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "place the order",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the order details",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "automated-end2end-tests;;",
  "rows": [
    {
      "cells": [
        "customer"
      ],
      "line": 15,
      "id": "automated-end2end-tests;;;1"
    },
    {
      "cells": [
        "Lakshay"
      ],
      "line": 16,
      "id": "automated-end2end-tests;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "automated-end2end-tests;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he search for \"dress\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "choose to buy the first item",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "moves to checkout from mini cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter \"Lakshay\" personal details on checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select same delivery address",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select payment method as \"check\" payment",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "place the order",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the order details",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 13896696228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dress",
      "offset": 15
    }
  ],
  "location": "HomePageSteps.he_search_for(String)"
});
formatter.result({
  "duration": 9092782337,
  "status": "passed"
});
formatter.match({
  "location": "ProductPageSteps.choose_to_buy_the_first_item()"
});
formatter.result({
  "duration": 6347586699,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.moves_to_checkout_from_mini_cart()"
});
formatter.result({
  "duration": 29950304680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lakshay",
      "offset": 7
    }
  ],
  "location": "CheckoutPageSteps.enter_personal_details_on_checkout_page(String)"
});
formatter.result({
  "duration": 36641205339,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutPageSteps.select_same_delivery_address()"
});
formatter.result({
  "duration": 10980258341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 26
    }
  ],
  "location": "CheckoutPageSteps.select_payment_method_as_payment(String)"
});
formatter.result({
  "duration": 3155218332,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutPageSteps.place_the_order()"
});
formatter.result({
  "duration": 219308303,
  "status": "passed"
});
formatter.match({
  "location": "ConfirmationPageSteps.verify_the_order_details()"
});
formatter.result({
  "duration": 20015846014,
  "error_message": "java.util.NoSuchElementException: No value present\r\n\tat java.util.Optional.get(Optional.java:135)\r\n\tat stepDefinition.ConfirmationPageSteps.verify_the_order_details(ConfirmationPageSteps.java:23)\r\n\tat ✽.Then verify the order details(End2End_Test.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 288648727,
  "status": "passed"
});
formatter.after({
  "duration": 685178456,
  "status": "passed"
});
});