---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---
# Picker
内部采用 PickerView组件实现
## 注意事项
- 当作为表单组件，配合 `Form`/`FormItem` 组件使用时，需要设置 `mode` 的值为 `form`。

## 代码示例

<code src='../../demo/pages/Picker'></code>

## API

### 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| controlled | boolean | 否 | false | - |
| data | {value: string &#124; number; label: string}| 是 | - | picker 数据 |
| value | (string &#124; number)[] | 否 | - | picker 数据 |
| cols | number | 否 | 1 | 显示多少列 |
| title | string | 否 | - | 标题 |
| okText | string | 否 | "确定" | 确认按钮文案 |
| dismissText | string | 否 | "取消" | 取消文案 |
| placeholder | string | 否 | - | 提示文案 |
| id | string | 否 | - | 表单元素 id |
| name | string | 否 | - | 表单元素 name |
| disabled | boolean | 否 | false | 是否禁用 |
| mode | 'noraml' &verbar; 'form' | 否 | normal | 配合From/FormItem组件使用时，需设置为 from |
| className | string | 否 | - | 类名 |

### 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onFormat | 选中值的文本格式 | (v: (string &#124; number)[]) => string |
| onOk | 点击确定按钮，触发回调 | (v: (string &#124; number)[]) => void |
| onDismiss | 点击取消按钮，触发回调 | () => void |
| onChange | 选中项发生变化，触发回调 | (v: (string &#124; number)[]) => void |

## 插槽
| 名称 | 说明 |
| -----|-----|
| label | 文本区域标签名称 |
| title | 弹窗窗体标题名称 |

### 样式类
| 类名 | 说明 |
| -----|-----|
| amd-picker | 文本展示区域样式 |
| amd-picker-popup | 弹窗整体样式 |
| amd-picker-header | 弹窗头部区域样式 |
| amd-picker-header-item | 弹窗头部区域文本样式 |
| amd-picker-content | 选择区域样式 |
| amd-picker-content-item | 选择区域单个选项样式 |


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