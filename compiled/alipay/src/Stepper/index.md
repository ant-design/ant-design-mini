---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Stepper 步进器

一种两段式控制，用于增加、减少或修改数值。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-progress": "antd-mini/es/Stepper/index"
#endif
#if WECHAT
  "ant-progress": "antd-mini/Stepper/index"
#endif
}
```

## 代码示例

### 基本使用
```xml
<stepper
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
  bind:change="handleChange"
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

### 定制样式
```xml
<stepper
  style=""
  className="stepper"
  inputStyle=""	
  inputClassName="stepper-input"
/>
```

### 输入框只读
```xml
<stepper
  className="stepper"
  defaultValue="{{0}}"
  inputReadOnly="{{true}}"
/>
```

### 输入框自动聚焦
```xml
<stepper
  className="stepper"
  defaultValue="{{0}}"
  focus="{{true}}"
/>
```

### 事件绑定
```xml
<stepper
  value="{{value}}"
#if ALIPAY
  onChange="handleChange"
  onBlur="handleBlur"
  onFocus="handleFocus"
  onConfirm="handleConfirm"
  onDisabledTap="handleDisabledTap"
#endif
#if WECHAT
  bind:change="handleChange"
  bind:blur="handleBlur"
  bind:focus="handleFocus"
  bind:confirm="handleConfirm"
  bind:disabledTap="handleDisabledTap"
#endif
/>
```

### Demo 代码

<code src='../../demo/pages/Stepper/index'></code>

## API

| 属性           | 说明                                                                                | 类型                                                                              | 默认值                                                                                 |
| -------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| className      | 类名                                                                                | string                                                                            | -                                                                                      |
| disabled       | 是否禁用                                                                            | boolean                                                                           | false                                                                                  |
| inputReadOnly  | 输入框是否只读状态                                                                  | boolean                                                                           | false                                                                                  |
| defaultValue   | 初始值                                                                              | number                                                                            | -                                                                                      |
| focus          | 输入框选中状态                                                                      | boolean                                                                           | false                                                                                  |
| inputClassName | 输入框类型                                                                          | string                                                                            | -                                                                                      |
| inputStyle     | 输入框样式                                                                          | string                                                                            | -                                                                                      |
| max            | 最大值                                                                              | number                                                                            | -                                                                                      |
| min            | 最小值                                                                              | number                                                                            | -                                                                                      |
| precision      | 计算精度，保留几位小数 [详见](https://github.com/ant-design/ant-design/issues/5998) | number                                                                            | -                                                                                      |
| style          | 样式                                                                                | string                                                                            | -                                                                                      |
| step           | 步距，即每次加减的值                                                                | number                                                                            | 1                                                                                      |
| type           | 输入框唤起键盘类型，可选 `number` `digit`                                           | string                                                                            | `digit`                                                                                |
| value          | 输入框的值, 表单提交的时候有效                                                      | number                                                                            | -                                                                                      |
| #if ALIPAY onBlur         | 输入框失去焦点时，触发此回调                                                        | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if ALIPAY onChange       | 数据变化后，触发此回调                                                              | ( value: number                                                                   | null, [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void        |
| #if ALIPAY onConfirm      | 点击键盘完成时触发此回调                                                            | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if ALIPAY onFocus        | 输入框聚焦时，触发此回调                                                            | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if ALIPAY onDisabledTap  | 禁用时点击出发回调                                                                  | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT bind:blur         | 输入框失去焦点时，触发此回调                                                        | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT bind:change       | 数据变化后，触发此回调                                                              | ( value: number                                                                   | null, [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void        |
| #if WECHAT bind:confirm      | 点击键盘完成时触发此回调                                                            | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT bind:focus        | 输入框聚焦时，触发此回调                                                            | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT bind:disabledTap  | 禁用时点击出发回调                                                                  | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
