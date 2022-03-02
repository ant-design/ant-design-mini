import { read } from "../scripts/docs/markdown";
import { resource } from "../scripts/docs/resource";

jest.setTimeout(1000000);

describe("ts interface parse", () => {
    it('read', async () => {
        const entry = `${process.cwd()}/src`;
        await read(entry);
    })
});
