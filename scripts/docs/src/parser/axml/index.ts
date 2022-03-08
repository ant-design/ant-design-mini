export * from "./parse";
import { Parser } from "./parse";
import { getConentByPath } from "../../utils/index";
import { Resource } from "../..";

export function parse(filePath: string, resource:Resource) {
    const content = getConentByPath(`${filePath}/index.axml`)
    if(!content) return
    return new Parser(content, resource)
}
