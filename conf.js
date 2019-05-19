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
        // browserName: 'chrome',
        // chromeOptions: {
        //     args: ["incognito", "disable-extensions"]
        // },
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['--headless']
        },
        //Each spec run with differnent browser session
        shardTestFiles: true,
        //Only 1 instance at the time, if set to true, it can be run parallel
        maxInstances: 1
    },

    baseUrl: "https://tiki.vn",

    //between it block
    restartBrowserBetweenTests: false,

    //Execute when protractor config is ready
    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        let date = new Date();
        let reportNameSpace = dateformat(date, 'dddd_mmmm_dS_yyyy_HH_MM_ss');
        //Add transport file (similar to log4j file appender)
        logger.add(
            new transports.File({ filename: `${reportDir}${reportNameSpace}_ExecutionLog.log` })
        );
        //Initial browser variable
        browser.logger = logger;
    }
};