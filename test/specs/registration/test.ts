const assert = require('assert');
const RegistrationActions = require('../PA/registration_pa');
const act = new RegistrationActions(); 

const testData = require('../test-data/register-data.json');

beforeEach(() => {
 //   browser.reloadSession();
    browser.url('/');
})
// afterEach(() => {


// })
describe('User', async () => {
    // it('can sign up', async () => {
//         browser.url('/');
//         await browser.pause(2000);
//         await act.OpenMasterSignInForm();
//         await act.OpenSignUpForm();
//         await act.FillMasterSignUpForm();
//         await browser.pause(2000);
//         await act.Sign();
//  //       await act.Sign();
//         await browser.pause(3000);
//         assert (($('a[href="/eam"]')).isDisplayed(), true);
//  //   browser.reloadSession();
//  //       await assert (await($('a[href="/eam"]')).isDisplayed() === true , "Error");
        
        
//     })
    
    it('can sign in as a master', async () => {

        act.OpenMasterSignInForm();
        act.FillMasterSignInForm(testData.Email,testData.MasterPassword);
await browser.pause(5000);
        await act.Sign();

await browser.pause(5000);
        let eam = $('a[href="/eam"]')
        let check = await eam.isExisting()

        console.log(check + 'FROG')
        assert.equal(check,true)
 //       browser.deleteSession()
    })

it('can sign in as a worker', async () => {
        browser.url('/');

        act.FillWorkerSignInForm(testData.TenantNameForWorkerSignIn,testData.WorkerName,testData.WorkerPassword);
await browser.pause(5000);
        act.Sign();
await browser.pause(5000);
        let eam = $('a[href="/eam"]')
        let check = await eam.isExisting()

        console.log(check + 'FROG')
        assert.equal(check,true)
//        browser.deleteSession()
    })
})