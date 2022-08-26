/// <reference types="cypress" />

describe("Upload", () => {
  it("Deve fazer o upload da imagem", () => {
    cy.visit("/upload");

    const imageFile = "cypress/fixtures/Flah.jpeg";
    cy.get('input[name="file"]').selectFile(imageFile, { force: true });
    cy.get('input[value="Upload"]').click();
    cy.contains('p', 'Flah.jpeg').should('be.visible');
  });
});
