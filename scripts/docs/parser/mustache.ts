/** @format */
import { Parser } from "./parse";
import type { INode } from "./types/index";
import { parseExpressionAt } from "./acorn";

export function mustache(parser: Parser) {
  const start = parser.index++;
  parser.eatWhiteSpace();
  while (parser.index < parser.template.length) {
    if (parser.template[parser.index++] === "}") {
      break;
    }
  }

  const content = parser.template.slice(start, parser.index);

  const expression = readExpression(content.slice(1, content.length - 1), 0);

  const node: INode = {
    tagName: "Mustache",
    start,
    end: parser.index,
    children: [],
    attribute: [],
    content,
    expression,
  };
  parser.getCurrentNode().children.push(node);
}

export function readExpression(template: string, index: number) {
  const expression = parseExpressionAt(template, index);
  return expression;
}
