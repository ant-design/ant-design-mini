import { Parser, Node } from "acorn";

export function parseExpressionAt(input: string, pos: number): Node {
  return Parser.parseExpressionAt(input, pos, {
    sourceType: "module",
    ecmaVersion: 12,
    locations: true,
  });
}
