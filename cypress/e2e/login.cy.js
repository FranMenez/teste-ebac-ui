/// <reference types="cypress"/>
describe('funcionalidade: login',() => {it('Deve fazer logincom sucesso', () => { cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get ('#username').type('franteste@teste.com.br') 
cy.get ('#password').type('Fm123456#')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, franteste (não é franteste? Sair)')
});})