# Banco web tests

Cypress end-to-end tests for the Banco Web project.

## Overview

This repository contains Cypress E2E specs for login and transfer flows of the Banco Web demo app.

## Requirements

- Node.js (14+)
- npm

## Install (including Cypress)

1. Install dependencies (this installs Cypress as a devDependency listed in [package.json](package.json)):
   ```sh
   npm install
   ```
2. Verify Cypress binary (optional):
   ```sh
   npx cypress verify
   ```
3. Open Cypress Test Runner (optional, GUI):
   ```sh
   npm run cy:open
   ```
Commands are defined in [package.json](package.json).

## Run tests (CI / headless)

- Run headless tests:
  ```sh
  npm run test
  ```
- Run headed (headed browser):
  ```sh
  npm run cy:headed
  ```

## Configuration

Cypress base URL and reporter are configured in [cypress.config.js](cypress.config.js).

## Test specs

- [cypress/e2e/login.cy.js](cypress/e2e/login.cy.js)
- [cypress/e2e/transfer.cy.js](cypress/e2e/transfer.cy.js)

## Support & custom commands

Support files that register commands and reporters:

- [cypress/support/e2e.js](cypress/support/e2e.js)
- [cypress/support/commands.js](cypress/support/commands.js)

Custom commands implemented:

- [`Cypress.Commands.add('loginWithValidCredentials')`](cypress/support/commands/login.js) and [`Cypress.Commands.add('loginWithInvalidCredentials')`](cypress/support/commands/login.js)
- [`Cypress.Commands.add('transfer')`](cypress/support/commands/transfer.js)
- [`Cypress.Commands.add('verifyToastMessage')`](cypress/support/commands/common.js) and [`Cypress.Commands.add('selectComboBoxOption')`](cypress/support/commands/common.js)

## Fixtures

- [cypress/fixtures/credentials.json](cypress/fixtures/credentials.json)
- [cypress/fixtures/example.json](cypress/fixtures/example.json)

## Reports & artifacts

- Mochawesome JSON reports: cypress/reports/html/.jsons (examples: [cypress/reports/html/.jsons/mochawesome.json](cypress/reports/html/.jsons/mochawesome.json), [cypress/reports/html/.jsons/mochawesome_001.json](cypress/reports/html/.jsons/mochawesome_001.json))
- Screenshots: cypress/screenshots (example: [cypress/screenshots/login.cy.js/after-visit-page.png](cypress/screenshots/login.cy.js/after-visit-page.png))

## Notes

- Reporter configured: `cypress-mochawesome-reporter` in [cypress.config.js](cypress.config.js).
- Tests use fixtures and custom commands to keep specs concise.