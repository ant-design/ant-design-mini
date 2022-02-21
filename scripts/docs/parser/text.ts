/** @format */
import { Parser } from "./parse";
export function text(parser: Parser, tag = false) {
  const start = parser.index++;

  while (
    parser.index < parser.template.length &&
    !parser.startWith("<") &&
    !parser.startWith("{")
  ) {
    parser.index++;
  }

  if (tag) {
    return;
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
