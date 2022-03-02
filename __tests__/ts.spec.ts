import { getDocsRes,Resource } from "../scripts/docs";

describe("ts interface parse", () => {
    it('base', ()=>{
        const path =`${process.cwd()}/src/SwipeAction`;
        const resource = new Resource();
        getDocsRes(path, resource);
        expect(JSON.stringify(resource)).toMatchSnapshot();
    })
});
