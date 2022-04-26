---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: false
---

# CheckboxGroup 复选框组
复选框组合，内部由多个 CheckboxItem/Checkbox 组成，通过value来指定选中项。

## 代码示例
### 基本使用
<code src='../../demo/pages/CheckboxGroup'></code>



## 属性

#### CheckboxGroup
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| value | string[] | 否 | - | CheckboxGroup 的值，决定子元素是否勾选 |
| radius | boolean | 否 | false | 是否带圆角 |
| uid | string | 否 | - | 当页面有多个CheckboxGroup时需传入，`页面内uid必须唯一`，与内部的 CheckboxItem/Checkbox 组件的 uid 一致 |
| header | string | 否 | - | 头部说明 |
| footer | string | 否 | - | 底部说明 |

#### CheckboxItem

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| checked | boolean | 否 | - | checkbox 是否选中 |
| disabled | boolean | 否 | false | 是否禁用 |
| color | string | 否 | false | checkbox 的颜色，同 CSS 色值 |
| value | string | 否 | - | checkbox 携带的 value 值, 在原生 form 表单提交的时候有用；在 CheckboxGroup 时亦有用 |
| icon | string | 否 | - | 自定义图标，支持Icon type或图片路径 |
| checkedIcon | string | 否 | - | 自定义选中状态的图标，支持Icon type或图片路径 |
| disabledIcon | string | 否 | - | 自定义禁用状态的图标，支持Icon type或图片路径 |
| disabledCheckedIcon | string | 否 | - | 自定义禁用选中状态的图标，支持Icon type或图片路径 |
| uid | string | 否 | - | 当页面有多个CheckboxGroup时需传入，`页面内uid必须唯一`，与外部的 Checkboxgroup 组件的 uid 一致 |
| id | string | 否 | - | 表单元素 id |
| name | string | 否 | - | 表单元素 name |

## 事件

#### CheckboxGroup
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 勾选状态变化时，触发此函数 |-----|

## 插槽

#### CheckboxGroup
| 名称 | 说明 |
| ----|----|
| header | 头部内容插槽 |
| footer | 底部内容插槽 |

## 样式类

#### CheckboxGroup
| 类名 | 说明 |
| -----|-----|
| amd-checkbox-group |整体样式|
| amd-checkbox-header | 头部内容样式 |
| amd-checkbox-body | 内部内容样式 |
| amd-checkbox-footer |底部内容样式|

#### CheckboxItem

| 类名 | 说明 |
| -----|-----|
| amd-checkbox-item | 整体样式 |
| amd-checkbox-item-content | 内容区样式 |

<style> 
table th:first-of-type { width: 180px; }
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2) {
    width: 140px;
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3) {
    width: 30px;
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4) {
    width: 50px;
}
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(2) {
    width: 140px;
}
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(3) {
    width: 30px;
}
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(4) {
    width: 50px;
}
</style> 