/// <reference types="cypress" />

describe("Alerts, Confirm e Prompt", () => {
  before(function () {
    cy.visit("/javascript_alerts");
  });

  it("Deve exibir uma mensagem de alerta", () => {
    cy.contains("button", "Alerta").click();
    cy.on("window:alert", function (result) {
      //console.log(result)
      expect(result).to.equal("Isto é uma mensagem de alerta");
    });
  });

  it("Deve confirmar a solicitação", () => {
    cy.contains("button", "Confirma").click();
    cy.on("window:confirm", () => true);
    cy.get("#result").should("have.text", "Mensagem confirmada");
  });

  it("Deve cancelar solicitação", () => {
    cy.contains("button", "Confirma").click();
    cy.on("window:confirm", () => false);
    cy.get("#result").should("have.text", "Mensagem não confirmada");
  });

  it("Deve exibir mensagem de boas vindas com o meu nome", () => {
    cypress.window().then(function ($win) {
      cy.stub($win, "prompt").returns("Flávia");
      cy.contains("button", "Prompt").click();
    });
    cy.get("#result").should("have.text", "Olá, Flávia");
  });
});
