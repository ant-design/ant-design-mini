---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---
# DatePicker 时间选择器
相比较于原生my.datePicker实现了ios跟android端体验一致
## 代码示例
### 基本使用
<code src='pages/DatePicker/index'></code>



## 属性
#### DatePicker
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| disabled | 是否禁用  | `boolean` | false | 
| dismissText | 取消文案 | `string` | '取消' |  
| format | 时间格式化显示，格式同[dayjs](https://day.js.org/docs/zh-CN/display/format)  | `string` | 'YYYY/MM/DD' | 
| indicatorStyle | 选中框样式 | `string` | - |  
| indicatorClass | 选中框的类名 | `string` |  - |  
| maskClosable |  点击蒙层是否可以关闭 | `boolean` |false |  | 
| maskStyle | 蒙层的样式 | `string` | - | 
| maskClass | 蒙层的类名 | `string` | - | 
| max | 最大值 | `Date` | 十年后 | 
| min | 最小值 | `Date` | 十年前 | 
| okText | 确认按钮文案 | `string` | '确定' |  
| placeholder | 提示文案 | `string` | '请选择' |  
| popClassName |  弹出框类名 | `string` | - |
| popStyle |  弹出框样式 | `string` | - |
| precision | 选择精度 | 'year' \|  'month' \|  'day' \|  'hour' \|  'minute' \|  'second' | 'day' | 
| style | 样式| `string` | - |
| title | 弹出框标题 | `string` \| `slot` | - |  
| value | 选中的时间 | `Date` | - | 
| onOk | 点击确定按钮，触发回调 | (date: `Date`, dateStr: `string`, dateArr:`number`[], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onDismiss | 点击取消按钮/蒙层，触发回调 | (event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onPickerChange | 选中项发生变化，触发回调 | (date: `Date`, dateStr: `string`, dateArr: `number`[], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onFormat | 选中值的文本显示格式 | (date: `Date`, dateStr: `string`, dateArr: `number`[]) => string |
| onTriggerPicker | 弹出框显示/隐藏状态变化触发 | (visible: `boolean`, (event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |

#### RangePicker
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| disabled | 是否禁用  | `boolean` | false | 
| dismissText | 取消文案 | `string` | '取消' |  
| endPlaceholder | 结束时间提示文案 | `string` | '未选择' |  
| format | 时间格式化显示，格式同[dayjs](https://day.js.org/docs/zh-CN/display/format)  | `string` | 'YYYY/MM/DD' | 
| indicatorStyle | 选中框样式 | `string` | - |  
| indicatorClass | 选中框的类名 | `string` |  - |  
| maskClosable |  点击蒙层是否可以关闭 | `boolean` |false |  | 
| maskStyle | 蒙层的样式 | `string` | - | 
| maskClass | 蒙层的类名 | `string` | - | 
| max | 最大值 | `Date` | 十年后 | 
| min | 最小值 | `Date` | 十年前 | 
| okText | 确认按钮文案 | `string` | '确定' |  
| placeholder | 提示文案 | `string` | '请选择' |  
| popClassName |  弹出框类名 | `string` | - |
| popStyle |  弹出框样式 | `string` | - |
| precision | 选择精度 | 'year' \|  'month' \|  'day' \|  'hour' \|  'minute' | 'day' | 
| splitCharacter | 显示连接符 | `string` | '~' |  
| startPlaceholder | 开始时间提示文案 | `string` | '未选择' |  
| style | 样式 | `string` | - |
| title | 弹出框标题 | `string` | - |  
| value | 选中的时间 | [`Date`, `Date`] | - | 
| onOk | 点击确定按钮，触发回调 | (date: [`Date`,`Date`], dateStr: [`string`,`string`], dateArr: [`number`[],`number`[]], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onDismiss | 点击取消按钮/蒙层，触发回调 | (event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onPickerChange | 选中项发生变化，触发回调 | (type: 'start'\|'end', date: `Date`, dateStr: `string`, dateArr: `number`[], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onFormat | 选中值的文本显示格式 | (date: [`Date`,`Date`], dateStr: [`string`,`string`], dateArr: [`number`[],`number`[]]) => string |
| onTriggerPicker | 弹出框显示/隐藏状态变化触发 | (visible: `boolean`, (event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void |