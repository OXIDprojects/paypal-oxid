/// <reference types="cypress" />
export class StartPage {
    cy: Cypress.cy;

    constructor(cy: Cypress.Chainable)
    {
        this.cy = cy;
    }

    putFirstNewItemInBasket() {
        this.cy.get('.product-img-wrapper a').first().scrollIntoView().click({force: true})
        this.cy.get('#toBasket').click();
        this.cy.get('.btn.btn-minibasket').first().click();
        this.cy.get('.modal-dialog .modal-body a').first().click();
    }
}
