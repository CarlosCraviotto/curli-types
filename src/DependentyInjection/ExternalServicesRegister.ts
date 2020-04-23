import {DependencyInjection} from './DependencyInjection';
import {ServiceDescriptionsHandler} from './ServiceDescriptionsHandler';

export interface ExternalServicesRegister extends ServiceDescriptionsHandler{
    addOwnServicesDescriptionToOtherServiceRegister(container: DependencyInjection): void;
}
