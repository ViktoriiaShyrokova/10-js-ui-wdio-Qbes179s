const bspo = require('../PO/bs_po');
const bs = new bspo();
const testData = require('../test-data/bs-data.json');

class BSActions {
    
    async CreateBucket() {

       await bs.AddSpace_Button.click();
       await bs.SpaceName_Field.setValue(testData.SpaceName);
       await bs.Create_Button.waitForClickable(4000);
       await bs.Create_Button.click();

    }

    async DeleteBucket() {

       await bs.Bucket.click();

    }

}

module.exports = BSActions;