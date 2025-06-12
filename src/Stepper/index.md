---
nav:
  path: /components
group:
  title: 数据录入
  order: 10
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Stepper 步进器

一种两段式控制，用于增加、减少或修改数值。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-stepper": "antd-mini/es/Stepper/index"
#endif
#if WECHAT
  "ant-stepper": "antd-mini/Stepper/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<ant-stepper
  className="ant-stepper"
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

### 定制样式

```xml
<ant-stepper
  style=""
  className="ant-stepper"
  inputStyle=""
  inputClassName="ant-stepper-input"
/>
```

### 输入框只读

```xml
<ant-stepper
  className="ant-stepper"
  defaultValue="{{0}}"
  inputReadOnly="{{true}}"
/>
```

### 输入框自动聚焦

```xml
<ant-stepper
  className="ant-stepper"
  defaultValue="{{0}}"
  focus="{{true}}"
/>
```

### 事件绑定

```xml
<ant-stepper
  value="{{value}}"
#if ALIPAY
  onChange="handleChange"
  onBlur="handleBlur"
  onFocus="handleFocus"
  onConfirm="handleConfirm"
  onDisabledTap="handleDisabledTap"
#endif
#if WECHAT
  bindchange="handleChange"
  bindblur="handleBlur"
  bindfocus="handleFocus"
  bindconfirm="handleConfirm"
  binddisabledtap="handleDisabledTap"
#endif
/>
```

### Demo 代码

<code src='../../demo/pages/Stepper/index'></code>

## API

| 属性                        | 说明                                                                                | 类型                                                                              | 默认值                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| className                   | 类名                                                                                | string                                                                            | -                                                                                      |
| disabled                    | 是否禁用                                                                            | boolean                                                                           | false                                                                                  |
| inputReadOnly               | 输入框是否只读状态                                                                  | boolean                                                                           | false                                                                                  |
| defaultValue                | 初始值                                                                              | number                                                                            | -                                                                                      |
| focus                       | 输入框选中状态                                                                      | boolean                                                                           | false                                                                                  |
| inputClassName              | 输入框类型                                                                          | string                                                                            | -                                                                                      |
| inputStyle                  | 输入框样式                                                                          | string                                                                            | -                                                                                      |
| max                         | 最大值                                                                              | number                                                                            | -                                                                                      |
| min                         | 最小值                                                                              | number                                                                            | -                                                                                      |
| precision                   | 计算精度，保留几位小数 [详见](https://github.com/ant-design/ant-design/issues/5998) | number                                                                            | -                                                                                      |
| style                       | 样式                                                                                | string                                                                            | -                                                                                      |
| step                        | 步距，即每次加减的值                                                                | number                                                                            | 1                                                                                      |
| type                        | 输入框唤起键盘类型，可选 `number` `digit`                                           | string                                                                            | `digit`                                                                                |
| value                       | 输入框的值, 表单提交的时候有效                                                      | number                                                                            | -                                                                                      |
| #if ALIPAY onBlur           | 输入框失去焦点时，触发此回调                                                        | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if ALIPAY onChange         | 数据变化后，触发此回调                                                              | ( value: number                                                                   | null, [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void        |
| #if ALIPAY onConfirm        | 点击键盘完成时触发此回调                                                            | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if ALIPAY onFocus          | 输入框聚焦时，触发此回调                                                            | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if ALIPAY onDisabledTap    | 禁用时点击出发回调                                                                  | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT bindblur        | 输入框失去焦点时，触发此回调                                                        | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT bindchange      | 数据变化后，触发此回调                                                              | ( value: number                                                                   | null, [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void        |
| #if WECHAT bindconfirm     | 点击键盘完成时触发此回调                                                            | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT bindfocus       | 输入框聚焦时，触发此回调                                                            | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| #if WECHAT binddisabledtap | 禁用时点击出发回调                                                                  | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                         | 默认值                                                                                                                    | 深色模式默认值                                                                                                            | 备注                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| --stepper-handler-tap-bg       | <div style="width: 150px; height: 30px; background-color: #ddd; color: #333333;">#ddd</div>                               | <div style="width: 150px; height: 30px; background-color: #ddd; color: #333333;">#ddd</div>                               | 步进器处理器点击背景颜色 |
| --stepper-handler-border-color | <div style="width: 150px; height: 30px; background-color: #e5e5e5; color: #333333;">#e5e5e5</div>                         | <div style="width: 150px; height: 30px; background-color: #444444; color: #ffffff;">#444444</div>                         | 步进器处理器边框颜色     |
| --stepper-border-color         | <div style="width: 150px; height: 30px; background-color: #e5e5e5; color: #333333;">#e5e5e5</div>                         | <div style="width: 150px; height: 30px; background-color: #444444; color: #ffffff;">#444444</div>                         | 步进器边框颜色           |
| --stepper-background-color     | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div>                         | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                         | 步进器背景颜色           |
| --stepper-hover-bg             | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.92); color: #ffffff;">rgba(0, 0, 0, 0.92)</div> | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.92); color: #ffffff;">rgba(0, 0, 0, 0.92)</div> | 步进器悬停背景颜色       |
