
import {
    Middleware,
} from './Middleware';
import {CommandTypeClass} from './CommandTypeClass';
import {HandlerFunctionType} from './HandlerFunctionType';
import {HandlerType} from './HandlerType';
import {CommandInstanceType} from './CommandInstanceType';

/**
 * Class for the BusSync
 */
export interface CommandBusSync {

    /**
     * Add a middleware to the collection, it will be
     * executed during the dispatch.
     *
     * @param middleware
     */
     addMiddleware (middleware: Middleware): void;

    /**
     * Register a handler to be called when we dispatch that command.
     *
     * @param command A class command or a string with the name of the class command.
     * @param handler A function or a class with the method handleCommand declared.
     */
     registerHandler (
        command: CommandTypeClass | string,
        handler: HandlerFunctionType | HandlerType
    ): void | never;

    /**
     * Dispatch the command to the bus.
     *
     * @param command An instance of a class already declared in.
     * @param options It will be sent to all the middlewares an to the handler
     */
     dispatch<T> (command: CommandInstanceType, options?: T): any;

}
