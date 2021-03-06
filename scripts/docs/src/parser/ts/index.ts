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
    // TODO ??????????????????
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
                    // ???????????????
                    const potentialDes = path.parentPath.node.leadingComments?.[0].value
                    if (potentialDes && !resource.desc) {
                        const { description } = processComment(potentialDes)
                        resource.addDesc(description)
                    }

                    // ??????????????????
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

                    // ?????????????????????????????????????????????
                    path.node.body.body.map(item => {
                        if (item.typeAnnotation?.start && item.typeAnnotation.end) {
                            // ????????????
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

                                                    // ???????????????????????????
                                                    genItem.typeAnnotation.typeAnnotation.typeName.name = type
                                                }
                                            }
                                        }
                                    }
                                })
                                // ?????????????????????????????????????????????
                                processTSProperty(item, resource)
                            } else {
                                // ??????
                                processTSProperty(item, resource)
                            }
                        }
                    })

                    // ??????????????????????????????antd-mini ??????????????????????????????????????????
                    // dfs ??????
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
 * @param ast ????????? ast ???
 * @param target ???????????????
 * @param filePath ???????????????????????????
 * @returns ????????????????????????????????????
 */
function getExtendsPath(ast: ParseResult<t.File>, target: string, filePath: string) {
    let res = ''
    traverse(ast, {
        Identifier(path) {
            if (path.node.name === target) {
                const binding = path.scope.getBinding(target)
                if (binding?.path.parentPath?.node.type === "ImportDeclaration") {
                    // ?????????????????? import ?????????
                    const source = binding?.path.parentPath?.node.source.value
                    res = path_.join(filePath, '../', path_.join(source, '/index.d.ts'))
                } else if (path.node.type = "Identifier") {
                    // ????????????????????????????????????
                    res = filePath
                }
            }
        }
    })
    return res
}


/**
 * 
 * ?????? API ?????????????????????
 * @param node ?????????????????????
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
                // markdown ????????? | ??????????????????????????????????????????
                api.types = content.slice(node.typeAnnotation?.typeAnnotation.start, node.typeAnnotation?.typeAnnotation.end).replace(/\|/g, "&verbar;")
            }
            // TODO ????????????????????????????????? eslint ?????? ?????? ??? ???????????????
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
    // ???????????????????????? babel ??????
    // TODO ??????
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
