describe('Master', async () => {
    it('can register', async () => {
        browser.url('/sign-up')

        const email = new Date().getTime() / 1000 + '@auto.test'
        $('input[name="email"]').setValue(email)
        $('input[name="name"]').setValue('MASTERautotest')
        $('input[name="password"]').setValue('password')

        await $('button[type="submit"]').click()

        $('button[type="submit"]').addValue('Enter')
        await browser.pause(5000)

        })
  
})

