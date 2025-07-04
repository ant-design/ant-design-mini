---
order: 4
nav:
  path: /form
group:
  title: 内置组件
  order: 1
---

# 选择器 selector

选择器组件 selector 直接使用的 `antd-mini` 的 `selector` 组件，支持以下属性透传


## 属性

| 属性                    |    类型          | 是否必须      | 默认值          |  功能描述               |
| :--------              | :--------        | :---        | :----          |  :---                  |
| options                |  IOption[]       |  是         |  []            |  选项数据源              |
| className              |  string          |  否         |  --            |  类名                   |
| style                  |  否string        |  否         |  --            |  样式                   |
| activeItemStyle        | string           |  否         |  --            |  选中选项的样式           |
| activeItemClassName    | string           |  否         |  --            |  选中选项的类名           |
| disabled               | boolean          |  否         |  --            |  是否置灰禁止更改         |
| maxSelectedCount       | number           |  否         |  --            |  最大可选中项的数量        |
| minSelectedCount       | number           |  否         |  --            |  最小可选中项的数量        |
| multiple               | boolean          |  否         | `false`          |  是否多选                |

## IOption 

| 属性                 |    类型          |  功能描述              |
| :--------           | :--------       |  :---                  |
| text                | string          |  选项label              |
| value               | boolean         |  选项值                 |
| subText             | string          |  副文案                 |
| disabled            | boolean         |  是否禁用               |

## 方法

| 属性          | 类型                                                                 |   功能描述               |
| :--------    | :--------                                                            |  :---                  |
| onSelectMin  | (value: string \| number, item: SelectorItem, event: Event) => void   |  触发最大限制         |
| onSelectMax  | (value: string \| number, item: SelectorItem, event: Event) => void   |  触发最小限制          |


## Demo 代码

<code src='../../demo/pages/FormRenderMini/FormSelector/index'></code>