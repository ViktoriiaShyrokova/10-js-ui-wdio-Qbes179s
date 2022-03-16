const DashboardActions = require('../PA/dashboard_pa');
const dashh = new DashboardActions(); 

const registrationActions = require('../PA/registration_pa');
const regact = new registrationActions(); 

describe('Master', async () => {
    it('can open EAM servise', async () => {
        browser.url('/');
        await regact.SignInAsMaster();
        await browser.pause(20000);
        await dashh.OpenEAM();
        await browser.pause(10000);
    })
    
    
})