var DashboardActions = require('../PA/dashboard_pa');
var dashact = new DashboardActions(); 

var registrationActions = require('../PA/registration_pa');
var regact = new registrationActions();

var BSActions = require('../PA/bs_pa');
var bsact = new BSActions();

var BSObject = require('../PO/bs_po');
var bsobj = new BSObject();

var bsData = require('../test-data/bs-data.json')

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
    
    it('can see success create message', async () => {
        await browser.url('/');
        await dashact.OpenBS();
        await bsact.CreateBucket();
        await bsobj.SuccessIcon.waitForDisplayed();
        let success = await bsobj.Message.getText();
        await assert.equal(success,bsData.SuccessCreated);

    })

    it('can see success delete message', async () => {
        await browser.url('/');
        await dashact.OpenBS();
        await bsact.DeleteBucket();
        await browser.pause(1500);
        await bsobj.SuccessIcon.waitForDisplayed();
        let success = await bsobj.Message.getText();
        await assert.equal(success,bsData.SuccessDeleted);
    })
})

