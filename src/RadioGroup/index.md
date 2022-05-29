---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---
# RadioGroup 单选框
在一组可选项中进行单选，通过value来指定选中项
## 何时使用
Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多


## 代码示例
### 基本使用
<code src='../../demo/pages/RadioGroup'></code>



## 属性
#### RadioGroup
| 属性 |  说明  | 类型 | 默认值 |
| -----|-----|-----|-----|
| value |  RadioGroup 的值，决定子元素是否勾选  | string | - |
| radius |  是否带圆角   | boolean | false |
| position | 布局  | 'horizontal' &verbar;  'vertical' | 'vertical' | 
| uid |当页面有多个RadioGroup时需传入，`必须页面唯一`，与内部的 RadioItem 组件的 uid 一致  | string | - |
| header | 头部说明 | string | - | 
| footer | 底部说明  | string | - |
| disabled | 是否整体禁用  | boolean | false |
| className |  类名 | string | - |


#### RadioItem
| 属性 |  说明 | 类型 | 默认值 | 
| -----|-----|-----|-----|
| value | Radio 携带的 value 值, 在原生 form 表单提交的时候有用；在 RadioGroup 时亦有用 | any  | - |
| color | 选中的颜色，同 CSS 色值 ，同 CSS 色值  | string| false |
| disabled | 是否禁用  | boolean | false |
| icon | 自定义未选中图标，支持[Icon](./icon#代码示例)和图片路径 | string | - |
| checkedIcon | 自定义选中状态的图标，支持[Icon](./icon#代码示例)和图片路径  | string | - |
| disabledIcon | 自定义禁用状态的图标，支持[Icon](./icon#代码示例)和图片路径 | string | - |
| disabledCheckedIcon | 自定义禁用选中状态的图标，支持[Icon](./icon#代码示例)和图片路径 | string | - |
| uid | 当页面有多个RadioGroup时需传入，`必须页面唯一`，需与外部的 RadioGroup 组件的 uid 一致  | string | - | 
| className |  类名 | string | - |

## 事件
#### RadioGroup
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中项发生变化，触发回调 | (v: any) => void |

## 插槽
#### RadioGroup
| 插槽名 | 说明 |
| -----|-----|
| header | 头部说明  |
| footer | 底部说明 |

## 样式类
#### RadioGroup
| 类名 | 说明 |
| -----|-----|
| amd-radio-group | 整体样式 |
| amd-radio-group-header | 头部说明区域样式 |
| amd-radio-group-body | radio-group 区域样式 |
| amd-radio-group-footer | 底部说明区域样式 |

#### RadioItem
| 类名 | 说明 |
| -----|-----|
| amd-radio-item-wrap | 整体样式 |
| amd-radio-item-base | radio 组件样式 |
| amd-radio-item-fake | 选中状态下 radio 组件样式 |