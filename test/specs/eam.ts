describe('Worker', async () => {
    it('can log in', async () => {
        try {
            console.log('Please just work');
        browser.url('/')
        
        $('input[name="tenantName"]').setValue('MASTERrich')
        $('input[name="workerName"]').setValue('Bob')
        $('input[name="password"]').setValue('e0af9b82-6b19-450a-bfce-fa22cfa38b0f')

        const submit = $('button[type="submit"]')
        await submit.click()
        await submit.addValue('Enter')

        browser.pause(1000)

        const eam = await $('a[href="/eam"]')
        await eam.click()
        await eam.addValue('Enter')

        browser.pause(1000)

    } catch (err) {
        console.log(err, '__ERROR__')
     }
})
})
