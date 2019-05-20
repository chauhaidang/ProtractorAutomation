/**
 * require babel compiler here so that we can script w ES6 feature
 */
require('@babel/register');

//Logger winston modules
let { logger } = require('./infrastructure/HappyLoggy');
let { winston, transports } = require('winston');

//dateformat library
let dateformat = require('dateformat');

//Variables
const reportDir = 'Report/';
const fs = require('fs');
const path = require('path');
let reportNameSpace;

exports.config = {
    framework: 'jasmine2',
    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000,
        // Function called to print jasmine results.
        print: function () { },
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['test/*.js'],

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            //args: ["incognito", "disable-extensions"]
            args: ["--headless", '--window-size=1800,1000']
        },
        // browserName: 'firefox',
        // 'moz:firefoxOptions': {
        //     args: ['--headless', '--safe-mode']
        // },
        //Each spec run with differnent browser session
        shardTestFiles: true,
        //Only 1 instance at the time, if set to be more than 1, it can be run in parallel
        maxInstances: 1
    },

    baseUrl: "https://tiki.vn",

    //between it block
    restartBrowserBetweenTests: false,

    //Control flow on/off when using async/await
    SELENIUM_PROMISE_MANAGER: false,

    //Execute when protractor config is ready
    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();

         //Clean up all files
         fs.readdir(reportDir, (err, files) => {
            if(err) throw err;
            for(const file of files) {
                fs.unlink(path.join(reportDir, file), err => {
                    if(err) throw err;
                })
            }
        });

        let date = new Date();
        reportNameSpace = dateformat(date, 'dddd_mmmm_dS_yyyy_HH_MM_ss');
        //Add transport file (similar to log4j file appender)
        logger.add(
            new transports.File({ filename: `${__dirname}/${reportDir}${reportNameSpace}_ExecutionLog.log` })
        );
        //Initial browser variable
        browser.logger = logger;
    }
};