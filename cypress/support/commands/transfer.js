Cypress.Commands.add('transfer', (originAccount, destinationAccount, value) => {
    cy.selectComboBoxOption('conta-origem', originAccount)
    cy.selectComboBoxOption('conta-destino', destinationAccount)
    cy.get('#valor').click().type(value)
    cy.contains('button', 'Transferir').click()
})