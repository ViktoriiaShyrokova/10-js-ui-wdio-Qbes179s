const RegistrationPage = require('../registration/registration_po');
const page = new RegistrationPage();

class RegistrationActions {

    clickSignInAsWorker() {
        page.SignInAsWorker_Button.waitForClickable(2000)
        page.SignInAsWorker_Button.click()
    }

    clickSignInAsMaster() {
        page.SignInAsMaster_Button.waitForClickable(2000)
        page.SignInAsMaster_Button.click()
    }

    enterTenantName(value) {
        page.TenantName_Field.waitForExist()
        page.TenantName_Field.setValue(value)
        }

    enterWorkerName(value) {
        page.WorkerName_Field.waitForExist()
        page.WorkerName_Field.setValue(value)
        }

    enterPassword(value) {
        page.Password_Field.waitForExist()
        page.Password_Field.setValue(value)
        }

    enterPassword(value) {
        page.Password_Field.waitForExist()
        page.Password_Field.setValue(value)
        }
    
    clickSubmit() {
        page.SignIn_Button.waitForExist()
        page.SignIn_Button.moveTo()
        page.SignIn_Button.click()
    }

}
module.exports = RegistrationActions;