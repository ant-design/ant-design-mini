import { readdirSync } from "fs";
import { Parser, getCssVar, getDocsRes } from "./parser";
import { resource } from "./resource"

export * from "./parser"
export * from "./resource"

const fs = require("fs");

function read(entry = `${process.cwd()}/src`, options: { exclude: string[] }) {
    if (!entry || !fs.statSync(entry).isDirectory()) return;
    const res = fs.readdirSync(entry) as string[];
    res.forEach((item) => {
        if (!options.exclude.includes(item)) {
            read(`${entry}/${item}`, options);
        }
    });
}
