---
nav:
  path: /components
group:
  title: 数据录入
  order: 10
toc: 'content'
---

# Switch 开关

Switch 开关选择器，比起原生 Switch，它实现了在 iOS 和 Android 端一致的体验。

- 当需要表示开关状态或两种状态之间切换时使用。
- 与 Checkbox 的区别在于，切换 Switch 会直接触发状态改变，而 Checkbox 通常用于状态标记，需要与提交操作配合使用。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-switch": "antd-mini/es/Switch/index"
#endif
#if WECHAT
  "ant-switch": "antd-mini/Switch/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-switch
  defaultChecked="{{true}}"
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bindchange="onChange"
#endif
/>
```

```js
Page({
  onChange(checked, e) {
    console.log(checked);
  },
});
```

### 禁用模式

> 传入 `disabled` 属性，禁用并置灰开关按钮。

```xml
<ant-switch defaultChecked="{{true}}" disabled="{{true}}" />
```

### 自定义样式

> - `checkedText`、`uncheckedText` 属性，可以修改选中/未选中时的内容。
> - `color` 属性，可以整体按钮的颜色氛围。
> - ` size` 属性，可以调整开关大小，支持 `medium`、`small`、`x-small` 三种选项。
> - `loading` 属性，设置加载态。

```xml
<ant-switch checkedText="开" uncheckedText="关" />
#if ALIPAY
<!-- 支付宝模式下，支持插槽定制选中/未选中时的内容 -->
<ant-switch>
  <ant-icon type="CheckOutline" slot="checkedText" />
  <ant-icon type="CloseOutline" slot="uncheckedText" />
</ant-switch>
#endif

<ant-switch defaultChecked="{{true}}" color="#00b578" />

<ant-switch size="medium" />

<ant-switch size="small" />

<ant-switch size="x-small" />

<ant-switch loading />
```

### 受控模式

> `checked` 属性和 `change` 事件，配合使用实现受控模式。

```xml
<ant-switch
  checked="{{checked}}"
  defaultChecked="{{true}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
<ant-button
#if ALIPAY
  onTap="handleChangeByButton"
#endif
#if WECHAT
  bindtap="handleChangeByButton"
#endif
>
  切换
</ant-button>
```

```js
Page({
  data: {
    checked: true,
  },
  handleChange(checked, e) {
#if ALIPAY
    this.setData({
      checked,
    });
#endif
#if WECHAT
    this.setData({
      checked: checked.detail,
    });
#endif
  },
  handleChangeByButton() {
    console.log(this.data.checked);
    this.setData({
      checked: !this.data.checked,
    });
  },
});
```

### Demo 代码

<code src='../../demo/pages/Switch/index'></code>

## API

| 属性                  | 说明                                            | 类型                                                                                                | 默认值   |
| --------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------- |
| className             | 类名                                            | string                                                                                              | -        |
| checkedText           | 选中时的内容                                    | string \| slot                                                                                      | -        |
| checked               | 是否勾选                                        | boolean                                                                                             | -        |
| color                 | 选中背景色                                      | string                                                                                              | -        |
| defaultChecked        | 默认是否勾选                                    | boolean                                                                                             | `false`  |
| disabled              | 是否禁用                                        | boolean                                                                                             | `false`  |
| readonly              | 是否只读                                        | boolean                                                                                             | `false`  |
| loading               | 是否加载状态                                    | boolean                                                                                             | `false`  |
| uncheckedText         | 非选中时的内容                                  | string \| slot                                                                                      | -        |
| size                  | 组件尺寸，可选值为 `medium`、`small`、`x-small` | string                                                                                              | `medium` |
| style                 | 样式                                            | string                                                                                              | -        |
| #if ALIPAY onChange   | 点击 Switch 时触发的回调                        | (checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -        |
| #if WECHAT bindchange | 点击 Switch 时触发的回调                        | (checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -        |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                 | 浅色模式默认值                                                                                    | 深色模式默认值                                                                                    | 备注             |
| ---------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| --switch-fill          | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 开关填充颜色     |
| --switch-border-color  | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | 开关边框颜色     |
| --switch-loading-color | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 开关加载颜色     |
| --switch-handle-bg     | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | 开关手柄背景颜色 |
| --switch-inner-color   | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 开关内部颜色     |
