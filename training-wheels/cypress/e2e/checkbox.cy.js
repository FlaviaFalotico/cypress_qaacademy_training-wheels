/// <reference types="cypress" />

describe('home page', () => {
    it('deve exibir a home page', () => {
        cy.visit('/checkboxes');
        
        const movies = [
            'thor',
            'tho2',
            'guardians',
            'guardians2',
            'strange',
            'thor3',
        ];
        movies.forEach(function (m) {
            cy.get(`input[name=${m}]`)
                .click()
                .should('be.checked');
        })
    })
});