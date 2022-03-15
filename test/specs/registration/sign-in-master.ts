//const assert = require('assert');

describe('Master', async () => {
    it('can log in', async () => {
        try {
         browser.url('/')

        const masterLink = $('.styles_button__JSGQl') 
        await masterLink.click()

//        await masterLink.addValue('Enter')
await browser.pause(1000)

        $('input[name="email"]').setValue('master@test.test')
        $('input[name="password"]').setValue('password')

        await browser.pause(1000)

        const submit = $('button[type="submit"]')
        await submit.moveTo()
        await submit.click()

await browser.pause(3000)

//////////////////----CHECK---////////////////////////
        const eam = await $('a[href="/eam"]')
        let check = await eam.isExisting()
        await browser.pause(3000)
        console.log(check + 'FROG')
        assert.equal(check,true)
        } catch (err) {
        console.log(err, '__ERROR__')
     }
})
})