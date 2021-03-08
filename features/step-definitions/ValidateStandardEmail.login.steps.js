import {Given, Then, When } from 'cucumber';
import {expect as chaiExpect, assert as chaiAssert, should} from 'chai';
import 'chai/register-should';

import loginPage from "../pageobjects/LoginPage";


Then(/^I could verify that the login button is enabled for standard email types$/, () =>{
    chaiExpect(loginPage.btnSubmit.isEnabled()).to.equal(true);

});

