export * from "./parse";
import { Parser } from "./parse";
import { getContentByPath } from "../../utils/index";
import { Resource } from "../..";

export function parse(filePath: string, resource:Resource) {
    const content = getContentByPath(`${filePath}/index.axml`)
    if(!content) return
    return new Parser(content, resource)
}
