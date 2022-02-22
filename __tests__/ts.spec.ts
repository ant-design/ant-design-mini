import {generateAst} from "../scripts/docs/parser/ts/utils"
describe("ts interface parse", () => {
    it('base', ()=>{
        const path =`${process.cwd()}/src/Checkbox/props.d.ts`
        console.log(path)
        const ast = generateAst(path)
    })
});
