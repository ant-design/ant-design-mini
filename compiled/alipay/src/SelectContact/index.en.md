---
nav:
  path: /components
group:
  title: 业务组件
  order: 15
toc: content
---

# SelectContact

The ability to find people: the shared class is oriented to the business of C users, and in fact there are demands for this person. For example, the user of the main card of the love card "finds someone" to give the love card, and asks the user to "find someone" to help open it. The user who pays on behalf of the card needs to find someone to help pay on behalf of the card when using the card, and the user who has a small pocket needs to "find someone" to join when pulling the group.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-select-contact": "antd-mini/es/SelectContact/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<SelectContact
  className="stepper"
  value="{{0}}"
  min="{{0}}"
  max="{{10}}"
  step="{{1}}"
  disabled="{{false}}"
#if ALIPAY
  onChange="handleChange"
#endif
/>
```

```js
Page({
  handleChange(value) {
    console.log(value);
  },
});
```

### Demo Code

<code src='../../demo/pages/SelectContact/index'></code>

## API

| Property                          | Description                         | Type                      | Default Value |
| ----------------------------- | ---------------------------- | ------------------------- | ------ |
| className                     | Class Name                         | string                    | -      |
| height                        | Component height                     | string                    | -      |
| source                        | Business sources, distinguishing between scenario monitoring and embedding points | string                    | -      |
| bizScene                      | Access party scenario, post-verification         | number                    | -      |
| #if ALIPAY onSelect           | Trigger when contact is selected             | (IOnSelectParams) => void | -      |
| #if ALIPAY onError            | Get data interface error trigger         | (error: any) => void      | -      |
| #if ALIPAY onContactListEmpty | Triggered when recommend list is empty           | () => void                | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.
