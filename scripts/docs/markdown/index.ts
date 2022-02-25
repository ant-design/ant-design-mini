import { resource } from "..";
import { parse, getCssVar, getDocsRes } from "../parser"

// 生成 markdown
const fs = require("fs");

export async function read(entry = `${process.cwd()}/src`, options: { exclude: string[] }, deep = 0) {
    if (!entry || !fs.statSync(entry).isDirectory()) return;
    const res = fs.readdirSync(entry) as string[];
    for (let i = 0; i < res.length; i++) {
        const item = res[i];

        if (!options.exclude.includes(item)) {
            if (deep === 0) {
                console.log(JSON.stringify(resource));
                resource.reset();
            }
            parse(entry);
            await getCssVar(entry, resource);
            getDocsRes(entry, resource);

            if (!fs.statSync(`${entry}/${item}`).isDirectory()) return
            await read(`${entry}/${item}`, options, deep + 1);
        }
    }

}
