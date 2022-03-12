describe('Master', async () => {
    it('can open eam', async () => {
        browser.url('/')
    
        const button = await $('a[href="/eam"]')
        await button.click()
        browser.pause(5000)
       
    })
    })