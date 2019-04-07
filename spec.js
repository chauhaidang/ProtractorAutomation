describe('Enter name feature', function(){
    it('should enter name as Tom',async function(){
        await browser.get('https://angularjs.org');
        await element(by.model('yourName')).sendKeys('Lucy')

        var text = element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        expect(await text.getText()).toEqual('Hello Lucy!');
        await browser.sleep(5000);
        
    });
});

// Using async await pattern to force javascript run in order.
describe('free crm title test', function(){
    it('get title test', async function(){
        await browser.get('https://www.google.com');
        expect(await browser.getTitle()).toEqual('Google');
    });
});