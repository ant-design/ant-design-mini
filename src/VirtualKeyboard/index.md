---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# VirtualKeyboard 虚拟键盘
输入框的拓展
## 何时使用
需要自定义数字键盘、金额输入、验证码输入时

## 代码示例

### 基本使用
<code src='../../demo/pages/VirtualKeyboard'></code>

## 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| ------------|---------|----|-----|----- |
| className   | string  | 否 | -   | className |
| value       | string  | 否 | -   | 默认值 |
| valueClass  | string  | 否 | -   | 默认值的className |
| type        | 'keyboard'&verbar;'amount'&verbar;'code'  | 否 | 'keyboard' | 类型：只需键盘&verbar;金额输入&verbar;验证码 |
| focus       | boolean | 否 | false | 获取焦点 |
| vibrate     | boolean | 否 | true  | 是否震动 |
| hideArrow   | boolean | 否 | false | 隐藏向下的箭头 |
| point       | boolean | 否 | true  | 是否有小数点 |
| sureBtnText | string  | 否 | '确认'  | 确认按钮文字 |
| sureBtnBg   | string  | 否 | '1677FF'  | 确认按钮背景颜色 |
| sureColor   | string  | 否 | 'fff'  | 确认按钮字体颜色 |
| showBtnText | boolean | 否 |  true  | 展示确认字体还是向下的icon |
| disableSureBtn | boolean  | 否 | false  | 禁用确认按钮 |
| isSureBtnSlot | boolean  | 否 | false  | 确定按钮是否使用slot name="sureBtn" data="{{disableSureBtn}}" |
| placeholder | string  | 否 | -  | 金额输入框的placeholder |
| placeholderClass | string  | 否 | -  | placeholder className |
| lightColor | string  | 否 | '#1677ff'  | 光标颜色 |
| lightClass | string  | 否 | -  | 光标className |
| fontSize   | number  | 否 | 20  | 金额的字体大小 |
| disable    | boolean | 否 | false  | 禁用金额输入框 |
| codeLength | number  | 否 | 4    | 验证码长度 |
| min | number  | 否 | 0    | 金额输入框小值 |
| max | number  | 否 | 0    | 金额输入框最大值 |


## 事件
| 事件名 | 说明 | 类型 | 补充 |
| -----|-----|-----|-----|
| onMax | 金额输入时，超过最大值的回调 | () => void |
| onMin | 金额输入时，小于最小值的回调 | () => void |
| onBlur | 收起键盘时的回调 | (val: string) => void |
| onFocus | 金额输入框，获取焦点的回调 | (val: string) => void |
| onChange | 数字发生改变时的回调 | (val: string) => void |
| onEnter | 点击确认时的回调 | (val: string) => void |
| onDelete | 点击删除时的回调 | (val: string) => void |

## 样式类
| 类名 | 说明 |
| ----|----|
| amd-amount-input| 整体样式 |
| amd-amount-input-code | 验证码整体样式 |
| amd-amount-input-kb | 数字键盘整体样式 |
| amd-amount-input-view | 金额输入框整体样式 |
