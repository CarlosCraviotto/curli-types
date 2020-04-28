import {DependencyInjection} from '../DependentyInjection';

export interface HandleContainer {
    /**
     * Set the service container (see curli-di).
     * We are doing it from the ServiceModulesDefiner
     *
     * @param container
     */
    setContainer(container: DependencyInjection): void;

    /**
     * Get the service container (see curli-di).
     */
    getContainer(): DependencyInjection | never;
}
