const eam = require('../PO/eam_po');
const eamAct = new eam();
//const testData = require('../test-data/register-data.json');

class EAMactions {

    async GetTenantName() {
        await eamAct.ChangeTenantName_Field.waitForClickable(2000);
        await eamAct.ChangeTenantName_Field.getValue();
    }
    async ChangeTenantName(Name) {
        await eamAct.ChangeTenantName_Field.waitForClickable(2000);
        await eamAct.ChangeTenantName_Field.clearValue();
        await eamAct.ChangeTenantName_Field.setValue(Name)
    }
    async SaveTenantNameButton() {
        await eamAct.Save_Button.waitForExist(5000);
        await eamAct.Save_Button.moveTo();
        await eamAct.Save_Button.click();
    }
    async AddWorkerButton() {
        await eamAct.SignInAsWorker_Button.waitForClickable(2000);
        await eamAct.SignInAsWorker_Button.click();
    }
    async AddGroupButton() {
        await eamAct.SignUp_Link.waitForClickable(2000);
        await eamAct.SignUp_Link.click();
    }
    async FillCreateWorkerForm() {
        await eamAct.SignIn_Link.waitForClickable(2000);
        await eamAct.SignIn_Link.click();
    }
    async FillCreateGroupForm() {
        let NewEmail = new Date().getTime() / 1000 + '@test.test';
        await eamAct.Email_Field.setValue(NewEmail);
        await eamAct.Name_Field.setValue(testData.TenantName);
        await eamAct.Password_Field.setValue(testData.MasterPassword);
    }

    async DeleteWorkerButton() {
        await reg.Sign_Button.waitForClickable(4000);
        await reg.Sign_Button.moveTo();
        await reg.Sign_Button.click();
    }
    async DeleteGroupButton() {
        await this.OpenMasterSignInForm();
        await this.FillMasterSignInForm();
    }
    async SignUp() {
        await this.OpenMasterSignInForm();
        await this.OpenSignUpForm();
        await this.FillMasterSignUpForm();
    }
}

module.exports = EAMactions;