
import {SHORT_TIME_OUT , MEDIUM_TIME_OUT, LONG_TIME_OUT } from "../utilities/SetTimeOut"
class Elements {


    doClick(element) {
//waitForClickable
        try {

            element.waitForDisplayed(SHORT_TIME_OUT)
            element.click()

        } catch (error) {
            throw new Error(`could not click on element: ${element}`)
        }
    }


    waitUntilClickable(element) {
        try {

            element.waitForClickable(SHORT_TIME_OUT)
            element.click()

        } catch (error) {
            throw new Error(`could not click on element: ${element}`)
        }
    }




    doSetValue(element, value) {
        try {
            element.waitForDisplayed(SHORT_TIME_OUT)
            element.setValue(value)

        } catch (error) {
            throw new Error(`could not set value:   :${value} using selector: ${element}`)
        }
    }


    doGetText(element) {
        try {

            element.waitForDisplayed(SHORT_TIME_OUT)
            return element.getText()

        } catch (error) {
            throw new Error(`could not get text using selector: ${element}`)
        }
    }


    doIsDisplayed(element) {
        try {

            element.waitForDisplayed(SHORT_TIME_OUT)
            return element.isDisplayed()

        } catch (error) {
            throw new Error(`Element not displayed till  time out: ${element}`)
        }
    }



    doIsEnabled(element){
        try {
        element.waitForEnabled(SHORT_TIME_OUT)
        return element.isEnabled()
        } catch (error) {
            throw new Error(`Element not displayed till  time out: ${element}`)
        }
    }


    doIsClickable(element){
        try {
           // element.waitForExist(SHORT_TIME_OUT)
            return element.isClickable()
        } catch (error) {
            throw new Error(`Element not displayed till  time out: ${element}`)
        }
    }






    doActionsMoveToElement(element){
  
  try{

    element.waitForDisplayed(SHORT_TIME_OUT);
    element.moveTo();

      }catch (error){
       throw new Error (`could not perform move element on: ${element}`)
      }
    }




 async   doGetPageTitle(pageTitle){
   
     browser.waitUntil( async function(){
           return (browser.getTitle() === pageTitle)
       }, LONG_TIME_OUT, 'title is not displayed after the given time'
   )
       return browser.getTitle()
   }



  async  waitForTextChange  (el, text, timeout) {
       browser.waitUntil(
         function () {
           return el.getText() === text;
         },
         { timeout }
       );
     };



     async  waitToGetText  (el, text, timeout) {
       browser.waitUntil(
         function () {
           if(el.getText() === text){
               return el.getText()
           }
         },
         { timeout }
       );
      
     };







}
export default new Elements();