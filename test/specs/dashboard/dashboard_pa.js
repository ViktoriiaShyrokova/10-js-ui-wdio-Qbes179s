const DashboardPage = require('../dashboard/dashboard_po');
const page = new DashboardPage();

class DashboardActions {

    clickEAMlink() {
        page.EAM_link.waitForClickable(2000)
        page.EAM_link.click()
    }

    clickBSlink() {
        page.BS_link.waitForClickable(2000)
        page.BS_link.click()
    }

    clickSClink() {
        page.SC_link.waitForClickable(2000)
        page.SC_link.click()
    }

    clickSLClink() {
        page.SLC_link.waitForClickable(2000)
        page.SLC_link.click()
    }
    
}
module.exports = DashboardActions;