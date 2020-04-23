import {DependencyInjection} from './DependencyInjection';

export interface ExternalServicesRegister {
    addOwnServicesDescriptionToOtherServiceRegister(container: DependencyInjection): void;
}
