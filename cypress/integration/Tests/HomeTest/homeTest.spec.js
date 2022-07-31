/// <reference types="cypress" />
import homePage from "../Pages/HomePage/homePage.spec";

Given("I navigate to the Website", () => {
  cy.visit("https://bstackdemo.com/");
});
Then("Verify links in Home Page of the Site", (datatable) => {
  datatable.hashes().forEach((element) => {
    homePage.searchItem(element);
  });
});
