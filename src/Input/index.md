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


## 代码示例
### 基本使用
<code src='pages/Input/index'></code>


## 属性
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| allowClear | 可以点击清除图标删除内容 | `boolean` | false |  
| defaultFocus | 聚焦初始值值 | `boolean` | false | 
| className | 类名| `string` | - |
| confirmType | 设置键盘右下角按钮的文字，有效值：done（显示“完成”）、go（显示“前往”）、next（显示“下一个”）、search（显示“搜索”）、send（显示“发送”），平台不同显示的文字略有差异。注意：只有在 type=text 时有效 | 'done' &verbar; 'go' &verbar; 'next' &verbar; 'search' &verbar; 'send' | 'done' | 
| cursor | 指定 focus 时的光标位置 | `number` | - | 
| disabled | 是否禁用 | `boolean` | false | 
| enableNative | 是否启用 Native 渲染，一般不需要使用[查看为什么需要](https://opendocs.alipay.com/mini/component/input#%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%20input%20%E8%BE%93%E5%85%A5%E6%A1%86%E5%9C%A8%20iOS%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84%E5%85%89%E6%A0%87%E6%BC%82%E7%A7%BB%E9%97%AE%E9%A2%98%EF%BC%9F) | `boolean` | - |
| inputClassName | input 输入框的样式类名 | `string` | - | 
| inputStyle | input 输入框的样式 | `string` | - | 
| maxLength | 最大长度 | `number` | 140 | 
| password | 是否是密码类型 | `boolean` | false |  |
| placeholder | 占位符 | `string` | - |
| placeholderClassName | 占位符类名 | `string` | - |
| placeholderStyle | 占位符样式 | `string` | - |
| style | 样式| `string` | - |
| type | 输入框的类型 | 'text' &verbar; 'number' &verbar; 'idcard' &verbar; 'digit' &verbar; 'numberpad' &verbar; 'digitpad' &verbar; 'idcardpad' | 'text'|
| value | 输入框的值 | `string` | - | 
| onConfirm | 	点击键盘完成时触发此回调 | (event: `Event` => void | - |
| onClear | 清除输入内容时触发此回调 | (event: `Event`) => void | - |
| onFocus | 聚焦时触发触发此回调 | (event: `Event`) => void | - |
| onBlur | 失焦时触发此回调 | (event: `Event`) => void | - |
| onChange | 输入时触发此回调 | (value: `string`, event: `Event`) => void | - |




