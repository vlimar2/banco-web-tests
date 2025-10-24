describe('Login', () => {
  beforeEach(() => {
    //arrange
    cy.visit('/')
    cy.screenshot('after-visit-page')
  })

  it('Login with valid data should allow entry to the system', () => {
    //act
    cy.loginWithValidCredentials()
    //assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  }),

    it('Login with invalid data should deny entry to the system', () => {
      //act
      cy.loginWithInvalidCredentials()
      //assert
      cy.verifyToastMessage('Erro no login. Tente novamente.')
    })
})