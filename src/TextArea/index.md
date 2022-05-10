---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---

# TextArea 文本域
通过键盘输入内容，是最基础的表单域包装
## 何时使用
一般用在表单页进行信息的收集

## 代码示例
### 基本使用
<code src='../../demo/pages/TextArea'></code>

## 属性
| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| value | 输入框的值  | string | - |
| disabled | 是否禁用  | boolean | false |
| placeholder | 占位符  | string | - |
| placeholderClass |  指定 placeholder 的样式类  | string | - |
| placeholderStyle |   指定 placeholder 的样式，可设置间距 | string | -|
| maxLength |  最大长度 | number | 140 |
| autoHeight | 是否自动增高 | boolean | false |
| showCount |  是否渲染字数统计功能 | boolean | true  |
| enableNative | 是否启用 Native 渲染  | boolean | false |
| controlled |   是否受控模式 | boolean | false |  |
| autoFocus |  自动聚焦，ios 可能会失效 | boolean | false |
| id |  表单元素 id | string | - |
| name |  表单元素 name | string | - |
| className |  类名 | string | - |



## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 输入时触发此回调 | (v: string) => void |
| onConfirm | 	点击键盘完成时触发此回调 | (v: string) => void |
| onFocus | 聚焦时触发触发此回调 | (v: string) => void |
| onBlur | 失焦时触发此回调 | (v: string) => void |

## 样式类
| 类名 | 说明 | 
| -----|-----|
| amd-textarea | 	整体样式 |
| amd-textarea-disabled | 	禁用样式 |