---
nav:
  path: /components
group:
  title: Navigation
  order: 6
toc: 'content'
---

# TabBar

Used to switch between different pages.

## Introduction

In `index.json` Introducing Components in
```json
"usingComponents": {
#if ALIPAY
  "ant-tab-bar": "antd-mini/es/TabBar/index"
#endif
#if WECHAT
  "ant-tab-bar": "antd-mini/TabBar/index"
#endif
}
```

## Code Sample

### Basic use
```xml
<ant-tab-bar items="{{tabs}}" />
<ant-tab-bar items="{{tabs}}" activeStyle="color:red;" />
#if ALIPAY
<ant-tab-bar items="{{tabs}}" current="{{current}}" onChange="handleChange" />
#endif
#if WECHAT
<ant-tab-bar items="{{tabs}}" current="{{current}}" bind:change="handleChange" />
#endif
```

```js
Page({
  data: {
    tabs: [
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '收藏',
      },
      {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: '喜欢',
      },
    ],
    current: 0,
  },
  handleChange(index) {
    console.log(index);
  },
});
```

### Demo Code

<code src='../../demo/pages/TabBar/index'></code>

## API

| Property            | Description                                                    | Type                    | Default Value |
| --------------- | ------------------------------------------------------- | ----------------------- | ------ |
| activeClassName | Tab activation class name                                          | string                  | -      |
| activeStyle     | Tab Activation Style                                          | string                  | -      |
| className       | Class Name                                                    | string                  | -      |
| current         | Selected Items                                                  | number                  | -      |
| defaultCurrent  | Initial Checked                                              | number                  | 0      |
| icon            | Tab icon scope slot, receiving item, index, active parameters     | slot                    | -      |
| items           | Bottom Icon Configuration                                            | [TabItem](#tabitem)[] | []     |
| style           | Style                                                    | string                  | -      |
| text            | Tab bottom text scope slot, receiving item, index, active parameters | slot                    | -      |
| #if ALIPAY onChange    | Trigger callback on Tab switch | `(index: number) => void` | -      |
| #if WECHAT bind:change  | Trigger callback on Tab switch | `(index: number) => void` | -     |

### TabItem

| Parameters       | Description                                               | Type   | Default Value |
| ---------- | -------------------------------------------------- | ------ | ------ |
| icon       | bottom icon, support [Icon](./Icon) or picture address           | string | -      |
| activeIcon | bottom icon for active state, support [Icon](./Icon) or picture address | string | -      |
| text       | Bottom Text                                           | string | -      |
| badge      | Logo type, see [Badge](./Badge) Components               | object | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                | Default Value                                                                                            | Remarks            |
| --------------------- | ------------------------------------------------------------------------------------------------- | --------------- |
| --tabbar-bg           | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | TabBar Background Color |
| --tabbar-item-color   | <div style="width: 150px; height: 30px; background-color: #666666; color: #ffffff;">#666666</div> | TabBar Entry Color |
| --tabbar-active-color | <div style="width: 150px; height: 30px; background-color: #1677ff;">#1677ff</div>                 | TabBar Activate Color |
