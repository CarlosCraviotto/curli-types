import {BaseController} from "./BaseController";
import {Request} from "./Request/Request";
import {HTTP_CODES, NOT_IMPLEMENTED} from "./ControllerConsts";
import {RequestBuilder} from "./Request/RequestBuilder";
import {HttpException} from "./Exception/HttpException";

export interface RouterService {

    /**
     * Create a instance of the controller class
     * and register it into the service.
     *
     * @param ControllerClass
     */
     addControllerClass(ControllerClass: new (c: {get: (p: string) => void}) => any): void;
}