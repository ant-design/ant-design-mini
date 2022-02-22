/** @format */
import { Node as acronNode } from "acorn";

export type TAttribute = {
  attrName: string;
  attrValue: boolean | undefined | INode[];
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
  expression?: acronNode;
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

/**
 * 生成 markdown 文件的资源
 */
export interface IResource {
  slot: { key: string, value: string }[][],
  class: string[],
  addSlot: (val: { key: string, value: string }[]) => void
  addClass: (val: string[]) => void,
  reset:()=>void
}