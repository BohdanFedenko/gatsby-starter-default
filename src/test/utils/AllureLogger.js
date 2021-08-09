export default class AllureLogger {

    startStep() {
        return description => {
            cy.allure().startStep(description);
        }
    }

    step() {
        return description => {
            cy.allure().step(description);
        }
    }
}