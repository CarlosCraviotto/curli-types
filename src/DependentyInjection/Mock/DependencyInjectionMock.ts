import {DependencyInjection} from './../DependencyInjection';

export class DependencyInjectionMock implements DependencyInjection {

    callAllServicesWithAutoInit (): void {
    }

    editRegisteredServiceDescriptions<T> (_serviceName: string, _callback: T): void {
    }

    get (_name: string): any {
    }

    getServicesCollection (): Array<string> {
        return [];
    }

    registerExternalServicesRegister (_externalServicesRegister: any): void {
    }

    registerService<T extends {}> (_serviceName: string, _dependencies: Array<string>, _serviceFunc: T, _autoInit?: boolean, _injectDependencies?: object): void {
    }

    registerServiceBuilded<T> (_name: string, _service: T): void {
    }

    removeRegisteredServiceDescriptions (_serviceName: string): void {
    }

}
