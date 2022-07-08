---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
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
    
| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| checked | 是否选中  | boolean | false |
| disabled | 是否禁用  | boolean | false |
| color | 选中的颜色，同 CSS 色值 | string | false |
| value | checkbox 携带的 value 值, 在原生 form 表单提交的时候有用 | string | - |
| icon | 自定义未选中图标，支持[Icon](./icon#代码示例)和图片路径 | string | - |
| checkedIcon | 自定义选中状态的图标，支持[Icon](./icon#代码示例)和图片路径  | string | - |
| disabledIcon | 自定义禁用状态的图标，支持[Icon](./icon#代码示例)和图片路径 | string | - |
| disabledCheckedIcon | 自定义禁用选中状态的图标，支持[Icon](./icon#代码示例)和图片路径 | string | - |
| id | 表单元素 id | string | - |
| name | 表单元素 name  | string | - | 
| className | 类名| string | - |



## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中状态改变，触发回调 | (checked: boolean, event) => void|

## 样式类

| 类名 | 说明 |
| -----|-----|
| amd-checkbox | 标签样式 |
| amd-checkbox-disabled | checkbox 组件禁用样式 |
| amd-checkbox-checked | checkbox 组件禁用样式 |
| amd-checkbox-base | 原始 checkbox 样式 |
| amd-checkbox-fake | checkbox 组件未选中样式 |
| amd-checkbox-fake-custom | 自定义图标时的样式 |
