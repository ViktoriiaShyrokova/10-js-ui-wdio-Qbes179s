import * as assert from 'assert';

describe('Worker', async () => {
    it('can log in', async () => {
        browser.url('/')
        
        $('input[name="tenantName"]').setValue('MASTERrich')
        $('input[name="workerName"]').setValue('Bob')
        $('input[name="password"]').setValue('e0af9b82-6b19-450a-bfce-fa22cfa38b0f')

        const button = await $('button[type="submit"]')

        let clickable = await button.isClickable();
        console.log(clickable); // outputs: true or false

        if(!button.isExisting()) {
            throw new Error('Button not found')
        }
        await browser.pause(5000)
        await button.click()
       
    assert(button.isDisplayed(), 'Button to be displayed')
        })
  
})
