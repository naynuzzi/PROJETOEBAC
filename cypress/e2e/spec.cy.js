/// <reference types="cypress"/>

describe('US-012 - Funcionalidade: Cadastro de usuarios', () => {
  it('Deve fazer o cadastro dos campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080')
    cy.get('#signup-firstname').type('Maria')
    cy.get('#signup-lastname').type('da Silva')
    cy.get('#signup-email').type('maria1@gmail.com')
    cy.get('#signup-phone').type('1198798789')
    cy.get('#signup-password').type('Ja@1234#$')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  }) 
})
 

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })