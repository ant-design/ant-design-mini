---
nav:
  path: /components
group:
  title: Other
  order: 16
toc: 'content'
---

# AutoResize

When multi-language adaptation of existing components is required, this component can be used in the original layout to complete the adaptation of different lengths of text in the component;

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-auto-resize": "antd-mini/es/AutoResize/index"
#endif
#if WECHAT
  "ant-auto-resize": "antd-mini/AutoResize/index"
#endif
}
```

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
