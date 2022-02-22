/** @format */
import { Parser } from "./parse";
import { INode } from "../../types";
export function textTag(parser: Parser):INode {
  const start = parser.index;
  while (
    parser.index < parser.template.length &&
    !parser.startWith("'") &&
    !parser.startWith('"') &&
    !parser.startWith("{{") &&
    !parser.startWith(" ") 
  ) {
    parser.index++;
  }

  return {
    tagName: "Text",
    start,
    end: parser.index,
    content: parser.template.slice(start, parser.index),
    children: [],
    attribute: []
  };
}

export function text(parser: Parser) {
  const start = parser.index++;
  while (
    parser.index < parser.template.length &&
    !parser.startWith("<") &&
    !parser.startWith("{{")
  ) {
    parser.index++;
  }
  const node:INode={
    tagName: "Text",
    start,
    end: parser.index,
    content: parser.template.slice(start, parser.index),
    children: [],
    attribute: []
  };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  parser.getCurrentNode().children.push(node);
}
