const testData = require('../test-data/bs-data.json');

class BS {

    get AddSpace_Button () {return $('a[href="/bs/create-space"]')};
    get Reload_Button () {return $('button[class="styles_button__AHHQA"]')};
    get SpaceName_Field () {return $('input[name="name"]')};
    get Cancel_Button () {return $('a[href="/bs"]')};
    get Create_Button () {return $('button[type="submit"]')};
    get SpaceRow () {return $('.styles_tableCell__C6dnh').selectByVisibleText(testData.SpaceName)};
    get Bucket () {return $('img[src="/static/media/delete-icon.98786469ba52bc63501716a59174d53c.svg"]')};
    get SuccessIcon () {return $('div[class="notification_check__FUZIb"]')};
    get Message () {return $('div[class="rrt-text"]')};
}
module.exports = BS;