describe("failed fetch test", () => {
  it("fetch data", () => {
    cy.visit("/");
    cy.server();
    cy.fixture("covid.json").as("apiResponse");
    cy.route(
      "GET",
      "https://coronavirus-19-api.herokuapp.com/countries/",
      "@apiResponse"
    );

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
    cy.get("button").should("have.text", "Search").click();

    cy.wait("@apiResponse");
  });
});
