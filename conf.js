/**
 * require babel compiler here so that we can script w ES6 feature
 */
require('@babel/register');

//Logger winston modules
let { logger } = require('./infrastructure/HappyLoggy');
let { winston, transports } = require('winston');
let HTMLReport = require('protractor-html-reporter-2');
let jasmineReporters = require('jasmine-reporters');

//dateformat library
let dateformat = require('dateformat');

//Variables
const reportDir = 'Report/';
const fs = require('fs');
const fs2 = require('fs-extra');
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
        //True: Each spec run with differnent browser session
        shardTestFiles: true,
        //Only 1 instance at the time, if set to be more than 1, it can be run in parallel
        maxInstances: 1
    },

    // multiCapabilities: [
    //     {
    //         browserName: 'chrome',
    //         chromeOptions: {
    //             args: ["--headless", '--window-size=1800,1000']
    //         },
    //     },
    //     {
    //         browserName: 'firefox',
    //         'moz:firefoxOptions': {
    //             args: ['--headless', '--safe-mode']
    //         },
    //     }
    // ],
    // maxSessions: 1,

    baseUrl: "https://tiki.vn",

    //between it block
    restartBrowserBetweenTests: false,

    //Control flow on/off when using async/await
    SELENIUM_PROMISE_MANAGER: false,

    beforeLaunch: () => {
        fs2.emptyDir(reportDir).then(() => {
            console.log('success clean up report folder before run tests!')
        }).catch(err => {
            console.error(err)
        })
    },

    //Execute when protractor config is ready for a capability
    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();

        //Clean up all files
        //  fs.readdir(reportDir, (err, files) => {
        //     if(err) throw err;
        //     for(const file of files) {
        //         fs.unlink(path.join(reportDir, file), err => {
        //             if(err) throw err;
        //         })
        //     }
        // });

        let date = new Date();
        reportNameSpace = dateformat(date, 'dddd_mmmm_dS_yyyy_HH_MM_ss');

         //Add transport file (similar to log4j file appender)
        logger.add(
            new transports.File({ filename: `${__dirname}/${reportDir}${reportNameSpace}/${reportNameSpace}_ExecutionLog.log` })
        );

        //Initial browser variable
        browser.logger = logger;

        // Add a screenshot reporter and store screenshots to Report/
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: `${reportDir}${reportNameSpace}`,
            filePrefix: 'xmlresults'
        }));
  
    },

    //Execute when protractor config is completed for a capability
    onComplete: () => {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();
    
        capsPromise.then(function (caps) {
           browserName = caps.get('browserName');
           browserVersion = caps.get('version');
           platform = caps.get('platform');
    
           var HTMLReport = require('protractor-html-reporter-2');
    
           testConfig = {
               reportTitle: 'Protractor Test Execution Report',
               outputPath: `${reportDir}${reportNameSpace}`,
               outputFilename: `${reportNameSpace}_HTMLREPORT`,
               screenshotPath: `${reportDir}${reportNameSpace}/screenshots`,
               testBrowser: browserName,
               browserVersion: browserVersion,
               modifiedSuiteName: false,
               screenshotsOnlyOnFailure: false,
               testPlatform: platform,
               consolidate: true,
               consolidateAll: true,
           };
           new HTMLReport().from(`${reportDir}${reportNameSpace}/xmlresults.xml`, testConfig);
       });
    }
};