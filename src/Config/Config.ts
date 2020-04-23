import {ConfigFilesPathModel} from './ConfigFilesPathModel';

export interface Config {
    addNewPath(file: ConfigFilesPathModel): any;

    get(configName: string): any;

    getAll(): { [keys: string]: any };
}
