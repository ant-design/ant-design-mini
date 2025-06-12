---
nav:
  path: /components
group:
  title: Bizness Components
  order: 15
toc: content
supportPlatform: ['alipay', 'wechat']
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
#if WECHAT
  "ant-select-contact": "antd-mini/SelectContact/index"
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
#if WECHAT
  bindchange="handleChange"
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

| Property                  | Description                         | Type                      | Default Value |
| --------------------- | ---------------------------- | ------------------------- | ------ |
| className             | Class Name                         | string                    | -      |
| height                | Component height                     | string                    | -      |
| source                | Business sources, distinguishing between scenario monitoring and embedding points | string                    | -      |
| bizScene              | Access party scenario, post-verification         | number                    | -      |
| onError               | Get data interface error trigger         | (error: any) => void      | -      |
| #if ALIPAY onSelect   | Trigger when contact is selected             | (IOnSelectParams) => void | -      |
| #if WECHAT bindselect | Trigger when contact is selected             | (IOnSelectParams) => void | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name                                  | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks             |
| --------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| --select-contact-search-bar-focus-color | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Search bar focus color   |
| --select-contact-search-cancel-color    | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Cancel Button Color     |
| --select-contact-loading-bg             | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Load Background Color     |
| --select-contact-scroll-bg              | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Scroll background color     |
| --select-contact-list-bg                | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | List background color     |
| --select-contact-title-bg               | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #000000; color: #ffffff;">#000000</div> | Title background color     |
| --select-contact-title-color            | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999</div>    | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999</div>    | Title Text Color     |
| --select-contact-title-first-color      | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333</div>    | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #000000;">#c5cad1</div> | Level 1 title color     |
| --select-contact-title-first-border     | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eee</div>    | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | First-level title border color |
| --select-contact-tag-color              | <div style="width: 150px; height: 30px; background-color: #ff6010; color: #ffffff;">#ff6010</div> | <div style="width: 150px; height: 30px; background-color: #ff6010; color: #ffffff;">#ff6010</div> | Label Color         |
| --select-contact-tag-border             | <div style="width: 150px; height: 30px; background-color: #ffcfb7; color: #333333;">#ffcfb7</div> | <div style="width: 150px; height: 30px; background-color: #ffcfb7; color: #ffffff;">#ffcfb7</div> | Label border color     |
| --select-contact-empty-bg               | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Empty state background color   |
| --select-contact-empty-color            | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999</div>    | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Empty status text color   |
| --select-contact-loading-bg             | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999</div>    | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Load Status Background Color |
| --select-contact-display-light-color    | <div style="width: 150px; height: 30px; background-color: #fa6300; color: #ffffff;">#fa6300</div> | <div style="width: 150px; height: 30px; background-color: #fa6300; color: #ffffff;">#fa6300</div> | Highlight Color     |
