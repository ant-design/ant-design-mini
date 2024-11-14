---
nav:
  path: /components
group:
  title: Other
  order: 15
toc: 'content'
---

# AutoResize

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

A logo that displays a red dot, number, or text. Used to remind the user of pending matters or new updated quantities.

## When to use

When multi-language adaptation of existing components is required, this component can be used in the original layout to complete the adaptation of different lengths of text in the component;

## Code Sample

<code src="../../demo/pages/AutoResize/index"></code>

## API

| Property        | Description                                                                                                                    | Type    | Default Value |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | ------- | ------ |
| text        | Text to be passed in, used to calculate the width                                                                                              | string  | -      |
| minFontSize | The minimum font size limit can be set according to the business.                                                                                      | number  | 30     |
| maxFontSize | The original design font size of this area, which cannot exceed this font size at most.                                                                                  | number  | 36     |
| wrap        | Whether to support line feed                                                                                                            | boolean | false  |
| ratio       | Copy width ratio, calculated `maxFontSize / ratio * Copy length`, there are scenes where the English characters are long but the container width is enough to display, but the font is reduced, which can be increased at this time. |
