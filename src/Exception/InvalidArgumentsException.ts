import {InvalidArgumentException} from "./InvalidArgumentException";
import {InvalidArgumentsJson} from "./InvalidArgumentsJson";

export interface InvalidArgumentsException extends Error {
    getArgumentsExceptions(): Array<InvalidArgumentException>;

    toJson(): InvalidArgumentsJson;

    add(exception: InvalidArgumentException): void;

    length(): number;
}