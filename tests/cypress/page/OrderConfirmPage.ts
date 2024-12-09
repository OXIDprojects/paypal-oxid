/// <reference types="cypress" />
export class OrderConfirmPage {
    cy: Cypress.cy;

    constructor(cy: Cypress.Chainable)
    {
        this.cy = cy;
    }

    confirm() {
        this.cy.get('.sticky-md-top > .btn').click();
    }
}
