"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Protractor Typescript Demo', function () {
    it('title verifications', function () {
        protractor_1.browser.get(protractor_1.browser.baseUrl);
        protractor_1.browser.getTitle().then(function (title) {
            console.log("The title is  : " + title);
            protractor_1.browser.sleep(5000);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdDAxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHlwZXNjcmlwdC90ZXN0MDEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBbUM7QUFDbkMsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBQ3RDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUN4QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3JDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9