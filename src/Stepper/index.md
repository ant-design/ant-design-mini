---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Stepper 步进器
一种两段式控制，增加、减少或修改数值
## 何时使用
用于在一定范围内输入、调整当前数值
## 注意事项
- 输入最大（最小）值无提示，失去焦点后，超过最大（最小）值时系统会自动回显数值为最大值；
- 当作为表单组件，配合 `Form`/`FormItem` 组件使用时，需要设置 `mode` 的值为 `form`。

## 代码示例
### 基本使用
<code src='../../demo/pages/Stepper'></code>

## 属性

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|----- |
| autoFocus | 自动聚焦，ios 可能会失效 | `boolean` | `false` | 
| className | 类名 | `string` | - | 
| controlled | 是否受控  | `boolean` | `false` |
| disabled |  是否禁用 | `boolean` | `false` |
| inputClassName |  输入框类型 | `string` | - |
| inputStyle |  输入框样式 | `string` | - |
| max | 最大值 | `number` | - |
| min | 最小值 | `number` | - |
| mode | 配合From/FormItem组件使用时，需设置为 from | `'noraml' \| 'form'` | 否 | `'normal'` |
| name | 表单元素 name | `string` | - | 
| precision | 计算精度，保留几位小数 [详见](https://github.com/ant-design/ant-design/issues/5998) | `number` |  - | 
| style | 样式 | `string` | - | 
| step | 步距，即每次加减的值 | `number` | `1` | 
| type | 输入框唤起键盘类型 | `'number' \| 'digit'` |  - | 
| value | 输入框的值, 表单提交的时候有效 | `number` | - |


## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onFocus | 聚焦时，触发此回调 | ( value: number, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void  |
| onBlur | 失去焦点时，触发此回调 | ( value: number, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void  |
| onChange | 数据变化后，触发此回调 | ( value: number, dataSet: Record<string, any> ) => void  |
