class Actions {

    visit(url) {
        return cy.visit(url)
    }
    
}

//export default Actions;
module.exports = new Actions();