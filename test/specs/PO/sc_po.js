const scData = require('../test-data/sc-data.json');

class SC {

    get AddInstance_Button () {return $('a[href="/sc/configurate-instance"]')};
    get Reload_Button () {return $('button[class="styles_button__AHHQA"]')};
    get Cancel_Button () {return $('a[href="/sc"]')};
    get Create_Button () {return $('button[type="submit"]')};
    get InstanceName_Field () {return $('input[name="name"]')};
    get OS_Field () {return $('input[name="operationSystemId"]')};
    get UserData_Field () {return $('textarea[name="userData"]')};
    get Bucket () {return $('img[src="/static/media/delete-icon.98786469ba52bc63501716a59174d53c.svg"]')}
}
module.exports = SC;