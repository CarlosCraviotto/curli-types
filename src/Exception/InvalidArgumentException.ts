import {InvalidArgumentJson} from "./InvalidArgumentJson";

export interface InvalidArgumentException extends Error {
    getArgumentName(): string;

    toJson(): InvalidArgumentJson;
}