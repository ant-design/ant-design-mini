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
    
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|-----|
| checked | boolean | 否 |  false |是否选中 |
| disabled | boolean  | 否 | false | 是否禁用 |
| value | string | 否| - | checkbox 携带的 value 值, 在原生 form 表单提交的时候有用 |
| id | string | 否 | - |表单元素id |
| name |  string | 否 | - |表单元素name |
| className | string | 否 | - | 类名 |
| style | string | 否 | - | 整体样式 |



## 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中状态改变，触发回调 | (checked: boolean, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void|

## 插槽

| 名称 | 说明 | 作用域参数 |
| ----|----|----|
| default | 内容区 | - |
| icon | 未勾选状态图标 | - |
| checkedIcon | 勾选状态图标 | - |
| disbaledIcon | 禁用时未勾选状态图标 | - |
| disabledCheckedIcon | 禁用时勾选状态图标 | - |

