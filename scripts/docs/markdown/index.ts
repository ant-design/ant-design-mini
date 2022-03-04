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
    PROP_TABLE_PREFIX,
    METHOD_TABLE_PREFIX,
    CLASS_TABLE_PREFIX,
    ComponentGroupMap
} from "./const";

// 生成 markdown
const fs = require("fs");
let node: TCompResNode = [];

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
    let prefixConent = ""
    let style = "\n\n"
    if (oldConent) {
        const { prefixConent: oldPrefixConent, style: oldStyle } = parseOldMarkdown(oldConent);
        prefixConent = oldPrefixConent
        style += oldStyle
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
    }

    const autoContent = genAutoContent(node)
    const newContent = prefixConent + autoContent + style;
    console.log(newContent)
    return newContent
}




function genAutoContent(node: TCompResNode) {
    const apiConent = genAPIConent(node)
    const classContent = genClassConent(node)
    const cssVarContent = genCssVarConent(node)
    return apiConent + classContent + cssVarContent
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

function genClassConent(node: TCompResNode): string {
    let classContent = ""

    const shouldAddComponentName = node.length > 1

    node.forEach(item => {
        const prefix = `\n\n #### ${item.component}\n\n`;

        if (item.resource.class.length > 0) {
            classContent += item.resource.class.reduce((prev, cur) => {
                prev += `| ${cur} | - |\n`;
                return prev;
            }, shouldAddComponentName ? `${prefix}${CLASS_TABLE_PREFIX}` : `${CLASS_TABLE_PREFIX}`);
        }
    })

    return `${CLASS_PREFIX}${classContent}`

}

/**
 * @todo 组件中 css 变量还太少了
 */
function genCssVarConent(node: TCompResNode): string {
    return ""
}

function parseOldMarkdown(content: string) {
    const token = marked.lexer(content);
    return { prefixConent: getPrefixContent(token), style: getStyleRaw(token) }
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

