/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')
describe('funcionalidade: login',() =>{                    
    
beforeEach(() => {
cy.visit ('minha-conta')
});

it('Deve fazer login com sucesso', () => {
cy.get ('#username').type('franteste@teste.com.br') 
cy.get ('#password').type('Fm123456#')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, franteste (não é franteste? Sair)')
})

it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
cy.get ('#username').type('fran@teste.com.br') 
cy.get ('#password').type('Fm123456#')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.' )
    
});


it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
cy.get ('#username').type('franteste@teste.com.br') 
cy.get ('#password').type('Fm12345#')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail franteste@teste.com.br está incorreta. Perdeu a senha?' )


    
});

it('Deve fazer login com sucesso - usando massa de dados', () => {
cy.get ('#username').type(perfil.usuário) 
cy.get ('#password').type(perfil.senha)
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, franteste (não é franteste? Sair)')

it('Deve fazer login com sucesso - Usando Fixtures', () => {
cy.fixture('perfil').then ( dados => {
cy.get ('#username').type(dados.usuário, {log: false}) 
cy.get ('#password').type(dados.senha, { log: false})
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, franteste (não é franteste? Sair)')


   })

    


    
});
it.only('Deve fazer login com sucesso - usando comandos customizado', () => {
   cy.login('franteste@teste.com.br', 'Fm123456#')
   cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, franteste (não é franteste? Sair)')
});
    
});
})
