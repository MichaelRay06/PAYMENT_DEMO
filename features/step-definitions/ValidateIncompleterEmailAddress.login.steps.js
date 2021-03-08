

import {Given, Then, When } from 'cucumber';
import {expect as chaiExpect, assert as chaiAssert, should} from 'chai';
import 'chai/register-should';


import login from '../pageobjects/LoginPage';




Then(/^I expect to get invalid email error message incomplete email as "([^"]*)"$/, (incompleteEmailMessage)=>{
    chaiAssert.equal(login.getincompleteEmailError(),incompleteEmailMessage );
})