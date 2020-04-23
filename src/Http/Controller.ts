
import {DependencyInjection} from "../DependentyInjection/DependencyInjection";
import {Request} from "./Request";
import {DTOType} from "../Bus/DTOType";
import {SchemaRequestType} from "./SchemaRequestType";


export interface Controller {

    /**
     * The route name, used to refer to it and build it.
     * Must be implemented.
     */
    ROUTE_NAME: string;

    /**
     * The route: /api/user/:id
     * Must be implemented.
     */
    ROUTE: string;

    /**
     * The http method of the route: GET, POST, PUT, DELETE, PATCH
     * Must be implemented.
     */
    HTTP_METHOD: string;

    API_VERSION?: string;

    ROUTE_DESCRIPTION?: string ;

    new(container: DependencyInjection): Controller;

     processRequest(request: Request): Promise<Response>;

     getRouteName?(): string;

     getRoute?(): string;

     getHttpMethod?(): string;

     getHttpMethodLowerCase?(): string;

     getApiVersion?(): string;

     getRouteDescription?(): string;

    /**
     * We use it to validate, get the data and declare it in the open api page/
     */
     getRequestSchema?(): SchemaRequestType|undefined;

    /**
     * Should return the schema for the response, with it we wil build the open api page.
     */
     getResponseSchema?(): object|undefined;

    /**
     * Return an object than the router handle will fill up with the data from the request, all the properties must be public
     */
     getCommand?(): DTOType|undefined;

    /**
     * Return the roles we will accept for this route base in the user roles
     */
     getRoles?(): Array<string>|undefined;
}