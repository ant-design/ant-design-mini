/** @format */
import { Parser } from "../scripts/docs/parser/parse";

describe("add function", () => {
  it("parse comment", () => {
    const parser = new Parser("<!-- d -->");
    expect(parser.fragment).toStrictEqual({
      tagName: "html",
      start: 0,
      children: [
        {
          start: 0,
          end: 10,
          tagName: "Comment",
          content: "<!-- d -->",
          children: [],
          attribute: [],
        },
      ],
      end: 10,
      attribute: [],
      content: "<!-- d -->",
    });
  });
  it("parse simple html", () => {
    const parser = new Parser("<div d a=b c=d >fdsa</div>");
    expect(parser.template).toStrictEqual({
      tagName: "html",
      start: 0,
      children: [
        {
          start: 0,
          end: 26,
          tagName: "div",
          content: "<div d a=b c=d >fdsa</div>",
          children: [
            {
              start: 16,
              end: 20,
              type: "Text",
              content: "fdsa",
            },
          ],
          attribute: [
            {
              start: 5,
              attrName: "d",
              attrValue: true,
              end: 6,
            },
            {
              start: 7,
              attrName: "a",
              attrValue: "b",
              end: 10,
            },
            {
              start: 11,
              attrName: "c",
              attrValue: "d",
              end: 14,
            },
          ],
        },
      ],
      end: 26,
      attribute: [],
      content: "<div d a=b c=d >fdsa</div>",
    });
  });
});
