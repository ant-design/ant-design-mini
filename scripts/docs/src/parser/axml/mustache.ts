/** @format */
import { Parser } from "./parse";
import type { INode } from "../../types/index";
import { parseExpressionAt } from "./acorn";

export function mustacheCore(parser: Parser): INode {
  const start = parser.index++;
  parser.eatWhiteSpace();
  while (parser.index < parser.template.length) {
    if (parser.template[parser.index++] === "}" && parser.template[parser.index++] === "}") {

      break;
    }
  }

  const content = parser.template.slice(start, parser.index);

  const expression = readExpression(content.slice(2, content.length - 2));

  return {
    tagName: "Mustache",
    start,
    end: parser.index,
    children: [],
    attribute: [],
    content,
    expression,
  };
}

export function mustache(parser: Parser) {
  parser.getCurrentNode().children.push(mustacheCore(parser));
}

export function readExpression(template: string) {
  try {
    const expression = parseExpressionAt(template, 0);
    return expression;
  } catch (e) {
    console.log("acorn parse error")
  }
}
