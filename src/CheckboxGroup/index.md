---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# CheckboxGroup 复选框组
复选框组合，内部由多个 CheckboxItem 组成。

## 注意事项

- 复选框组内部子元素，必须配合 CheckboxGroup 使用，有单独使用需求的请使用 [Checkbox](./checkbox)。
- 当作为表单组件，配合 `Form`/`FormItem` 组件使用时，需要设置 `ChecboxGroup` 组件的 `mode` 的值为 `form`。

## 代码示例
### 基本使用
<code src='../../demo/pages/CheckboxGroup'></code>
## 属性
#### CheckboxGroup
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|-----|
| value | string[] | 否 | - | CheckboxGroup 的值，决定子元素是否勾选 |
| disabled | boolean  | 否 | - | 是否禁用 |
| uid | string  | 否 | - | 当页面有多个CheckboxGroup时需传入，`必须页面唯一`，与内部的 CheckboxItem 组件的 uid 一致 |
| mode | 'noraml' \| 'form' | 否 | 'normal'| 配合From/FormItem组件使用时，需设置为 from |
| className | string | 否 | - | 类名 |
| style | string | 否 | - | 整体样式 |

#### CheckboxItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|-----|
| value | string | 否 | - | checkbox 携带的 value 值, 在原生 form 表单提交的时候有用 |
| disabled | boolean  | 否 | false | 是否禁用 |
| id | string | 否 | - | 表单元素id |
| name |  string | 否 | - | 表单元素name |
| uid | string  | 否 | - | 当页面有多个CheckboxGroup时需传入，`必须页面唯一`，与外部的 CheckboxGroup 组件的 uid 一致 |
| className | string | 否 | - | 类名 |
| style | string | 否 | - | 整体样式 |



## 事件
#### CheckboxGroup

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 勾选状态变化时，触发此函数 |(value: string[], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void|

## 插槽
#### CheckboxGroup

| 名称 | 说明 | 作用域参数 |
| ----|----|----|
| header | 头部内容插槽 | - |
| footer | 底部内容插槽 | - |

#### CheckboxItem

| 名称 | 说明 | 作用域参数 |
| ----|----|----|
| default | 内容区 | - |
| icon | 未勾选状态图标 | - |
| checkedIcon | 勾选状态图标 | - |
| disbaledIcon | 禁用时未勾选状态图标 | - |
| disabledCheckedIcon | 禁用时勾选状态图标 | - |
