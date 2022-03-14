const assert = require('assert');

describe('Worker', async () => {
    it('can log in', async () => {
        try {
         browser.url('/')
        
        $('input[name="tenantName"]').setValue('MASTERrich')
        $('input[name="workerName"]').setValue('Bob')
        $('input[name="password"]').setValue('e0af9b82-6b19-450a-bfce-fa22cfa38b0f')
await browser.pause(1000)

        const submit = $('button[type="submit"]')
        await submit.moveTo()
await browser.pause(1000)
        await submit.click()

await browser.pause(1000)

//////////////////----CHECK---////////////////////////
        const eam = await $('a[href="/eam"]')
        let check = await eam.isExisting()

        console.log(check + 'FROG')
        assert.equal(check,true)
        } catch (err) {
        console.log(err, '__ERROR__')
     }
await browser.pause(2000)
})
})

