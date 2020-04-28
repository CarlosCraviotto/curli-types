import {CurliApplication, DependencyInjection, Module, ModulesDefiner} from './../../';

export class CurliApplicationMock implements CurliApplication {

    initialConfiguration: { [p: string]: any } | undefined;

    private container: DependencyInjection | undefined;

    addListener (_event: string | symbol, _listener: (...args: any[]) => void): this {
        return this;
    }

    addModule (_module: Module): void {
    }

    addModulesDefiner (_modulesDefiner: ModulesDefiner): void {
    }

    emit(_eventName: string): boolean;
    emit(_event: string | symbol, ...args: any[]): boolean;
    emit (_eventName: string | symbol, ..._args: any[]): boolean {
        return false;
    }

    eventNames (): Array<string | symbol> {
        return [];
    }

    getConfig (): { [p: string]: any } {
        return {};
    }

    getContainer (): DependencyInjection {
        return <DependencyInjection> this.container;
    }

    getEnvironment (): string {
        return '';
    }

    getEnvironmentsSupported (): Array<string> {
        return [];
    }

    getExpressApp (): object {
        return {};
    }

    getMaxListeners (): number {
        return 0;
    }

    initServer (_callback?: any): void {
    }

    listenerCount (_type: string | symbol): number {
        return 0;
    }

    listeners (_event: string | symbol): Function[] {
        return [];
    }

    log (_message: string): void {
    }

    off (_event: string | symbol, _listener: (...args: any[]) => void): this {
        return this;
    }

    on (_event: string | symbol, _listener: (...args: any[]) => void): this {
        return this;
    }

    once (_event: string | symbol, _listener: (...args: any[]) => void): this {
        return this;
    }

    prependListener (_event: string | symbol, _listener: (...args: any[]) => void): this {
        return this;
    }

    prependOnceListener (_event: string | symbol, _listener: (...args: any[]) => void): this {
        return this;
    }

    rawListeners (_event: string | symbol): Function[] {
        return [];
    }

    removeAllListeners (_event?: string | symbol): this {
        return this;
    }

    removeListener (_event: string | symbol, _listener: (...args: any[]) => void): this {
        return this;
    }

    setConfig (_all: { [p: string]: any }): void {
    }

    setContainer (container: DependencyInjection): void {
        this.container = container;
    }

    setMaxListeners (_n: number): this {
        return this;
    }

    setMiddleware (_callable: (req: any, res: any, next: () => any) => void): object {
        return {};
    }

    startApp (): void {
    }

}
