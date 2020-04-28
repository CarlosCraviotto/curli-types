// import {Express, RequestHandler} from 'express';

import {ModulesDefiner} from '../Modules/ModulesDefiner';
import {Module} from '../Modules/Module';
import {EventEmitter} from './EventEmitter';
import {HandleContainer} from './HandleContainer';

export interface CurliApplication extends EventEmitter, HandleContainer{

    /**
     * Initial configuration provider when we instantiate this app object.
     */
    initialConfiguration: { [key: string]: any } | undefined;

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
    setMiddleware(callable: (req: any, res: any, next: () => any) => void): object;

    initServer(callback?: any): void;

    setConfig(all: { [p: string]: any }): void;

    getConfig(): { [p: string]: any };

    log(message: string): void;
}
