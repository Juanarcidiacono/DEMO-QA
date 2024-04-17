class Actions {

    visit(url) {
        return cy.visit(url)
    }
    
}

module.exports = new Actions();