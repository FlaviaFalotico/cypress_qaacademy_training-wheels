/// <reference types="cypress" />

describe("Drag and Drop", () => {
  before(() => {
    cy.visit("/drag_and_drop");
  });

  it("Deve arrastar o Cypress para Nodejs e Robot Framework para Python", () => {
    //Objeto nativo do javascript que irá auxiliar o Cypress à simular a ação de clicar e arrastar um determinado elemento
    const dataTransfer = new DataTransfer();

    cy.get('img[alt="Cypress"]').trigger("dragstart", { dataTransfer });
    cy.get('.nodejs figure[draggable="true"]').trigger("drop", {
      dataTransfer,
    });

    cy.get('img[alt="Robot Framework"]').trigger("dragstart", { dataTransfer });
    cy.get('.python figure[draggable="true"]').trigger("drop", {
      dataTransfer,
    });
  });
});
