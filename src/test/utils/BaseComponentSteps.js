import Logger from "./Logger";
import AllureLogger from "./AllureLogger";

export default class BaseComponentSteps {

    step = new AllureLogger().step();

    log = new Logger().additionalInfo();
}