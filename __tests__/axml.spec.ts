import { parse, Parser } from "../scripts/docs";

describe("axml parse", () => {
  beforeEach(()=>{
    Parser.resource.reset();
  })

  it("parse component", ()=>{
    parse(`${process.cwd()}/src/Dialog`);
    console.log(JSON.stringify(Parser.resource));
  })
});
