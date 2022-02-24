import { getCssVar,resource } from "../scripts/docs/index"

describe("less parse", () => {
    it('base', async () => {
        const componentPath = `${process.cwd()}/src/Mask`;
        const res = await getCssVar(componentPath,resource);
        expect(res.cssVar).toMatchSnapshot();
    })
});
