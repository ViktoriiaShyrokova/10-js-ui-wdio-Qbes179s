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
        reg.Email_Field.waitForExist(2000);
        reg.Email_Field.setValue(testData.Email);
        reg.Name_Field.waitForExist(2000);
        reg.Name_Field.setValue(testData.TenantName);
        reg.Password_Field.waitForExist(2000);
        reg.Password_Field.setValue(testData.MasterPassword);
    }
    FillMasterSignInForm(Email,MasterPassword) {
        reg.Email_Field.waitForExist(2000);
        reg.Email_Field.setValue(Email);
        reg.Password_Field.waitForExist(2000);
        reg.Password_Field.setValue(MasterPassword);
    }
    FillWorkerSignInForm(TenantName,WorkerName,WorkerPassword) {
        reg.TenantName_Field.waitForExist(2000);
        reg.TenantName_Field.setValue(TenantName);
        reg.WorkerName_Field.waitForExist(2000);
        reg.WorkerName_Field.setValue(WorkerName);
        reg.Password_Field.waitForExist(2000);
        reg.Password_Field.setValue(WorkerPassword);
    }
    Sign() {
        reg.Sign_Button.waitForExist(2000);
        reg.Sign_Button.moveTo();
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