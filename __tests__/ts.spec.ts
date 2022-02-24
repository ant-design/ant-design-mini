import { getDocsRes,Resource } from "../scripts/docs";

describe("ts interface parse", () => {
    it('base', ()=>{
        const path =`${process.cwd()}/src/Checkbox/props.d.ts`;
        const resource = new Resource()
        const res = getDocsRes(path, resource)
        expect(JSON.stringify(res)).toMatchSnapshot()
    })
});
