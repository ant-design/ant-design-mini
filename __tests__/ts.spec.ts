import { getDocsRes } from "../scripts/docs";

describe("ts interface parse", () => {
    it('base', ()=>{
        const path =`${process.cwd()}/src/Checkbox/props.d.ts`
        const res = getDocsRes(path)
        expect(JSON.stringify(res)).toMatchSnapshot()
    })
});
