import { Parser } from "./parse";
import { Node } from "acorn"
import type { INode, TAttribute } from "../../types/index";
import { mustacheCore } from "./mustache";
import { textTag } from "./text";
import { parse } from "path";

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

  // 自己定义了名为 slot 的组件？概率几乎为 0....
  if (tagName === 'slot') {
    let slotDesc = ""
    // 关注与 slot 相邻的注释
    // example: 
    // <!-- comment -->
    // <slot/>
    const maybeCommentNodeIdx = parser.getCurrentNode().children.findIndex(node => node.tagName === "Comment");
    if (maybeCommentNodeIdx > -1) {
      const isCommentNode = parser.getCurrentNode().children.every((node, idx) => {
        if (idx <= maybeCommentNodeIdx) return true
        return node.tagName === "Text" && node.content && /\s|[\r\n]/g.test(node.content)
      })

      if (isCommentNode) {
        const commentNode = parser.getCurrentNode().children[maybeCommentNodeIdx]
        slotDesc = commentNode.content?.replace("<!--", "").replace("-->", "").trim() || ""
      }
    }

    // 只收集具名插槽和作用域插槽
    const slot = attrArray.reduce((prev, cur) => {
      // 只考虑当前组件库中最简单的写法
      if (Array.isArray(cur.attrValue) && cur.attrValue[0].content) {
        prev.push({
          key: cur.attrName,
          value: cur.attrValue[0].content,
          decs: slotDesc
        })
      }
      return prev
    }, [] as { key: string, value: string, decs: string }[])
    parser.resource.addSlot(slot)
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

  const attrValue = parseRawAttrValue(parser)

  if (typeof attrValue !== "boolean") {
    const res = collectClass(attrName, attrValue).filter(item => item !== "")
    parser.resource.addClass(res)
  }

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

function parseRawAttrValue(parser: Parser) {
  if (parser.eat("=")) {
    parser.eatWhiteSpace();
    return parseAttrValue(parser)
  } else {
    return true;
  }
}

function parseAttrValue(parser: Parser): INode[] {
  let close = ''
  if (parser.eat('"')) {
    close = '"'
  } else if (parser.eat("'")) {
    close = "'"
  }

  parser.eatWhiteSpace()
  const attrValue: INode[] = []
  while (!parser.eat(close)) {
    attrValue.push(textTag(parser))
    parser.eatWhiteSpace();
    if (parser.startWith('{{')) {
      attrValue.push(mustacheCore(parser))
    }
  }
  return attrValue
}


function collectClass(key: string, value: INode[]): string[] {
  if (key === 'class' || key === 'className') {
    return processClassValue(value)
  }
  return []
}
function processClassValue(value: INode[]): string[] {
  const res = value.reduce((prev, cur) => {
    if (cur.tagName === 'Text' && cur.content) {
      // 换行
      prev.push(cur.content.replace(/\n/g, "").trim())
    }

    if (prev.length > 1 && prev[prev.length - 1].endsWith('-') && cur.tagName === 'Mustache' && cur.content) {
      prev.push(`${prev[prev.length - 1]}${cur.content.replace(/\n/g, "").trim()}`)
    }
    if (cur.expression && cur.expression.type == "ConditionalExpression") {
      prev.push(...processExpression(cur.expression))
    }
    return prev
  }, [] as string[])

  return res
}

function processExpression(expression: Node) {
  const res: string[] = []

  function dfs(expression: Node) {
    if (!expression) return
    // @ts-ignore
    if (expression.type === 'Literal' && expression.value) {
      // @ts-ignore
      res.push(expression.value)
    }
    // @ts-ignore
    if (expression.type === "ConditionalExpression") dfs(expression.consequent)
    // @ts-ignore
    if (expression.type === "ConditionalExpression") dfs(expression.alternate)
  }
  dfs(expression)

  return res
}