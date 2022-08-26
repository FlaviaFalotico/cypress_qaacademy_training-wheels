/// <reference types="cypress" />

describe("Timeout", () => {
  it("Exemplo de timeout", () => {
    cy.visit("/timeout");

    cy.contains("button", "Habilita").click();

    cy.get('#firstname')
      .should('be.visible')
      .type('Flávia', { timeout: 7000 });

      cy.contains("button", "Desabilita").click();
  });
});
