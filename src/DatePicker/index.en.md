---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
---

# DatePicker

Compared to native `my.datePicker`, to achieve the same iOS and Android experience.

## Introduction

In `index.json` Introducing Components in

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

## Code Sample

### Basic use

> `defaultValue` property is`dayjs` A timestamp or object that can be parsed.

```xml
<ant-date-picker
  min="{{min}}"
  max="{{max}}"
  defaultValue="{{defaultDate}}"
  placeholder="Please select"
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

### precision control

> `precision` Property to control the time precision of the selection.`format` property is used to format the displayed `value` Value.

```xml
<ant-date-picker precision="year" format="YYYY"/>
<ant-date-picker precision="month" format="YYYY-MM"/>
<ant-date-picker precision="minute" format="YYYY-MM-DD HH:mm"/>
```

### Disable state

> `disabled` Property is used to control the disabled state.

```xml
<ant-date-picker defaultValue="{{defaultDate}}" disabled />
```

### Customize the rendering of each column in the selection panel

> Incoming Function `onFormatLabel` , the return value is the data you want to render for each column in the selection panel.

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

### Controlled Mode

> control the selected value, which requires `value` property and `onOk` Events are used together. The control panel displays the closed state, which requires `visible` property and `onVisibleChange` Events are used together.

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

### Time Range Selection

> Introduction `ant-range-picker` component, you can have the ability to select a time range.

```xml
<ant-range-picker
  placeholder="Please select"
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

### Demo Code

<code src='../../demo/pages/DatePicker/index'></code>

## API

### DatePicker

| Property                         | Description                                                                                                                                                                                 | Type                                                                                                           | Default Value       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- | ------------ |
| animationType                | Animation type, optional `transform` `position`, the default is used `transform` Animation performance is better. Due to bug in the basic library of small programs, the pop-up window `picker-view` Shadow style may have style problems under iOS and can be temporarily switched `position` Resolve. | string                                                                                                         | `transform`  |
| className                    | Class Name                                                                                                                                                                                 | string                                                                                                         | -            |
| defaultValue                 | Time selected by default                                                                                                                                                                       | Date                                                                                                           | -            |
| defaultPickerValue           | Set the default time when the user selects a date                                                                                                                                                         | Date                                                                                                           | -            |
| disabled                     | Disable                                                                                                                                                                             | boolean                                                                                                        | false        |
| readonly                     | Read-only                                                                                                                                                                             | boolean                                                                                                        | false        |
| cancelText                   | Cancel Copy                                                                                                                                                                             | string                                                                                                         | "Cancel"       |
| content                      | Custom Content Slots                                                                                                                                                                       | slot                                                                                                           | -            |
| format                       | Time format display, the format is the same [dayjs](https://day.js.org/docs/zh-CN/display/format)                                                                                                         | string                                                                                                         | 'YYYY/MM/DD' |
| indicatorStyle               | Check Box Style                                                                                                                                                                           | string                                                                                                         | -            |
| indicatorClassName           | Class name of the check box                                                                                                                                                                         | string                                                                                                         | -            |
| maskClassName                | Class name of the layer                                                                                                                                                                           | string                                                                                                         | -            |
| maskClosable                 | Click whether the layer can be closed                                                                                                                                                                 | boolean                                                                                                        | true         |
| maskStyle                    | Mating Style                                                                                                                                                                             | string                                                                                                         | -            |
| max                          | Maximum                                                                                                                                                                               | Date                                                                                                           | Ten years later       |
| min                          | Minimum                                                                                                                                                                               | Date                                                                                                           | Ten years ago       |
| okText                       | Confirm Button Copy                                                                                                                                                                         | string                                                                                                         | "OK"       |
| placeholder                  | Prompt Copy                                                                                                                                                                             | string                                                                                                         | "Please select"     |
| popClassName                 | Popup box class name                                                                                                                                                                           | string                                                                                                         | -            |
| popStyle                     | Pop-up Style                                                                                                                                                                           | string                                                                                                         | -            |
| precision                    | Select precision, optional `year` `month` `day` `hour` `minute` `second`                                                                                                                         | string                                                                                                         | `day`        |
| prefix                       | Prefix                                                                                                                                                                                 | slot                                                                                                           | -            |
| style                        | Style                                                                                                                                                                                 | string                                                                                                         | -            |
| suffix                       | Suffix                                                                                                                                                                                 | slot                                                                                                           | -            |
| title                        | Pop-up Title                                                                                                                                                                           | string \| slot                                                                                                 | -            |
| value                        | Selected time                                                                                                                                                                           | Date                                                                                                           | -            |
| visible                      | Whether to display                                                                                                                                                                             | boolean                                                                                                        | false        |
| defaultVisible               | Display by default                                                                                                                                                                         | boolean                                                                                                        | false        |
| onFormat                     | Text display format of the selected value                                                                                                                                                                 | (date: Date, dateStr: string) => string                                                                        | -            |
| onFormatLabel                | Customize the content displayed in each column, and add the year, month, day, hour, minute, and second units by default.                                                                                                                             | (type: `year` \| `month` \| `day` \| `hour` \| `minute` \| `second`, value: number) => string                  | -            |
| #if ALIPAY onOk              | Click the OK button to trigger the callback                                                                                                                                                               | (date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if ALIPAY onCancel          | Click the cancel button/layer to trigger the callback                                                                                                                                                          | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                              | -            |
| #if ALIPAY onPickerChange    | The selected item changes, triggering a callback                                                                                                                                                             | (date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if ALIPAY onVisibleChange   | Pop-up display/hide status change trigger                                                                                                                                                          | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void            | -            |
| #if WECHAT bindok            | Click the OK button to trigger the callback                                                                                                                                                               | (date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if WECHAT bindcancel        | Click the cancel button/layer to trigger the callback                                                                                                                                                          | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                              | -            |
| #if WECHAT bindpickerchange  | The selected item changes, triggering a callback                                                                                                                                                             | (date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if WECHAT bindvisiblechange | Pop-up display/hide status change trigger                                                                                                                                                          | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void            | -            |

### RangePicker

| Property                         | Description                                                                                                                                                                                 | Type                                                                                                                                   | Default Value       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| animationType                | Animation type, optional `transform` `position`, the default is used `transform` Animation performance is better. Due to bug in the basic library of small programs, the pop-up window `picker-view` Shadow style may have style problems under iOS and can be temporarily switched `position` Resolve. | string                                                                                                                                 | `transform`  |
| className                    | Class Name                                                                                                                                                                                 | string                                                                                                                                 | -            |
| defaultValue                 | Time range selected by default                                                                                                                                                                   | [Date, Date]                                                                                                                           | -            |
| disabled                     | Disable                                                                                                                                                                             | boolean                                                                                                                                | false        |
| readonly                     | Read-only                                                                                                                                                                             | boolean                                                                                                                                | false        |
| cancelText                   | Cancel Copy                                                                                                                                                                             | string                                                                                                                                 | "Cancel"       |
| content                      | Custom Content Slots                                                                                                                                                                       | slot                                                                                                                                   | -            |
| endPlaceholder               | End Time Prompt Copy                                                                                                                                                                     | string                                                                                                                                 | "Not selected"     |
| format                       | Time format display, the format is the same [dayjs](https://day.js.org/docs/zh-CN/display/format)                                                                                                         | string                                                                                                                                 | 'YYYY/MM/DD' |
| indicatorStyle               | Check Box Style                                                                                                                                                                           | string                                                                                                                                 | -            |
| indicatorClassName           | Class name of the check box                                                                                                                                                                         | string                                                                                                                                 | -            |
| maskClassName                | Class name of the layer                                                                                                                                                                           | string                                                                                                                                 | -            |
| maskClosable                 | Click whether the layer can be closed                                                                                                                                                                 | boolean                                                                                                                                | true         |
| maskStyle                    | Mating Style                                                                                                                                                                             | string                                                                                                                                 | -            |
| max                          | Maximum                                                                                                                                                                               | Date                                                                                                                                   | Ten years later       |
| min                          | Minimum                                                                                                                                                                               | Date                                                                                                                                   | Ten years ago       |
| okText                       | Confirm Button Copy                                                                                                                                                                         | string                                                                                                                                 | "OK"       |
| placeholder                  | Prompt Copy                                                                                                                                                                             | string                                                                                                                                 | "Please select"     |
| popClassName                 | Popup box class name                                                                                                                                                                           | string                                                                                                                                 | -            |
| popStyle                     | Pop-up Style                                                                                                                                                                           | string                                                                                                                                 | -            |
| precision                    | Select precision, optional `year` `month` `day` `hour` `minute`                                                                                                                                  | string                                                                                                                                 | `day`        |
| splitCharacter               | Display Connector                                                                                                                                                                           | string                                                                                                                                 | -            |
| startPlaceholder             | Start Time Prompt Copy                                                                                                                                                                     | string                                                                                                                                 | "Not selected"     |
| prefix                       | Prefix                                                                                                                                                                                 | slot                                                                                                                                   | -            |
| style                        | Style                                                                                                                                                                                 | string                                                                                                                                 | -            |
| suffix                       | Suffix                                                                                                                                                                                 | slot                                                                                                                                   | -            |
| title                        | Pop-up Title                                                                                                                                                                           | string \| slot                                                                                                                         | -            |
| value                        | Selected time range                                                                                                                                                                       | [Date, Date]                                                                                                                           | -            |
| visible                      | Whether to display                                                                                                                                                                             | boolean                                                                                                                                | false        |
| defaultVisible               | Display by default                                                                                                                                                                         | boolean                                                                                                                                | false        |
| onFormat                     | Text display format of the selected value                                                                                                                                                                 | (date: [Date, Date], dateStr: [string, string]) => string                                                                              | -            |
| onFormatLabel                | Customize the content displayed in each column, and add the year, month, day, hour, minute, and second units by default.                                                                                                                             | (type: `year` \| `month` \| `day` \| `hour` \| `minute`, value: number) => string                                                      | -            |
| #if ALIPAY onOk              | Click the OK button to trigger the callback                                                                                                                                                               | (date: [Date, Date], dateStr: [string, string], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void       | -            |
| #if ALIPAY onCancel          | Click the cancel button/layer to trigger the callback                                                                                                                                                          | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                      | -            |
| #if ALIPAY onPickerChange    | The selected item changes, triggering a callback                                                                                                                                                             | (type: `start` \| `end`, date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if ALIPAY onVisibleChange   | Pop-up display/hide status change trigger                                                                                                                                                          | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                    | -            |
| #if WECHAT bindok            | Click the OK button to trigger the callback                                                                                                                                                               | (date: [Date, Date], dateStr: [string, string], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void       | -            |
| #if WECHAT bindcancel        | Click the cancel button/layer to trigger the callback                                                                                                                                                          | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                      | -            |
| #if WECHAT bindpickerchange  | The selected item changes, triggering a callback                                                                                                                                                             | (type: `start` \| `end`, date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if WECHAT bindvisiblechange | Pop-up display/hide status change trigger                                                                                                                                                          | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                    | -            |

## How to obtain `YYYY-MM-DD` Time in format

The time returned by the DatePicker component is in the format `Date` type, if you need to convert `YYYY-MM-DD` format, you can use [dayjs](https://day.js.org/docs/zh-CN/display/format) Make the conversion.

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

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name                            | Default Value                                                                                                                  | Dark Mode Default                                                                                                          | Remarks                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| --range-picker-shadow-color       | <div style="width: 150px; height: 30px; background-color: #000000; color: #ffffff;">#000000</div>                       | <div style="width: 150px; height: 30px; background-color: #000000; color: #ffffff;">#000000</div>                       | Range Selector Shadow Color         |
| --range-picker-item-color         | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div>                       | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                       | Range Selector Item Color           |
| --range-picker-active-color       | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div>                       | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div>                       | Range Selector Activity Color       |
| --range-picker-placeholder-color  | <div style="width: 150px; height: 30px; background-color: #cccccc; color: #333333;">#cccccc</div>                       | <div style="width: 150px; height: 30px; background-color: #474747; color: #ffffff;">#474747</div>                       | Range selector placeholder color       |
| --range-picker-shadow-color-faded | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.9); color: #ffffff;">rgba(0, 0, 0, 0.9)</div> | <div style="width: 150px; height: 30px; background-color: rgba(0, 0, 0, 0.9); color: #ffffff;">rgba(0, 0, 0, 0.9)</div> | Range Selector Shadow Color (Faded) |
