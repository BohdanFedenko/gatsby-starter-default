import BaseTest from "../utils/BaseTest";
import HeaderSteps from "../steps/HeaderSteps";
import Logger from "../utils/Logger";
import AllureLogger from "../utils/AllureLogger";
import MainProperties from "../utils/MainProperties";


const baseTest = new BaseTest();
const headerSteps = new HeaderSteps();
const allureStep = new AllureLogger().step();
const logger = new Logger();
const mainProperties = new MainProperties();
const log = logger.testStep(allureStep);
const logPreCondition = logger.preConditionStep();
const logPostCondition = logger.postConditionStep();

describe('Home page spec' + browserPlusPlatformNames, () => {

    beforeEach(() => {
        logPreCondition(1, 'Open Home Page');
        baseTest.visit(Cypress.env('development_url'));
    })

    afterEach(() => {
        logPostCondition(1, 'Clear Cookies');
        baseTest.clearCookies();
    })

    //Passed test
    it('Passed test' + browserPlusPlatformNames, () => {
        log(1, 'Check Home page title')
        headerSteps.checkTitle(mainProperties.title());
    })

    //Failed test
    it('Failed test' + browserPlusPlatformNames, () => {
        log(1, 'Check Home page title')
        headerSteps.checkTitle(mainProperties.wrongTitle());
    })

    //Skipped test
    it.skip('Skipped test' + browserPlusPlatformNames , () => {
        log(1, 'Check Home page title')
        headerSteps.checkTitle(mainProperties.title());
    })
})
