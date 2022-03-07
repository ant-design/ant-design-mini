import { Resource } from "../";
import { parse, getCssVar, getDocsRes } from "../parser"
import { getConentByPath } from "../utils";
import { TCompResNode } from "../types";
import { marked } from 'marked'
import { writeContentByPath } from '../utils/index'
import {
    API_PREFIX,
    PROP_PREIFX,
    METHOD_PREFIX,
    CLASS_PREFIX,
    CSS_VAR_PREFIX,
    CSS_VAR_TABLE_PREFIX,
    PROP_TABLE_PREFIX,
    METHOD_TABLE_PREFIX,
    CLASS_TABLE_PREFIX,
    ComponentGroupMap
} from "./const";

// 生成 markdown
const fs = require("fs");
let node: TCompResNode = [];
let currentProcessComponent = ""
export async function read(entry = `${process.cwd()}/src`, deep = 1) {
    const exclude = ['_base', '_util', '.umi', 'mixins', 'style', '.umi-production', 'LoadingMini', 'TapModal', 'ImageIcon'];
    const filterDir = (fs.readdirSync(entry) as string[]).filter(item => !exclude.includes(item)).map(item => `${entry}/${item}`);

    for (let i = 0; i < filterDir.length; i++) {
        const item = filterDir[i];
        if (!fs.statSync(item).isDirectory()) return

        await read(item, deep + 1);

        const resource = new Resource();
        parse(item, resource);
        await getCssVar(item, resource);
        getDocsRes(item, resource);
        const componentName = parseComponentName(item)

        if (componentName) {
            node.unshift({ component: componentName, resource })
        }

        if (deep === 1) {
            if (componentName) {
                currentProcessComponent = componentName
                const mdFilePath = `${item}/index.md`;
                const conent = getConentByPath(mdFilePath)
                const newContent = genNewMarkdown(componentName as keyof typeof ComponentGroupMap, conent, node)
                writeContentByPath(mdFilePath, newContent)
            }
            // 重置一下
            node = []
        }
    }
}

function parseComponentName(filePath: string) {
    const componentName = filePath.match(/[^/]+$/)
    return componentName && componentName[0]
}

export function genNewMarkdown(componentName: keyof typeof ComponentGroupMap, oldConent: string | undefined, node: TCompResNode) {
    let prefixConent = "";
    let style = "\n\n";
    let cssVarContent = "";
    let classContent = ""
    if (oldConent) {
        const {
            prefixConent: oldPrefixConent,
            style: oldStyle,
            cssVarContent: oldCssVarContent,
            classContent: oldClassContent
        } = parseOldMarkdown(oldConent);
        prefixConent = oldPrefixConent;
        style += oldStyle;
        cssVarContent = genCssVarConent(node, oldCssVarContent);
        classContent = genClassConent(node, oldClassContent);
    } else {
        prefixConent = `---
nav:
  path: /components
group:
  title: ${ComponentGroupMap[componentName] || '其他'}
toc: false
---

# ${componentName}
${node[0].resource.desc}
`;
        cssVarContent = genCssVarConent(node);
        classContent = genClassConent(node);
    }

    const apiConent = genAPIConent(node)
    return prefixConent + apiConent + cssVarContent + classContent +  + style;
}


function genAPIConent(node: TCompResNode): string {
    let propContent = ""
    let methodContent = ""
    const shouldAddComponentName = node.length > 1

    node.forEach(item => {
        const prefix = `\n\n #### ${item.component}\n\n`;

        if (item.resource.api.prop.length > 0) {
            propContent += item.resource.api.prop.reduce((prev, cur) => {
                prev += `| ${cur.name} | ${cur.types} | - | ${cur.default || '-'} | ${cur.description} |\n`;
                return prev;
            }, shouldAddComponentName ? `${prefix}${PROP_TABLE_PREFIX}` : `${PROP_TABLE_PREFIX}`);
        }

        if (item.resource.api.method.length > 0) {
            methodContent += item.resource.api.method.reduce((prev, cur) => {
                prev += `| ${cur.name} | ${cur.description} | ${cur.types} |\n`;
                return prev;
            }, shouldAddComponentName ? `${prefix}${METHOD_TABLE_PREFIX}` : `${METHOD_TABLE_PREFIX}`);
        }

    })

    return `${API_PREFIX}\n${PROP_PREIFX}\n${propContent}\n${METHOD_PREFIX}\n${methodContent}\n`;
}

function genClassConent(
    node: TCompResNode,
    oldClass?: Record<string, { key: string, val: string }[]>): string {
    let classContent = ""

    const shouldAddComponentName = node.length > 1
    if (oldClass) {
        node.forEach(item => {
            const prefix = `\n\n #### ${item.component}\n\n`;
            const oldContent = oldClass[item.component]
            const contentMap = item.resource.class.reduce((prev, cur) => {
                prev[cur] = ""
                return prev
            }, {} as Record<string, string>)
            console.log(oldClass)
            if (oldContent) {
                for (let i = 0; i < oldContent.length; i++) {
                    for (let j = 0; j < item.resource.class.length; j++) {
                        if (item.resource.class[j] !== oldContent[i].key) {
                            j++
                        } else {
                            contentMap[oldContent[i].key] = oldContent[i].val
                        }
                    }
                }
                classContent += Object.keys(contentMap).reduce((prev, cur) => {
                    prev += `| ${cur} | ${contentMap[cur] || '-'} |\n`;
                    return prev;
                }, shouldAddComponentName ? `${prefix}${CLASS_TABLE_PREFIX}` : `${CLASS_TABLE_PREFIX}`)
            } else {
                classContent += item.resource.class.reduce((prev, cur) => {
                    prev += `| ${cur} | - |\n`;
                    return prev;
                }, shouldAddComponentName ? `${prefix}${CLASS_TABLE_PREFIX}` : `${CLASS_TABLE_PREFIX}`);
            }
        })
    } else {
        node.forEach(item => {
            const prefix = `\n\n #### ${item.component}\n\n`;

            if (item.resource.class.length > 0) {
                classContent += item.resource.class.reduce((prev, cur) => {
                    prev += `| ${cur} | - |\n`;
                    return prev;
                }, shouldAddComponentName ? `${prefix}${CLASS_TABLE_PREFIX}` : `${CLASS_TABLE_PREFIX}`);
            }
        })
    }
    console.log(classContent)
    return `${CLASS_PREFIX}${classContent}`
}

function genCssVarConent(
    node: TCompResNode,
    oldCssVar?: Record<string, { key: string, val: string }[]>
): string {
    let cssVarContent = CSS_VAR_PREFIX;
    const shouldAddComponentName = node.length > 1

    if (oldCssVar) {
        node.forEach(item => {
            const prefix = `\n\n #### ${item.component}\n\n`;
            const oldContent = oldCssVar[item.component];
            const contentMap = item.resource.cssVar.reduce((prev, cur) => {
                prev[cur] = ""
                return prev
            }, {} as Record<string, string>)

            if (oldContent) {
                for (let i = 0; i < oldContent.length; i++) {
                    for (let j = 0; j < item.resource.cssVar.length; j++) {
                        if (item.resource.cssVar[j] !== oldContent[i].key) {
                            j++
                        } else {
                            contentMap[oldContent[i].key] = oldContent[i].val
                        }
                    }
                }
                cssVarContent += Object.keys(contentMap).reduce((prev, cur) => {
                    prev += `| ${cur} | ${contentMap[cur] || '-'} |\n`;
                    return prev;
                }, shouldAddComponentName ? `${prefix}${CSS_VAR_TABLE_PREFIX}` : `${CSS_VAR_TABLE_PREFIX}`)
            } else {
                cssVarContent += item.resource.cssVar.reduce((prev, cur) => {
                    prev += `| ${cur} | - |\n`;
                    return prev;
                }, shouldAddComponentName ? `${prefix}${CSS_VAR_TABLE_PREFIX}` : `${CSS_VAR_TABLE_PREFIX}`);
            }
        })
    } else {
        node.forEach(item => {
            const prefix = `\n\n #### ${item.component}\n\n`;
            cssVarContent += item.resource.cssVar.reduce((prev, cur) => {
                prev += `| ${cur} | - |\n`;
                return prev;
            }, shouldAddComponentName ? `${prefix}${CSS_VAR_TABLE_PREFIX}` : `${CSS_VAR_TABLE_PREFIX}`);
        })
    }

    return cssVarContent
}

function parseOldMarkdown(content: string) {
    const token = marked.lexer(content);
    return {
        prefixConent: getPrefixContent(token),
        style: getStyleRaw(token),
        cssVarContent: getCssVarContent(token),
        classContent: getClassContent(token)
    }
}

function getStyleRaw(token: marked.TokensList) {
    return token.filter((item) => item.raw.trim().startsWith("<style>")).reduce((prev, cur) => (prev + cur.raw), "");
}

function getPrefixContent(token: marked.TokensList) {
    const idx = token.findIndex((item) => {
        return item.raw.includes('API')
    });
    if (idx) {
        return token.slice(0, idx).reduce((prev, cur) => (prev + cur.raw), "");
    }
    return "";
}

function getClassContent(token: marked.TokensList) {
    const start = token.findIndex((item) => {
        return item.raw.includes('样式类')
    });
    const end = token.findIndex((item) => {
        return item.raw.includes('CSS 变量')
    });
    if (start !== -1) {
        const target = end === -1 ? token.slice(start + 1) : token.slice(start + 1, end)
        return genMetaForClassAndCss(target)
    }
}

function getCssVarContent(token: marked.TokensList) {
    const idx = token.findIndex((item) => {
        return item.raw.includes('CSS 变量')
    });
    if (idx !== -1) {
        const target = token.slice(idx + 1)
        return genMetaForClassAndCss(target)
    }
}

function genMetaForClassAndCss(target: marked.Token[]) {
    let curComponent:string
    console.log(target)
    const isMultiComponent = target.some(item=>item.type==="heading")
    if(isMultiComponent){
        return target.reduce((prev, cur) => {
            if (cur.type === "heading") {
                curComponent = cur.raw.replace(/[\#\s\n]/g, "")
                if (!prev[curComponent]) prev[curComponent] = []
            } else if (cur.type === "table") {
                // 对于单个组件，是不会有组件标题的
                // 对于 Form/FormItem 这种，会有标题
                    cur.rows.forEach(row => {
                        const [cssVarName, cssVarVal] = row
                        prev[curComponent].push({ key: cssVarName.text, val: cssVarVal.text })
                    })
            }
            return prev
        }, {} as Record<string, { key: string, val: string }[]>)
    }else{
        return target.reduce((prev, cur) => {
            if (cur.type === "table") {
                    cur.rows.forEach(row => {
                        const [cssVarName, cssVarVal] = row
                        prev[currentProcessComponent].push({ key: cssVarName.text, val: cssVarVal.text })
                    })
            }
            return prev
        }, {[currentProcessComponent]:[]} as Record<string, { key: string, val: string }[]>)
    }

}