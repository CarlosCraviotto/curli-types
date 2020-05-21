import {InvalidArgumentsJson} from "./InvalidArgumentsJson";

export interface InvalidArgumentException extends Error {
    getArgumentsExceptions(): string;

    toJson(): InvalidArgumentsJson;

    add(exception: InvalidArgumentException): void;
}