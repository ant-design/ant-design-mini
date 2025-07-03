---
nav:
  path: /form
group:
  title: 内置组件
  order: 1
---

# 输入框 input

input直接使用的 `antd-mini` 的 `input` 组件，支持以下属性传入

## 属性

| 属性                 |    类型          | 是否必须      | 默认值      |  功能描述              |
| :--------           | :--------       | :---         | :----      |  :---                  |
| controlled           | boolean          |  否          |  --        | 键盘输入问题，可使用 controlled="{{false}}"                   |
| style           | string          |  否          |  --        |  样式                  |
| focus           | boolean          |  否          |  --        |  聚焦，查看                |
| className           | string          |  是          | --         |  输入框样式名称                |
| allowClear               | boolean         |  否          |  false     |  是否显示清除的icon          |
| confirmType         | string          |  否          |  --        |                           |
| disabled            | boolean         |  否          |  false     |  是否置灰                      |
| enableNative        | boolean         |  否          |  --        |  是否启用 Native 渲染                           |
| maxLength           | number          |  否          |  --        |  最大长度前                    |
| password            | boolean         |  否          |  --        |  是否密码输入                  |
| placeholder         | string          |  否          |  请输入     |  占位符提示                   |
| placeholderClass    | string          |  否          |  --        |  占位符样式名称                |
| placeholderStyle    | string          |  否          |  --        |  占位符样式stayle             |
| randomNumber        | boolean         |  否          |  false     |  数字键盘，数字是否随笔排列      |
| type | 'text' &verbar; 'number' &verbar; 'idcard' &verbar; 'digit' &verbar; 'numberpad' &verbar; 'digitpad' &verbar; 'idcardpad' | 否 | 'text' | 输入框的类型 |
| confirmType | 'done' &verbar; 'go' &verbar; 'next' &verbar; 'search' &verbar; 'send' | 否 | "done" | 设置键盘右下角按钮的文字，有效值：done（显示“完成”）、go（显示“前往”）、next（显示“下一个”）、search（显示“搜索”）、send（显示“发送”），平台不同显示的文字略有差异。注意：只有在 type=text 时有效。 |
| inputCls | string | 否 | - | input 输入框的样式类名 |
| onFocus             | (val: string)= > void          |  否          |  --        |  输入框聚焦的时候触发                    |
| onBlur              | (val: string)= > void          |  否          |  --        |  出入框失焦的时候触发                    |
| onConfirm              | (val: string)= > void          |  否          |  --        |  点击键盘完成时触发此回调                 |

## 方法

| 方法名称                 | 参数和返回          |  功能描述              |
| :--------           | :--------       | :---         | :----      |  :---                  |

| onFocus             | (val: string)= > void          |  否          |  --        |  输入框聚焦的时候触发                    |
| onBlur              | (val: string)= > void          |  否          |  --        |  出入框失焦的时候触发                    |
| onConfirm              | (val: string)= > void          |  否          |  --        |  点击键盘完成时触发此回调                 |
