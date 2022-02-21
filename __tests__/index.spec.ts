/** @format */
import { Parser } from "../scripts/docs/parser/parse";

describe("add function", () => {
  it("parse comment", () => {
    const parser = new Parser("<!-- d -->");
    expect(JSON.stringify(parser.fragment)).toMatchSnapshot();
  });
  it("parse simple html", () => {
    const parser = new Parser(`<div d a="b" c="d" >fdsa</div>`);
    expect(JSON.stringify(parser.fragment)).toMatchSnapshot();
  });
  it("parse simple html", () => {
    const parser = new Parser("<div>{abc} {def}</div>");
    expect(JSON.stringify(parser.fragment)).toMatchSnapshot();
  });
  it("parse simple html", () => {
    const parser = new Parser(`<div name="test1 {test2}"></div>`);
    expect(JSON.stringify(parser.fragment)).toMatchSnapshot();
  });
  it("parse simple html", () => {
    const parser = new Parser(`<div name="test1 { a && b ? 'c' : '' }"></div>`);
    expect(JSON.stringify(parser.fragment)).toMatchSnapshot();
  });
});
