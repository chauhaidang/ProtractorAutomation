describe('Enter name feature', function(){
    it('should enter name as Tom',function(){
        browser.get('https://angularjs.org');
        element(by.model('yourName')).sendKeys('Lucy');

        var text = element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        expect(text.getText()).toEqual('Hello Lucy!');
        browser.sleep(5000);
    });
});

describe('title test', function(){
    it('get title', function(){
        browser.get('https://angularjs.org');
        expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
    });
});

describe('multiple element', function(){
    it('get title', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);

        element(by.id('gobutton')).click();

        expect(element(by.className('ng-binding')).getText()).toEqual('3');
    });
});

describe('multiple scenarios', function(){
    // global var
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result = element(by.className('ng-binding'));

    // beforeEach --> wwil be executed before every it block
    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    // test case 1
    it('should have a title', function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    // test case 2
    it('should add one and two', function(){
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);
        goButton.click();
        expect(result.getText()).toEqual('3');
    });

    // test case 3
    it('should add four and six', function(){
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(6);
        goButton.click();
        expect(result.getText()).toEqual('10');
    });

    //test case 4
    it('should read the value from an input', function(){
        firstNumber.sendKeys(5);
        expect(firstNumber.getAttribute('value')).toEqual('5');        
    });
});

describe('get list of elements', function() {
    // global var
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result = element(by.className('ng-binding'));
    var history = element.all(by.repeater('result in memory'));

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    it('check the history', function() {
        add(1,2);
        add(2,3);
        add(3,4);

        expect(history.count()).toEqual(3);

        add(4,5);
        add(5,6);

        expect(history.count()).toEqual(5);
    })
});

describe('test multiple browser', function() {
    it('Test', function() {
        browser.get('http://www.angularjs.org');
        browser.addMockModule('moduleA', "angular.module('moduleA', []).value('version', '3');");

        // To create a new browser.
        var browser2 = browser.forkNewDriverInstance();
    });
});