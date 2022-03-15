const assert = require('assert');
 const RegistrationActions = require('../registration/registration_pa')
 const credentials = require('../../testData.json')

 const step = new RegistrationActions;


describe('Worker', async () => {
    it('can log in', async () => {
 //       try {
                
        // function workerSignIn(tenantName, workerName, password) {
        //         RegistrationSteps.enterTenantName(tenantName)
        //         RegistrationSteps.enterWorkerName(workerName)
        //         RegistrationSteps.enterPassword(password)
        //         RegistrationSteps.clickSubmit()
        //     }
        browser.url('/')
 
        step.enterTenantName(credentials.TenantName)
        step.enterWorkerName(credentials.WorkerName)
         step.enterPassword(credentials.WorkerPassword)
         await browser.pause(3000)
        step.clickSubmit()
     //   RegistrationSteps.workerSignIn(credentials.TenantName, credentials.WorkerName, credentials.Password)
     await browser.pause(5000)
//////////////////----CHECK---////////////////////////
        const eam = await $('a[href="/eam"]')
        let check = await eam.isExisting()

        console.log(check + 'FROG')
        assert.equal(check,true)
//         } catch (err) {
//         console.log(err, '__ERROR__')
//      }
// await browser.pause(2000)
})
})

