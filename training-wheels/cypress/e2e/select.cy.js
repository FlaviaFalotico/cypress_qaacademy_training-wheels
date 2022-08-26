/// <reference types="cypress" />

describe("Select (combo-box)", () => {
  before(() => {
    cy.visit("/select");
  });

  //Com a propriedade Id
  it("Selecionar Natasha Romanoff", () => {
    cy.get('#avengerList')
        .select('Natasha Romanoff')
        .should('have.value', "4"); //validação pelo Enum desse Vingador
  });

  //Sem a propriedade Id
  it("Selecionar Tony Stark", () => {
    cy.contains('option', "Selecione um personagem")
        .parent()    
        .select('Tony Stark')
        .should('have.value', "3"); //validação pelo Enum desse Vingador
  })
});
