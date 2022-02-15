---
title: Switch
group:
  path: /form
  title: 表单类组件
---


# Switch

## 注意事项
- 当作为表单组件，配合 `Form`/`FormItem` 组件使用时，需要设置 `mode` 的值为 `form`。

## 代码示例

<code src='../../demo/pages/Switch'></code>

## API

### 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| controlled | boolean | 否 | false | 是否受控模式 |
| checked | boolean | 否 | - | 是否勾选 |
| id | string | 否 | - | 表单元素 id |
| name | string | 否 | - | 表单元素 name |
| disabled | boolean | 否 | false | 是否禁用 |
| mode | 'noraml' &verbar; 'form' | 否 | normal | 配合From/FormItem组件使用时，需设置为 from |
| size | 'medium' &verbar; 'small' &verbar; 'x-small' | 否 | medium | 组件尺寸 |
| className | string | 否 | - | 类名 |

### 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 点击 switch  ，触发此回调 | ( e: boolean ) => void  |


### 样式类
| 类名 | 说明 |
| -----|-----|
| amd-switch | 整体样式 |

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