import {InvalidArgumentJson} from "./InvalidArgumentJson";

export type InvalidArgumentsJson = {
    message: string,
    invalidArguments: Array<InvalidArgumentJson>,
}