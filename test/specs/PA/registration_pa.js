const registration = require('../PO/registration_po');
const reg = new registration();
const testData = require('../test-data/register-data.json');

class RegistrationActions {
    
    async OpenMasterSignInForm() {
        await reg.SignInAsMaster_Button.click();
    }
    async OpenWorkerSignInForm() {
        await reg.SignInAsWorker_Button.click();
    }
    async OpenSignUpForm() {
        await reg.SignUp_Link.click();
    }
    async OpenSignInForm() {
        await reg.SignIn_Link.click();
    }
    async FillMasterSignUpForm() {
        let NewEmail = new Date().getTime() / 1000 + '@test.test';
        await reg.Email_Field.setValue(NewEmail);
        await reg.Name_Field.setValue(testData.TenantName);
        await reg.Password_Field.setValue(testData.MasterPassword);
    }
    async FillMasterSignInForm(email, masterPassword) {
        await reg.Email_Field.waitForExist(3000);
        await reg.Email_Field.setValue(email);
        await reg.Password_Field.waitForExist(3000);
        await reg.Password_Field.setValue(masterPassword);
    }

    async FillWorkerSignInForm(tenantName, workerName, password) {
        await reg.TenantName_Field.waitForExist(2000);
        await reg.TenantName_Field.setValue(tenantName);
        await reg.WorkerName_Field.waitForExist(2000);
        await reg.WorkerName_Field.setValue(workerName);
        await reg.Password_Field.waitForExist(2000);
        await reg.Password_Field.setValue(password);
    }

    async Sign() {
        await reg.Sign_Button.moveTo();
        await reg.Sign_Button.click();
    }
    async SignInAsMaster(email, masterPassword) {
        await this.OpenMasterSignInForm();
        await this.FillMasterSignInForm(email, masterPassword);
    }
    async SignUp() {
        await this.OpenMasterSignInForm();
        await this.OpenSignUpForm();
        await this.FillMasterSignUpForm();
    }
}

module.exports = RegistrationActions;