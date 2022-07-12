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

- 复选框组内部子元素，必须配合 CheckboxGroup 使用，有单独使用需求的请使用 Checkbox。
- CheckboxGroup 组件与 CheckboxItem 组件必须有相同的 uid，且 uid 全局唯一。
- 当作为表单组件，配合 `Form`/`FormItem` 组件使用时，需要设置 `ChecboxGroup` 组件的 `mode` 的值为 `form`。

## 代码示例
### 基本使用
<code src='../../demo/pages/CheckboxGroup'></code>
## 属性
#### CheckboxGroup
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| value | CheckboxGroup 的值，决定子元素是否勾选 | string[] | [] |
| radius |  是否带圆角 | boolean | false |
| position | 布局 | 'horizontal' &verbar;  'vertical' | 'vertical' | 
| uid |  当页面有多个CheckboxGroup时需传入，`必须页面唯一`，与内部的 CheckboxItem 组件的 uid 一致 | string | - |
| header |  头部说明 | string | - |
| footer |  底部说明 | string | - |
| disabled | boolean | 否 | false | 是否禁用 |
| mode | 'noraml' &verbar; 'form' | 否 | 'normal' | 配合From/FormItem组件使用时，需设置为 from |
| className | 类名| string | - |

#### CheckboxItem
| 属性 | 说明 | 类型 | 默认值 | 
| -----|-----|-----|----- |
| checked |  是否选中 | boolean | false | 
| disabled | 是否禁用 | boolean | false |
| color | checkbox 的颜色，同 CSS 色值 | string | false |
| value |  checkbox 携带的 value 值, 在原生 form 表单提交的时候有用；在 CheckboxGroup 时亦有用 | string | - |
| icon | 自定义未选中图标，支持[Icon](./icon#代码示例)和图片路径 | string | - |
| checkedIcon | 自定义选中状态的图标，支持[Icon](./icon#代码示例)和图片路径  | string | - |
| disabledIcon | 自定义禁用状态的图标，支持[Icon](./icon#代码示例)和图片路径 | string | - |
| disabledCheckedIcon | 自定义禁用选中状态的图标，支持[Icon](./icon#代码示例)和图片路径 | string | - |
| uid |  当页面有多个CheckboxGroup时需传入，`必须页面唯一`，与外部的 CheckboxGroup 组件的 uid 一致  | string | - |
| id |  表单元素 id | string | - |
| name | 表单元素 name | string | - | 
| className | 类名| string | - |


## 事件
#### CheckboxGroup

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 勾选状态变化时，触发此函数 |(value) => {}|

## 插槽
#### CheckboxGroup

| 名称 | 说明 |
| ----|----|
| header | 头部内容插槽 |
| footer | 底部内容插槽 |

## 样式类 
#### CheckboxGroup

| 类名 | 说明 |
| -----|-----|
| amd-checkbox-group |整体样式|
| amd-list-header | 头部内容样式 |
| amd-list-body | 内部内容样式 |
| amd-list-footer |底部内容样式|

#### CheckboxItem

| 类名 | 说明 |
| -----|-----|
| amd-checkbox-item | 整体样式 |
| amd-checkbox | 原始 checkbox 整体样式 |
| amd-checkbox-base | 原始 checkbox 样式 |
| amd-checkbox-fake | 未选中 checkbox 样式 |
| amd-checkbox-checked | 选中 checkbox 样式 |
