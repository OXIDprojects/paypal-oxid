export class ShopDomainService {
    static getShopUrl() {
        return 'https://' + Cypress.env('TESTS_SHOP_DOMAIN');
    }
}
