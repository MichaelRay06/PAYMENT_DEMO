import {SHORT_TIME_OUT , MEDIUM_TIME_OUT, LONG_TIME_OUT } from "../utilities/SetTimeOut";
import {MOBILE_DEVICE, TABLET_DEVICE, DESKTOP_DEVICE } from "../utilities/DeviceTypes";
import {MOBILE_VIEW, TABLET_VIEW,DESKTOP_VIEW, DEFAULT_VIEW } from "../utilities/SetViewPort"

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {



  async open (path) {

      let selectedDevice= DESKTOP_VIEW;

      switch(selectedDevice) {


          case MOBILE_VIEW:
              browser.setWindowSize(MOBILE_DEVICE[0], MOBILE_DEVICE[1]);
              console.log("SET VIEW+PORT AS: " + selectedDevice);
              break;



          case TABLET_VIEW:
              browser.setWindowSize(TABLET_DEVICE[0], TABLET_DEVICE[1]);
              console.log("SET VIEW+PORT AS: " + selectedDevice);
              break;


          case DESKTOP_VIEW:
              browser.setWindowSize(DESKTOP_DEVICE[0], DESKTOP_DEVICE[1]);
              console.log("SET VIEW+PORT AS: " + selectedDevice);
              break;

          case DEFAULT_VIEW:
              browser.fullscreenWindow();

              break;
      }



     browser.setTimeouts( 500, 40000, 120000);
      return browser.url(path)
    }
}



