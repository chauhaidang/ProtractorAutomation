import * as driverHelper from '../infrastructure/WebdriverHelper';

beforeAll(() => {
    browser.logger.info('****************START SUITE*****************');
});

afterAll(() => {
    browser.logger.info('****************END SUITE*****************');
});

describe('PA8 - Verify if i can log in to tiki successfully', function () {
    var EC = protractor.ExpectedConditions;
    var iconLogin = element(by.xpath('//i[@class="tikicon icon-user"]/following-sibling::span/span'));
    var buttonLogin = element(by.xpath('//button[text()="Đăng nhập"]'));
    var panelLogin = element(by.xpath('//div[text()="Đăng nhập"]'));
    var inputUser = element(by.xpath('//input[@id="email"]'));
    var inputPassword = element(by.xpath('//input[@id="password"]'));
    var logOut = element(by.xpath('//p[@title="Thoát tài khoản"]'));
    var buttonLoginInPanel = element(by.xpath('//p[@class="forgot-password"]/following-sibling::button[text()="Đăng nhập"]'));
    let userName = 'chauhaidang1testing@gmail.com';
    let password = '123456789';
    let userFullName = 'Châu Hải Đăng';

    beforeAll(() => {
        browser.logger.info('----------------START TEST CASE-----------------');
    });

    afterAll(() => {
        browser.logger.info('----------------END TEST CASE-------------------');
    });

    beforeEach(function () {  
    });

    afterEach(function () { 
    });

    it('Navigate to http://www.tiki.vn', async function () {
        await driverHelper.navigateTo(browser.baseUrl);
    });

    it('Click icon "Dang Nhap"', async function () {
        await driverHelper.waitSupport(iconLogin, driverHelper.ecCondition.CONTAIN_TEXT, 'Đăng nhập');
        await driverHelper.clickElementClickable(iconLogin);
    });

    it('Click button "Dang Nhap"', async function () {
        await driverHelper.clickElementClickable(buttonLogin);
    });

    it('"Dang Nhap" panel/dialog must display', async function () {
        await driverHelper.waitSupport(panelLogin, driverHelper.ecCondition.VISIBLE);
    });

    it('Input user name to "Ten Dang Nhap"', async function () {
        await driverHelper.sendKeyElementVisible(inputUser, userName);
    });

    it('Input password to "Mat khau"', async function () {
        await driverHelper.sendKeyElementVisible(inputPassword, password);
    });

    it('Click "Dang Nhap"', async function () {
        await driverHelper.waitSupport(buttonLoginInPanel, driverHelper.ecCondition.CONTAIN_TEXT, "Đăng nhập");
        await driverHelper.clickElementClickable(buttonLoginInPanel);

    });

    it('User name display on profile menu', async function () {
        await driverHelper.waitSupport(iconLogin, driverHelper.ecCondition.CONTAIN_TEXT, `Chào ${userFullName}`);
    });

    it('Button "Dang Xuat" must display on profile menu when it is dropped down', async function () {
        await driverHelper.clickElementClickable(iconLogin);
        await driverHelper.waitSupport(logOut, driverHelper.ecCondition.VISIBLE);
    });
});

describe('PA13 - SAMPLE OF TEST CASE 2', function () {
    var iconLogin = element(by.xpath('//i[@class="tikicon icon-user"]/following-sibling::span/span'));

    beforeAll(() => {
        browser.logger.info('----------------START TEST CASE-----------------');
    });
    
    afterAll(() => {
        browser.logger.info('----------------END TEST CASE-------------------');
    });

    beforeEach(function () {
    });

    afterEach(function () {
    });

    it('Navigate to http://www.tiki.vn', async function () {
        await driverHelper.cleanCacheAndRefresh();
        await driverHelper.navigateTo(browser.baseUrl);
    });

    it('Click icon "Dang Nhap"', async function () {
        await driverHelper.waitSupport(iconLogin, driverHelper.ecCondition.CONTAIN_TEXT, 'Đăng nhập');
        await driverHelper.clickElementClickable(iconLogin);
    });
});