import Page from "./page";
import elementUtil from "../utilities/Elements";

class LoginPage extends Page{

    get inputUsername () { return $('input#login-field') }
    get inputPassword () { return $('input#password-field') }
    get btnSubmit () { return $('button#loginButton') }
    get respondMessage () { return $('span.login-error') }
    get invaliEmailErrorMessageNeg (){return $ ('.mdc-text-field-helper-line  span')}
    get inavlidPasswordErrorMessageNeg() {return $('.ngx-mdc-form-field--fluid:nth-child(3) [aria-hidden]')}
    get incompleteEmailErrorNeg(){return $('.mdc-text-field-helper-line  span')}



    setEmaidAddressField(myEmailAddress){
        browser.waitAndSetTextValue( 'input#login-field', myEmailAddress)

    }

    setPasswordField(myPassword){
        browser.waitAndSetTextValue('input#password-field', myPassword)

    }

    loginLink(){
        browser.waitAndClick('button#loginButton')
    }





    getLoginResponseMessage(){
        return  elementUtil.doGetText(this.respondMessage)

    }


    verifyElementEnable(){
      return  elementUtil.doIsEnabled(this.btnSubmit)
    }



    invalidEmailErrorMessage(){
     return   elementUtil.doGetText(this.invaliEmailErrorMessageNeg)

    }
    inavlidPasswordErrorMessage(){
      return  elementUtil.doGetText(this.invaliEmailErrorMessageNeg)


    }


    getincompleteEmailError(){
        return elementUtil.doGetText(this.incompleteEmailErrorNeg)
    }

    loginButtonNotClickable(){
      return  elementUtil.doIsClickable();
    }



    WaitUntilClick(){

      return elementUtil.waitUntilClickable(this.btnSubmit)
    }


}
export default new LoginPage();