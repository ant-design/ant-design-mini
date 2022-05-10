---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: false
---

# Collapse 折叠面板
可以折叠/展开的内容区域
## 何时使用
- 对复杂区域进行分组和隐藏，保持页面的整洁
- 手风琴是一种特殊的折叠面板，只允许单个内容区域展开
## 注意事项

- Collapse 组件与 CollapseItem 组件必须有相同的 uid，且 uid 页面唯一。

## 代码示例

### 基本使用
<code src='../../demo/pages/Collapse'></code>

### 自定义模式

<code src='../../demo/pages/CollapseCustom'></code>



## 属性

#### Collapse
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| name |  当前激活的索引 | string[] | [] |
| accordion |  是否是手风琴模式，仅一个内容被展开| boolean | - | 
| uid |  当页面有多个Collapse时需传入，`必须页面唯一` ，与内部的 CollapseItem 组件的 uid 一致 | string | - |
| className |  类名 | string | - |

#### CollapseItem
| 属性 |  说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| title |  标题栏内容 | string | - |
| name |  标识，必须唯一 | string | - |
| uid |  当页面有多个Collapse时需传入，`必须页面唯一` ，与外部的 Collapse 组件的 uid 一致 | string| - |
| className |  类名 | string | - |

## 事件
#### Collapse
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 面板展开/收缩时，获取当前展开的面板 | ( value : `string[]`) => void |

## 插槽
#### CollapseItem
| 插槽名称 | 说明 |
| -----|-----|
| title | CollapseItem 组件标题插槽，当 title 属性存在时，插槽不生效 |

## 样式类
#### Collapse
| 类名 | 说明 |
| -----|-----|
| amd-collapse | 整体样式 |

#### CollapseItem
| 类名 | 说明 |
| -----|-----|
| amd-collapse-item | 整体样式 |
| amd-collapse-item-title | 标题样式 |
| amd-collapse-item-content | 内容样式 |
