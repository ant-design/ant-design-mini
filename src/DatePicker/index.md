---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---
# DatePicker 时间选择器
## 代码示例
### 基本使用
<code src='../../demo/pages/DatePicker'></code>



## 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| controlled | boolean | 否 | false | - |
| format | string | 否 | - | 时间格式化显示YYYY-MM-DD |
| min | Date | 否 | 十年前 | 最小值 |
| max | Date | 否 | 十年后 | 最大值 |
| value | Date | 否 | - | 选中的时间 |
| placeholder | string | 否 | - | 提示文案 |
| title | string | 否 | - | 标题 |
| okText | string | 否 | '确定' | 确认按钮文案 |
| dismissText | string | 否 | '取消' | 取消文案 |
| disabled | boolean | 否 | false | 是否禁用 |
| className | string | 否 | - | 类名 |

## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onFormat | 选中值的文本显示格式 | (v: (string &#124; number)[],data: {value: string &#124; number; label: string}[]) => string |
| onOk | 点击确定按钮，触发回调 | (v: (string &#124; number)[]) => void |
| onDismiss | 点击取消按钮，触发回调 | () => void |
| onChange | 选中项发生变化，触发回调 | (v: (string &#124; number)[]) => void |
| onTriggerPicker | 弹出框显示/隐藏状态变化触发 | (visible:boolean) => void |

## 插槽
| 名称 | 说明 |
| -----|-----|
| default | 文本区域标签名称 |
| title | 弹窗窗体标题名称 |

## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-date-picker | 文本展示区域样式 |


<style> 
table th:first-of-type { width: 180px; } 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4)  {
    width: 50px
} 

</style> 