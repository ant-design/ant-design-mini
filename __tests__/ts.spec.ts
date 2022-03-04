import { getDocsRes,Resource } from "../scripts/docs/src";

describe("ts interface parse", () => {
    it('base', ()=>{
        const path =`${process.cwd()}/src/Tabs/TabItem`;
        const resource = new Resource();
        getDocsRes(path, resource);
        expect(JSON.stringify(resource)).toMatchSnapshot();
    })
});
