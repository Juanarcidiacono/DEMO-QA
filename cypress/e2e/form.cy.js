import urls from '../fixtures/urls.json'
import Action from '/cypress/actions/Actions.js'
import Form from '/cypress/Pages/Form.js'

describe("Demo QA - Form",() => {

    it("Fill form",() => {
       Action.visit(urls.form)
    })
})
