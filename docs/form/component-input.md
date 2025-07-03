---
nav:
  path: /form
group:
  title: 内置组件
  order: 1
---

# 输入框 input

输入框组件 input 直接使用的 `antd-mini` 的 `input` 组件，支持以下属性透传

## 属性

| 属性                    |    类型          | 是否必须       | 默认值      |  功能描述              |
| :--------               | :--------       | :---         | :----      |  :---                  |
| placeholder             | string          |  否          |  请输入     |  占位符提示                   |
| maxLength               | number          |  否          |  --        |  最大长度前                    |
| password                | boolean         |  否          |  --        |  是否密码输入                  |
| focus                   | boolean         |  否          |  --        |  聚焦，查看                |
| allowClear              | boolean         |  否          |  `false`     |  是否显示清除的icon          |
| disabled                | boolean         |  否          |  `false`     |  是否置灰                      |
| controlled              | boolean         |  否          |  --        | 键盘输入问题，可使用 controlled="{{false}}"                   |
| enableNative            | boolean         |  否          |  --        |  是否启用 Native 渲染                           |
| className               | string          |  是          | --         |  输入框样式名称                |
| style                   | string          |  否          |  --        |  样式                  |
| placeholderClassName    | string          |  否          |  --        |  占位符样式名称                |
| placeholderStyle        | string          |  否          |  --        |  占位符样式stayle             |
| randomNumber            | boolean         |  否          |  `false`     |  数字键盘，数字是否随笔排列      |
| type                    | 'text' &verbar; 'number' &verbar; 'idcard' &verbar; 'digit' &verbar; 'numberpad' &verbar; 'digitpad' &verbar; 'idcardpad' | 否 | text | 输入框的类型 |
| confirmType             | 'done' &verbar; 'go' &verbar; 'next' &verbar; 'search' &verbar; 'send' | 否 | "done | 设置键盘右下角按钮的文字，有效值：done（显示“完成”）、go（显示“前往”）、next（显示“下一个”）、search（显示“搜索”）、send（显示“发送”），平台不同显示的文字略有差异。注意：只有在 type=text 时有效。 |


## 方法

| 方法名称              | 参数和返回                                      |  功能描述                          |
| :--------           | :--------                                      | :---                              |
| onFocus             | (val: string, field: string) = > void          |  输入框聚焦的时候触发                 |
| onBlur              | (val: string, field: string) = > void          |  出入框失焦的时候触发                 |
| onConfirm           | (val: string, field: string) = > void          |  点击键盘完成时触发此回调              |

## schema 示例

```js
const formItemSchema = {
  title: 'input输入框',
  type: 'string',
  widget: 'input',
  value: '内容',
  required: true,
  disabled: true,
  props: {
    placeholder: '请填写内容',
    disabled: true, // 优先级大于外层的 disabled
    onBlur: (v, field) => {
      // v: 当前输入框的值
      // field: 当前表单项的key，groupName.formItemKey 的形式
    },
  },
}
```

