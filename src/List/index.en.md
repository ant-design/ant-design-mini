---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# List

Generic lists can be clean and efficient to carry text, lists, pictures, paragraphs and other elements.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-list": "antd-mini/es/List/index"
#endif
#if WECHAT
  "ant-list": "antd-mini/List/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-list
  header="basic use"
  radius="{{true}}"
>
  <ant-list-item>1</ant-list-item>
  <ant-list-item>2</ant-list-item>
  <ant-list-item>3</ant-list-item>
</ant-list>
```

### List Item Configuration

```xml
<ant-list header="List Item Configuration">
  <ant-list-item
    className="ant-list-item"
    disabled="{{true}}"
    image="PayCircleOutline"
    brief="Total assets"
    extra="Detail infos"
    showDivider="{{true}}"
  >
    Total assets
  </ant-list-item>
  <ant-list-item
    style=""
    image="SetOutline"
    arrow="right"
    extraBrief="Detail infos"
  >
    Setup
  </ant-list-item>
</ant-list>
```

### List item clickable

```xml
<ant-list
  header="List item clickable"
  radius="{{radius}}"
>
  <ant-list-item
    image="PayCircleOutline"
#if ALIPAY
    onTap="handleTap"
#endif
    brief="Total assets"
    extra="Detail infos"
    data-info="Total assets"
  >
    Total assets
  </ant-list-item>
  <ant-list-item
    image="SetOutline"
    arrow="right"
    extraBrief="Detail infos"
#if ALIPAY
    catchTap="handleTap"
#endif
    data-info="config"
  >
    Setup
  </ant-list-item>
</ant-list>
```

### Demo Code

<code src='../../demo/pages/List/index'></code>

## API

### List

| Property      | Description       | Type           | Default Value |
| --------- | ---------- | -------------- | ------ |
| className | Class Name       | string         | -      |
| footer    | Bottom Description   | string \| slot | -      |
| header    | Head Description   | string \| slot | -      |
| radius    | Whether with rounded corners | boolean        | false  |
| style     | Style       | string         | -      |

### ListItem

| Property                     | Description                                                     | Type               | Default Value |
| ------------------------ | -------------------------------------------------------- | ------------------ | ------ |
| arrow                    | right arrow, optional `right`、`up`、`down`, pass true `right` | string \| boolean  | -      |
| brief                    | Second line of information                                               | string \| slot     | -      |
| className                | Class Name                                                     | string             | -      |
| disabled                 | Disable                                                 | boolean            | false  |
| extra                    | Extra right                                             | string \| slot     | -      |
| extraBrief               | Auxiliary information on the right side                                             | string \| slot     | -      |
| image                    | Picture on the left                                                 | string             | -      |
| radius                   | Whether with rounded corners                                               | boolean            | false  |
| showDivider              | Show underline or not                                           | boolean            | true   |
| style                    | Style                                                     | string             | -      |
| title                    | Header Information                                                 | string \| slot     | -      |
| #if ALIPAY catchTap      | Callback triggered when clicked                                         | (e: Event) => void |
| #if ALIPAY onTap         | Callback triggered when clicked                                         | (e: Event) => void |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                   | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks             |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| --list-header-color      | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | List head color     |
| --list-footer-color      | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | List bottom color     |
| --list-background-color  | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | List background color     |
| --list-content-color     | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | List Content Text Color |
| --list-extra-brief-color | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | List Extra Brief Color |
| --list-item-border-color | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | List Item Border Color   |
| --list-item-text-color   | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div> | List Item Text Color   |
