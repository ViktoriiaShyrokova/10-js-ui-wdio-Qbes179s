var assert = require('assert');

const RegistrationActions = require('../PA/registration_pa');
const act = new RegistrationActions();

const RegistrationObject = require('../PO/registration_po');
var regobj = new RegistrationObject();

var dashboard = require('../PO/dashboard_po');

var check = new dashboard(); 
var regData = require('../test-data/register-data.json');


describe('User', async () => {
    
    it('can sign up', async () => {
        await browser.url('/');
        await act.SignUp();
        await act.Sign()
        await check.EAM.waitForExist(2000); //check
        let eamCheck = await check.EAM.isExisting()
        await assert.equal(eamCheck,true)
        await browser.reloadSession();       
    })
    
    it('can sign in as a master', async () => {
        await browser.url('/');
        await act.SignInAsMaster(regData.Email, regData.MasterPassword);
        await act.Sign();
        await check.EAM.waitForExist(2000); //check
        let eamCheck = await check.EAM.isExisting()
        await assert.equal(eamCheck,true)
        await browser.reloadSession();
    })

    it('can sign in as a worker', async () => {
        await browser.url('/');
        await act.FillWorkerSignInForm(regData.TenantNameForWorkerSignIn, regData.WorkerName, regData.WorkerPassword);
        await act.Sign();
        await check.EAM.waitForExist(2000); //check
        let eamCheck = await check.EAM.isExisting()
        await assert.equal(eamCheck,true)
        await browser.reloadSession();
    })

    it('can see error message when tenant name invalid', async () => {
        await browser.url('/');
        await act.FillWorkerSignInForm(regData.Incorrect, regData.WorkerName, regData.WorkerPassword);
        await act.Sign();
        await regobj.ErrorIcon.waitForDisplayed(); //check
        let errorText = await regobj.ErrorMessage.getText();
        await assert.equal(errorText,regData.InvalidTenantNameMessage);
        await browser.reloadSession();
    })

    it('can see error message when worker name invalid', async () => {
        await browser.url('/');
        await act.FillWorkerSignInForm(regData.TenantNameForWorkerSignIn, regData.Incorrect, regData.WorkerPassword);
        await act.Sign()
        await regobj.ErrorIcon.waitForDisplayed(); //check
        let errorText = await regobj.ErrorMessage.getText();
        await assert.equal(errorText,regData.InvalidWorkerNameMessage);
        await browser.reloadSession();
    })

    it('can see error message when password invalid', async () => {
        await browser.url('/');
        await act.SignInAsMaster(regData.IncorrectEmail, regData.MasterPassword);
        await act.Sign();
        await regobj.ErrorIcon.waitForDisplayed(); //check
        let errorText = await regobj.ErrorMessage.getText();
        await assert.equal(errorText,regData.InvalidEmailMessage);
        await browser.reloadSession();
    })

})
