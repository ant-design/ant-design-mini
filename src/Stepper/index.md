---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---

# Stepper 步进器
一种两段式控制，增加、减少或修改数值
## 何时使用
用于在一定范围内输入、调整当前数值
## 注意事项
- 输入最大（最小）值无提示，失去焦点后，超过最大（最小）值时系统会自动回显数值为最大值；

## 代码示例
### 基本使用
<code src='../../demo/pages/Stepper'></code>



## 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| controlled | boolean | 否 | false | 是否受控 |
| value | number | 否 | - | 输入框的值, 表单提交的时候有效 |
| type | 'number' &verbar; 'digit' | 否 | - | 输入框的值, 表单提交的时候有效 |
| min | number | 否 | - | 最小值 |
| max | number | 否 | - | 最大值 |
| step | number | 否 | 1 | 每次加减的值 |
| inputWidth | string | 否 | - | 输入框宽度 |
| precision | number | 否 | - | 计算精度，保留几位小数<br/>https://github.com/ant-design/ant-design/issues/5998 |
| autoFocus | boolean | 否 | false | 自动聚焦，ios 可能会失效 |
| id | string | 否 | - | 表单元素 id |
| name | string | 否 | - | 表单元素 name |
| disabled | boolean | 否 | false | 是否禁用 |
| mode | 'noraml' &verbar; 'form' | 否 | 'normal' | 配合From/FormItem组件使用时，需设置为 from |
| className | string | 否 | - | 类名 |

## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onFocus | 聚焦时，触发此回调 | ( e: number ) => void  |
| onBlur | 失去焦点时，触发此回调 | ( e: number ) => void  |
| onChange | 数据变化后，触发此回调 | ( e: number ) => void  |

## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-stepper | 整体样式 |
| amd-stepper-disabled | 禁用状态下的整体样式 |
| amd-stepper-handler | +/- 图标区域样式 |
| amd-stepper-handler-up | + 区域样式 |
| amd-stepper-handler-up | - 区域样式 |
| amd-stepper-handler-disabled | 禁用状态下+/- 图标区域样式 |
| amd-stepper-handler-up-inner | +/- 图标样式 |
| amd-stepper-input-wrap | 输入框区域样式 |
| amd-stepper-input | 输入框样式 |

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