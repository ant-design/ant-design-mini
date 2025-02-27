---
nav:
  path: /components
group:
  title: Bizness Components
  order: 15
toc: 'content'
---

# Postscript

Use when additional notes need to be added below the form or content.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-postscript": "antd-mini/es/Postscript/index"
#endif
#if WECHAT
  "ant-postscript": "antd-mini/Postscript/index"
#endif
}
```

## Code Sample

### Basic Usage

<code src='../../demo/pages/Postscript/index'></code>

## API

### Property

| Property                  | Description             | Type                    | Default Value            |
| --------------------- | ---------------- | ----------------------- | ----------------- |
| className             | Class Name             | string                  | -                 |
| style                 | Style             | string                  | -                 |
| title                 | Title             | string                  | -                 |
| maxLength             | Maximum input length     | number                  | Infinity          |
| quickInputs           | Quick Input Options     | string[]                | []                |
| placeholder           | Placeholder text       | string                  | "Bring a word to TA ~' |
| placeholderClassName  | Placeholder class name       | string                  | -                 |
| combineSymbol         | Quick Input Connection Symbol | string                  | -                 |
| #if ALIPAY onChange   | Callback when content changes | (value: string) => void | -                 |
| #if WECHAT bindchange | Callback when content changes | (value: string) => void | -                 |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                          | Light Mode Default                                                                                    | Dark Mode Default                                                                                    | Remarks         |
| ------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------ |
| --postscript-background-color   | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333;">#ffffff</div>    | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Background Color     |
| --postscript-title-color        | <div style="width: 150px; height: 30px; background-color: #333; color: #ffffff;">#333</div>       | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Title Color     |
| --postscript-input-color        | <div style="width: 150px; height: 30px; background-color: #333; color: #ffffff;">#333</div>       | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Enter text color |
| --postscript-caret-color        | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | caret color   |
| --postscript-placeholder-color  | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #ffffff;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div> | Placeholder color   |
| --postscript-quick-text-color   | <div style="width: 150px; height: 30px; background-color: #666; color: #ffffff;">#666</div>       | <div style="width: 150px; height: 30px; background-color: #808080; color: #ffffff;">#808080</div> | Shortcut Text Color |
| --postscript-quick-border-color | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333;">#eeeeee</div>    | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | Quick border color |

## FAQ

### How do I use the shortcut input stitching function?

Set the combineSymbol attribute to the required connection symbol (such as "" or space), and click the shortcut input option to automatically splice with the existing content.

If you need the shortcut input content to overwrite the existing content, remove the combineSymbol attribute.
