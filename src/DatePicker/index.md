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
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | Date | 否 | - | 选中的时间 |
| format | string | 否 | - | 时间格式化显示，格式同[dayjs](https://day.js.org/docs/zh-CN/display/format)|
| min | Date | 否 | 十年前 | 最小值 |
| max | Date | 否 | 十年后 | 最大值 |
| precision | 'year' &verbar; 'month' &verbar; 'day' &verbar; 'hour' &verbar; 'minute' &verbar; 'second' | 否 | 'day' | 选择精度 |
| disabled | boolean | 否 | false | 是否禁用 |
| placeholder | string | 否 | - | 提示文案 |
| title | string | 否 | - | 弹出框标题 |
| okText | string | 否 | '确定' | 确认按钮文案 |
| dismissText | string | 否 | '取消' | 取消文案 |
| maskStyle | string | 否 | | 蒙层的样式 |
| maskClass | string | 否 |  | 蒙层的类名 |
| indicatorStyle | string | 否 |  | 选中框样式 |
| indicatorClass | string | 否 |  | 	选中框的类名 |

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


<style> 
table th:first-of-type { width: 180px; }
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2) {
    width: 140px;
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3) {
    width: 30px;
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4) {
    width: 50px;
}

</style> 