/** @format */
import { Node as acronNode } from "acorn";
import {Resource} from "../resource";

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

export interface IDocsAPI {
  description: string,
  default: string,
  name: string,
  types: string
}

// export interface IDocsRes {
//   description: string | undefined,
//   apis: IDocsAPI[] | undefined
// }

export interface IDocsRes {
  title: string;
  desc: string;
  api: {
    prop?: IDocsAPI[],
    method?: IDocsAPI[]
  },
  slot: Record<string,string>[][],
  class: string[],
  cssVar: string[],
  tips?: string[]
}

export type TCompResNode = {component: string, resource:Resource}[]
