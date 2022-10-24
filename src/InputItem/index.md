---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Input 输入框
通过键盘输入内容，是最基础的表单域包装
## 何时使用
一般用在表单页进行信息的收集，提供文本框、选择框两种类型

## 注意事项
- 当作为表单组件，配合 `Form`/`FormItem` 组件使用时，需要设置 `mode` 的值为 `form`。

## 代码示例
### 基本使用
<code src='../../demo/pages/InputItem'></code>



## 属性
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| autoFocus | 自动聚焦，ios 可能会失效 | `boolean` | false | 
| className | 类名| `string` | - |
| clear | 显示清除图标 | `boolean` | true |  
| controlled | 是否受控模式 | `boolean` | false | 
| confirmType | 设置键盘右下角按钮的文字，有效值：done（显示“完成”）、go（显示“前往”）、next（显示“下一个”）、search（显示“搜索”）、send（显示“发送”），平台不同显示的文字略有差异。注意：只有在 type=text 时有效 | 'done' &verbar; 'go' &verbar; 'next' &verbar; 'search' &verbar; 'send' | 'done' | 
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起状态 | `boolean` | false | 
| cursor | 指定 focus 时的光标位置 | `number` | - | 
| disabled | 是否禁用 | `boolean` | false | 
| enableNative | 是否启用 Native 渲染 | `boolean` | - |
| id | 表单元素 id | `string` | - | 
| inputClassName | input 输入框的样式类名 | `string` | - | 
| inputStyle | input 输入框的样式 | `string` | - | 
| layer | input 排列位置 | 'horizontal' &verbar; 'vertical' | 'horizontal' | 
| maxLength | 最大长度 | `number` | 140 | 
| mode | 配合From/FormItem组件使用时，需设置为 from| 'noraml' &verbar; 'form' | 'normal' | 
| name | 表单元素 name | `string` | - | 
| password | 是否是密码类型 | `boolean` | false |  |
| placeholder | 占位符 | `string` | - |
| placeholderClass | 指定 placeholder 的样式类 | `string` | - | 
| placeholderStyle | 指定 placeholder 的样式，可设置间距 | `string` | - |
| randomNumber | 当 type 为 number, digit, idcard 数字键盘是否随机排列 | `boolean` | false |
| selectionStart | 获取光标时，选中文本对应的焦点光标起始位置，需要和 selection-end 配合使用 | `number` | -1 | 
| selectionEnd | 获取光标时，选中文本对应的焦点光标结束位置，需要和 selection-start 配合使用 | `number` | -1 | 
| style | 样式| `string` | - |
| type | 输入框的类型 | 'text' &verbar; 'number' &verbar; 'idcard' &verbar; 'digit' &verbar; 'numberpad' &verbar; 'digitpad' &verbar; 'idcardpad' | 'text'|
| value | 输入框的值 | `string` | - | 
| onConfirm | 	点击键盘完成时触发此回调 | (value: `string`, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onClear | 清除输入内容时触发此回调 | (value: `string`, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onFocus | 聚焦时触发触发此回调 | (value: `string`, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onBlur | 失焦时触发此回调 | (value: `string`, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onChange | 输入时触发此回调 | (value: `string`, event:  [`Event`](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |




