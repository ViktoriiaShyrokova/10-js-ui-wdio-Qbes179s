describe('Worker', async () => {
    it('can log in', async () => {
        try {
         browser.url('/')
        
        $('input[name="tenantName"]').setValue('MASTERrich')
        $('input[name="workerName"]').setValue('Bob')
        $('input[name="password"]').setValue('e0af9b82-6b19-450a-bfce-fa22cfa38b0f')

        await $('button[type="submit"]').click()

        $('button[type="submit"]').addValue('Enter')
        await browser.pause(5000)
    } catch (err) {
        console.log(err, '__ERROR__')
     }
})
})

