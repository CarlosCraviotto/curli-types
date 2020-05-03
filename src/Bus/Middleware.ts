
import {CommandInstanceType} from './CommandInstanceType';
import {QueryInstanceType} from './QueryInstanceType';
import {NextFunctionType} from './NextFunctionType';

/**
 * Interface for a middleware
 */
export interface Middleware {

    /**
     * Should implement the logic for the middleware and call function next with the command|query|result
     *
     * @param request
     * @param next
     * @param options
     */
     execute <T> (
         request: CommandInstanceType | QueryInstanceType,
         next: NextFunctionType,
         options?: T
    ): any;

}
