---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---

# Input 输入框
通过键盘输入内容，是最基础的表单域包装
## 何时使用
一般用在表单页进行信息的收集，提供文本框、选择框两种类型


## 代码示例
### 基本使用
<code src='../../demo/pages/InputItem'></code>



## 属性
| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| value |  输入框的值 | string | - |
| type | 输入框的类型 | 'text' &verbar; 'number' &verbar; 'idcard' &verbar; 'digit' &verbar; 'numberpad' &verbar; 'digitpad' &verbar; 'idcardpad' | "text" |
| password | 是否是密码类型  | boolean | false |
| disabled | 是否禁用  | boolean | false |
| placeholder | 占位符 | string | - |
| placeholderClass | 指定 placeholder 的样式类 | string | - |
| placeholderStyle | 指定 placeholder 的样式，可设置间距  | string| - |
| maxLength | 最大长度  | number | 140 | 
| confirmType |设置键盘右下角按钮的文字，有效值：done（显示“完成”）、go（显示“前往”）、next（显示“下一个”）、search（显示“搜索”）、send（显示“发送”），平台不同显示的文字略有差异。注意：只有在 type=text 时有效 |  'done' &verbar; 'go' &verbar; 'next' &verbar; 'search' &verbar; 'send' | 'done' | 
| confirmHold |  点击键盘右下角按钮时是否保持键盘不收起状态 | boolean | false |
| cursor |  指定 focus 时的光标位置 | number | - |
| selectionStart |  获取光标时，选中文本对应的焦点光标起始位置，需要和 selection-end 配合使用| number | -1 | 
| selectionEnd |  获取光标时，选中文本对应的焦点光标结束位置，需要和 selection-start 配合使用 | number | -1 |
| randomNumber |  当 type 为 number, digit, idcard 数字键盘是否随机排列 | boolean | false |
| enableNative |  是否启用 Native 渲染 | boolean| - |
| inputCls |  input 输入框的样式类名  | string | - |
| clear |  显示清除图标 | boolean | true |
| controlled |  是否受控模式 | boolean | false |
| alwaysSystem |  是否强制使用系统键盘和 Web-view 创建的 input 元素。为 true 时，confirm-type、confirm-hold 可能失效。 | boolean | false |
| autoFocus | 自动聚焦，ios 可能会失效 | boolean | false |
| id | 表单元素 id| string | - |
| name |  表单元素 name | string | - |
| className |  类名 | string | - |

## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 输入时触发此回调 | (v: string) => void |
| onConfirm | 	点击键盘完成时触发此回调 | (v: string) => void |
| onClear | 清除输入内容时触发此回调 | (v: string) => void |
| onFocus | 聚焦时触发触发此回调 | (v: string) => void |
| onBlur | 失焦时触发此回调 | (v: string) => void |

## 样式类
| 类名 | 说明 | 
| -----|-----|
| amd-input-item | 	整体样式 |
| amd-input-item-line | 整体样式 |
| amd-input-item-layer | 左侧内容区域样式 |
| amd-input-item-content | Input 组件样式 |
| amd-input-item-clear | 清除图标区域样式 |
| amd-input-item-clear-icon | 清除图标样式 |