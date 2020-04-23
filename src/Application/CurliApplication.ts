// import {Express, RequestHandler} from 'express';

import {DependencyInjection} from '../DependentyInjection/DependencyInjection';
import {ModulesDefiner} from '../Modules/ModulesDefiner';
import {Module} from '../Modules/Module';

export interface CurliApplication {

    /**
     * Add a module definer to extend the modules behaviour.
     * @param modulesDefiner
     */
    addModulesDefiner(modulesDefiner: ModulesDefiner): void;

    /**
     * Add a module to load configuration/services/booters and other.
     * @param module
     */
    addModule(module: Module): void;

    /**
     * Call the start events for the app.
     */
    startApp(): void;

    /**
     * Emit an event in the app
     * @param eventName
     */
    emit(eventName: string): boolean;

    /**
     * Set the service container (see curli-di).
     * We are doing it from the ServiceModulesDefiner
     *
     * @param container
     */
    setContainer(container: DependencyInjection): void;

    /**
     * Get the service container (see curli-di).
     */
    getContainer(): DependencyInjection | never;

    getExpressApp(): object;

    getEnvironment(): string;

    /**
     * Return an array with the supported environments in the app.
     */
    getEnvironmentsSupported(): Array<string>;

    /**
     * Set a middleware in the express app.
     * @param callable
     */
    setMiddleware(callable: any): object;

    initServer(callback?: any): void;

    setConfig(all: { [p: string]: any }): void;

    getConfig(): { [p: string]: any };

    log(message: string): void;
}
