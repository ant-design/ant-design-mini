---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---

# Checkbox 复选框
在一组可选项中进行多选
## 何时使用
- 在一组可选项中进行多项选择时
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合

## 注意事项
- 单独使用Checkbox请勿传入uid属性
- CheckboxItem必须和CheckboxGroup搭配使用


## 代码示例

### 基本使用
<code src='../../demo/pages/Checkbox'></code>

### 搭配CheckboxGroup
<code src='../../demo/pages/CheckboxGroup'></code>



## 属性
    
#### Checkbox
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| checked | boolean | 否 | false | 是否选中 |
| disabled | boolean | 否 | false | 是否禁用 |
| color | string | 否 | false | checkbox 的颜色，同 CSS 色值 |
| value | string | 否 | - | checkbox 携带的 value 值, 在原生 form 表单提交的时候有用|
| icon | string | 否 | - | 自定义图标，支持[Icon](./icon#代码示例)和图片路径 |
| checkedIcon | string | 否 | - | 自定义选中状态的图标，支持Icon type或图片路径 |
| disabledIcon | string | 否 | - | 自定义禁用状态的图标，支持Icon type或图片路径 |
| disabledCheckedIcon | string | 否 | - | 自定义禁用选中状态的图标，支持Icon type或图片路径 |
| id | string | 否 | - | 表单元素 id |
| name | string | 否 | - | 表单元素 name |

#### CheckboxGroup
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | string[] | 否 | [] | CheckboxGroup 的值，决定子元素是否勾选 |
| radius | boolean | 否 | false | 是否带圆角 |
| position | 'horizontal' &verbar;  'vertical' | 否 | 'vertical' | 布局 |
| uid | string | 否 | - | 当页面有多个CheckboxGroup时需传入，`必须页面唯一`，与内部的 CheckboxItem 组件的 uid 一致 |
| header | string | 否 | - | 头部说明 |
| footer | string | 否 | - | 底部说明 |

#### CheckboxItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| checked | boolean | 否 | false | 是否选中 |
| disabled | boolean | 否 | false | 是否禁用 |
| color | string | 否 | false | checkbox 的颜色，同 CSS 色值 |
| value | string | 否 | - | checkbox 携带的 value 值, 在原生 form 表单提交的时候有用；在 CheckboxGroup 时亦有用 |
| icon | string | 否 | - | 自定义图标，支持[Icon](./icon#代码示例)和图片路径 |
| checkedIcon | string | 否 | - | 自定义选中状态的图标，支持Icon type或图片路径 |
| disabledIcon | string | 否 | - | 自定义禁用状态的图标，支持Icon type或图片路径 |
| disabledCheckedIcon | string | 否 | - | 自定义禁用选中状态的图标，支持Icon type或图片路径 |
| uid | string | 否 | - | 当页面有多个CheckboxGroup时需传入，`必须页面唯一`，与外部的 CheckboxGroup 组件的 uid 一致 |
| id | string | 否 | - | 表单元素 id |
| name | string | 否 | - | 表单元素 name |


## 事件

#### Checkbox
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中状态改变，触发回调 | (checked: boolean) => void|

#### CheckboxGroup
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 勾选状态变化时，触发此函数 | (value: string[]) => void |

## 插槽

#### CheckboxGroup
| 名称 | 说明 |
| ----|----|
| header | 头部内容插槽 |
| footer | 底部内容插槽 |

## 样式类

#### Checkbox
| 类名 | 说明 |
| -----|-----|
| amd-checkbox | 标签样式 |
| amd-checkbox-disabled | checkbox 组件禁用样式 |
| amd-checkbox-checked | checkbox 组件禁用样式 |
| amd-checkbox-base | 原始 checkbox 样式 |
| amd-checkbox-fake | checkbox 组件未选中样式 |
| amd-checkbox-fake-custom | 自定义图标时的样式 |

#### CheckboxGroup
| 类名 | 说明 |
| -----|-----|
| amd-checkbox-group |整体样式|
| amd-checkbox-group-header | 头部内容样式 |
| amd-checkbox-group-body | 内部内容样式 |
| amd-checkbox-group-footer |底部内容样式|

#### CheckboxItem

| 类名 | 说明 |
| -----|-----|
| amd-checkbox-item | 整体样式 |
| amd-checkbox-item-content | 内容区样式 |

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
.__dumi-default-mobile-previewer:nth-of-type(2)::after {
    border-bottom: none!important;
}
</style> 