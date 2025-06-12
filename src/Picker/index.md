---
nav:
  path: /components
group:
  title: 数据录入
  order: 10
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Picker 选择器

Picker 选择器显示一个或多个选项集合的可滚动列表，相比于原生 picker，实现了 iOS 与 Android 端体验的一致性。

- 提供一组或多组关联选项供用户选择。
- 当少于 5 个选项时，建议直接将选项平铺，使用 Radio 是更好的选择。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-picker": "antd-mini/es/Picker/index",
  "ant-cascader-picker": "antd-mini/es/Picker/CascaderPicker/index"
#endif
#if WECHAT
  "ant-picker": "antd-mini/Picker/index",
  "ant-cascader-picker": "antd-mini/Picker/CascaderPicker/index"
#endif
}
```

## 代码示例

### 基本使用

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
  bindcancel="handleDismiss"
  bindvisiblechange="handleTriggerPicker"
  bindok="handleOk"
  bindchange="handleChange"
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

### 格式化已选文本

> `onFormat` 函数返回值则是已选区域需要渲染的值。

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

### 多列选择

> 当出现复杂选项时，但又不需要选项之间联动，可以通过一下方式实现多列选择：

```xml
<ant-picker
  defaultValue="{{['Tues', 'pm']}}"
  options="{{columns}}"
#if ALIPAY
  onFormat="formatTime"
#endif
#if WECHAT
  onFormat="{{formatTime}}"
  bindok="handleOk"
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

### 受控模式

> `value` 属性和 `ok` 事件，配合实现受控模式。

```xml
 <ant-picker
  value="{{value}}"
  options="{{list}}"
#if ALIPAY
  onOk="handleControlledOk"
#endif
#if WECHAT
  bindok="handleControlledOk"
#endif
/>
<ant-button onTap="handleChangeControlled">选择深圳</ant-button>
<ant-button onTap="handleClearControlled">清空</ant-button>
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

### 级联 Picker

> 当出现更复杂选项时，需要选项之间联动，就需要引入 `ant-cascader-picker` 级联选择组件来实现。该组件通过传入以下的树状结构来实现级联功能：

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

### Demo 代码

<code src='../../demo/pages/Picker/index'></code>

## API

### Picker

| 属性                         | 说明                                                                                                                                                                        | 类型                                                                                                                                                                           | 默认值      |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| animationType                | 动画类型，可选`transform` `position`，默认使用`transform`动画性能更好。由于小程序基础库 bug，弹窗内 picker-view 阴影样式在 iOS 下可能存在样式问题，可暂切换为`position`解决 | string                                                                                                                                                                         | `transform` |
| className                    | 类名                                                                                                                                                                        | string                                                                                                                                                                         | -           |
| defaultValue                 | 默认值                                                                                                                                                                      | string \| number \| Array\<string \| number\>                                                                                                                                  | -           |
| disabled                     | 是否禁用                                                                                                                                                                    | boolean                                                                                                                                                                        | false       |
| readonly                     | 是否只读                                                                                                                                                                    | boolean                                                                                                                                                                        | false       |
| cancelText                   | 取消文案                                                                                                                                                                    | string                                                                                                                                                                         | '取消'      |
| content                      | 自定义内容插槽                                                                                                                                                              | slot                                                                                                                                                                           | -           |
| indicatorStyle               | 选中框样式                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| indicatorClassName           | 选中框的类名                                                                                                                                                                | string                                                                                                                                                                         | -           |
| maskClassName                | 蒙层的类名                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| maskClosable                 | 点击蒙层是否可以关闭                                                                                                                                                        | boolean                                                                                                                                                                        | true        |
| maskStyle                    | 蒙层的样式                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| okText                       | 确认按钮文案                                                                                                                                                                | string                                                                                                                                                                         | '确定'      |
| emptyText                    | 空状态按钮文案                                                                                                                                                              | string                                                                                                                                                                         | '暂无数据'  |
| options                      | picker 数据，配置每一列的选项                                                                                                                                               | [PickerColumnItem](#pickercolumnitem)[]                                                                                                                                        | []          |
| placeholder                  | 提示文案                                                                                                                                                                    | string                                                                                                                                                                         | '请选择'    |
| popClassName                 | 弹出框类名                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| popStyle                     | 弹出框样式                                                                                                                                                                  | string                                                                                                                                                                         | -           |
| prefix                       | 前缀                                                                                                                                                                        | slot                                                                                                                                                                           | -           |
| style                        | 样式                                                                                                                                                                        | string                                                                                                                                                                         | -           |
| suffix                       | 后缀                                                                                                                                                                        | slot                                                                                                                                                                           | -           |
| title                        | 弹出框标题                                                                                                                                                                  | string \| slot                                                                                                                                                                 | -           |
| value                        | 选中的值                                                                                                                                                                    | string \| number \| Array\<string \| number\>                                                                                                                                  | -           |
| visible                      | 是否显示                                                                                                                                                                    | boolean                                                                                                                                                                        | false       |
| defaultVisible               | 默认是否显示                                                                                                                                                                | boolean                                                                                                                                                                        | false       |
| onFormat                     | 选中值的文本显示格式                                                                                                                                                        | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem)) => string                                                                        | -           |
| #if ALIPAY onOk              | 点击确定按钮，触发回调                                                                                                                                                      | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -           |
| #if ALIPAY onCancel          | 点击取消按钮/蒙层，触发回调                                                                                                                                                 | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                                              | -           |
| #if ALIPAY onChange          | 选中项发生变化，触发回调                                                                                                                                                    | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -           |
| #if ALIPAY onVisibleChange   | 弹出框显示/隐藏状态变化触发                                                                                                                                                 | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                            | -           |
| #if WECHAT bindok            | 点击确定按钮，触发回调                                                                                                                                                      | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -           |
| #if WECHAT bindcancel        | 点击取消按钮/蒙层，触发回调                                                                                                                                                 | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                                              | -           |
| #if WECHAT bindchange        | 选中项发生变化，触发回调                                                                                                                                                    | (value: [PickerColumnItem](#pickercolumnitem), column: [PickerColumnItem](#pickercolumnitem), event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -           |
| #if WECHAT bindvisiblechange | 弹出框显示/隐藏状态变化触发                                                                                                                                                 | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                            | -           |

### CascaderPicker

| 属性                         | 说明                                                                                                                                                                        | 类型                                                                                                                                                     | 默认值       |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| animationType                | 动画类型，可选`transform` `position`，默认使用`transform`动画性能更好。由于小程序基础库 bug，弹窗内 picker-view 阴影样式在 iOS 下可能存在样式问题，可暂切换为`position`解决 | string                                                                                                                                                   | `transform`  |
| className                    | 类名                                                                                                                                                                        | string                                                                                                                                                   | -            |
| defaultValue                 | 默认选中的值                                                                                                                                                                | string[]                                                                                                                                                 | -            |
| disabled                     | 是否禁用                                                                                                                                                                    | boolean                                                                                                                                                  | false        |
| readonly                     | 是否只读                                                                                                                                                                    | boolean                                                                                                                                                  | false        |
| cancelText                   | 取消文案                                                                                                                                                                    | string                                                                                                                                                   | '取消'       |
| content                      | 自定义内容插槽                                                                                                                                                              | slot                                                                                                                                                     | -            |
| format                       | 时间格式化显示，格式同[dayjs](https://day.js.org/docs/zh-CN/display/format)                                                                                                 | string                                                                                                                                                   | 'YYYY/MM/DD' |
| indicatorStyle               | 选中框样式                                                                                                                                                                  | string                                                                                                                                                   | -            |
| indicatorClassName           | 选中框的类名                                                                                                                                                                | string                                                                                                                                                   | -            |
| maskClassName                | 蒙层的类名                                                                                                                                                                  | string                                                                                                                                                   | -            |
| maskClosable                 | 点击蒙层是否可以关闭                                                                                                                                                        | boolean                                                                                                                                                  | true         |
| maskStyle                    | 蒙层的样式                                                                                                                                                                  | string                                                                                                                                                   | -            |
| okText                       | 确认按钮文案                                                                                                                                                                | string                                                                                                                                                   | '确定'       |
| options                      | 可选数据                                                                                                                                                                    | [CascaderOption](#cascaderoption)[]                                                                                                                      | []           |
| placeholder                  | 提示文案                                                                                                                                                                    | string                                                                                                                                                   | '请选择'     |
| popClassName                 | 弹出框类名                                                                                                                                                                  | string                                                                                                                                                   | -            |
| popStyle                     | 弹出框样式                                                                                                                                                                  | string                                                                                                                                                   | -            |
| prefix                       | 前缀                                                                                                                                                                        | slot                                                                                                                                                     | -            |
| style                        | 样式                                                                                                                                                                        | string                                                                                                                                                   | -            |
| suffix                       | 后缀                                                                                                                                                                        | slot                                                                                                                                                     | -            |
| title                        | 弹出框标题                                                                                                                                                                  | string \| slot                                                                                                                                           | -            |
| value                        | 选中的值                                                                                                                                                                    | string[]                                                                                                                                                 | -            |
| visible                      | 是否显示                                                                                                                                                                    | boolean                                                                                                                                                  | false        |
| defaultVisible               | 默认是否显示                                                                                                                                                                | boolean                                                                                                                                                  | false        |
| onFormat                     | 选中值的文本显示格式，默认展示 labels.join('')                                                                                                                              | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[]) => string                                                                        | -            |
| #if ALIPAY onOk              | 点击确定按钮，触发回调                                                                                                                                                      | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if ALIPAY onCancel          | 点击取消按钮/蒙层，触发回调                                                                                                                                                 | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                        | -            |
| #if ALIPAY onChange          | 选中项发生变化，触发回调                                                                                                                                                    | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if ALIPAY onVisibleChange   | 弹出框显示/隐藏状态变化触发                                                                                                                                                 | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                      | -            |
| #if WECHAT bindok            | 点击确定按钮，触发回调                                                                                                                                                      | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if WECHAT bindcancel        | 点击取消按钮/蒙层，触发回调                                                                                                                                                 | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                                        | -            |
| #if WECHAT bindchange        | 选中项发生变化，触发回调                                                                                                                                                    | (value: string[], selectedOptions: [CascaderOption](#cascaderoption)[], event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -            |
| #if WECHAT bindvisibleChange | 弹出框显示/隐藏状态变化触发                                                                                                                                                 | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void                                                      | -            |

### PickerColumnItem

| 参数  | 说明 | 类型             | 默认值 |
| ----- | ---- | ---------------- | ------ |
| label | 文字 | string           | -      |
| value | 值   | string \| number | -      |

### CascaderOption

| 参数     | 说明 | 类型             | 默认值 |
| -------- | ---- | ---------------- | ------ |
| label    | 文字 | string           | -      |
| value    | 值   | string \| number | -      |
| children | 子级 | CascaderOption[] | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                            | 浅色模式默认值                                                                                                                        | 深色模式默认值                                                                                                                        | 备注                          |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| --picker-item-color               | <div style="width: 150px; height: 40px; background-color: #333333; color: #ffffff;">#333333</div>                                     | <div style="width: 150px; height: 40px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>                                     | 选择器项颜色                  |
| --picker-header-action-color      | <div style="width: 150px; height: 40px; background-color: #1677ff; color: #ffffff;">#1677ff</div>                                     | <div style="width: 150px; height: 40px; background-color: #3086ff; color: #ffffff;">#3086ff</div>                                     | 选择器头部操作颜色            |
| --picker-placeholder-color        | <div style="width: 150px; height: 40px; background-color: #cccccc; color: #333333;">#cccccc</div>                                     | <div style="width: 150px; height: 40px; background-color: #474747; color: #ffffff;">#474747</div>                                     | 选择器占位符颜色              |
| --picker-header-color             | <div style="width: 150px; height: 40px; background-color: #eeeeee; color: #333333;">#eeeeee</div>                                     | <div style="width: 150px; height: 40px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div>                                     | 选择器头部颜色                |
| --picker-content-background-color | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                                     | <div style="width: 150px; height: 40px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                                     | 选择器内容背景颜色            |
| --picker-mask-bg-faded-95         | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.05); color: #000000;">rgba(255, 255, 255, 0.05)</div> | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.05); color: #000000;">rgba(255, 255, 255, 0.02)</div> | 选择器遮罩背景色（95%透明度） |
| --picker-mask-bg-faded-60         | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.4); color: #000000;">rgba(255, 255, 255, 0.4)</div>   | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.4); color: #000000;">rgba(255, 255, 255, 0.01)</div>  | 选择器遮罩背景色（60%透明度） |

## FAQ

### 动态改变 picker 列数时展示异常

由于原生 picker-view 的限制，暂不支持动态改变列数
