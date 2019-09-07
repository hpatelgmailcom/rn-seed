describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it.skip('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible()
  })

  it('should show hello screen after tap', async () => {
    // await element(by.id('hello_button')).tap();
    await expect(element(by.text('Refresh'))).toBeVisible()
  })

  it.skip('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap()
    await expect(element(by.text('World!!!'))).toBeVisible()
  })
})
