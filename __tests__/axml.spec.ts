import { parse } from "../scripts/docs";
import { resource } from "../scripts/docs";

describe("axml parse", () => {
  beforeEach(() => {
    resource.reset();
  })

  it("parse component", () => {
    parse(`${process.cwd()}/src/Tabs`, resource);
    expect(JSON.stringify(resource)).toMatchSnapshot();
  })
});
