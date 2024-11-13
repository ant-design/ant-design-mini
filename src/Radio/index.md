---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Radio 单选框

在一组可选项中进行单选。

## 何时使用

- 在一组可选项中进行单选时。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-radio": "antd-mini/es/Radio/index",
  "ant-radio-group": "antd-mini/es/Radio/RadioGroup/index"
#endif
#if WECHAT
  "ant-radio": "antd-mini/Radio/index",
  "ant-radio-group": "antd-mini/Radio/RadioGroup/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-radio defaultChecked>初始值</ant-radio>
<ant-radio disabled>禁用按钮1</ant-radio>
<ant-radio color="red" defaultChecked>自定义颜色</ant-radio>
<ant-radio
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bind:change="onChange"
#endif
>
  基础用法
</ant-radio>
```

```js
Page({
  onChange(value, e) {
    console.log(value, e);
  },
});
```

### 受控模式

```xml
<ant-radio
  checked="{{ checked }}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bind:change="handleChange"
#endif
>
  受控模式
</ant-radio>
```

```js
Page({
  data: {
    checked: false,
  },
  handleChange(checked) {
#if WECHAT
    this.setData({
      checked: checked.detail,
    });
#endif
#if ALIPAY
    this.setData({
      checked,
    });
#endif
  },
});
```

### Radio 组

```xml
<ant-radio-group
  value="{{ value }}"
  options="{{ options }}"
#if ALIPAY
  onChange="handleRadioGroupChange"
#endif
#if WECHAT
  bind:change="handleRadioGroupChange"
#endif
/>

```

```js
Page({
  data: {
    value: 'banana',
    options: [
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橘子' },
      { value: 'banana', label: '香蕉' },
    ],
  },
  handleRadioGroupChange(value) {
#if WECHAT
    this.setData({
      value: value.detail,
    });
#endif
#if ALIPAY
    this.setData({
      value,
    });
#endif
  },
});
```

## Demo 代码

<code src='../../demo/pages/Radio/index'></code>

## API

| 属性                   | 说明             | 类型                                                                                                  | 默认值 |
| ---------------------- | ---------------- | ----------------------------------------------------------------------------------------------------- | ------ |
| checked                | 是否选中         | boolean                                                                                               | -      |
| className              | 类名             | string                                                                                                | -      |
| disabled               | 是否禁用         | boolean                                                                                               | false  |
| color                  | 图标颜色         | string                                                                                                | -      |
| defaultChecked         | 是否默认选中     | boolean                                                                                               | false  |
| style                  | 样式             | string                                                                                                | -      |
| value                  | 携带的 value 值  | string                                                                                                | -      |
| #if ALIPAY onChange    | 状态改变时的回调 | `(checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void` | -      |
| #if WECHAT bind:change | 状态改变时的回调 | `(checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void` | -      |

### RadioGroup

| 属性                   | 说明               | 类型                                                                                               | 默认值     |
| ---------------------- | ------------------ | -------------------------------------------------------------------------------------------------- | ---------- |
| className              | 类名               | string                                                                                             | -          |
| color                  | 图标颜色           | string                                                                                             | -          |
| disabled               | 是否禁用           | boolean                                                                                            | false      |
| defaultValue           | 初始值             | string                                                                                             | -          |
| label                  | 插槽，接收值和索引 | slot                                                                                               | -          |
| options                | 可选项             | `{label?: string; value?: string; disabled?: boolean;}[]`                                          | -          |
| position               | 布局方式           | string                                                                                             | `vertical` |
| style                  | 样式               | string                                                                                             | -          |
| value                  | 选中的值           | string                                                                                             | -          |
| #if ALIPAY onChange    | 状态改变时的回调   | `(value: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void` | -          |
| #if WECHAT bind:change | 状态改变时的回调   | `(value: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void` | -          |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                             | 默认值                                                                                            | 备注                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------ |
| --radio-header-color               | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | 单选按钮头部颜色         |
| --radio-border-color               | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div> | 单选按钮边框颜色         |
| --radio-background-color           | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | 单选按钮背景颜色         |
| --radio-disabled-background        | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | 单选按钮禁用状态背景颜色 |
| --radio-text-color                 | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | 单选按钮文本颜色         |
| --radio-fake-icon-background-color | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div> | 单选按钮假图标背景颜色   |
| --radio-icon-colo                  | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | 单选按钮图标颜色         |
