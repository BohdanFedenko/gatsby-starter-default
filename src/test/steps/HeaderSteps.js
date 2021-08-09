import Header from "../components/Header";
import BaseComponentSteps from "../utils/BaseComponentSteps";

export default class HeaderSteps extends BaseComponentSteps {

    header = new Header();

    checkTitle(title) {
        this.step('Check title');
        this.log('Check title');
        this.header.getTitle().should('have.text', title);
    }
}
