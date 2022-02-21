/** @format */
import { INode, IParser } from "./types/index";
import { fragment } from "./fragment";
export class Parser implements IParser {
  template: string;
  stack: INode[];
  index: number;
  fragment: INode;
  constructor(template: string) {
    this.template = template;
    this.index = 0;
    this.fragment = {
      tagName: "html",
      start: 0,
      children: [],
      end: this.template.length,
      attribute: [],
      content: this.template,
    };
    this.stack = [this.fragment];

    this.eatWhiteSpace();
    let state = fragment;

    while (this.index < this.template.length) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state = state(this) || fragment;
    }
  }

  getCurrentNode() {
    return this.stack[this.stack.length - 1];
  }
  eat(str: string) {
    const res = this.startWith(str);
    if (res) {
      this.index += str.length;
      return true;
    }
    return false;
  }
  match(reg: RegExp) {
    const res = this.template.slice(this.index).match(reg);
    if (res && res[1]) {
      return res[1];
    }
  }
  startWith(str: string) {
    return this.template.slice(this.index, this.index + str.length) === str;
  }
  readBefore(reg: RegExp) {
    const start = this.index;
    const match = this.template.slice(start).match(reg);
    if (match?.index) {
      this.index += match.index;
      return this.template.slice(start, this.index);
    }
  }
  eatWhiteSpace() {
    while (
      this.index < this.template.length &&
      /[ \t\r\n]/.test(this.template[this.index])
    ) {
      this.index++;
    }
  }
}
