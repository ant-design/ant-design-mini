/** @format */
import { Parser } from "./parse";
export function text(parser: Parser) {
  const start = parser.index++;

  while (parser.index < parser.template.length && !parser.startWith("<")) {
    parser.index++;
  }

  const node = {
    start,
    end: parser.index,
    type: "Text",
    content: parser.template.slice(start, parser.index),
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  parser.getCurrentNode().children.push(node);
}
