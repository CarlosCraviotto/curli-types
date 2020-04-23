import {ExpressRequestType} from './ExpressRequestType';

export interface Request {

    getExpressRequest(): ExpressRequestType;

    getSameContentTypeThanRequestHeader(): object;

    getExpressResponse(): object;

    getHeaders(): object;

    getCommand(): object | undefined;

    hasUser(): boolean;

    getUser(): object | undefined;
}
