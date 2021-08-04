// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin';
// Alternatively you can use CommonJS syntax:
// require('./commands')

//Categories for separate the test results
before(function () {
    cy.allure().writeCategoriesDefinitions([
        {
            "name": "OK",
            "matchedStatuses": ["passed"]
        },
        {
            "name": "Ignored tests",
            "matchedStatuses": ["skipped"]
        },
        {
            "name": "Product defects",
            "matchedStatuses": ["failed"]
        }
    ]);
})

