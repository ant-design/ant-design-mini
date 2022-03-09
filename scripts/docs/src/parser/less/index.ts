import { render } from "less";
import * as csstree from "css-tree";
import { Resource } from "../../resource";
import { getContentByPath } from "../../utils/index";

export async function getCssVar(componentPath: string, resource: Resource, prefix = '--am') {

    const entryPath = `${componentPath}/index.less`;
    const content = getContentByPath(entryPath)
    if(!content) return
    // 1. 编译成 css 
    const res = await render(content, { paths: [componentPath] });
    // 2. 提取 css 变量
    const ast = csstree.parse(res.css);

    csstree.walk(ast, {
        enter(context: any) {
            if (context?.type === "Identifier") {
                const name = context.name as string;
                if (name.startsWith(prefix)) {
                    resource.addCss(name)
                }
            }
        }
    })

    return resource
}