/// <reference types="cypress" />

describe("Tables", () => {
  before(function () {
    cy.visit("/tables");
  });

  it("Deve exibir 7 séries no total", () => {
    cy.get("table tbody tr").then(function (series) {
      expect(series).to.have.length(7);
    });
  });

  it("Deve exibir a minha série favorita - The Witcher", () => {
    cy.contains("tr", "The Witcher").then(function (item) {
      expect(item).to.contain("Netflix"); //Produtora
      expect(item).to.contain("Netflix"); //Streaming
      expect(item).to.contain("2019"); //Ano de Lançamento
    });
  });

  it("Deve excluir a série Round 6", () => {
    cy.contains("tr", "Round 6")
      .then(function (item) {
        item.find(".delete").trigger("click");
      })
      .should("not.exist");

    cy.get("table tbody tr").then(function (series) {
      expect(series).to.have.length(6);
    });
  });
});
