import { parse, ParseResult } from "@babel/parser"
import traverse from "@babel/traverse"
import generate from '@babel/generator';
import * as t from '@babel/types';

const fs = require("fs")
const path_ = require("path")

/**
 * 
 * @param filePath props.d.ts 路径
 * @returns 
 */
function getContentByPath(filePath: string): string {
    return fs.readFileSync(filePath, 'utf-8')
}


export function generateAst(filePath: string) {
    const content = getContentByPath(filePath)
    const ast = parse(content, {
        sourceType: 'module',
        plugins: ['typescript']
    })
    const target = getDefaultPropsTypeName(ast)
    // console.log(JSON.stringify(ast.program.body[1]))
    getExtends(filePath, target)

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

function getExtends(filePath: string, target: string) {
    const content = fs.readFileSync(filePath, 'utf-8')

    const ast = parse(content, {
        sourceType: 'module',
        plugins: ['typescript']
    })

    const extend: string[] = []
    const componentInfo: {
        componentIntro?: string,
        docsInfo?: {
            type?: string,
            name?: string,
            tsTypes?: string,
            description?: string,
            default?: string,
        }[]
    } = {}
    traverse(ast, {
        TSInterfaceDeclaration(path) {
            if (path.node.id.type === "Identifier") {
                if (path.node.id.name === target) {
                    if (path.parentPath.node.leadingComments) {
                        componentInfo.componentIntro = path.parentPath.node.leadingComments[0].value.split('*').reduce((prev, cur) => {
                            const lineContent = cur.trim()
                            if (lineContent && !lineContent.startsWith('eslint')) {
                                prev += lineContent
                            }
                            return prev
                        }, '').replace('@description', '').trim()
                    }

                    const apis = path.node.body.body.map(item => {
                        const docsInfo: {
                            type?: string,
                            name?: string,
                            tsTypes?: string,
                            description?: string,
                            default?: string,
                        } = {}

                        // 获取 属性、方法描述，默认值
                        if (item.leadingComments) {
                            const comment = item.leadingComments[0].value;
                            let currentKey: 'description' | 'default';
                            const lines = comment.split("*").reduce((prev, cur) => {
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
                            docsInfo.description = lines.description.replace('@description', '').trim()
                            docsInfo.default = lines.default.replace('@default', '').trim()
                        }

                        // TSPropertySignature 属性
                        if (item.type === "TSPropertySignature") {
                            docsInfo.type = "property"
                            if (item.key.type === "Identifier") {
                                docsInfo.name = item.key.name
                            }
                        }

                        // TODO 方法
                        // if(item.type==="TSMethodSignature"){
                        //     docsInfo.type="method"
                        // }

                        if (item.typeAnnotation?.start && item.typeAnnotation.end) {
                            // TODO 处理泛型参数
                            const types = content.slice(item.typeAnnotation?.start + 1,
                                item.typeAnnotation?.end
                            ).trim()
                            docsInfo.tsTypes = types
                        }

                        return docsInfo
                    })
                    componentInfo.docsInfo = apis

                    // 获取继承的类型信息，继承多个的情况一般不会出现
                    // dfs
                    if (path.node.extends) {
                        path.node.extends.forEach(item => {
                            if (item.expression.type === "Identifier") {
                                const res = getExtendsInfo(ast, item.expression.name, filePath)
                                if(!res)return
                                
                                getExtends(res, item.expression.name)
                            }
                        })
                    }
                }
            }
        }
    })
    console.log(componentInfo)
    return {
        componentInfo,
        extend
    }
}


// dfs []

function getExtendsInfo(ast: ParseResult<t.File>, target: string, filePath:string) {
    let res = ''
    traverse(ast, {
        Identifier(path) {
            if (path.node.name === target) {
                const binding = path.scope.getBinding(target)
                if (binding?.path.parentPath?.node.type === "ImportDeclaration") {
                    const source = binding?.path.parentPath?.node.source.value

                    res = path_.join(filePath, '../', path_.join(source, '/index.d.ts'))
                }
            }
        }
    })
    return res
}