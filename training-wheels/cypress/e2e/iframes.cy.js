/// <reference types="cypress" />

describe("Nice iFrame", () => {
  const niceIFrame = () => {
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
  }
  
  it("Deve validar o número de seguidores", () => {
    cy.visit("/nice_iframe");

    niceIFrame()
        .find('.UsernameText')
        .should('have.text','qacademy_oficial')
  });
});
