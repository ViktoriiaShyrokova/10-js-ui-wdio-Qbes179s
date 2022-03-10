describe('BWS', function () {
    it('should open', function () {
        browser.url('/')
        const img = $('img[src="/static/media/logo.f72cfb5f9fb9d7605a71fab31e1d43fb.svg"]')
        if(!img.isExisting()) {
            throw new Error('Logo should be displayed')
        }
    })
})
