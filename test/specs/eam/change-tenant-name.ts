const asserteam = require('assert');
const RegisterActions = require('../PA/registration_pa');
const regAct = new RegisterActions(); 
const eamAct = require('../PA/eam_pa');
const eamActions = new eamAct();
const dashB = require('../PA/dashboard_pa');
const checkEAM = new dashB(); 
const testData = require('../test-data/register-data.json');
const eam = require('../PO/eam_po');
const EAM = new eam();


describe('Tenant name', async () => {
    it('can be changed by master', async () => {
        await browser.url('/');
        await regAct.SignInAsMaster();
        await regAct.Sign();
        await checkEAM.OpenEAM();
        await eamActions.ChangeTenantName(testData.NewTenantName);
        await eamActions.SaveTenantNameButton();
        await browser.reloadSession();
        await browser.url('/');
        await regAct.SignInAsMaster();
        await regAct.Sign();
        await checkEAM.OpenEAM();
        /////////CHECK and return previous value/////////////
        let check = await EAM.ChangeTenantName_Field.getValue()
        asserteam.strictEqual(check,testData.NewTenantName);
        await eamActions.ChangeTenantName(testData.TenantName);
        await eamActions.SaveTenantNameButton();
        await browser.reloadSession();

    })

    it('can be changed by worker', async () => {
        await browser.url('/');
        await regAct.FillWorkerSignInForm();
        await regAct.Sign();
        await checkEAM.OpenEAM();
        await eamActions.ChangeTenantName(testData.NewTenantName);
        await eamActions.SaveTenantNameButton();
    
        await browser.reloadSession();
        await browser.url('/');
        await regAct.SignInAsMaster();
        await regAct.Sign();
        await checkEAM.OpenEAM();
        /////////CHECK and return previous value/////////////
        let check = await EAM.ChangeTenantName_Field.getValue()
        asserteam.strictEqual(check,testData.NewTenantName);
        await eamActions.ChangeTenantName(testData.TenantName);
        await eamActions.SaveTenantNameButton();
//       await browser.reloadSession();

     })
})
