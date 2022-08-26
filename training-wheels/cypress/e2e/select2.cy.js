/// <reference types="cypress" />

describe("Select (combo-box)", () => {
  before(() => {
    cy.visit("/apps/select2/index.html");
  });

  it("Deve selecionar uma única opção", () => {
    cy.get(".select2-selection--single")
      .click();
    cy.contains(".select2-results__option", "Cypress")
      .click();
  });

  
  it("Deve selecionar mais de uma opção", () => {
    const framewoerks = [
      'Cypress',
      'Playwright',
      'Robot Framework'
    ];
  
   framewoerks.forEach(function (framework) {
      cy.get(".select2-selection--multiple")
        .click();
        cy.contains('.select2-results__option', framework)
          .click();
    });
  });
});
