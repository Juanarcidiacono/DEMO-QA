import urls from '../fixtures/urls.json'
import Action from '/cypress/actions/Actions.js'

describe("Demo QA - Form",() => {

    it("Fill form",() => {
       Action.visit(urls.form)
    })
})
