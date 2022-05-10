---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---
# DatePicker 时间选择器
相比较于原生my.datePicker实现了ios跟android端体验一致
## 代码示例
### 基本使用
<code src='../../demo/pages/DatePicker'></code>



## 属性
| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| value |  选中的时间 | Date | - |
| format | 时间格式化显示，格式同[dayjs](https://day.js.org/docs/zh-CN/display/format) | string | - |
| min |  最小值 | Date | 十年前 |
| max | 最大值 | Date | 十年后 |
| precision | 选择精度 | 'year' &verbar; 'month' &verbar; 'day' &verbar; 'hour' &verbar; 'minute' &verbar; 'second' | 'day' |
| disabled |  是否禁用 | boolean | false |
| placeholder | 提示文案 | string | - | 
| title |  弹出框标题 | string | - |
| okText | 确认按钮文案 | string | '确定' |
| dismissText |  取消文案 | string | '取消' |  |
| maskStyle | 蒙层的样式 | string | - | 
| maskClass |  蒙层的类名 | string | - |
| indicatorStyle | 选中框样式  | string | - |
| indicatorClass | 选中框的类名 | string | - | 
| className | 类名| string | - |

## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onOk | 点击确定按钮，触发回调 | (date: Date, dateStr: string, dateArr:number[]) => void |
| onDismiss | 点击取消按钮，触发回调 | () => void |
| onPickerChange | 选中项发生变化，触发回调 | (date: Date, dateStr: string, dateArr:number[]) => void |
| onFormat | 选中值的文本显示格式 | (date: Date, dateStr: string, dateArr:number[]) => string |
| onTriggerPicker | 弹出框显示/隐藏状态变化触发 | (visible:boolean) => void |

## 插槽
| 名称 | 说明 | 类型 |
| -----|-----|-----|
| title | 弹窗窗体标题名称 |  - |

## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-date-picker | 文本展示区域样式 |
