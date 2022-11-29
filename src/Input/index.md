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


# API
## Input
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| allowClear | 可以点击清除图标删除内容 | `boolean` | false |  
| defaultValue | 始值值 | `boolean` | - | 
| className | 类名| `string` | - |
| confirmType | type=text 时有效。设置键盘右下角按钮的文字 可选：`done`（完成）\| `go`（前往）\| `next`（下一个）\| `search`（搜索）\| `send`（显示“发送”）| `string` | - |
| cursor | 指定 focus 时的光标位置 | `number` | - |
| disabled | 是否禁用 | `boolean` | false |
| enableNative | 是否启用 Native 渲染，一般不需要使用。[查看为什么需要](https://opendocs.alipay.com/mini/component/input#%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%20input%20%E8%BE%93%E5%85%A5%E6%A1%86%E5%9C%A8%20iOS%20%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84%E5%85%89%E6%A0%87%E6%BC%82%E7%A7%BB%E9%97%AE%E9%A2%98%EF%BC%9F) | `boolean` | - |
| focus | 聚焦值 | `boolean` | false | 
| focusClassName | input 输入框focus的样式类名 | `string` | - |
| focusStyle | input 输入框focus的样式 | `string` | - |
| maxLength | 最大长度 | `number` | 140 |
| name | 组件名字，用于表单获取数据 | `string` | - |
| password | 是否是密码类型 | `boolean` | false |  |
| placeholder | 占位符 | `string` | - |
| placeholderClassName | 占位符类名 | `string` | - |
| placeholderStyle | 占位符样式 | `string` | - |
| style | 样式| `string` | - |
| type | 输入框的类型，可选 `text` \| `number` \| `idcard` \| `digit` \| `numberpad` \| `digitpad` \| `idcardpad` | `text` | `string` | `test` |
| value | 输入框的值。 | `string` | - | 
| onConfirm | 	点击键盘完成时触发此回调 | (event: `Event` => void | - |
| onFocus | 聚焦时触发触发此回调 | (event: `Event`) => void | - |
| onBlur | 失焦时触发此回调 | (event: `Event`) => void | - |
| onChange | 输入时触发此回调 | (value: `string`, event: `Event`) => void | - |
