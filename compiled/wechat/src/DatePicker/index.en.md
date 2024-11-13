---

nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'

---

# DatePicker

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Compared to native `my.datePicker`, to achieve the same iOS and Android experience.

## Code example

<code src='../../demo/pages/DatePicker/index'></code>

## API

### DatePicker

| Property            | Description                                                                                                                                                                      | Type                | Default Value       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------ |
| animationType   | Animation type, optional `transform` `position`, the default is used `transform` Animation performance is better. Due to bug in the basic library of small programs, the pop-up window `picker-view` Shadow style may have style problems under iOS and can be temporarily switched `position` Resolve. | string              | `transform`  |
| className       | Class Name                                                                                                                                                                      | string              | -            |
| defaultValue    | Time selected by default                                                                                                                                                            | Date                | -            |
| disabled        | Disable                                                                                                                                                                  | boolean             | false        |
| cancelText      | Cancel Copy                                                                                                                                                                  | string              | "Cancel"       |
| content         | Custom Content Slots                                                                                                                                                            | slot                | -            |
| format          | Time format display, the format is the same [dayjs](https://day.js.org/docs/zh-CN/display/format)                                                                                               | string              | 'YYYY/MM/DD' |
| indicatorStyle  | Check Box Style                                                                                                                                                                | string              | -            |
| indicatorClassName | Class name of the checked box | string | - |
| maskClassName | Class name of the layer | string | - |
| maskClosable | Click whether the layer can be closed | boolean | true |
| maskStyle | Mat Style | string | - |
| max | Maximum | Date | Ten years later |
| min | Minimum | Date | Ten years ago |
| okText | Confirm Button Copy | string | "OK" |
| placeholder | Prompt Copy | string | "Please select" |
| popClassName | Pop-up Box Class Name | string | - |
| popStyle | Pop-up Style | string | - |
| precision | Select precision, optional `year` `month` `day` `hour` `minute` `second` | string | `day` |
| prefix | Prefix | slot | - |
| style | Style | string | - |
| suffix | Suffix | slot | - |
| title | Pop-up Title | string \| slot | - |
| value | Selected time | Date | - |
| visible | Display | boolean | false |
| defaultVisible | Display by default | boolean | false |
| onOk | Click the OK button to trigger the callback | (date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onCancel | Click the cancel button/layer to trigger the callback | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onPickerChange | The selected item changes, triggering a callback | (date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onFormat | Text display format of the selected value | (date: Date, dateStr: string) => string | - |
| onFormatLabel | Customize the content displayed in each column, silently
Add year, month, day, hour, minute and second units | (type: `year` \| `month` \| `day` \| `hour` \| `minute` \| `second`, value: number) => string | - |
| onVisibleChange | Pop-up display/hide status change trigger | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |

### RangePicker

| Property            | Description                                                                                                                                                                      | Type                | Default Value       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------ |
| animationType   | Animation type, optional `transform` `position`, the default is used `transform` Animation performance is better. Due to bug in the basic library of small programs, the pop-up window `picker-view` Shadow style may have style problems under iOS and can be temporarily switched `position` Resolve. | string              | `transform`  |
| className       | Class Name                                                                                                                                                                      | string              | -            |
| defaultValue    | Time range selected by default                                                                                                                                                        | [Date, Date]        | -            |
| disabled        | Disable                                                                                                                                                                  | boolean             | false        |
| cancelText      | Cancel Copy                                                                                                                                                                  | string              | "Cancel"       |
| content         | Custom Content Slots                                                                                                                                                            | slot                | -            |
| endPlaceholder  | End Time Prompt Copy                                                                                                                                                          | string              | "Not selected"     |
| format          | Time format display, the format is the same [dayjs](https://day.js.org/docs/zh-CN/display/format)                                                                                               | string              | 'YYYY/MM/DD' |
| indicatorStyle  | Check Box Style                                                                                                                                                                | string              | -            |
| indicatorClassName | Class name of the checked box | string | - |
| maskClassName | Class name of the layer | string | - |
| maskClosable | Click whether the layer can be closed | boolean | true |
| maskStyle | Mat Style | string | - |
| max | Maximum | Date | Ten years later |
| min | Minimum | Date | Ten years ago |
| okText | Confirm Button Copy | string | "OK" |
| placeholder | Prompt Copy | string | "Please select" |
| popClassName | Pop-up Box Class Name | string | - |
| popStyle | Pop-up Style | string | - |
| precision | Select precision, optional `year` `month` `day` `hour` `minute` | string | `day` |
| splitCharacter | Display Connector | string | - |
| startPlaceholder | Start Time Prompt Copy | string | "Not selected" |
| prefix | Prefix | slot | - |
| style | Style | string | - |
| suffix | Suffix | slot | - |
| title | Pop-up Title | string \| slot | - |
| value | Selected time range | [Date, Date] | - |
| visible | Display | boolean | false |
| defaultVisible | Display by default | boolean | false |
| onOk | Click the OK button to trigger the callback | (date: [Date, Date], dateStr: [string, string], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onCancel | Click the cancel button/layer to trigger the callback | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onPickerChange | The selected item changes, triggering a callback | (type: `start` \| `end`, date: Date, dateStr: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onFormat | Text display format of the selected value | (date: [Date, Date], dateStr: [string, string]) => string | - |
| onFormatLabel | Customize the content displayed in each column, and add the year, month, day, hour, minute, and second units by default. | (type: `year` \| `month` \| `day` \| `hour` \| `minute`, value: number) => string | - |
| onVisibleChange | Pop-up display/hide status change trigger | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |

## How to obtain `YYYY-MM-DD` Time in format

The time returned by the DatePicker component is in the format `Date` type, if you need to convert `YYYY-MM-DD` format, you can use [dayjs](https://day.js.org/docs/zh-CN/display/format) make the conversion.

```xml
<date-picker onOk="handleOk" />
```

```javascript
Page({
  handleOk(date) {
    const dateStr = dayjs(date).format('YYYY-MM-DD');
    console.log(dateStr);
  }
});
```
