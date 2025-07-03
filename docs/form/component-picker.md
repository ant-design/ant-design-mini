---
nav:
  path: /form
group:
  title: 内置组件
  order: 1
---

# 选择框 picker

单选框 pick 直接使用的 `antd-mini` 的 `picker` 组件，联级选择使用的 `antd-mini` 的  `picker.CascaderPicker`, 均支持对应的属性透传

## picker 属性

| 属性                   |    类型                           | 是否必须        | 默认值        |  功能描述                               |
| :--------             | :--------                         | :---          | :----        |  :---                                 |
| options               | PickerColumnItem[] ｜ string[]    |  是            |  []          |  选择的列表数据                          |
| title                 | string                            |  否            |  --          |  弹出框标题                             |
| disable               | boolean                           |  否            | `false`      |  是否置灰，优先级高于外层 disable          |
| placeholder           | string                            |  否            |  请输入       |  占位符提示                              |
| animationType         | transform | position              |  否            |  transform   |  动画类型                               |
| maskClosable          | boolean                           |  否            |  `false`     |  点击蒙层是否可以关闭                     |
| className             | string                            |  否            |  --          |  样式类名称                              |
| style                 | string                            |  否            |  --          |  样式                                   |
| indicatorStyle        | string                            |  否            |  --          |  选中框样式                              |
| indicatorClassName    | string                            |  否            |  --          |  选中框的类名                            |
| maskClassName         | string                            |  否            |  --          |  蒙层的类名                              |
| maskStyle             | string                            |  否            |  --          |  蒙层的样式                              |
| popClassName          | string                            |  否            |  --          |  弹出框类名                              | 
| popStyle              | string                            |  否            |  --          |  弹出框样式                              |
| cancelText            | string                            |  否            |  确定         |  取消文案                                |
| okText                | string                            |  否            |  取消         |  确认按钮文案                             |
| arrow                 | boolean                           |  否            | `true`        |  是否展示右侧的箭头                        |



## 方法

| 方法名称         | 参数和返回                                                                      |  功能描述                      |
| :--------       | :--------                                                                     | :---                          |
| onOk            | (value: string[], selectedOptions: PickerColumnItem) => void                  | 点击确定按钮，触发回调            |
| onCancel        | (event: Event) => void                                                        | 点击取消按钮/蒙层，触发回调        |
| onFormat        | (value: PickerColumnItem, column: PickerColumnItem) => string                 | 选中值的文本显示格式              |
| onChange        | (value: string[], electedOptions: PickerColumnItem) => void                   | picker 弹框滚动选择项变化的时候触发 |
| onVisibleChange | (visible: boolean, event: Event) => void                                      | 弹出框显示/隐藏状态变化触发         |


## PickerColumnItem

| 参数  | 说明 | 类型               |
| ----- | ---- | ---------------- |
| label | 文字 | string            |
| value | 值   | string \| number |

## CascaderOption

| 参数     | 说明 | 类型                   | 
| -------- | ---- | ----------------     |
| label    | 文字 | string                |
| value    | 值   | string \| number      |
| children | 子级 | CascaderOption[]      |

## schema 示例

```js
const basePickerSchema = {
  title: 'input输入款',
  type: 'string',
  widget: 'picker',
  value: '内容',
  required: true,
  disabled: true,
  props: {
    placeholder: '请填写内容',
    options: ['北京', '上海', '深圳', '广州', '南京', '武汉', '无锡', '苏州'],
    onVisibleChange: (visible, e) => {},
    onChange: (visible, selectedOptions) => {},
    onOk: (value, selectedOptions) => {}
  },
}

const objectPickerSchema = {
  title: '对象选择器',
  type: 'string',
  widget: 'picker',
  value: 'Mon',
  props: {
    placeholder: '请选择',
    title: '请选择',
    options: [
      { label: '周一', value: 'Mon' },
    ]
  }
}

const multiColumnPickerSchema = {
  title: '多列选择器',
  type: 'array',
  widget: 'picker',
  value: ['Tues', 'pm'],
  props: {
    placeholder: '请选择时间',
    title: '请选择',
    options: [
      [
        { label: '周一', value: 'Mon' },
      ],
      [
        { label: '上午', value: 'am' },
        { label: '下午', value: 'pm' }
      ]
    ]
  }
}

const cascaderPickerSchema = {
  title: '级联选择器',
  type: 'array',
  widget: 'picker',
  props: {
    arrow: true,
    type: 'cascader',
    placeholder: '请选择归属地',
    value: ['33', '3301'],
    options: [
      {
        label: '浙江',
        value: '33',
        children: [
          {
            label: '杭州',
            value: '3301'
          },
        ]
      },
    ]
  }
}
```

