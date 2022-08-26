/// <reference types="cypress" />

describe('Radio Buttons', () => {
    it('deve marcar Doutor Estranho', () => {
        cy.visit('/radios');

        cy.get('input[value="strange"]')
            .click()
            .should('be.checked')
    })
});