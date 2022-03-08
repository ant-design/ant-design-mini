import { parse } from "../scripts/docs/src";
import { resource } from "../scripts/docs/src";

describe("axml parse", () => {
  beforeEach(() => {
    resource.reset();
  })

  it("parse component", () => {
    parse(`${process.cwd()}/src/Tabs`, resource);
    expect(JSON.stringify(resource)).toMatchSnapshot();
  })
});
