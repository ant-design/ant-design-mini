/** @format */
import { text } from "./text";
import { tag } from "./tag";
import { Parser } from "./parse";
import { mustache } from "./mustache";

export function fragment(
  parser: Parser
): typeof tag | typeof mustache | typeof text {
  if (parser.startWith("<")) {
    return tag;
  }
  if (parser.startWith("{{")) {
    return mustache;
  }
  return text;
}
