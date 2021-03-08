
import Page from './page';
import {MOBILE_DEVICE} from "../utilities/DeviceTypes";

class BasePage extends Page {



   async open (path) {

       return super.open(path);

    }

}
export default new BasePage();





