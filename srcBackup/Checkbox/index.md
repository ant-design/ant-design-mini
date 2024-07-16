---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Checkbox 复选框

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

在一组可选项中进行多选。

## 何时使用

- 在一组可选项中进行多项选择时。
- 单独使用时可以表示两种状态之间的切换，与 switch 类似。区别在于，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要与提交操作配合。

## 代码示例

### 基本使用

<code src='pages/Checkbox/index'></code>

### CheckboxGroup

<code src='pages/CheckboxGroup/index'></code>

### Checkbox 自定义分组

<code src='pages/CheckboxCustomGroup/index'></code>

## API

#### Checkbox

| 属性           | 说明                    | 类型                                                                                              | 默认值 |
| -------------- | ----------------------- | ------------------------------------------------------------------------------------------------- | ------ |
| checked        | 是否选中                | boolean                                                                                           | -      |
| className      | 类名                    | string                                                                                            | -      |
| color          | 选中的颜色，同 CSS 色值 | string                                                                                            | -      |
| defaultChecked | 默认是否选中            | boolean                                                                                           | -      |
| disabled       | 是否禁用                | boolean                                                                                           | false  |
| style          | 样式                    | string                                                                                            | -      |
| onChange       | 选中状态改变时触发回调  | (checked: boolean, event: `Event`(https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |

#### CheckboxGroup

| 属性         | 说明                                                         | 类型                                                                                            | 默认值      |
| ------------ | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ----------- |
| className    | 类名                                                         | string                                                                                          | -           |
| color        | 选中的颜色，同 CSS 色值                                      | string                                                                                          | -           |
| defaultValue | 默认选中的值                                                 | `string[]`                                                                                      | -           |
| disabled     | 是否禁用                                                     | boolean                                                                                         | false       |
| label        | label 区插槽，接收 value（当前项可选项 item）、index（索引） | slot                                                                                            | -           |
| options      | 指定可选项                                                   | `{label: string; value: string; disabled: boolean}[]`                                           | -           |
| position     | 布局，可选 `horizontal`、`vertical`                          | string                                                                                          | `vertical`  |
| style        | 样式                                                         | string                                                                                          | -           |
| value        | CheckboxGroup 的值，决定子元素是否勾选                       | `string[]`                                                                                      | -           |
| onChange     | 勾选状态变化时触发此函数                                     | (value: `string[]`, event: `Event`(https://opendocs.alipay.com/mini/framework/event-object)) => void | -           |
