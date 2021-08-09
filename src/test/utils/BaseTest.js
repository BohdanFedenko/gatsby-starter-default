import AllureLogger from "./AllureLogger";
import Logger from "./Logger";

const allure = new AllureLogger();
const startStep = allure.startStep();
const step = allure.step();
const log = new Logger().additionalInfo();

export default class BaseTest {

    visit() {
        startStep('Open Home page');
        log('Open Home page');
        cy.visit('/');
    }

    clearCookies() {
        step('Clear Cookies');
        log('Clear Cookies');
        cy.clearCookies();
        cy.wait(2000);
    }
}