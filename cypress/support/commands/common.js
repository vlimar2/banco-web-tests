Cypress.Commands.add('verifyToastMessage', message => {
    cy.get('.toast').should('have.text', message)
})

Cypress.Commands.add('selectComboBoxOption', (labelDoCampo, option) => {
    cy.get(`label[for="${labelDoCampo}`).parent().as(`campo-${labelDoCampo}`)
    cy.get(`@campo-${labelDoCampo}`).click()
    cy.get(`@campo-${labelDoCampo}`).contains(option).click()
})
