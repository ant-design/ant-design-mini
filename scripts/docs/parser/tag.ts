/** @format */
import { Parser } from "./parse";
import type { INode, TAttribute } from "./types/index";

export function tag(parser: Parser) {
  const parentNode = parser.getCurrentNode();
  const start = parser.index++;

  if (parser.eat("!--")) {
    parser.readBefore(/-->/);
    parser.eat("-->");
    parentNode.children.push({
      start: start,
      end: parser.index,
      tagName: "Comment",
      content: parser.template.slice(start, parser.index),
      children: [],
      attribute: [],
    });

    return;
  }

  const is_close_tag = parser.eat("/");
  const tagName = parser.readBefore(/[\s/>]/);
  parser.eatWhiteSpace();
  if (is_close_tag) {
    parser.eat(">");
    parentNode.end = parser.index;
    parentNode.content = parser.template.slice(parentNode.start, parser.index);
    parser.stack.pop();
    return;
  }

  const attrArray: TAttribute[] = [];
  let attribute: TAttribute | null;
  while ((attribute = parseAttr(parser))) {
    attrArray.push(attribute);
    parser.eatWhiteSpace();
  }

  parser.eatWhiteSpace();

  const is_self_closing = parser.eat("/");
  parser.eat(">");

  const node: INode = {
    start,
    end: parser.index,
    tagName,
    content: parser.template.slice(start, parser.index),
    children: [],
    attribute: attrArray,
  };

  if (!is_self_closing) {
    parser.stack.push(node);
  }
  parentNode.children.push(node);
}

function parseAttr(parser: Parser): TAttribute | null {
  const start = parser.index;
  const attrName = parserAttrName(parser);
  if (!attrName) return null;
  const attrValue = parseAttrValue(parser);
  return {
    start,
    attrName,
    attrValue,
    end: parser.index,
  };
}

function parserAttrName(parser: Parser) {
  return parser.readBefore(/[=\s/>]/);
}

function parseAttrValue(parser: Parser) {
  if (parser.eat("=")) {
    return parser.readBefore(/[\s>/\r\n\t]/);
  } else {
    return true;
  }
}
