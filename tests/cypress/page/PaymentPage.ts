/// <reference types="cypress" />
export class PaymentPage {
    cy: Cypress.cy;

    constructor(cy: Cypress.Chainable)
    {
        this.cy = cy;
    }

    payByInvoiceAndGoNext() {
        this.cy.get('#payment_oxidinvoice').check();
        this.cy.get('.sticky-md-top > .btn').click();
    }
}
