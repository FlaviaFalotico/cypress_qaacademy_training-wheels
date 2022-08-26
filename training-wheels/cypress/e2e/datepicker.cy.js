/// <reference types="cypress" />

describe("Date Picker", () => {
  it("Deve selecionar mês, dia e ano.", () => {
    cy.visit("/datepicker");

    const birthday = {
      monthy: "nov",
      year: "1991",
      day: '1',
      //day: /^1$/g, 
      //regex para escolher exatamente o valor 1 
      //^ inicia com
      //$ termina com
      // modificador g (W3schools)
    };

    

    cy.get(".datetimepicker-dummy-input").click();

    //Mês - da minha maneira
    //cy.get('.datepicker-nav-month').click();
    //cy.get('.datepicker-month[data-month="11"]').click();

    //Mês - Papito
    cy.get(".datepicker-nav-month").click();
    cy.contains(".datepicker-month", birthday.monthy).click();

    //Ano - da minha maneira
    //cy.get('.datepicker-nav-year').click();
    //cy.get('.datepicker-year[data-year="1991"]').click();

    //Ano - Papito
    cy.get(".datepicker-nav-year").click();
    cy.contains(".datepicker-year span", birthday.year).click();

    //Dia
    cy.contains('button[class="date-item"]', new RegExp('^' + birthday.day + '$', 'g')).click;
  });
});
