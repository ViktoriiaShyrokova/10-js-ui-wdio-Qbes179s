const registration = require('../PO/registration_po');
const reg = new registration();
const testData = require('../test-data/register-data.json');

class RegistrationActions {
    
    OpenMasterSignInForm() {
        reg.SignInAsMaster_Button.waitForClickable(2000);
        reg.SignInAsMaster_Button.click();
    }
    OpenWorkerSignInForm() {
        reg.SignInAsWorker_Button.waitForClickable(2000);
        reg.SignInAsWorker_Button.click();
    }
    OpenSignUpForm() {
        reg.SignUp_Link.waitForClickable(2000);
        reg.SignUp_Link.click();
    }
    OpenSignInForm() {
        reg.SignIn_Link.waitForClickable(2000);
        reg.SignIn_Link.click();
    }
    FillMasterSignUpForm() {
        reg.Email_Field.waitForExist();
        reg.Email_Field.setValue(testData.Email);
        reg.Name_Field.waitForExist();
        reg.Name_Field.setValue(testData.TenantName);
        reg.Password_Field.waitForExist();
        reg.Password_Field.setValue(testData.MasterPassword);
    }
    FillMasterSignInForm() {
        reg.Email_Field.waitForExist();
        reg.Email_Field.setValue(testData.Email);
        reg.Password_Field.waitForExist();
        reg.Password_Field.setValue(testData.MasterPassword);
    }
    FillWorkerSignInForm() {
        reg.TenantName_Field.waitForExist();
        reg.TenantName_Field.setValue(testData.TenantNameForWorkerSignIn);
        reg.WorkerName_Field.waitForExist();
        reg.WorkerName_Field.setValue(testData.WorkerName);
        reg.Password_Field.waitForExist();
        reg.Password_Field.setValue(testData.WorkerPassword);
    }
    Sign() {
        reg.Sign_Button.waitForClickable(2000);
        reg.Sign_Button.moveTo();
        reg.Sign_Button.click();
    }
    SignInAsMaster() {
        this.OpenMasterSignInForm();
        this.FillMasterSignInForm();
    }
}

module.exports = RegistrationActions;