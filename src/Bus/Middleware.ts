
import {CommandInstanceType} from './CommandInstanceType';
import {NextFunctionType} from './NextFunctionType';

/**
 * Interface for a middleware
 */
export interface Middleware {

    /**
     * Should implement the logic for the middleware and call function next with the command|result
     *
     * @param command
     * @param next
     * @param options
     */
     execute <T> (command: CommandInstanceType, next: NextFunctionType, options?: T): any;

}
