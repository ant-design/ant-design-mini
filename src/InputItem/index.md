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
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | string | 否 | - | 输入框的值 |
| type | 'text' &verbar; 'number' &verbar; 'idcard' &verbar; 'digit' &verbar; 'numberpad' &verbar; 'digitpad' &verbar; 'idcardpad' | 否 | "text" | 输入框的类型 |
| password | boolean | 否 | false | 是否是密码类型。 |
| disabled | boolean | 否 | false | 是否禁用 |
| placeholder | string | 否 | - | 占位符。 |
| placeholderClass | string | 否 | - | 指定 placeholder 的样式类。 |
| placeholderStyle | string | 否 | - | 指定 placeholder 的样式，可设置间距。 |
| maxLength | number | 否 | 140 | 最大长度。 |
| confirmType | 'done' &verbar; 'go' &verbar; 'next' &verbar; 'search' &verbar; 'send' | 否 | 'done' | 设置键盘右下角按钮的文字，有效值：done（显示“完成”）、go（显示“前往”）、next（显示“下一个”）、search（显示“搜索”）、send（显示“发送”），平台不同显示的文字略有差异。注意：只有在 type=text 时有效。 |
| confirmHold | boolean | 否 | false | 点击键盘右下角按钮时是否保持键盘不收起状态。 |
| cursor | number | 否 | - | 指定 focus 时的光标位置。 |
| selectionStart | number | 否 | -1 | 获取光标时，选中文本对应的焦点光标起始位置，需要和 selection-end 配合使用。 |
| selectionEnd | number | 否 | -1 | 获取光标时，选中文本对应的焦点光标结束位置，需要和 selection-start 配合使用。 |
| randomNumber | boolean | 否 | false | 当 type 为 number, digit, idcard 数字键盘是否随机排列。 |
| enableNative | boolean | 否 | - | 是否启用 Native 渲染 |
| inputCls | string | 否 | - | input 输入框的样式类名 |
| clear | boolean | 否 | true | 显示清除图标 |
| controlled | boolean | 否 | false | 是否受控模式 |
| alwaysSystem | boolean | 否 | false | 是否强制使用系统键盘和 Web-view 创建的 input 元素。为 true 时，confirm-type、confirm-hold 可能失效。 |
| autoFocus | boolean | 否 | false | 自动聚焦，ios 可能会失效 |
| id | string | 否 | - | 表单元素 id |
| name | string | 否 | - | 表单元素 name |


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

<style> 
table th:first-of-type { width: 180px; }
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2) {
    width: 140px;
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3) {
    width: 30px;
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4) {
    width: 50px;
}
.__dumi-default-layout-content article table:nth-of-type(3) th:first-of-type {
    width: 300px;
}
</style> 