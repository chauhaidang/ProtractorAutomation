/**
 * Main page class including all common behavior methods that could be used
 */
import * as driverHelper from '../infrastructure/WebdriverHelper';

export default class MainPage {
    constructor(){
        this.iconLogin = element(by.xpath('//i[@class="tikicon icon-user"]/following-sibling::span/span'));
        this.buttonLogin = element(by.xpath('//button[text()="Đăng nhập"]'));
        this.panelLogin = element(by.xpath('//div[text()="Đăng nhập"]'));
        this.inputUser = element(by.xpath('//input[@id="email"]'));
        this.inputPassword = element(by.xpath('//input[@id="password"]'));
        this.buttonLogOut = element(by.xpath('//p[@title="Thoát tài khoản"]'));
        this.buttonLoginInPanel = element(by.xpath('//p[@class="forgot-password"]/following-sibling::button[text()="Đăng nhập"]'));
    }
    
    async openMainPage(){
        await browser.logger.info(`Navigating to TIKI main page...`)
        await driverHelper.navigateTo(browser.baseUrl);
    };

    async verifyLoginIconDisplayText (text) {
        await browser.logger.info(`Checking if text: '${text}' display on login icon...`);
        await driverHelper.waitSupport(this.iconLogin, driverHelper.ecCondition.CONTAIN_TEXT, text);
    };

    async clickIconLogin(){
        await browser.logger.info(`Trying to click icon login...`);
        await driverHelper.clickElementPresent(this.iconLogin);
    };

    async clickButtonLogin(){
        await browser.logger.info(`Trying to click button login...`);
        await driverHelper.clickElementClickable(this.buttonLogin);
    };

    async verifyLoginPanelMustDisplay(){
        await browser.logger.info(`Checking if login panel is displaying...`);
        await driverHelper.waitSupport(this.panelLogin, driverHelper.ecCondition.VISIBLE);
    };

    async inputUserNameTextBox(text){
        await browser.logger.info(`Trying to input ${text} to username textbox...`);
        await driverHelper.sendKeyElementVisible(this.inputUser, text);
    };

    async inputPasswordTextBox(text){
        await browser.logger.info(`Trying to input ${text} to password textbox...`);
        await driverHelper.sendKeyElementVisible(this.inputPassword, text);
    };

    async verifyButtonLoginOnPanelDisplayText(text){
        await browser.logger.info(`Checking if text: '${text}' display on panel login button...`);
        await driverHelper.waitSupport(this.buttonLoginInPanel, driverHelper.ecCondition.CONTAIN_TEXT, text);
    };

    async clickButtonLoginOnPanel(){
        await browser.logger.info(`Trying to click button login on panel..`);
        await driverHelper.clickElementClickable(this.buttonLoginInPanel);
    };

    async verifyButtonLogoutDisplay() {
        await browser.logger.info(`Checking if button logout is displaying...`);
        await driverHelper.waitSupport(this.buttonLogOut, driverHelper.ecCondition.VISIBLE);
    };
};
