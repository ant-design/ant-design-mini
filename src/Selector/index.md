---
nav:
  path: /components
group:
  title: 表单类组件
toc: false
---

# Selector
## 注意事项
- 当作为表单组件，配合 `Form`/`FormItem` 组件使用时，需要设置 `mode` 的值为 `form`。

## 代码示例
<code src='../../demo/pages/Selector'></code>

## API

### 属性
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| controlled | boolean | 否 | false | 是否受控 |
| value | string[] | 否 | - | 已选择项, 取 items 每一项的 value |
| items | {text:string; value:string; subText: string; disabled: boolean}[] | 是 | - | 可选项 |
| activeItemClassName | string | 否 | - | 每一项激活时新加类名 |
| multiple | boolean | 否 | false | 是否允许多选，标签栏显示的时候会显示当前单选/多选的状态 |
| title | string | 否 | '' | 标签栏标题 |
| desc | string | 否 | '' | 标签栏说明|
| id | string | 否 | - | 表单元素 id |
| name | string | 否 | - | 表单元素 name |
| disabled | boolean | 否 | false | 是否禁用 |
| mode | 'noraml' &verbar; 'form' | 否 | normal | 配合From/FormItem组件使用时，需设置为 from |
| className | string | 否 | - | 类名 |

### 事件
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 选中值发生变化，触发回调 | (v: string &#124; string[]) => void |

### 样式类
| 类名 | 说明 |
| -----|-----|
| amd-selector | 整体样式 |
| amd-selector-disabled | 禁用状态下的整体样式 |
| amd-selector-content | 单个选项样式 |
| amd-selector-item | 单个选项样式 |
| amd-selector-item-active | 激活状态下单个样式 |
| amd-selector-item-disabled | 禁用状态下单个选项样式 |
| amd-selector-item-text | 文本样式 |
| amd-selector-item-subtext | 副文本样式 |
| amd-selector-item-badge-active | 激活状态下徽标样式 |

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
</style> 