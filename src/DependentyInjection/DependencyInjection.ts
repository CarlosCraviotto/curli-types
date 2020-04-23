import {ExternalServicesRegister} from './ExternalServicesRegister';

export interface DependencyInjection {
    /**
     * Get the service
     * @param {string} name of the service
     * @returns {object} service
     */
    get(name: string): any;

    /**
     * Register external dependencies in the service dependence injection
     * @param {string} name The name of the service
     * @param {any} service The object|string|array|any thing we want register as a service.
     * @returns {void}
     */
    registerServiceBuilded<T>(name: string, service: T): void;

    /**
     * this method initialize all the services to call without instantiate.
     * @returns {void}
     */
    callAllServicesWithAutoInit(): void;

    /**
     * Return the Collection of services in that moment
     * @returns {array} The Collection of services.
     */
    getServicesCollection(): Array<string>;

    registerService<T extends {}>(
        serviceName: string,
        dependencies: Array<string>,
        serviceFunc: T,
        autoInit?: boolean,
        injectDependencies?: object
    ): void;

    removeRegisteredServiceDescriptions(serviceName: string): void;

    editRegisteredServiceDescriptions<T>(serviceName: string, callback: T): void;

    registerExternalServicesRegister(
        externalServicesRegister: ExternalServicesRegister
    ): void;
}
