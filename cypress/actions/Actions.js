class Actions {

    visit(url) {
        return cy.visit(url)
    }

    get(selector) {
        return cy.get(selector)
    }
    
}

module.exports = new Actions();