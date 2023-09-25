export type Children = Node | string;
export interface Node {
  tagName: string;
  properties: Record<string, string | number | boolean>;
  children: Children;
}

export function h(tagName: string, props: any, ...children: any[]) {
  return {
    tagName,
    properties: props,
    children,
  };
}

export function toHtml(vNode: Node | Children | Array<Node | Children>) {
  if (typeof vNode === 'string') {
    return vNode;
  }
  if (Array.isArray(vNode)) {
    return vNode.map((o) => toHtml(o)).join('');
  }
  let props = '';
  if (vNode.properties) {
    props = Object.keys(vNode.properties)
      .map((key) => {
        const value = vNode.properties[key];
        if (value === true) {
          return `${key}`;
        }
        return `${key}="${vNode.properties[key]}"`;
      })
      .join(' ');
  }

  if (Array.isArray(vNode.children) && vNode.children.length > 0) {
    return `<${vNode.tagName} ${props}>${vNode.children
      .map((o) => toHtml(o))
      .join('')}</${vNode.tagName}>`;
  }

  return `<${vNode.tagName} ${props} />`;
}
