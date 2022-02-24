import type { IDocsAPI, IDocsRes } from "../types/index";

export class Resource implements IDocsRes {
    class: string[];
    slot: Record<string, string>[][];
    title: string;
    desc: string;
    api: {
        prop?: IDocsAPI[],
        method?: IDocsAPI[]
    }
    cssVar: string[];
    tips: string[] | undefined;
    constructor() {
        this.class = []
        this.slot = []
        this.cssVar = []
        this.tips = []
        this.title = ""
        this.desc = ""
        this.api = {}
    }
    addApiProp(val: IDocsAPI){
        this.api.prop?.push(val)
    }
    addApiMethod(val: IDocsAPI){
        this.api.method?.push(val)
    }
    addClass(val: string[]) {
        this.class.push(...val);
    }
    addSlot(val: { key: string; value: string; }[]) {
        this.slot.push(val);
    }
    assCss(val: string) {
        this.cssVar.push(val);
    }
    addDesc(val:string){
        this.desc = val
    }    
    addTitle(val:string){
        this.title = val
    }
    addTips(val:string){
        this.tips?.push(val)
    }
    reset() {
        this.class.length = 0;
        this.slot.length = 0;
        this.cssVar.length = 0;
    }
}


export const resource = new Resource()