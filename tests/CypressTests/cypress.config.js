const { defineConfig } = require("cypress");

const shopUrl = 'https://' + process.env.CYPRESS_TESTS_SHOP_DOMAIN;

module.exports = defineConfig({
  e2e: {
    baseUrl: shopUrl,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  experimentalStudio: true,
});
