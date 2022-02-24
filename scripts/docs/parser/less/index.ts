import { render } from "less";
import * as csstree from "css-tree";
import { Resource } from "../../resource";

export async function getCssVar(componentPath: string, resource: Resource, prefix = '--am') {
    const fs = require("fs");
    const entryPath = `${componentPath}/index.less`;
    const content = fs.readFileSync(entryPath, 'utf-8') as string;
    // 1. 编译成 css 
    const res = await render(content, { paths: [componentPath] });
    // 2. 提取 css 变量
    const ast = csstree.parse(res.css);

    csstree.walk(ast, {
        enter(context: any) {
            if (context?.type === "Identifier") {
                const name = context.name as string;
                if (name.startsWith(prefix)) {
                    resource.assCss(name)
                }
            }
        }
    })

    return resource
}