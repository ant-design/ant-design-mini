---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# NumberKeyboard 数字键盘

## 何时使用
需要自定义数字键盘时

## 代码示例

### 基本使用
<code src='pages/NumberKeyboard/index'></code>

### 数字输入框
<code src='pages/NumberKeyboardNumber/index'></code>

### 金额输入框
<code src='pages/NumberKeyboardAmount/index'></code>

### 验证码输入框
<code src='pages/NumberKeyboardCode/index'></code>

## API
| 属性 | 说明 | 类型 | 默认值 |
| ------------|---------|----|-----|
| value       | 输入值       | string  | -     |
| visible     | 展示         | boolean | false |
| vibrate     | 震动         | boolean | true  |
| arrow       | 箭头         | boolean | false |
| point       | 小数点       | boolean | true  |
| title       | 标题         | string  | -     |
| random      | 乱序         | boolean | false |
| disable     | 禁用确认按钮  | boolean | false|
| safeArea    | 安全距离      | boolean | true |
| confirmText | 确认按钮的文字 | string  | -   |
| title       | 覆盖键盘的标题栏 | slot  | -   |
| confirm     | 覆盖键盘确认按钮 | slot  | -   |
| onChange    | 数字发生改变时的回调 | (val: string) => void |-|
| onVisibleChange | 隐藏键盘时的回调 | () => void |-|
| onConfirm   | 点击确认时的回调 | () => void |-|
