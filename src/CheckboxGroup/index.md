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
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| `string` | - |
| disabled | 是否禁用  | `boolean` | false | 
| mode | 配合From/FormItem组件使用时，需设置为 from | 'noraml' \| 'form' | 'normal'| 
| position | 布局 | 'horizontal' &verbar;  'vertical' | 'vertical' |
| style | 样式| `string` | - |
| uid | 当页面有多个CheckboxGroup时需传入，`必须页面唯一`，与内部的 CheckboxItem 组件的 uid 一致  | `string` | - | 
| value | CheckboxGroup 的值，决定子元素是否勾选 | `string`[] | [] |
| onChange | 勾选状态变化时，触发此函数 |(value: `string`[], event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |

#### CheckboxItem
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| checked | 是否选中 | `boolean` | false |
| className | 类名| `string` | - |
| disabled | 是否禁用  | `boolean` | false | 
| name |  表单元素name | `string` | - |
| icon | 图标插槽，，接收checked、disabled参数  | `slot` | - |
| id | 表单元素id | `string` | - |
| style | 样式| `string` | - |
| uid | 当页面有多个CheckboxGroup时需传入，`必须页面唯一`，与外部的 CheckboxGroup 组件的 uid 一致  | `string` | - | 
| value | checkbox 携带的 value 值, 在原生 form 表单提交的时候有用 | `string` | - |
