const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin: true,
    baseUrl: 'https://google.com',
    retries: 3,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 10000,
    failOnStatusCode: false
  },
});