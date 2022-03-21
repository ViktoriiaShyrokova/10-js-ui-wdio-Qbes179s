var DashboardActions = require('../PA/dashboard_pa');
var dashact = new DashboardActions(); 

var registrationActions = require('../PA/registration_pa');
var regact = new registrationActions();

var BSActions = require('../PA/bs_pa');
var bsact = new BSActions(); 


describe('Worker', async () => {

    it('can create bucket', async () => {
        browser.url('/');
        await regact.FillWorkerSignInForm();
        await regact.Sign();
        await dashact.OpenBS();
        await bsact.CreateBucket();
    })

    it('can delete bucket', async () => {
        browser.url('/');
        await dashact.OpenBS();
        await bsact.DeleteBucket();
        await browser.pause(3000);
    })
    
})