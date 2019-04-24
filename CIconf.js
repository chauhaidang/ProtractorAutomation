exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    multiCapabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
                args: [ "--headless", "--disable-gpu"]
            }
        }
    ]
};