describe('Login Tests', function() {
  
    it('Invalid Name', function(browser) {
        browser
            .navigateTo("https://waf-qa.wmc.14west.io/wmc-admin/testing")
            .waitForElementVisible("#username", 15000)
            .sendKeys("#username", "user")
            .useXpath()
            .click("//button[@type='submit']")
            .useCss()
            .waitForElementVisible("#password", 1000)
            .sendKeys("#password", "sadf")
            .useXpath()
            .click("//button[@type='submit']")
            .useCss()
            .assert.textContains("#root", "Invalid username or password");
    });
  });