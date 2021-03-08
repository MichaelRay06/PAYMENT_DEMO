

import {Given, Then, When } from 'cucumber';
import {expect as chaiExpect, assert as chaiAssert, should} from 'chai';
import 'chai/register-should';


import login from '../pageobjects/LoginPage';


Then(/^I expect the log in button not to be clickable$/, () =>{
 //login.loginButtonNotClickable().should.be.equal(false);
 login.verifyElementEnable().should.be.equal(false);
// chaiAssert.isFalse( login.loginButtonNotClickable())


})
Then(/^I expect to get email error message as"([^"]*)"$/, (emailMessage)=>{
chaiAssert.equal(login.invalidEmailErrorMessage(),emailMessage )



})
Then(/^I expect to get password error message as "([^"]*)"$/, (passwordMessage)=>{
 chaiAssert.equal(login.inavlidPasswordErrorMessage(),passwordMessage )


})

When(/^I click the email text field$/, () =>{
login.inputUsername.click();
 login.inputPassword.click();


});

When(/^I click the password text field$/, () =>{
 login.inputPassword.click();
 login.inputUsername.click();



});

