let EC = protractor.ExpectedConditions;

export let ecCondition = {
    CONTAIN_TEXT: 'textInElement',
    VISIBLE: 'visibility',
    PRESENT: 'present',
    CLICKABLE: 'clickable'
}

export let navigateTo = async (url = '') => {
    try {
        await browser.get(url);
        await browser.logger.info(`Navigated to ${browser.baseUrl}`);
    }
    catch(e){
        await browser.logger.error(`Can not navigate to ${browser.baseUrl} due to >> ${e}`);
        throw new Error(`Can not navigat to ${browser.baseUrl} due to >> ${e}`)
    } 
}

export let waitSupport = async (element, condition, text = '') => {
    let waitFor
    switch(condition){
        case ecCondition.CONTAIN_TEXT:
            waitFor = EC.textToBePresentInElement(element, text);
            break;
        case ecCondition.VISIBLE:
            waitFor = EC.visibilityOf(element);
            break;
        case ecCondition.PRESENT:
            waitFor = EC.presenceOf(element);
            break;
        case ecCondition.CLICKABLE:
            waitFor = EC.elementToBeClickable(element);
    }
    try{
        await browser.wait(waitFor, browser.timeout, `Time out when waiting for condition ${condition}!`);
        await browser.logger.info(`Wait condition passed!`);
    }
    catch(e){
        browser.logger.error(e);
        throw e;
    }
}

export let cleanCacheAndRefresh = async () => {
    try{
        await browser.executeScript('window.localStorage.clear();');
        await browser.executeScript('window.sessionStorage.clear();');
        await browser.driver.manage().deleteAllCookies();
        await browser.refresh();
        await browser.logger.info(`Refreshed!`);
    }
    catch(e){
        browser.logger.error(`Refresh and clean cache failed due to => ${e}`);
        throw new Error(`Refresh and clean cache failed due to => ${e}`);
    }
}

export let clickElementClickable = async (element) => {
    try{
        await waitSupport(element, ecCondition.CLICKABLE);
        await element.click();
        await browser.logger.info(`Click element succesfully!`);
    }
    catch(e){
        await browser.logger.error(`Can not click to element due to => ${e}`);
        throw new Error(`Can not click to element due to => ${e}`);
    }
}

export let sendKeyElementVisible = async (element, text) => {
    try{
        await waitSupport(element, ecCondition.VISIBLE);
        await element.sendKeys(text);
        await browser.logger.info(`Send keys to element succesfully!`);
    }
    catch(e){
        await browser.logger.error(`Can not send key to element due to => ${e}`);
        throw new Error(`Can not send key to element due to => ${e}`);
    }
}