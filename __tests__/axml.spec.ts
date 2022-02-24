import { parse, Parser } from "../scripts/docs";

describe("axml parse", () => {
  beforeEach(()=>{
    Parser.resource.reset();
  })

  it("parse comment", () => {
    const parser = parse("<!-- d -->");
    expect(JSON.stringify(parser.fragment)).toMatchSnapshot();
  });
  it("parse simple html", () => {
    const parser = parse(`<div d a="b" c="d" >fdsa</div>`);
    expect(JSON.stringify(parser.fragment)).toMatchSnapshot();
  });
  it("parse simple html", () => {
    const parser = parse("<div>{{abc}} {{def}}</div>");
    expect(JSON.stringify(parser.fragment)).toMatchSnapshot();
  });
  it("parse simple html", () => {
    const parser = parse(`<div name="test1 {{test2}}"></div>`);
    expect(JSON.stringify(parser.fragment)).toMatchSnapshot();
  });
  it("parse simple LogicalExpression html", () => {
    const parser = parse(`<div name="test1 {{ a && b ? 'c' : '' }}"></div>`);
    expect(JSON.stringify(parser.fragment)).toMatchSnapshot();
  });
  it("parse class", () => {
    const parser = parse(`<div class="test1 {{ a ? b ? c ? 'abc' : 'ab' : 'a' : '' }}"></div>`);
    expect(JSON.stringify(parser.fragment)).toMatchSnapshot();
  });
  it("parse default slot", () => {
    const parser = parse(`<view><slot></slot></view>`);
    expect(JSON.stringify(parser.fragment)).toMatchSnapshot();
  });
  it("parse named slot", () => {
    const parser = parse(`<view><slot name="title"></slot></view>`);
    expect(JSON.stringify(parser.fragment)).toMatchSnapshot();
  });
  it("parse scope slot", () => {
    const parser = parse(`<view class="test"><slot name="title" props="a"></slot></view>`);
    expect(JSON.stringify(parser.fragment)).toMatchSnapshot();
    expect(Parser.resource.class).toStrictEqual(['test'])
    expect(Parser.resource.slot).toStrictEqual([ [ { key: 'name', value: 'title' }, { key: 'props', value: 'a' } ] ])
  });
  it("parse component", ()=>{
    const fs = require("fs")
    const template = fs.readFileSync(`${process.cwd()}/src/Form/FormItem/index.axml`, 'utf-8')
    parse(template);
    expect(JSON.stringify(Parser.resource)).toMatchSnapshot()
  })
});
