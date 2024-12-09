/// <reference types="cypress" />
export class ThankYouPage {
    cy: Cypress.cy;

    constructor(cy: Cypress.Chainable)
    {
        this.cy = cy;
    }

    assertOrderCompleted() {
        this.cy.get('#thankyouPage').should('have.id', 'thankyouPage');
    }
}
