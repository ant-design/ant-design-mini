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
  if (!vNode) return '';
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
    let prefix = '';
    if (vNode.tagName === 'text') {
      prefix = `<!-- display: inline -->`;
    }
    return `${prefix}<${vNode.tagName} ${props}>${vNode.children
      .filter(Boolean)
      .map((o) => {
        if (typeof o === 'string' && vNode.tagName === 'text') {
          return o.trim();
        }
        return o;
      })
      .map((o) => toHtml(o))
      .join('')}</${vNode.tagName}>`;
  }

  return `<${vNode.tagName} ${props} />`;
}
