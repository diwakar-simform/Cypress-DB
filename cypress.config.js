const mysql = require('cypress-mysql');

module.exports = {
  e2e: {
    env: {
      db: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'classicmodels',
      },
    },
    async setupNodeEvents(on, config) {
      mysql.configurePlugin(on);
    },
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}'
  },

};