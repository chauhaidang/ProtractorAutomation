let logger = require('./infrastructure/CustomLogger');
let winston = require('winston');
let dateformat = require('dateformat');
const reportDir = 'Report/';

exports.config = {
    framework: 'jasmine',
    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000,
        // Function called to print jasmine results.
        print: function () { },
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    multiCapabilities: [
        {
            browserName: 'chrome'
        }
    ],
    //Execute when protractor config is ready
    onPrepare: function () {
        let date = new Date();
        let reportNameSpace = dateformat(date, 'dddd_mmmm_dS_yyyy_HH_MM_ss');
        //Add transport file (similar to log4j file appender)
        logger.add(
            new winston.transports.File({ filename: `${reportDir}${reportNameSpace}_ExecutionLog.log` })
        );
        //Initial browser variable
        browser.logger = logger;
    }
};