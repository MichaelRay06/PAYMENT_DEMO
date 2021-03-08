import {Given, Then, When } from 'cucumber';
import {expect as chaiExpect, assert as chaiAssert, should} from 'chai';
import 'chai/register-should';

import login from '../pageobjects/LoginPage';
import loginPage from "../pageobjects/LoginPage";


Then(/^I should get unsuccessfully log in message"([^"]*)"$/, (unsuccessfulMessage)=>{
    // var expectedLoginMessage=  loginPage.getLoginResponseMessage();
    // browser.pause(500)

    //chaiExpect(expectedLoginMessage).to.equal(unsuccessfulMessage);
    // chaiAssert.equal(expectedLoginMessage , unsuccessfulMessage)
    loginPage.getLoginResponseMessage().should.be.equal(unsuccessfulMessage)


})


Then(/^I could verify that the login button still enabled$/, () =>{
    chaiExpect(loginPage.btnSubmit.isEnabled()).to.equal(true);

});

