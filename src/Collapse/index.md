---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Collapse 折叠面板
可以折叠/展开的内容区域
## 何时使用
- 对复杂区域进行分组和隐藏，保持页面的整洁
- 手风琴是一种特殊的折叠面板，只允许单个内容区域展开

## 代码示例

### 基本使用
<code src='../../demo/pages/Collapse'></code>

### 自定义模式

<code src='../../demo/pages/CollapseCustom'></code>



## 属性

#### Collapse
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| name | string[] | 否 | [] | 当前激活的索引 |
| accordion | boolean | 否 | - | 是否是手风琴模式，仅一个内容被展开 |
| className | string | 否 | - | 类名 |

#### CollapseItem
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| name | string | 是 | - | 标识，必须唯一 |
| title | string | 否 | - | 标题栏内容 |
| brief | string | 否 | - | 辅助信息内容 |
| className | string | 否 | - | 类名 |

## 事件
#### Collapse
| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onChange | 面板展开/收缩时，获取当前展开的面板 | ( value : `string[]`) => void |

## 插槽
#### CollapseItem
| 插槽名称 | 说明 |
| -----|-----|
| title | 组件标题插槽 |
| brief | 组件辅助信息插槽 |

## 样式类
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
