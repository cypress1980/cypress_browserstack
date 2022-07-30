/// <reference types="cypress" />
require("cypress-xpath");

import homePage from "../Pages/HomePage/homePage.spec";

Given("I navigate to the Website", () => {
  cy.visit("https://bstackdemo.com/signin");
});
When("Login into the site", () => {
  cy.get("#username").click();
  cy.xpath("//div[text()='demouser']").click();
  cy.get("#password").click();
  cy.xpath("//div[text()='testingisfun99']").click();
  cy.get("#login-btn").click();
});
Then("Verify links in Home Page of the Site", (datatable) => {
  datatable.hashes().forEach((element) => {
    homePage.searchItem(element);
  });
});
Then("Logout From the Site", () => {
  cy.get("#logout").click();
});
