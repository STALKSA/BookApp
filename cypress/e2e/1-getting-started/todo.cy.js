// / <reference types="cypress" />



describe('test netology', () => {
  beforeEach(() => { 
    cy.visit('https://netology.ru/')
  })

  it('displays two todo items by default', () => {

    cy.contains('Войти').click()

  })

 
})
