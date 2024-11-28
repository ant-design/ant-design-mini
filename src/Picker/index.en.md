---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
---

# Picker

The Picker selector displays a scrollable list of one or more collections of options, providing consistency between the iOS and Android-side experiences compared to native pickers.

- One or more sets of association options are provided for selection by the user.
- When there are less than 5 options, it is recommended to tile the options directly. Using Radio is a better choice.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-picker": "antd-mini/es/Picker/index",
  "ant-cascader-picker": "antd-mini/es/CascaderPicker/index"
#endif
#if WECHAT
  "ant-picker": "antd-mini/Picker/index",
  "ant-cascader-picker": "antd-mini/CascaderPicker/index"
#endif
}
```

## Code example

### Basic use

```xml
<ant-picker
  placeholder="请选择"
  title="请选择"
  emptyText="暂无数据"
  defaultValue="{{defaultValue}}"
  options="{{list}}"
#if ALIPAY
  onCancel="handleDismiss"
  onVisibleChange="handleTriggerPicker"
  onOk="handleOk"
  onChange="handleChange"
#endif
#if WECHAT
  bind:cancel="handleDismiss"
  bind:visiblechange="handleTriggerPicker"
  bind:ok="handleOk"
  bind:change="handleChange"
#endif
/>
```

```js
Page({
  data: {
    defaultValue: '上海',
    list: ['北京', '上海', '深圳', '广州', '南京', '武汉', '无锡', '苏州'],
  },
  handleDismiss(e) {
    console.log('onCancel', e);
  },
  handleTriggerPicker(visible, e) {
    console.log('onVisibleChange', visible, e);
  },
  handleOk(value, column, e) {
    console.log('onOk value', value, 'onOk  column', column, e);
  },
  handleChange(value, column, e) {
    console.log('onChange value', value, 'onChange  column', column, e);
  },
});
```

### Format selected text

> `onFormat` The function return value is the value of the selected area to be rendered.

```xml
<ant-picker
#if ALIPAY
  onFormat="onFormat"
#endif
#if WECHAT
  onFormat="{{onFormat}}"
#endif
  />
```

```js
Page({
  data: {
#if WECHAT
    onFormat: (value) => {
      return `已选择：${value}`;
    },
#endif
  },
#if ALIPAY
  onFormat: (value) => {
    return `已选择：${value}`;
  },
#endif
})
```

### multi-column selection

> When complex options appear, but do not need to link between options, you can achieve multi-column selection in the following ways:

```xml
<ant-picker
  defaultValue="{{['Tues', 'pm']}}"
  options="{{columns}}"
#if ALIPAY
  onFormat="formatTime"
#endif
#if WECHAT
  onFormat="{{formatTime}}"
  bind:ok="handleOk"
#endif
/>
```

```js
Page({
  data: {
    columns: [
      [
        {
          label: '周一',
          value: 'Mon',
        },
        {
          label: '周二',
          value: 'Tues',
        },
        {
          label: '周三',
          value: 'Wed',
        },
        {
          label: '周四',
          value: 'Thur',
        },
        {
          label: '周五',
          value: 'Fri',
        },
      ],
      [
        {
          label: '上午',
          value: 'am',
        },
        {
          label: '下午',
          value: 'pm',
        },
      ],
    ],
#if WECHAT
    formatTime: (value) => {
      return column.map((c) => c && c.label).join('，');
    },
#endif
  },
#if ALIPAY
  formatTime: (value) => {
    return column.map((c) => c && c.label).join('，');
  }
#endif
})
```

### Controlled Mode

> `value` property and `ok` Events, with the implementation of controlled mode.

```xml
 <ant-picker
  value="{{value}}"
  options="{{list}}"
#if ALIPAY
  onOk="handleControlledOk"
#endif
#if WECHAT
  bind:ok="handleControlledOk"
#endif
/>
<ant-button onTap="handleChangeControlled">Select Shenzhen</ant-button>
<ant-button onTap="handleClearControlled">Empty</ant-button>
```

```js
Page({
  data:{
    value: '上海',
    list: ['北京', '上海', '深圳', '广州', '南京', '武汉', '无锡', '苏州'],
  },
  handleControlledOk(value) {
#if ALIPAY
    this.setData({
      value,
    });
#endif
#if WECHAT
    this.setData({
      value: value.detail[0],
    });
#endif
  },
  handleClearControlled() {
    this.setData({
      value: '',
    });
  },
  handleChangeControlled() {
    this.setData({
      value: '深圳',
    });
  },
})
```

### Cascade Picker

> When more complex options appear, there is a need for linkage between options, which requires the introduction `ant-cascader-picker` Cascade selection components to achieve. The component implements the cascading function by passing in the following tree structure:

```xml
<ant-cascader-picker
  options="{{cityList}}"
/>
```

```js
Page({
  data: {
    cityList: [
      {
        label: '北京',
        value: '11',
        children: [
          {
            label: '北京',
            value: '110',
          },
        ],
      },
      {
        label: '河北',
        value: '18',
        children: [
          {
            label: '石家庄',
            value: '188',
          },
          {
            label: '唐山',
            value: '181',
          },
        ],
      },
    ],
  },
});
```

## Demo Code

<code src='../../demo/pages/Picker/index'></code>

## API

### Picker

| 属性                          | Description                                                                                                                                                                        | Type                                                                                                                                                                           | Default Value      |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | --- |
| animationType                 | 动画Type，可选`transform` `position`, the default is used`transform`Animation performance is better. Due to a bug in the basic library of small programs, the picker-view shadow style in the pop-up window may have style problems under iOS and can be temporarily switched`position`解决 | string                                                                                                                                                                         | `transform` |
| className                     | 类名                                                                                                                                                                        | string                                                                                                                                                                         | -           |
| defaultValue                  | Default Value                                                                                                                                                                      | string \| number \| Array\<string \| number\>                                                                                                                                  | -           |
| disabled                      | 是否禁用                                                                                                                                                                    | boolean                                                                                                                                                                        | false       |
| cancelText                    | 取消文案                                                                                                                                                                    | string                                                                                                                                                                         | '取消'      |
| content                       | 自定义内容插槽                                                                                                                                                              | slot                                                                                                                                                                           | -           |
| indicatorStyle                | 选中框样式                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| indicatorClassName            | 选中框的类名                                                                                                                                                                | string                                                                                                                                                                         | -           |
| maskClassName                 | 蒙层的类名                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| maskClosable                  | 点击蒙层是否可以关闭                                                                                                                                                        | boolean                                                                                                                                                                        | true        |     |
| maskStyle                     | 蒙层的样式                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| okText                        | 确认按钮文案                                                                                                                                                                | string                                                                                                                                                                         | '确定'      |
| emptyText                     | 空状态按钮文案                                                                                                                                                              | string                                                                                                                                                                         | '暂无数据'  |
| options                       | picker 数据，配置每一列的选项                                                                                                                                               | [PickerColumnItem](#pickercolumnitem)[]                                                                                                                                        | []          |
| placeholder                   | 提示文案                                                                                                                                                                    | string                                                                                                                                                                         | '请选择'    |
| popClassName                  | 弹出框类名                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| popStyle                      | 弹出框样式                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| prefix                        | 前缀                                                                                                                                                                        | slot                                                                                                                                                                           | -           |
| style                         | 样式                                                                                                                                                                        | string                                                                                                                                                                         | -           |
| suffix                        | 后缀                                                                                                                                                                        | slot                                                                                                                                                                           | -           |
| title                         | 弹出框标题                                                                                                                                                                  | string \| slot                                                                                                                                                                 | -           |
| value                         | 选中的Value                                                                                                                                                                    | string \| number \| Array\<string \| number\>                                                                                                                                  | -           |
| visible                       | 是否显示                                                                                                                                                                    | boolean                                                                                                                                                                        | false       |
| defaultVisible                | 默认是否显示                                                                                                                                                                | boolean                                                                                                                                                                        | false       |
| onFormat                      | 选中Value的文本显示格式                                                                                                                                                        | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem)) => string                                                                        | -           |
| #if ALIPAY onOk               | 点击确定按钮，触发回调                                                                                                                                                      | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -           |
| #if ALIPAY onCancel           | 点击取消按钮/蒙层，触发回调                                                                                                                                                 | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                                              | -           |
| #if ALIPAY onChange           | 选中项发生变化，触发回调                                                                                                                                                    | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -           |
| #if ALIPAY onVisibleChange    | 弹出框显示/隐藏状态变化触发                                                                                                                                                 | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                            | -           |
| #if WECHAT bind:ok            | 点击确定按钮，触发回调                                                                                                                                                      | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -           |
| #if WECHAT bind:cancel        | 点击取消按钮/蒙层，触发回调                                                                                                                                                 | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                                              | -           |
| #if WECHAT bind:change        | 选中项发生变化，触发回调                                                                                                                                                    | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -           |
| #if WECHAT bind:visiblechange | 弹出框显示/隐藏状态变化触发                                                                                                                                                 | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                            | -           |

### CascaderPicker

| 属性                          | Description                                                                                                                                                                        | Type                                                                                                                                                     | Default Value       |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --- |
| animationType                 | 动画Type，可选`transform` `position`, the default is used`transform`Animation performance is better. Due to a bug in the basic library of small programs, the picker-view shadow style in the pop-up window may have style problems under iOS and can be temporarily switched`position`解决 | string                                                                                                                                                   | `transform`  |
| className                     | 类名                                                                                                                                                                        | string                                                                                                                                                   | -            |
| defaultValue                  | 默认选中的Value                                                                                                                                                                | string[]                                                                                                                                                 | -            |
| disabled                      | 是否禁用                                                                                                                                                                    | boolean                                                                                                                                                  | false        |
| cancelText                    | 取消文案                                                                                                                                                                    | string                                                                                                                                                   | '取消'       |
| content                       | 自定义内容插槽                                                                                                                                                              | slot                                                                                                                                                     | -            |
| format                        | 时间格式化显示，格式同[dayjs](https://day.js.org/docs/zh-CN/display/format)                                                                                                 | string                                                                                                                                                   | 'YYYY/MM/DD' |
| indicatorStyle                | 选中框样式                                                                                                                                                                  | string                                                                                                                                                   | -            |
| indicatorClassName            | 选中框的类名                                                                                                                                                                | string                                                                                                                                                   | -            |
| maskClassName                 | 蒙层的类名                                                                                                                                                                  | string                                                                                                                                                   | -            |
| maskClosable                  | 点击蒙层是否可以关闭                                                                                                                                                        | boolean                                                                                                                                                  | true         |     |
| maskStyle                     | 蒙层的样式                                                                                                                                                                  | string                                                                                                                                                   | -            |
| okText                        | 确认按钮文案                                                                                                                                                                | string                                                                                                                                                   | '确定'       |
| options                       | 可选数据                                                                                                                                                                    | [CascaderOption](#cascaderoption)[]                                                                                                                      | []           |
| placeholder                   | 提示文案                                                                                                                                                                    | string                                                                                                                                                   | '请选择'     |
| popClassName                  | 弹出框类名                                                                                                                                                                  | string                                                                                                                                                   | -            |
| popStyle                      | 弹出框样式                                                                                                                                                                  | string                                                                                                                                                   | -            |
| prefix                        | 前缀                                                                                                                                                                        | slot                                                                                                                                                     | -            |
| style                         | 样式                                                                                                                                                                        | string                                                                                                                                                   | -            |
| suffix                        | 后缀                                                                                                                                                                        | slot                                                                                                                                                     | -            |
| title                         | 弹出框标题                                                                                                                                                                  | string \| slot                                                                                                                                           | -            |
| value                         | 选中的Value                                                                                                                                                                    | string[]                                                                                                                                                 | -            |
| visible                       | 是否显示                                                                                                                                                                    | boolean                                                                                                                                                  | false        |
| defaultVisible                | 默认是否显示                                                                                                                                                                | boolean                                                                                                                                                  | false        |
| onFormat                      | 选中Value的文本显示格式，默认展示 labels.join('')                                                                                                                              | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[]) => string                                                                        | -            |
| #if ALIPAY onOk               | 点击确定按钮，触发回调                                                                                                                                                      | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if ALIPAY onCancel           | 点击取消按钮/蒙层，触发回调                                                                                                                                                 | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                        |
| #if ALIPAY onChange           | 选中项发生变化，触发回调                                                                                                                                                    | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if ALIPAY onVisibleChange    | 弹出框显示/隐藏状态变化触发                                                                                                                                                 | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                      | -            |
| #if WECHAT bind:ok            | 点击确定按钮，触发回调                                                                                                                                                      | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if WECHAT bind:cancel        | 点击取消按钮/蒙层，触发回调                                                                                                                                                 | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                        |
| #if WECHAT bind:change        | 选中项发生变化，触发回调                                                                                                                                                    | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if WECHAT bind:visibleChange | 弹出框显示/隐藏状态变化触发                                                                                                                                                 | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                      | -            |

### PickerColumnItem

| Parameters  | Description | Type             | Default Value |
| ----- | ---- | ---------------- | ------ |
| label | Text | string           | -      |
| value | Value   | string \| number | -      |

### CascaderOption

| Parameters     | Description | Type             | Default Value |
| -------- | ---- | ---------------- | ------ |
| label    | Text | string           | -      |
| value    | Value   | string \| number | -      |
| children | Sub Level | CascaderOption[] | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                            | Light Mode Default                                                                                           | Dark Mode Default                                                                                           | Remarks                          |
| --------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------- |
| --picker-item-color               | <div style="width: 150px; height: 40px; background-color: #333333; color: #ffffff;">#333333</div>       | <div style="width: 150px; height: 40px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>       | Selector item color                  |
| --picker-header-action-color      | <div style="width: 150px; height: 40px; background-color: #1677ff; color: #ffffff;">#1677ff</div>       | <div style="width: 150px; height: 40px; background-color: #3086ff; color: #ffffff;">#3086ff</div>       | Selector Head Operation Color            |
| --picker-placeholder-color        | <div style="width: 150px; height: 40px; background-color: #cccccc; color: #333333;">#cccccc</div>       | <div style="width: 150px; height: 40px; background-color: #474747; color: #ffffff;">#474747</div>       | Selector Placeholder Color              |
| --picker-header-color             | <div style="width: 150px; height: 40px; background-color: #eeeeee; color: #333333;">#eeeeee</div>       | <div style="width: 150px; height: 40px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div>       | Selector head color                |
| --picker-content-background-color | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>       | <div style="width: 150px; height: 40px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>       | Selector Content Background Color            |
| --picker-mask-bg-faded-95         | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.05); color: #000000;">rgba(255, 255, 255, 0.05)</div> | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.05); color: #000000;">rgba(255, 255, 255, 0.02)</div> | Selector mask background color (95% transparency) |
| --picker-mask-bg-faded-60         | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.4); color: #000000;">rgba(255, 255, 255, 0.4)</div>   | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.4); color: #000000;">rgba(255, 255, 255, 0.01)</div>   | Selector mask background color (60% transparency) |

## FAQ

### Exhibit exception when dynamically changing the number of picker columns

Due to the limitation of native picker-view, dynamic change of the number of columns is not supported for the time being.
