export * from "./parse";
import { Parser } from "./parse";
import { getConentByPath } from "../../utils/index";

export function parse(filePath: string) {
    const content = getConentByPath(`${filePath}/index.axml`)
    if(!content) return
    return new Parser(content)
}
