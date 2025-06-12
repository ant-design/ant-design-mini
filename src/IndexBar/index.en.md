---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# IndexBar

Side index component. Used to quickly locate a list index.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
  "ant-index-bar": "antd-mini/es/IndexBar/index"
}
```

## Code Sample

### Basic use

```xml
<view class="base">
  <ant-list header="Basic use"></ant-list>
  <view class="indexbar">
    <ant-index-bar items="{{items}}" />
  </view>
</view>
```

```css
.base {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.indexbar {
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
```

```js
Page({
  data: {
    items: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((u) => {
      return { label: u };
    }),
  },
});
```

### Use in conjunction with a list

```xml
#if ALIPAY
<view class="base">
  <ant-index-bar
    className="indexbar"
    items="{{items}}"
    defaultCurrent="H"
    onChange="onChange">
    <view slot-scope="props">
      <ant-list header="{{props.value.label}}">
        <ant-list-item
          a:for="{{4}}"
          a:for-item="itemX">
          {{props.value.label}}-{{itemX}}
        </ant-list-item>
      </ant-list>
    </view>
  </ant-index-bar>
</view>
#endif
#if WECHAT
因微信不支持作用域插槽，暂不支持此用法
#endif
```

```css
#if ALIPAY .base {
  width: 100%;
  height: 100vh;
}
.indexbar {
  position: fixed;
  right: 10px;
  top: 20vh;
}
# endif #if WECHAT Because WeChat does not support scope slots, this usage is temporarily not supported# endif;
```

```js
#if ALIPAY
Page({
  data: {
    items: [],
  },
  onLoad() {
    this.setData({
      items: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((u) => {
        return { label: u };
      }),
    });
  },
});
#endif
#if WECHAT
因微信不支持作用域插槽，暂不支持此用法
#endif
```

### Controlled Mode

> Reference below [Demo Code](#demo-代码) implementation in.

### Demo Code

<code src='../../demo/pages/IndexBar/index'></code>

## API

| Property                   | Description                              | Type                                          | Default Value |
| ---------------------- | --------------------------------- | --------------------------------------------- | ------ |
| activeClassName        | Style when index is active                  | string                                        | -      |
| className              | Class Name                              | string                                        | -      |
| current                | Index value                            | string                                        | -      |
| defaultCurrent         | Default Index                          | string                                        | -      |
| labelPreview           | Index preview content, receiving value and index | slot                                          | -      |
| items                  | Index Array                          | [Item](#item)                                 | []     |
| style                  | Style                              | string                                        | -      |
| size                   | Dimensions of the index (width and height in px)       | number                                        | 16     |
| vibrate                | Whether it vibrates when the index changes                | boolean                                       | true   |
| #if ALIPAY onChange    | Callback when index changes                  | (value: [Item](#item), index: number) => void |
| #if WECHAT bindchange | Callback when index changes                  | (value: [Item](#item), index: number) => void |

#### Item

| Property           | Description                     | Type    | Default Value |
| -------------- | ------------------------ | ------- | ------ |
| label          | Index ID                 | string  | -      |
| disablePreview | Disable preview effect when index is triggered | boolean | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name                           | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks               |
| -------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------ |
| --index-bar-tip-background-color | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div> | Index bar prompt background color |
| --index-bar-text-color           | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | Index column text color     |
| --index-bar-assist-color         | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | Index Bar Secondary Text Color |
| --index-bar-active-color         | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Index Bar Activation Color     |
