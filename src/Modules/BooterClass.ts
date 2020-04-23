import {CurliApplication} from '../Application';

export interface BooterClass
{
    new (app: CurliApplication): any;
}
