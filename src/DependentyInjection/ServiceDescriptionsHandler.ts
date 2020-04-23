
import {ExternalServicesRegister} from './ExternalServicesRegister';

export interface ServiceDescriptionsHandler {

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
