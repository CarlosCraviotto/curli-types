import {DependencyInjection} from "../DependentyInjection";

export interface RouterService {

    /**
     * Create a instance of the controller class
     * and register it into the service.
     *
     * @param ControllerClass
     */
     addControllerClass(ControllerClass: new (c: DependencyInjection) => any): void;
}