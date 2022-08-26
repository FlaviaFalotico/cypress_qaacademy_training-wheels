/// <reference types="cypress" />

describe("Tabs", () => {
  before(function () {
    cy.visit("/new_tab");
  });

  it("Nova Guia", () => {
    cy.contains('a', "Clique aqui").click();
    
    // validação sugerida pela doc do Cypress  
    cy.get('a[href="https://www.google.com.br"]').should('have.attr', 'target', '_blank');

    //Removendo o atributo target, para que a página do google seja aberta e controlada pela aba do Cypress
    cy.contains('a', 'Clique aqui').invoke('removeAttr', 'target');
    cy.contains('a', 'Clique aqui').click();
    cy .get('input[name="q"]').type('Teste Cypress {enter}');
  });
});
