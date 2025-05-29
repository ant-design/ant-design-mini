---
nav:
  path: /components
group:
  title: 数据录入
  order: 10
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# DatePicker 时间选择器

相比于原生 `my.datePicker`，实现了 iOS 与 Android 端体验一致。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-date-picker": "antd-mini/es/DatePicker/index",
  "ant-range-picker": "antd-mini/es/DatePicker/RangePicker/index"
#endif
#if WECHAT
  "ant-date-picker": "antd-mini/DatePicker/index",
  "ant-range-picker": "antd-mini/DatePicker/RangePicker/index"
#endif
}
```

## 代码示例

### 基本使用

> `defaultValue` 属性为`dayjs` 能够解析的时间戳或对象。

```xml
<ant-date-picker
  min="{{min}}"
  max="{{max}}"
  defaultValue="{{defaultDate}}"
  placeholder="请选择"
#if ALIPAY
  onPickerChange="handlePickerChange"
  onVisibleChange="handleTriggerPicker"
  onCancel="handleDismiss"
  onOk="handleOk"
#endif
#if WECHAT
  bindpickerchange="handlePickerChange"
  bindvisiblechange="handleTriggerPicker"
  bindcancel="handleDismiss"
  bindok="handleOk"
#endif
/>
```

```js
Page({
  data: {
    min: new Date('2019/01/15').getTime(),
    max: new Date('2023/08/20').getTime(),
    defaultDate: new Date('2019/02/02').getTime(),
  },
  handlePickerChange(date, dateStr, e) {
    console.log('onPickerChange', date, dateStr, e);
  },
  handleTriggerPicker(visible, e) {
    console.log('onVisibleChange', visible, e);
  },
  handleDismiss(e) {
    console.log('e', e);
  },
  handleOk(date, format, e) {
    console.log('onOk', date, format, e);
  },
});
```

### 精度控制

> `precision` 属性可以控制选择的时间精度。`format` 属性用来格式化展示的 `value` 值。

```xml
<ant-date-picker precision="year" format="YYYY"/>
<ant-date-picker precision="month" format="YYYY-MM"/>
<ant-date-picker precision="minute" format="YYYY-MM-DD HH:mm"/>
```

### 禁用状态

> `disabled` 属性用来控制禁用状态。

```xml
<ant-date-picker defaultValue="{{defaultDate}}" disabled />
```

### 自定义选择面板中每列的渲染

> 传入函数 `onFormatLabel` ，返回值则是选择面板中每列想要渲染的数据

```xml
<ant-date-picker onFormatLabel="{{handleFormatLabel ? handleFormatLabel : 'handleFormatLabel'}}" />
```

```js
Page({
  data: {
#if WECHAT
    handleFormatLabel(type, value) {
      return String(value);
    },
#endif
  },
  handleFormatLabel(type, value) {
    return String(value);
  },
});
```

### 受控模式

> 控制选择的值，需要 `value` 属性和 `onOk` 事件配合使用。控制面板显示关闭状态，需要 `visible` 属性和 `onVisibleChange` 事件配合使用。

```xml
 <ant-date-picker
  visible="{{pickerVisible}}"
  value="{{pickerValue}}"
#if ALIPAY
  onVisibleChange="handleTriggerControlledPicker"
  onOk="handleControlledOk"
#endif
#if WECHAT
  bindvisiblechange="handleTriggerControlledPicker"
  bindok="handleControlledOk"
#endif
  />
```

```js
Page({
  data: {
    pickerVisible: false,
    pickerValue: new Date('2019/02/02').getTime(),
  },

  handlePickerChange(date, dateStr, e) {
    console.log('onPickerChange', date, dateStr, e);
  },
  handleControlledOk(value) {
#if WECHAT
    this.setData({
      // 微信只支持传递时间戳
      pickerValue: value.detail.getTime(),
    });
#endif
#if ALIPAY
    this.setData({
      pickerValue: value,
    });
#endif
  },
  handleTriggerControlledPicker(visible, e) {
#if WECHAT
    console.log('handleTriggerControlledPicker', visible);
    this.setData({
      pickerVisible: visible.detail,
    });
#endif
#if ALIPAY
    console.log('handleTriggerControlledPicker', visible, e);
    this.setData({
      pickerVisible: visible,
    });
#endif
  },
});
```

### 时间范围选择

> 引入 `ant-range-picker` 组件，即可拥有时间范围选择能力。

```xml
<ant-range-picker
  placeholder="请选择"
  defaultValue="{{defaultDateRange}}"
#if ALIPAY
  onPickerChange="handlePickerRangeChange"
  onVisibleChange="handleTriggerPicker"
  onOk="handleRangeOk"
#endif
#if WECHAT
  bindpickerchange="handlePickerRangeChange"
  bindvisiblechange="handleTriggerPicker"
  bindok="handleRangeOk"
#endif
/>
```

```js
Page({
  data: {
    defaultDateRange: [
      new Date('2022/03/21').getTime(),
      new Date('2022/05/20').getTime(),
    ],
  },
  handlePickerRangeChange(type, date, dateStr, e) {
    console.log('onPickerRangeChange', type, date, dateStr, e);
  },
  handleTriggerPicker(visible, e) {
    console.log('onVisibleChange', visible, e);
  },
  handleRangeOk(date, format, e) {
    console.log('onRangeOk', date, format, e);
  },
});
```

### Demo 代码

<code src='../../demo/pages/DatePicker/index'></code>

## API

### DatePicker

| 属性                         | 说明                                                                                                                                                                                 | 类型                                                                                                           | 默认值       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- | ------------ |
| animationType                | 动画类型，可选 `transform` `position`，默认使用 `transform` 动画性能更好。由于小程序基础库 bug，弹窗内 `picker-view` 阴影样式在 iOS 下可能存在样式问题，可暂切换为 `position` 解决。 | string                                                                                                         | `transform`  |
| className                    | 类名                                                                                                                                                                                 | string                                                                                                         | -            |
| defaultValue                 | 默认选中的时间                                                                                                                                                                       | Date                                                                                                           | -            |
| defaultPickerValue           | 设置用户选择日期时默认的时间                                                                                                                                                         | Date                                                                                                           | -            |
| disabled                     | 是否禁用                                                                                                                                                                             | boolean                                                                                                        | false        |
| readonly                     | 是否只读                                                                                                                                                                             | boolean                                                                                                        | false        |
| cancelText                   | 取消文案                                                                                                                                                                             | string                                                                                                         | "取消"       |
| content                      | 自定义内容插槽                                                                                                                                                                       | slot                                                                                                           | -            |
| format                       | 时间格式化显示，格式同 [dayjs](https://day.js.org/docs/zh-CN/display/format)                                                                                                         | string                                                                                                         | 'YYYY/MM/DD' |
| indicatorStyle               | 选中框样式                                                                                                                                                                           | string                                                                                                         | -            |
| indicatorClassName           | 选中框的类名                                                                                                                                                                         | string                                                                                                         | -            |
| maskClassName                | 蒙层的类名                                                                                                                                                                           | string                                                                                                         | -            |
| maskClosable                 | 点击蒙层是否可以关闭                                                                                                                                                                 | boolean                                                                                                        | true         |
| maskStyle                    | 蒙层样式                                                                                                                                                                             | string                                                                                                         | -            |
| max                          | 最大值                                                                                                                                                                               | Date                                                                                                           | 十年后       |
| min                          | 最小值                                                                                                                                                                               | Date                                                                                                           | 十年前       |
| okText                       | 确认按钮文案                                                                                                                                                                         | string                                                                                                         | "确定"       |
| placeholder                  | 提示文案                                                                                                                                                                             | string                                                                                                         | "请选择"     |
| popClassName                 | 弹出框类名                                                                                                                                                                           | string                                                                                                         | -            |
| popStyle                     | 弹出框样式                                                                                                                                                                           | string                                                                                                         | -            |
| precision                    | 选择精度，可选 `year` `month` `day` `hour` `minute` `second`                                                                                                                         | string                                                                                                         | `day`        |
| prefix                       | 前缀                                                                                                                                                                                 | slot                                                                                                           | -            |
| style                        | 样式                                                                                                                                                                                 | string                                                                                                         | -            |
| suffix                       | 后缀                                                                                                                                                                                 | slot                                                                                                           | -            |
| title                        | 弹出框标题                                                                                                                                                                           | string \| slot                                                                                                 | -            |
| value                        | 选中的时间                                                                                                                                                                           | Date                                                                                                           | -            |
| visible                      | 是否显示                                                                                                                                                                             | boolean                                                                                                        | false        |
| defaultVisible               | 默认是否显示                                                                                                                                                                         | boolean                                                                                                        | false        |
| onFormat                     | 选中值的文本显示格式                                                                                                                                                                 | (date: Date, dateStr: string) => string                                                                        | -            |
| onFormatLabel                | 自定义每列展示的内容，默认添加年、月、日、时、分、秒单位                                                                                                                             | (type: `year` \| `month` \| `day` \| `hour` \| `minute` \| `second`, value: number) => string                  | -            |
| #if ALIPAY onOk              | 点击确定按钮，触发回调                                                                                                                                                               | (date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if ALIPAY onCancel          | 点击取消按钮/蒙层，触发回调                                                                                                                                                          | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                              | -            |
| #if ALIPAY onPickerChange    | 选中项发生变化，触发回调                                                                                                                                                             | (date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if ALIPAY onVisibleChange   | 弹出框显示/隐藏状态变化触发                                                                                                                                                          | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void            | -            |
| #if WECHAT bindok            | 点击确定按钮，触发回调                                                                                                                                                               | (date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if WECHAT bindcancel        | 点击取消按钮/蒙层，触发回调                                                                                                                                                          | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                              | -            |
| #if WECHAT bindpickerchange  | 选中项发生变化，触发回调                                                                                                                                                             | (date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if WECHAT bindvisiblechange | 弹出框显示/隐藏状态变化触发                                                                                                                                                          | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void            | -            |

### RangePicker

| 属性                         | 说明                                                                                                                                                                                 | 类型                                                                                                                                   | 默认值       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| animationType                | 动画类型，可选 `transform` `position`，默认使用 `transform` 动画性能更好。由于小程序基础库 bug，弹窗内 `picker-view` 阴影样式在 iOS 下可能存在样式问题，可暂切换为 `position` 解决。 | string                                                                                                                                 | `transform`  |
| className                    | 类名                                                                                                                                                                                 | string                                                                                                                                 | -            |
| defaultValue                 | 默认选中的时间范围                                                                                                                                                                   | [Date, Date]                                                                                                                           | -            |
| disabled                     | 是否禁用                                                                                                                                                                             | boolean                                                                                                                                | false        |
| readonly                     | 是否只读                                                                                                                                                                             | boolean                                                                                                                                | false        |
| cancelText                   | 取消文案                                                                                                                                                                             | string                                                                                                                                 | "取消"       |
| content                      | 自定义内容插槽                                                                                                                                                                       | slot                                                                                                                                   | -            |
| endPlaceholder               | 结束时间提示文案                                                                                                                                                                     | string                                                                                                                                 | "未选择"     |
| format                       | 时间格式化显示，格式同 [dayjs](https://day.js.org/docs/zh-CN/display/format)                                                                                                         | string                                                                                                                                 | 'YYYY/MM/DD' |
| indicatorStyle               | 选中框样式                                                                                                                                                                           | string                                                                                                                                 | -            |
| indicatorClassName           | 选中框的类名                                                                                                                                                                         | string                                                                                                                                 | -            |
| maskClassName                | 蒙层的类名                                                                                                                                                                           | string                                                                                                                                 | -            |
| maskClosable                 | 点击蒙层是否可以关闭                                                                                                                                                                 | boolean                                                                                                                                | true         |
| maskStyle                    | 蒙层样式                                                                                                                                                                             | string                                                                                                                                 | -            |
| max                          | 最大值                                                                                                                                                                               | Date                                                                                                                                   | 十年后       |
| min                          | 最小值                                                                                                                                                                               | Date                                                                                                                                   | 十年前       |
| okText                       | 确认按钮文案                                                                                                                                                                         | string                                                                                                                                 | "确定"       |
| placeholder                  | 提示文案                                                                                                                                                                             | string                                                                                                                                 | "请选择"     |
| popClassName                 | 弹出框类名                                                                                                                                                                           | string                                                                                                                                 | -            |
| popStyle                     | 弹出框样式                                                                                                                                                                           | string                                                                                                                                 | -            |
| precision                    | 选择精度，可选 `year` `month` `day` `hour` `minute`                                                                                                                                  | string                                                                                                                                 | `day`        |
| splitCharacter               | 显示连接符                                                                                                                                                                           | string                                                                                                                                 | -            |
| startPlaceholder             | 开始时间提示文案                                                                                                                                                                     | string                                                                                                                                 | "未选择"     |
| prefix                       | 前缀                                                                                                                                                                                 | slot                                                                                                                                   | -            |
| style                        | 样式                                                                                                                                                                                 | string                                                                                                                                 | -            |
| suffix                       | 后缀                                                                                                                                                                                 | slot                                                                                                                                   | -            |
| title                        | 弹出框标题                                                                                                                                                                           | string \| slot                                                                                                                         | -            |
| value                        | 选中的时间范围                                                                                                                                                                       | [Date, Date]                                                                                                                           | -            |
| visible                      | 是否显示                                                                                                                                                                             | boolean                                                                                                                                | false        |
| defaultVisible               | 默认是否显示                                                                                                                                                                         | boolean                                                                                                                                | false        |
| onFormat                     | 选中值的文本显示格式                                                                                                                                                                 | (date: [Date, Date], dateStr: [string, string]) => string                                                                              | -            |
| onFormatLabel                | 自定义每列展示的内容，默认添加年、月、日、时、分、秒单位                                                                                                                             | (type: `year` \| `month` \| `day` \| `hour` \| `minute`, value: number) => string                                                      | -            |
| #if ALIPAY onOk              | 点击确定按钮，触发回调                                                                                                                                                               | (date: [Date, Date], dateStr: [string, string], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void       | -            |
| #if ALIPAY onCancel          | 点击取消按钮/蒙层，触发回调                                                                                                                                                          | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                      | -            |
| #if ALIPAY onPickerChange    | 选中项发生变化，触发回调                                                                                                                                                             | (type: `start` \| `end`, date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if ALIPAY onVisibleChange   | 弹出框显示/隐藏状态变化触发                                                                                                                                                          | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                    | -            |
| #if WECHAT bindok            | 点击确定按钮，触发回调                                                                                                                                                               | (date: [Date, Date], dateStr: [string, string], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void       | -            |
| #if WECHAT bindcancel        | 点击取消按钮/蒙层，触发回调                                                                                                                                                          | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                      | -            |
| #if WECHAT bindpickerchange  | 选中项发生变化，触发回调                                                                                                                                                             | (type: `start` \| `end`, date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if WECHAT bindvisiblechange | 弹出框显示/隐藏状态变化触发                                                                                                                                                          | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                    | -            |

## 如何获取 `YYYY-MM-DD` 格式的时间

DatePicker 组件返回的时间格式为 `Date` 类型，如果需要转换为 `YYYY-MM-DD` 格式，可以使用 [dayjs](https://day.js.org/docs/zh-CN/display/format) 进行转换。

```xml
<date-picker
#if ALIPAY
  onOk="handleOk"
#endif
#if WECHAT
  bindok="handleOk"
#endif
/>
```

```javascript
Page({
  handleOk(date) {
    const dateStr = dayjs(date).format('YYYY-MM-DD');
    console.log(dateStr);
  },
});
```

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                            | 默认值                                                                                                                  | 深色模式默认值                                                                                                          | 备注                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| --range-picker-shadow-color       | <div style="width: 150px; height: 30px; background-color: #000000; color: #ffffff;">#000000</div>                       | <div style="width: 150px; height: 30px; background-color: #000000; color: #ffffff;">#000000</div>                       | 范围选择器阴影颜色         |
| --range-picker-item-color         | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div>                       | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                       | 范围选择器项颜色           |
| --range-picker-active-color       | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div>                       | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div>                       | 范围选择器活动项颜色       |
| --range-picker-placeholder-color  | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div>                       | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div>                       | 范围选择器占位符颜色       |
| --range-picker-shadow-color-faded | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.9); color: #ffffff;">rgba(0, 0, 0, 0.9)</div> | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.9); color: #ffffff;">rgba(0, 0, 0, 0.9)</div> | 范围选择器阴影颜色（褪色） |
