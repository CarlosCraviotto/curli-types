import {InvalidArgumentException} from "./InvalidArgumentException";
import {InvalidArgumentsJson} from "./InvalidArgumentsJson";

export interface InvalidArgumentsException extends Error {
    getArgumentsExceptions(): string;

    toJson(): InvalidArgumentsJson;

    add(exception: InvalidArgumentException): void;
}