describe('Transfers', () => {
    beforeEach(() => {
        //arrange
        cy.visit('/')
        cy.loginWithValidCredentials()
    })

    it('Should transfer when inform valid data and value', () => {
        //act
        cy.transfer('Maria', 'João', '11')
        //assert
        cy.verifyToastMessage('Transferência realizada!')
    })

     it('Should shows error when transfer more than 5.000 without token', () => {
        //act
         cy.transfer('Maria', 'João', '5000.01')
         //assert
        cy.verifyToastMessage('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})