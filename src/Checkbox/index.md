---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---

# Checkbox 复选框
在一组可选项中进行多选
## 何时使用
- 在一组可选项中进行多项选择时
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合


## 代码示例

### 基本使用
<code src='../../demo/pages/Checkbox'></code>



## 属性
    
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | string | 否 | - | checkbox 携带的 value 值, 在原生 form 表单提交的时候有用；在 CheckboxGroup 时亦有用 |
| checked | boolean | 否 | - | checkbox 是否选中 |
| id | string | 否 | - | 表单元素 id |
| name | string | 否 | - | 表单元素 name |
| disabled | boolean | 否 | false | 是否禁用 |
| color | string | 否 | false | checkbox 的颜色，同 CSS 色值 |
| className | string | 否 | - | 类名 |


## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中状态改变，触发回调 | (e: Event) => void|

## 样式类
| 类名 | 说明 |
| -----|-----|
| amd-checkbox | 标签样式 |
| amd-checkbox-base | 原始 checkbox 样式 |
| amd-checkbox-fake | checkbox 组件未选中样式 |
| amd-checkbox-disabled | checkbox 组件选中后样式 |

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