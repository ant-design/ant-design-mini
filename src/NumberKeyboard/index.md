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

## 基本使用
<code src='pages/NumberKeyboard/index'></code>

## 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| ------------|---------|----|-----|----- |
| value       | string  | 否 | -   | 输入值 |
| visible     | boolean | 否 | false | 展示 |
| vibrate     | boolean | 否 | true  | 震动 |
| arrow       | boolean | 否 | false | 箭头    |
| point       | boolean | 否 | true  | 小数点 |
| title       | string  | 否 | -     | 标题    |
| random      | boolean | 否 | false | 乱序    |
| disable     | boolean | 否 | false | 禁用确认按钮    |
| safeArea    | boolean | 否 | true  | 安全距离 |
| confirmText | string  | 否 | -     | 确认按钮的文字 |

## Slot
| 属性 | 说明 |
| ------------|---------|
| name="title" | 存在时会覆盖键盘的标题栏 |
| name="confirm"| 存在时会覆盖键盘确认按钮 |


## 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|-----|
| onInput | 数字发生改变时的回调 | (val: string) => void |
| onClose | 隐藏键盘时的回调 | () => void |
| onConfirm | 点击确认时的回调 | () => void |

## 样式类
| 类名 | 说明 |
| ----|----|
| amd-number-keyboard| 整体样式 |
| amd-number-title | 标题样式 |
