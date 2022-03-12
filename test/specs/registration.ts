import * as assert from 'assert';


describe('Master', async () => {
    it('can register', async () => {
        browser.url('/sign-up')

        const email = new Date().getTime() / 1000 + '@auto.test'
        $('input[name="email"]').setValue(email)
        $('input[name="name"]').setValue('MASTERautotest')
        $('input[name="password"]').setValue('password')

        const button = await $('.styles_btn__9DPcn')
        if(!button.isExisting()) {
            throw new Error('Button not found')
        }
        await browser.pause(20000)
        await button.click()
       
    assert(button.isDisplayed(), 'Button to be displayed')
        })
  
})

