import Utils from "?cypress/support/Utils.js"
class Form {

    elements = {
        firstName: () => Action.get("#firstName"),
        lastName: () => Action.get("#lastName"),
        email: () => Action.get("#userEmail"),
        gender: () => Action.get("#genterWrapper"),
        mobileNumber: () => Action.get("#userNumber"),
        dateBirth: () => Action.get("#dateOfBirth"),
        subjects: () => Action.get("#subjectsWrapper"),
        hobbies: () => Action.get("#hobbiesWrapper"),
        uploadPicture: () => Action.get("#uploadPicture"),
        currentAddress: () => Action.get("#currentAddress"),
        state: () => Action.get("#stateCity-wrapper"),
        submit: () => Action.get("#submit")
    }

    constants = {
        'male': 'male',
        'female': 'female',
        'other': 'other',
    }

}

module.exports = new Form();