/// <reference types="cypress" />
import { UniqueEmailService } from '../service/UniqueEmailService';
export class RegisterPage {
    cy: Cypress.cy;

    constructor(cy: Cypress.Chainable)
    {
        this.cy = cy;
    }

    register() {
        this.cy.get('#userLoginName').type(UniqueEmailService.generateUniqueEmail(Cypress.env("TESTS_SHOP_USER_NAME")));
        this.cy.get('#userPassword').type(Cypress.env('TESTS_SHOP_USER_PASSWORD'));
        this.cy.get('#userPasswordConfirm').type(Cypress.env('TESTS_SHOP_USER_PASSWORD'));
        this.cy.get('#invadr_oxuser__oxfname').select('MRS');
        this.cy.get('[name="invadr[oxuser__oxfname]"]').type(Cypress.env('TESTS_SHOP_USER_FIRST_NAME'));
        this.cy.get('[name="invadr[oxuser__oxlname]"]').type(Cypress.env('TESTS_SHOP_USER_LAST_NAME'));
        this.cy.get('[name="invadr[oxuser__oxstreet]"]').type(Cypress.env('TESTS_SHOP_USER_STREET'));
        this.cy.get('[name="invadr[oxuser__oxstreetnr]"]').type(Cypress.env('TESTS_SHOP_USER_STREET_NUMBER'));
        this.cy.get('[name="invadr[oxuser__oxzip]"]').type(Cypress.env('TESTS_SHOP_USER_ZIP'));
        this.cy.get('[name="invadr[oxuser__oxcity]"]').type(Cypress.env('TESTS_SHOP_USER_LOCATION'));
        this.cy.get('#invCountrySelect').first().select(1);

        this.cy.get('#userFormSubmit').first().click();
    }
}
