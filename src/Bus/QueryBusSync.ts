
import {
    Middleware,
} from './Middleware';
import {QueryTypeClass} from './QueryTypeClass';
import {HandlerFunctionType} from './HandlerFunctionType';
import {HandlerType} from './HandlerType';
import {QueryInstanceType} from './QueryInstanceType';

/**
 * Class for the BusSync
 */
export interface QueryBusSync {

    /**
     * Add a middleware to the collection, it will be
     * executed during the dispatch.
     *
     * @param middleware
     */
     addMiddleware (middleware: Middleware): void;

    /**
     * Register a handler to be called when we ask that query.
     *
     * @param query A class query or a string with the name of the class query.
     * @param handler A function or a class with the method handleQuery declared.
     */
     registerHandler (
        command: QueryTypeClass | string,
        handler: HandlerFunctionType | HandlerType
    ): void | never;

    /**
     * Ask the query to the bus.
     *
     * @param query An instance of a class already declared in.
     * @param options It will be sent to all the middlewares an to the handler
     */
     ask<T> (command: QueryInstanceType, options?: T): any;

}
