/// <reference types="Cypress" />

describe("App E2E", () => {
  it("visit app", () => {
    cy.visit("/");

    cy.get("form")

      .get("input")
      // clear the input area
      .clear()
      .should("have.value", "")
      // type in Ghana as value
      .type("Ghana")
      // just playing with minimum input value length
      .should("not.have.length", 0)
      // expect Ghana as value
      .should("have.value", "Ghana");
    // TODO:cy.get("button").should("have.text", "Submit").click();
  });
  /* it("should return data from API", () => {
    cy.request(
      "https://coronavirus-19-api.herokuapp.com/countries/Ghana"
    ).should((response) => {
      expect(response.status).to.eq(200);
    });
  }); */
});
