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

## 注意事项
- 内部配合 RadioItem 使用。
- RadioGroup 组件与 RadioItem 组件必须有相同的 uid，且 uid 全局唯一。

## 代码示例
### 基本使用
<code src='../../demo/pages/RadioGroup'></code>



## 属性
#### RadioGroup
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | string | 否 | - | RadioGroup 的值，决定子元素是否勾选 |
| radius | boolean | 否 | false | 是否带圆角 |
| uid | string | 否 | - | 当页面有多个RadioGroup时需传入，`必须全局唯一`，与内部的 RadioItem 组件的 uid 一致 |
| header | string | 否 | - | 头部说明 |
| footer | string | 否 | - | 底部说明 |

#### RadioItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | string | 否 | - | Radio 携带的 value 值, 在原生 form 表单提交的时候有用；在 RadioGroup 时亦有用 |
| disabled | boolean | 否 | false | 是否禁用 |
| className | string | 否 | - | 类名 |
| uid | string | 否 | - | 当页面有多个RadioGroup时需传入，`必须全局唯一`，需与外部的 RadioGroup 组件的 uid 一致 |

## 事件
#### RadioGroup
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中项发生变化，触发回调 | (v: string) => void |

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
| amd-list-header | 头部说明区域样式 |
| amd-list-body | radio-group 区域样式 |
| amd-list-footer | 底部说明区域样式 |

#### RadioItem
| 类名 | 说明 |
| -----|-----|
| amd-radio-item-wrap | 整体样式 |
| amd-radio-item-base | radio 组件样式 |
| amd-radio-item-fake | 选中状态下 radio 组件样式 |

<style> 
table th:first-of-type { width: 180px; } 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4)  {
    width: 50px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(4)  {
    width: 50px
} 
</style> 