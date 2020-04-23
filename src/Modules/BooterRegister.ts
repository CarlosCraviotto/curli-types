import {BooterClass} from './BooterClass';

export interface BooterRegister {
    registerBooter<T>(BooterClass: BooterClass, options?: T): void;
}
