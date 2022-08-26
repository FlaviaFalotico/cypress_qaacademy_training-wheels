/// <reference types="cypress" />

describe("sweetalert2", () => {
    before(function () {
      cy.visit("/sweet_alert");
    });
  
    it("Deve exibir a mensagem de sucesso no popup - Sucesso", () => {
      cy.contains("button", "Sucesso").click();
      cy.get(".swal-text").should("have.text", "Você clicou no botão verde.");
      cy.contains("button", "OK").click();
    });
  
    it("Deve exibir a mensagem de sucesso no popup - Deu Ruim", () => {
      cy.contains("button", "Deu Ruim").click();
      cy.get(".swal-text").should("have.text", "Você clicou no botão vermelho.");
      cy.contains("button", "OK").click();
    });
  });