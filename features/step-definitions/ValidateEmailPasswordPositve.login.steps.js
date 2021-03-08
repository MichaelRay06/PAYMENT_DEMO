import {Given, Then, When } from 'cucumber';
import {expect as chaiExpect, assert as chaiAssert, should} from 'chai';
import 'chai/register-should';



import basePage from '../pageobjects/BasePage';
import loginPage from '../pageobjects/LoginPage';


Given(/^given I navigate to dojo site$/, async() => {

    await basePage.open('https://account.dojo.tech/login');

});

When(/^I enter a valid email address as "([^"]*)"$/, (myEmailAddress)=>{
    loginPage.setEmaidAddressField(myEmailAddress)


})



When(/^I enter a valid password as "([^"]*)"$/, (myPassword) => {
    loginPage.setPasswordField(myPassword)
});

When(/^click the login button$/, () =>{
    loginPage.loginLink()
    //expect(thisProductDisplayedPage.productDisplayed).toBeDisplayed();

});
