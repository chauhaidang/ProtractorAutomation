exports.config = {
    framework: 'jasmine',
    jasmineNodeOpts: {
        //If true, print colors to the terminal.
        showColors: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000,
        // Function called to print jasmine results.
        print: function () { },
        // If set, only execute specs whose names match the pattern, which is
        // internally compiled to a RegExp.
        grep: 'pattern',
        // Inverts 'grep' matches
        invertGrep: false
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