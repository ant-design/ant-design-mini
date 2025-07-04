---
order: 5
nav:
  path: /form
group:
  title: 内置组件
  order: 1
---

# 开关 switch

开关组件 switch 直接使用的 `antd-mini` 的 `switch` 组件，支持以下属性透传


## 属性

| 属性             |    类型      | 是否必须      | 默认值       |  功能描述                                          |
| :--------       | :--------    | :---         | :----       |  :---                                            |
| color           | string       |  否          | --          |  选中背景色                                        |
| disabled        | boolean      |  否          |  `false`    |  是否禁用                                          |
| checkedText     | string       |  否          |  --         |  选中时的内容                                       |
| uncheckedText   | string       |  否          |  --         |  非选中时的内容                                     |
| size            | string       |  否          |  `medium`   |  组件尺寸，可选 `medium` `small` `x-small`          |
| style           | string       |  否          |  --         |  样式                                             |
| className       | string       |  否          |  --         |  样式类名称                                        |

## Demo 代码

<code src='../../demo/pages/FormRenderMini/FormSwitch/index'></code>