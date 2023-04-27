const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    sampleUrl1: 'https://catfact.ninja/fact',
    sampleUrl2: 'https://jsonplaceholder.typicode.com/todos/1',
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
