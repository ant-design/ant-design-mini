/** @format */

export type TAttribute = {
  attrName: string;
  attrValue: string | true | undefined;
  start: number;
  end: number;
};

export interface INode {
  tagName: string | undefined;
  start: number;
  end: number | undefined;
  children: INode[];
  content: string | undefined;
  attribute: TAttribute[];
}

export interface IParser {
  template: string;
  stack: INode[];
  index: number;
  fragment: INode;
  eat: (str: string) => boolean;
  match: (reg: RegExp) => string | undefined;
  getCurrentNode: () => INode;
  readBefore: (reg: RegExp) => undefined | string;
  eatWhiteSpace: () => void;
  startWith: (str: string) => boolean;
}
