export default class Logger {

    preConditionStep() {
        return (stepNumber, description) => {
            cy.log(`Precondition STEP: ${stepNumber} - ${description}`);
        }
    }

    postConditionStep() {
        return (stepNumber, description) => {
            cy.log(`Postcondition  STEP: ${stepNumber} - ${description}`);
        }
    }


    testStep(callback) {
        return (stepNumber, stepDescription) => {
            cy.log(`STEP: ${stepNumber} - ${stepDescription}`);
            callback(`STEP: ${stepNumber} - ${stepDescription}`);
        };
    }

    additionalInfo() {
        return info => {
            cy.log(`ADDITIONAL INFO: ${info}`);
        };
    }
}