import {Then} from "cucumber";
import {assert as chaiAssert} from "chai";
import login from "../pageobjects/LoginPage";



Then(/^I expect to get invalid email error message combination of special character as "([^"]*)"$/, (invalidSpecialChatEmailMessage)=>{
    chaiAssert.equal(login.getincompleteEmailError(),invalidSpecialChatEmailMessage )


})