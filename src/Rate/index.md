---
nav:
  path: /components
group:
  title: 反馈引导
  order: 12
toc: 'content'
---

# Rate 评分

用于展示事物评级以及快速打分的组件。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-rate": "antd-mini/es/Rate/index"
#endif
#if WECHAT
  "ant-radio": "antd-mini/Rate/index"
#endif
}
```

## 代码示例

### 基本使用

> `count` 属性指定 star 总数， `allowHalf` 属性允许半星， `allowClear` 属性允许再次点击后清除。

```xml
<ant-rate
  defaultValue="{{3.5}}"
  count="{{5}}"
  allowHalf
  allowClear
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
  onChange(value) {
    console.log(value);
  },
});
```

### 只读

```xml
<ant-rate defaultValue="{{3}}" readonly />
```

### 受控模式

> `value` 属性和 `change` 事件，配合可以实现受控模式。这里的例子中通过 `ant-stepper` 组件改变 `value` 状态，`ant-rate` 组件 `value` 状态也能一起变化。

```xml
<ant-rate
  value="{{value}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
<ant-stepper
  value="{{value}}"
  min="{{0}}"
  max="{{5}}"
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
  data: {
    value: 3,
  },
  handleChange(value) {
    console.log(value);
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

### 自定义

> 参考下面 [Demo 代码](#demo-代码) 中的实现。

### Demo 代码

<code src='../../demo/pages/Rate/index'></code>

## 属性

| 属性                     | 说明                   | 类型                     | 默认值                     |
| ------------------------ | ---------------------- | ------------------------ | -------------------------- |
| allowHalf                | 是否允许半星           | `boolean`                | `false`                    |
| allowClear               | 是否允许再次点击后清除 | `boolean`                | `true`                     |
| className                | 类名                   | `string`                 | -                          |
| character                | 自定义字符             | `slot`                   | `<icon type="StarFill" />` |
| characterActiveClassName | 自定义字符选中状态类名 | `string`                 | -                          |
| characterClassName       | 自定义字符类名         | `string`                 | -                          |
| count                    | star 总数              | `number`                 | `5`                        |
| defaultValue             | 初始值                 | `number`                 | `0`                        |
| gutter                   | 间距，单位 `px`        | `number`                 | `4`                        |
| readonly                 | 只读，无法进行交互     | `boolean`                | `false`                    |
| style                    | 样式                   | `string`                 | -                          |
| value                    | 星级（受控）           | `number`                 | -                          |
| #if ALIPAY onChange      | 打分回调函数           | `(rate: number) => void` | -                          |
| #if WECHAT bindchange   | 打分回调函数           | `(rate: number) => void` | -                          |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名             | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注                    |
| ------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| --rate-active-icon | <div style="width: 150px; height: 30px; background-color: #ff9f18; color: #ffffff;">#ff9f18</div> | <div style="width: 150px; height: 30px; background-color: #ffa930; color: #ffffff;">#ffa930</div> | Rate 激活状态的图标颜色 |
| --rate-icon-color  | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | Rate 默认图标颜色       |
