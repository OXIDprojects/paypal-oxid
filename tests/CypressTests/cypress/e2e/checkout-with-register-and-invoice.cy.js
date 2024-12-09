import { PageFactoryService } from "../service/PageFactoryService";
import { ShopDomainService } from "../service/ShopDomainService";

describe('template spec', () => {
  it('passes', () => {
    cy.visit(ShopDomainService.getShopUrl())

    PageFactoryService.getStartPage(cy).putFirstNewItemInBasket()

    PageFactoryService.getUserPage(cy).clickRegisterButton()

    PageFactoryService.getRegisterPage(cy).register()

    PageFactoryService.getPaymentPage(cy).payByInvoiceAndGoNext()

    PageFactoryService.getOrderConfirmPage(cy).confirm()

    PageFactoryService.getThankYouPage(cy).assertOrderCompleted()
  })
})
