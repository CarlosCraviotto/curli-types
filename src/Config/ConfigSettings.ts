import {ConfigFilesPathModel} from './ConfigFilesPathModel';

export interface ConfigSettings {
    environment: string;
    filesPaths: Array<ConfigFilesPathModel> | ConfigFilesPathModel;
    environments?: Array<string>;
    forceValidateSchemas?: boolean;
}
