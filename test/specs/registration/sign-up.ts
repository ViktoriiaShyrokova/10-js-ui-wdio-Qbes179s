
describe('Master', async () => {
    it('can register', async () => {
        browser.url('/sign-up')

        const email = new Date().getTime() / 1000 + '@auto.test'
        $('input[name="email"]').setValue(email)
        $('input[name="name"]').setValue('MASTERautotest')
        $('input[name="password"]').setValue('password')

        const submit = $('button[type="submit"]')
        await submit.moveTo()
        await submit.click()
        
await browser.pause(1000)

//////////////////----CHECK---////////////////////////
        const eam = await $('a[href="/eam"]')
        let check = await eam.isExisting()

        console.log(check + 'FROG')
//        assert.equal(check,true)

        })
})

