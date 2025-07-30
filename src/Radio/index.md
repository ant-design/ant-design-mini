---
nav:
  path: /components
group:
  title: 数据录入
  order: 10
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Radio 单选框

在一组可选项中进行单选。

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
  bindchange="onChange"
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
  checked="{{checked}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
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
  value="{{value}}"
  options="{{options}}"
#if ALIPAY
  onChange="handleRadioGroupChange"
#endif
#if WECHAT
  bindchange="handleRadioGroupChange"
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

### Demo 代码

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
| #if WECHAT bindchange | 状态改变时的回调 | `(checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void` | -      |

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
| #if WECHAT bindchange | 状态改变时的回调   | `(value: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void` | -          |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                     | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注             |
| -------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| --progress-stroke-color    | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | 进度条主颜色     |
| --progress-trail-color     | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div> | 进度条轨道颜色   |
| --progress-success-color   | <div style="width: 150px; height: 30px; background-color: #22b35e; color: #ffffff;">#22b35e</div> | <div style="width: 150px; height: 30px; background-color: #34b368; color: #ffffff;">#34b368</div> | 进度条成功颜色   |
| --progress-indicator-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | 进度条指示器颜色 |
| --progress-exception-color | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div> | <div style="width: 150px; height: 30px; background-color: #ff4a58; color: #ffffff;">#ff4a58</div> | 进度条异常颜色   |
| --progress-assist-color    | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | 进度条辅助颜色   |
