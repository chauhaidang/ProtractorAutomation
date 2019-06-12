import * as driverHelper from '../infrastructure/WebdriverHelper';
import MainPage from '../page_object/MainPage';
let main = new MainPage();

beforeAll(() => {
    browser.logger.info('****************START SUITE*****************');
});

afterAll(() => {
    browser.logger.info('****************END SUITE*****************');
});

describe('PA8 - Verify if i can log in to tiki successfully', function () {
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
        await main.openMainPage();
    });

    it('Click icon "Dang Nhap"', async function () {
        await main.verifyLoginIconDisplayText('Đăng nhập');
        await main.clickIconLogin();
    });

    it('Click button "Dang Nhap"', async function () {
        await main.clickButtonLogin();
    });

    it('"Dang Nhap" panel/dialog must display', async function () {
        await main.verifyLoginPanelMustDisplay();
    });

    it('Input user name to "Ten Dang Nhap"', async function () {
        await main.inputUserNameTextBox(userName);
    });

    it('Input password to "Mat khau"', async function () {
        await main.inputPasswordTextBox(password);
    });

    it('Click "Dang Nhap"', async function () {
        await main.verifyButtonLoginOnPanelDisplayText('Đăng nhập');
        await main.clickButtonLoginOnPanel();
    });

    it('User name display on profile menu', async function () {
        await main.verifyLoginIconDisplayText(`Chào ${userFullName}`);
    });

    it('Button "Dang Xuat" must display on profile menu when it is dropped down', async function () {
        await main.clickIconLogin();
        await main.verifyButtonLogoutDisplay();
    });
});

describe('PA13 - SAMPLE OF TEST CASE 2', function () {
    var iconLogin = element(by.xpath('//i[@class="tikicon icon-user"]/following-sibling::span/span'));

    beforeAll(async () => {
        browser.logger.info('----------------START TEST CASE-----------------');
        await driverHelper.cleanCacheAndRefresh();
    });
    
    afterAll(() => {
        browser.logger.info('----------------END TEST CASE-------------------');
    });

    beforeEach(function () {
    });

    afterEach(function () {
    });

    it('Navigate to http://www.tiki.vn', async function () {
        await main.openMainPage();
    });

    it('Click icon "Dang Nhap"', async function () {
        await main.verifyLoginIconDisplayText('Đăng nhập');
        await main.clickIconLogin();
    });
});