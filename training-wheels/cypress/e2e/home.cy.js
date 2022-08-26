/// <reference types="cypress" />

describe('Checkboxes', () => {
  it('deve marcar os top 6 filmes da Marvel', () => {
    cy.visit('/');
    cy.title()
      .should('eq', 'Training Wheels | QAninja');
    cy.get('.row img[alt="QAninja"]')
      .should('be.visible');
    cy.get('ul[class="menu-list"]')
      .should('be.visible');
  })
});