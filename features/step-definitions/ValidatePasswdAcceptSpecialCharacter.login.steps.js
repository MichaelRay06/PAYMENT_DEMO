import {Then} from "cucumber";
import {expect as chaiExpect} from "chai";

import loginPage from "../pageobjects/LoginPage";

Then(/^ I could verify that the login button still enabled when aceept special character$/, () => {
    chaiExpect(loginPage.btnSubmit.isEnabled()).to.equal(true);
});
