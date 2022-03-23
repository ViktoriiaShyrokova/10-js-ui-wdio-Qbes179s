var DashboardActions = require('../PA/dashboard_pa');
var dashact = new DashboardActions(); 

var registrationActions = require('../PA/registration_pa');
var regact = new registrationActions();

var BSActions = require('../PA/bs_pa');
var bsact = new BSActions();

var BSObject = require('../PO/bs_po');
var bsobj = new BSObject();

var assert = require('assert');


describe('Worker', async () => {

    it('can create bucket', async () => {
        await browser.url('/');
        await regact.FillWorkerSignInForm();
        await regact.Sign();
        await dashact.OpenBS();
        await bsact.CreateBucket();
        await bsact.CheckBucketExist();

    })

    it('can delete bucket', async () => {
        await browser.url('/');
        await dashact.OpenBS();
        await bsact.DeleteBucket();
        await browser.pause(1500);
        await bsact.CheckBucketDelete();
    })
    
})