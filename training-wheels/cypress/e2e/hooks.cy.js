/// <reference types="cypress" />

describe('Testes', () => {

    before(function(){
        cy.log('Aqui temos algo que roda ANTES de TODOS os testes.')
    });

    beforeEach(function(){
        cy.log('Aqui temos algo que roda ANTES de CADA caso de teste.')
    });

    it('Teste 1', () => {
        cy.log('testando o teste 1')
    });

    it('Teste 2', () => {
        cy.log('testando o teste 2')
    });

    it('Teste 3', () => {
        cy.log('testando o teste 3')
    });

    after(function(){
        cy.log('Aqui temos algo que roda DEPOIS de TODOS os testes.')
    });

    afterEach(function(){
        cy.log('Aqui temos algo que roda DEPOIS de CADA caso de teste.')
    });
});