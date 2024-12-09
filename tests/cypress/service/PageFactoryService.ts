import {OrderConfirmPage} from "../page/OrderConfirmPage";
import {PaymentPage} from "../page/PaymentPage";
import {RegisterPage} from "../page/RegisterPage";
import {StartPage} from "../page/StartPage";
import {ThankYouPage} from "../page/ThankYouPage";
import {UserPage} from "../page/UserPage";

export class PageFactoryService {
    static getOrderConfirmPage(cy: Cypress.Chainable): OrderConfirmPage {
        return new OrderConfirmPage(cy);
    }
    static getPaymentPage(cy: Cypress.Chainable): PaymentPage {
        return new PaymentPage(cy);
    }
    static getRegisterPage(cy: Cypress.Chainable): RegisterPage {
        return new RegisterPage(cy);
    }
    static getStartPage(cy: Cypress.Chainable): StartPage {
        return new StartPage(cy);
    }
    static getThankYouPage(cy: Cypress.Chainable): ThankYouPage {
        return new ThankYouPage(cy);
    }
    static getUserPage(cy: Cypress.Chainable): UserPage {
        return new UserPage(cy);
    }
}
