/// <reference types="Cypress" />

describe("App E2E", () => {
  it("visit app", () => {
    cy.visit("/");

    // cy.get("h1").should("have.text", "My Counter");
  });
});
