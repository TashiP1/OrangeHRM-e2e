const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    defaultCommandTimeout:10000,
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
