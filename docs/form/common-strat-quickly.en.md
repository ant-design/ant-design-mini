---
order: 1
nav:
  path: /form
group:
  title: 内置组件
  order: 1
---

# 单选框 radio

单选框组件 radio 直接使用的 `antd-mini` 的 `radio` 组件，支持以下属性透传

## 属性

| 属性                 |    类型                     | 是否必须      | 默认值             |  功能描述               |
| :--------           | :--------                   | :---        | :----             |  :---                  |
| position            |  `horizontal \| vertical`   |  否          |  `horizontal `    |  单项项的布局            |
| options             | IOption[]                   |  是          |  []               |  选项数据列表            |
| disabled            | boolean                     |  否          |  --               |  是否置灰禁止更改        |
| className           | string                      |  否          |  --               |  样式类名               |
| color               | string                      |  否          |  --               |  图标颜色               |

## IOption 

| 属性                 |    类型          |  功能描述                         |
| :--------           | :--------       |  :---                             |
| label               | string          |  选项label                         |
| value               | boolean         |  选项值                            |
| disable             | boolean         |  是否不可选择                       |
| color               | string          |  选项选中颜色，只在`horizontal`下生效  |
| toolTip             | IToolTip        |  选项展示❓提示                      |

## IToolTip

| 属性                 |    类型          |  功能描述                                            |
| :--------           | :--------       |  :---                                               |
| type                |  `alert`        |  点击icon后提示文案的类型，目前只支持alert模式            |
| title               | string          |  alert的标题                                         |
| text                | string          |  alert的文案                                         |
| buttonText          | string          |  alert确定按钮文案                                    |

## schema 示例

```js
const formItemSchema = {
  title: '单选框',
  type: 'string',
  value: 'banana',
  widget: 'radio',
  props: {
    position: 'vertical',
    color: 'red',
    options: [
      { value: 'apple', label: '苹果', disabled: true },
      { value: 'orange', label: '橘子' },
      { value: 'banana', label: '香蕉' }
    ]
  }
}
```

