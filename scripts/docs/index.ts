import { Parser } from "./parser"

export * from "./parser"

export function parse (template:string) {
    Parser.resource.reset()
    const parser = new Parser(template)
    return parser
}
