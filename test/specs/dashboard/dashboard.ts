var assert = require('assert');

var DashboardActions = require('../PA/dashboard_pa');
var dashh = new DashboardActions(); 

var registrationActions = require('../PA/registration_pa');
var regact = new registrationActions(); 

var DashboardObject = require('../PO/dashboard_po');
var dashobj = new DashboardObject(); 

var registrationObject = require('../PO/registration_po');
var regobj = new registrationObject(); 

describe('Master', async () => {
    it('can open EAM servise', async () => {
        await browser.reloadSession();
        browser.url('/');
        await regact.SignInAsMaster();
        await regact.Sign();
        await dashh.OpenEAM();
        await dashobj.LogoEAM.waitForExist();
        let eamCheck = await dashobj.LogoEAM.isExisting(); //checking
        await assert.equal(eamCheck,true);
    })

    it('can open BS servise', async () => {
        await browser.reloadSession();
        browser.url('/');
        await regact.SignInAsMaster();
        await regact.Sign();
        await dashh.OpenBS();
        await dashobj.LogoBS.waitForExist();
        let bsCheck = await dashobj.LogoBS.isExisting(); //checking
        await assert.equal(bsCheck,true);
    })

    it('can open SC servise', async () => {
        await browser.reloadSession();
        browser.url('/');
        await regact.SignInAsMaster();
        await regact.Sign();
        await dashh.OpenSC();
        await dashobj.LogoSC.waitForExist();
        let scCheck = await dashobj.LogoSC.isExisting(); //checking
        await assert.equal(scCheck,true);
    })

    it('can open SLC servise', async () => {
        await browser.reloadSession();
        await browser.url('/');
        await regact.SignInAsMaster();
        await regact.Sign();
        await dashh.OpenSLC();
        await dashobj.LogoSLC.waitForExist();
        let slcCheck = await dashobj.LogoSLC.isExisting(); //checking
        await assert.equal(slcCheck,true);
    })
    
    it('can logout', async () => {
        await browser.reloadSession();
        browser.url('/');
        await regact.SignInAsMaster();
        await regact.Sign();
        await dashobj.Menu.waitForExist()
        await dashh.Logout();
        await regobj.Sign_Button.waitForExist(); 
        let outCheck = await regobj.Sign_Button.isExisting(); //checking
        await assert.equal(outCheck,true);
    })
    
})