describe('Enter name feature', function(){
    it('should enter name as Tom',function(){
        browser.get('https://angularjs.org');
        element(by.model('yourName')).sendKeys('Lucy')

        var text = element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        expect(text.getText()).toEqual('Hello Lucy!');
        browser.sleep(5000);
    });
});