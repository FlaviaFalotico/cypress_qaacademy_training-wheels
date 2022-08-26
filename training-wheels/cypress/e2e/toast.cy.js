/// <reference types="cypress" />

describe("Toaster", () => {
    before(function () {
      cy.visit("/toaster");
    });
  
    it("Deve exibir uma notificação toast - Rápido", () => {
      cy.get('button[class="button is-danger"]').click();
      // Técnica utilizada para "congelar" a notificação de toaster rápido na tela e inspecionar o elemento.
      //cy.get('body');
      //cy.wait(3000);
      cy.get('.notification')
        .should('be.visible')
        .should('have.text', 'Essa notificação é muito rápida!');
    });
  
    it("Deve exibir uma notificação toast - Lento", () => {
      cy.get('button[class="button is-success"]').click();
      cy.get('.notification')
        .should('be.visible')
        .should('have.text', 'Essa notificação é mais fácil para testar!');
    });
  });

  