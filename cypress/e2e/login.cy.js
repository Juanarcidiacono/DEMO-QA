import urls from '../fixtures/urls.json'
import Action from 'cypress/actions/Actions.js'

describe("Login",() => {
    it("Test1",() => {
        cy.visit(urls.home)
       //Action.visit(urls.Home)
    })
})
