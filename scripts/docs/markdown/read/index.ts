import { Resource } from "../..";
import { parse, getCssVar, getDocsRes } from "../../parser"

// 生成 markdown
const fs = require("fs");
let node: Record<string, string> = {};

export async function read(entry = `${process.cwd()}/src`, deep = 1) {
    const exclude = ['_base', '_util', '.umi', 'mixins', 'style'];
    const filterDir = (fs.readdirSync(entry) as string[]).filter(item => !exclude.includes(item)).map(item => `${entry}/${item}`);

    for (let i = 0; i < filterDir.length; i++) {
        const item = filterDir[i];
        if (!fs.statSync(item).isDirectory()) return

        if (deep === 1) {
            // diff
            console.log(item)
            // 重置一下
            node = {}
        }

        await read(item, deep + 1);
        const resource = new Resource();
        parse(item, resource);
        await getCssVar(item, resource);
        getDocsRes(item, resource);
        node[item] = JSON.stringify(resource);
    }
}


export function readPrevMarkdown(){

}