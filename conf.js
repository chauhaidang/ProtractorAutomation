exports.config = {
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
        specs: ['spec.js'],
            multiCapabilities: [
                // {
                //     browserName: 'firefox'
                // },
                {
                    browserName: 'chrome',
                    // chromeOptions: {
                    //     args: ['show-fps-counter = true', "--headless", "--disable-gpu", "--window-size=800,600"]
                    // }
                }
            ]
};