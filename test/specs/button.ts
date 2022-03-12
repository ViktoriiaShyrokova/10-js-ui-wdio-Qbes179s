describe('Master', async () => {
it('should demonstrate the click command', async () => {
    browser.url('/sign-up')

    const button = await $('.styles_btn__9DPcn')
    await button.click()
    browser.pause(10000)
   
})
})