import { getCssVar,resource } from "../scripts/docs/index"

describe("less parse", () => {
    it('base', async () => {
        const componentPath = `${process.cwd()}/src/Mask`;
        await getCssVar(componentPath,resource);
        expect(JSON.stringify(resource)).toMatchSnapshot()
    })
});
