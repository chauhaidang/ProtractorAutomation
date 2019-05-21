// [PA 8] Verify if i can log in to tiki successfull
describe('PA8 - Verify if i can log in to tiki successfully', function(){
    var EC = protractor.ExpectedConditions;
    var iconLogin = element(by.xpath('//i[@class="tikicon icon-user"]/following-sibling::span/span'));
    var buttonLogin = element(by.xpath('//button[text()="Đăng nhập"]'));
    var panelLogin = element(by.xpath('//div[text()="Đăng nhập"]'));
    var inputUser = element(by.xpath('//input[@id="email"]'));
    var inputPassword = element(by.xpath('//input[@id="password"]'));
    var logOut = element(by.xpath('//p[@title="Thoát tài khoản"]'));
    var buttonLoginInPanel = element(by.xpath('//p[@class="forgot-password"]/following-sibling::button[text()="Đăng nhập"]'));

    it('Navigate to http://www.tiki.vn', async function(){
        await browser.get(browser.baseUrl);
        await browser.logger.info(`Navigated to ${browser.baseUrl}`);
    });

    it('Click icon "Dang Nhap"', async function(){
        await browser.wait(EC.textToBePresentInElement(iconLogin, "Đăng nhập"), 5000);
        await browser.logger.info(`Wait for icon Dang Nhap display successfully`);
        await iconLogin.click();
        await browser.logger.info(`Click icon Dang Nhap successfully!`);
    });

    it('Click button "Dang Nhap"', async function(){
        await buttonLogin.click();
        await browser.logger.info(`Click button Dang Nhap successfully!`);
    });

    it('"Dang Nhap" panel/dialog must display', async function(){
        await browser.wait(EC.visibilityOf(panelLogin), 5000);
        await browser.logger.info(`Dang nhap dialog displayed successfully!`);
    });

    it('Input user name to "Ten Dang Nhap"', async function(){
        // Waits for the element to be visible on the dom.
        await browser.wait(EC.visibilityOf(inputUser), 5000);
        await inputUser.sendKeys("chauhaidang1testing@gmail.com");
        await browser.logger.info(`Input user name succesfully`);
    });

    it('Input password to "Mat khau"', async function(){
        // Waits for the element to be visible on the dom.
        await browser.wait(EC.visibilityOf(inputPassword), 5000);
        await inputPassword.sendKeys("123456789");
        await browser.logger.info(`Input password successfully!`);
    });

    it('Click "Dang Nhap"', async function(){
        await browser.wait(EC.textToBePresentInElement(buttonLoginInPanel, "Đăng nhập"), 5000);
        await buttonLoginInPanel.click();
        await browser.logger.info(`Click button Dang Nhap on dialog successfully!`);
    });

    it('User name display on profile menu', async function(){
        await browser.wait(EC.textToBePresentInElement(iconLogin, "Chào Châu Hải Đăng"), 5000);
        await browser.logger.info(`User name display next to icon successfully!`);
    });

    it('Button "Dang Xuat" must display on profile menu when it is dropped down', async function(){
        await iconLogin.click();
        await browser.wait(EC.visibilityOf(logOut), 5000);
        await browser.logger.info(`Button Dang Xuat available on profile menu successfully!`);
    });
});