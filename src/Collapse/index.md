---
nav:
  path: /components
group:
  title: 数据展示
  order: 1
toc: false
---

# Collapse

可以折叠 / 展开的内容区域。

- 对复杂区域进行分组和隐藏，保持页面的整洁；
- 手风琴模式 是一种特殊的折叠面板，只允许单个内容区域展开。
- 内部由多个 CollapseItem 组成，详见代码示例。

## 注意事项

- Collapse 组件与 CollapseItem 组件必须有相同的 uid，且 uid 全局唯一。

## 代码示例

### 基础使用
<code src='../../demo/pages/Collapse'></code>

### 手风琴模式

<code src='../../demo/pages/CollapseAccordion'></code>

## API

### 属性

#### Collapse
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| name | string[] | 否 | [] | 当前激活的索引 |
| accordion | boolean | 否 | - | 是否是手风琴模式，仅一个内容被展开 |
| className | string | 否 | - | 类名 |
| uid | string | 是 | - | `必须全局唯一`，需与内部的 CollapseItem 组件的 uid 一致 |

#### CollapseItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| title | `string` | 否 | - | 标题栏内容 |
| name | string | 是 | - | 标识，必须唯一 |
| className | string | 否 | - | 类名 |
| uid | string | 是 | - | `必须全局唯一`，需与外部 Collapse 组件的 uid 一致  |

### 事件
#### Collapse
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 面板展开/收缩时，获取当前展开的面板 | ( value : `string[]`) => void |

### 插槽
#### CollapseItem
| 插槽名称 | 说明 |
| -----|-----|
| title | CollapseItem 组件标题插槽，当 title 属性存在时，插槽不生效 |

### 样式类
#### Collapse
| 类名 | 说明 |
| -----|-----|
| amd-avatar | 整体样式 |
| amd-avatar-src | 图片样式 |
| amd-avatar-content | 头像描述样式 |
| amd-avatar-name | name 样式 |
| amd-avatar-desc | desc 样式 |

#### CollapseItem
| 类名 | 说明 |
| -----|-----|
| amd-avatar | 整体样式 |
| amd-avatar-src | 图片样式 |
| amd-avatar-content | 头像描述样式 |
| amd-avatar-name | name 样式 |
| amd-avatar-desc | desc 样式 |

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