/// <reference types="cypress" />
export class UserPage {
    cy: Cypress.cy;

    constructor(cy: Cypress.Chainable)
    {
        this.cy = cy;
    }

    clickRegisterButton() {
        this.cy.get('#optionRegistration button').first().click();
    }
}
