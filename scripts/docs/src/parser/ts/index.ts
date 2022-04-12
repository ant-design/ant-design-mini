import { parse, ParseResult } from "@babel/parser";
import traverse from "@babel/traverse";
import generate from '@babel/generator';
import * as t from '@babel/types';
import { IDocsAPI } from "../../types";
import { Resource } from "../../resource";
import { getContentByPath } from "../../utils";

const path_ = require("path")

export function getDocsRes(filePath: string, resource: Resource) {
    const content = getContentByPath(`${filePath}/props.d.ts`)
    if (!content) return
    const ast = parse(content, {
        sourceType: 'module',
        plugins: ['typescript']
    })
    const target = getDefaultPropsTypeName(ast)
    getExtends(`${filePath}/props.d.ts`, target, resource)
}

function getDefaultPropsTypeName(ast: ParseResult<t.File>) {
    let target = ""
    traverse(ast, {
        ExportDeclaration(path) {
            if (path.node.type === "ExportNamedDeclaration") {
                if (path.node.declaration?.type === "VariableDeclaration") {
                    if (path.node.declaration.declarations[0].id.type === "Identifier") {
                        if (path.node.declaration.declarations[0].id.typeAnnotation?.type === "TSTypeAnnotation") {
                            if (path.node.declaration.declarations[0].id.typeAnnotation?.typeAnnotation.type === "TSTypeReference") {
                                if (path.node.declaration.declarations[0].id.typeAnnotation?.typeAnnotation.typeParameters?.params[0].type === "TSTypeReference") {
                                    if (path.node.declaration.declarations[0].id.typeAnnotation?.typeAnnotation.typeParameters?.params[0].typeName.type === "Identifier") {
                                        target = path.node.declaration.declarations[0].id.typeAnnotation?.typeAnnotation.typeParameters?.params[0].typeName.name
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    return target
}


function getExtends(filePath: string, target: string, resource: Resource, genTypes?: string[]) {
    const content = getContentByPath(filePath) as string
    // TODO 类型精确一点
    // @ts-ignore 
    let genParams: any
    const ast = parse(content, {
        sourceType: 'module',
        plugins: ['typescript']
    })

    traverse(ast, {
        TSInterfaceDeclaration(path) {
            if (path.node.id.type === "Identifier") {

                if (path.node.id.name === target) {
                    // 组件的描述
                    const potentialDes = path.parentPath.node.leadingComments?.[0].value
                    if (potentialDes && !resource.desc) {
                        const { description } = processComment(potentialDes)
                        resource.addDesc(description)
                    }

                    // 获取泛型参数
                    genParams = path.node.typeParameters?.params.map((item, idx) => {
                        if (genTypes) {
                            return {
                                name: item.name,
                                value: genTypes[idx]
                            }
                        }
                        return {
                            name: item.name,
                            value: item.default
                        }
                    })

                    // 将泛型变量替换成真正的泛型的值
                    path.node.body.body.map(item => {
                        if (item.typeAnnotation?.start && item.typeAnnotation.end) {
                            // 泛型变量
                            if (item.typeAnnotation.typeAnnotation.type === "TSFunctionType") {
                                item.typeAnnotation.typeAnnotation.parameters.forEach(genItem => {
                                    // console.log(JSON.stringify(genItem))
                                    if (genItem.typeAnnotation?.type === "TSTypeAnnotation") {
                                        if (genItem.typeAnnotation.typeAnnotation.type === "TSTypeReference") {
                                            if (genItem.typeAnnotation.typeAnnotation.typeName.type === "Identifier") {
                                                const genName = genItem.typeAnnotation.typeAnnotation.typeName.name
                                                // @ts-ignore
                                                const node = genParams?.find(li => li.name === genName)

                                                if (node) {
                                                    let type
                                                    if (typeof node.value !== "string") {
                                                        type = content.slice(node.value.start, node.value.end) || content.slice(node.default.start, node.default.end)
                                                    } else {
                                                        type = node.value || content.slice(node.default.start, node.default.end)
                                                    }

                                                    // 设置泛型的变量名称
                                                    genItem.typeAnnotation.typeAnnotation.typeName.name = type
                                                }
                                            }
                                        }
                                    }
                                })
                                // 统一解析处理，生成解析后的信息
                                processTSProperty(item, resource)
                            } else {
                                // 属性
                                processTSProperty(item, resource)
                            }
                        }
                    })

                    // 获取继承的类型信息，antd-mini 中继承多个的情况一般不会出现
                    // dfs 一下
                    if (path.node.extends) {
                        path.node.extends.forEach(item => {
                            if (item.expression.type === "Identifier") {
                                const res = getExtendsPath(ast, item.expression.name, filePath)
                                if (!res) return
                                const genArray = item.typeParameters?.params.map(n => {
                                    if (n.type !== "TSTypeReference") {
                                        if (n.start && n.end) {
                                            return content.slice(n.start, n.end)
                                        }
                                    }
                                    return 'any'
                                })
                                getExtends(res, item.expression.name, resource, genArray)
                            }
                        })
                    }
                }
            }
        }
    })
}

/**
 * 
 * @param ast 解析的 ast 树
 * @param target 继承的类名
 * @param filePath 当前解析文件的名称
 * @returns 继承的类名所在的文件位置
 */
function getExtendsPath(ast: ParseResult<t.File>, target: string, filePath: string) {
    let res = ''
    traverse(ast, {
        Identifier(path) {
            if (path.node.name === target) {
                const binding = path.scope.getBinding(target)
                if (binding?.path.parentPath?.node.type === "ImportDeclaration") {
                    // 继承的类型是 import 进来的
                    const source = binding?.path.parentPath?.node.source.value
                    res = path_.join(filePath, '../', path_.join(source, '/index.d.ts'))
                } else if (path.node.type = "Identifier") {
                    // 继承的类型在同一个文件内
                    res = filePath
                }
            }
        }
    })
    return res
}


/**
 * 
 * 读取 API 的描述与默认值
 * @param node 需要处理的节点
 */
function processAPI(ast: ParseResult<t.File>, content: string): ['method' | 'prop', IDocsAPI] | void {

    const interfaceNode = ast.program.body[0]

    if (interfaceNode.type === "TSInterfaceDeclaration") {
        const api: IDocsAPI = {
            description: "",
            default: "",
            name: "",
            types: ""
        }
        let nodeType: 'method' | 'prop' = 'prop'
        const node = interfaceNode.body.body[0]
        if (node.leadingComments) {
            const comment = node.leadingComments[0].value;
            const { description, defaultValue } = processComment(comment)
            api.description = description
            api.default = defaultValue
        }

        if (node.type === 'TSPropertySignature') {

            if (node.key.type === "Identifier") {
                api.name = node.key.name
            }

            if (node.typeAnnotation?.typeAnnotation.type === "TSTypeLiteral") {

                const res = node.typeAnnotation.typeAnnotation.members.reduce((prev, cur) => {
                    if (cur.start && cur.end) {
                        prev += `${content.slice(cur.start, cur.end)} `
                    }
                    return prev
                }, " ")
                api.types = `{${res}}`
            } else if (node.typeAnnotation?.typeAnnotation.start && node.typeAnnotation?.typeAnnotation.end) {
                // markdown 文件中 | 要转义一下，否则渲染会有问题
                api.types = content.slice(node.typeAnnotation?.typeAnnotation.start, node.typeAnnotation?.typeAnnotation.end).replace(/\|/g, "&verbar;")
            }
            // TODO 考虑两种写法，可以通过 eslint 规定 只能 写 后一种类型
            // a: () => void
            // a() : void
            if (node.typeAnnotation?.typeAnnotation.type === "TSFunctionType") {
                nodeType = 'method'
            }
        }
        // console.log(JSON.stringify(node))
        return [nodeType, api]
    }

}

function processComment(comment: string) {
    let currentKey: 'description' | 'default';

    const res = comment.split("*").reduce((prev, cur) => {
        const lineContent = cur.trim()
        if (lineContent) {
            if (lineContent.startsWith('@description')) {
                currentKey = 'description'
            }
            if (lineContent.startsWith('@default')) {
                currentKey = 'default'
            }
            prev[currentKey] += lineContent
            return prev
        }
        return prev
    }, { description: "", default: "" } as { description: string, default: string })

    return {
        description: res.description.replace('@description', '').trim(),
        defaultValue: res.default.replace('@default', '').trim()
    }
}

function processTSProperty(ast: t.TSTypeElement, resource: Resource) {
    ast.trailingComments = null
    // 随便拼的，为了让 babel 解析
    // TODO 优化
    const newCode = `interface ITES { 
    ${generate(ast).code} 
    }`

    const res = processAPI(parse(newCode, {
        sourceType: 'module',
        plugins: ['typescript']
    }), newCode)

    if (res) {
        if (res[0] === "prop") resource.addApiProp(res[1])
        if (res[0] === "method") resource.addApiMethod(res[1])
    }
}
