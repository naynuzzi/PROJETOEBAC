/// <reference types="cypress"/>

describe('US-00 : Funcionalidade: busca por filmes', () => { 
    beforeEach(() => {
        cy.visit('/')
    }); 
    
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve busca de filmes com sucesso',() => {
        cy.get('#search-input').type('Encantada')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Encantada')
    });

    it('Deve buscar filmes com sucesso de uma lista',() => {
        cy.fixture('filmes').then((filmes) => {
            cy.get('#search-input').type(filmes[0].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[0].titulo)
        });
    });
    
    it('Deve buscar filmes na lista inteira', () => {
        cy.fixture('filmes').then((filmes) => {
            cy.get('#search-input').type(filmes[0].titulo);
            cy.get('#search-button').click();
            cy.get('#results-section').should('contain', filmes[0].titulo);
        });
    });

    it('Deve buscar filmes na lista inteira ', () => {
        cy.fixture('filmes').then((filmes) => {
            cy.get('#search-input').type(filmes[0].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[0].titulo)
        });
    });
})











