export * from "./parse";
import { Parser } from "./parse";

export function parse(template: string) {
    return new Parser(template)
}
