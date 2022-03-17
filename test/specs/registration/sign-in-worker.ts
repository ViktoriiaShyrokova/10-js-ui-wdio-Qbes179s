const assert = require('assert');
const RegistrationActions = require('../registration/registration_pa')
const DashboardPage = require('../dashboard/dashboard_po');
const credentials = require('../../testData.json')

const step = new RegistrationActions;
const page = new DashboardPage();


describe('Worker', async () => {
    it('can log in', async () => {
        try {
        browser.url('/')
        await browser.pause(3000) 
        step.enterTenantName(credentials.TenantName)
        step.enterWorkerName(credentials.WorkerName)
        step.enterPassword(credentials.WorkerPassword)
        await browser.pause(3000)
        step.clickSubmit()
     
//////////////////----CHECK---////////////////////////
        page.EAM_link.waitForExist(3000)
        let check = page.EAM_link.isExisting()

        console.log(check + 'FROG')
        assert.equal(check,true)
        } catch (err) {
        console.log(err, '__ERROR__')
     }
})
})

