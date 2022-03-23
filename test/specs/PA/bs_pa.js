const bspo = require('../PO/bs_po');
const bs = new bspo();
const testData = require('../test-data/bs-data.json');
var assert = require('assert');

class BSActions {
    
    async CreateBucket() {

       await bs.AddSpace_Button.click();
       await bs.SpaceName_Field.setValue(testData.SpaceName);
       await bs.Create_Button.waitForClickable(4000);
       await bs.Create_Button.click();

    }

    async CheckBucketExist() {
      let tableCell = await $('tr>td[class="styles_tableCell__C6dnh"]');
      let tableCellValue = await tableCell.getText();
      let bucketCreated;
      if (testData.SpaceName == tableCellValue){
         bucketCreated = true;
      }
      else{
         bucketCreated = false;
      }
      assert.equal(bucketCreated,true);
    }

    async DeleteBucket() {

       await bs.Bucket.click();

    }

    async CheckBucketDelete() {
      let tableCell = await $('tr>td[class="styles_tableCell__C6dnh"]');
      let tableCellValue = await tableCell.getText();
      let bucketCreated;
      if (testData.SpaceName == tableCellValue){
         bucketCreated = true;
      }
      else{
         bucketCreated = false;
      }
      assert.equal(bucketCreated,false);
    }

}

module.exports = BSActions;
