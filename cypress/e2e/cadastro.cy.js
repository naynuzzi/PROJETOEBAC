/// <reference types="cypress"/>

// const { beforeEach } = require("mocha")

describe('US-012 - Funcionalidade: Cadastro de usuarios', () => {
  beforeEach (() => { 
    cy.visit('/')
  });
  it('Deve fazer o cadastro dos campos obrigatórios', () => {
    var email = `Maria${Date.now()}@gmail.com`
    cy.preencherCadastro('Maria','Sillva', email,'11235689778','Jauni@584')
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  })
  
  it.only('Deve validar mensagem de erro com o campo nome inválido',() =>{
    cy.preencherCadastro('Maria45','Sillva', 'Maria@gmail.com','11235689778','Jauni@584')
    cy.get('#signup-response').should ('contain','Nome deve conter apenas caracteres alfabéticos')
  });

})


//})

//escribe('US-012 - Funcionalidade: Cadastro de usuarios informe nome errado', () => {
//  it('Deve fazer o cadastro dos campos obrigatórios nao informando o nome', () => {
//    // cy.visit('http://127.0.0.1:8080')
 //   cy.get('#signup-firstname').type('997')
//    cy.get('#signup-lastname').type('da Silva')
//    cy.get('#signup-email').type('maria1@gmail.com')
 //   cy.get('#signup-phone').type('1198798789')
 //   cy.get('#signup-password').type('Ja@1234#$')
 //   cy.get('#signup-button').click()
//    cy.get('#signup-response').should('contain','Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
//  })
//})

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })