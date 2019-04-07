exports.config = {
    framework: 'jasmine',
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['spec.js'],

    //Set time out for all script
    allScriptsTimeout: 9999999999,
    
    //Set up before starting tests
    onPrepare: function(){
        browser.ignoreSynchronization = true
        browser.waitForAngularEnabled(false)
    }
};
