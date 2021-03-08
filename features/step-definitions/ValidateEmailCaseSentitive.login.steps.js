import {Then} from "cucumber";
import {assert as chaiAssert} from "chai";
import login from "../pageobjects/LoginPage";




Then(/^ I should get an email case sentitive error message"([^"]*)"$/, (caseSensitiveMessage)=>{
    chaiAssert.equal(login.getincompleteEmailError(),caseSensitiveMessage )
})
