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
<code src='pages/Collapse/index'></code>

### 手风琴

<code src='pages/CollapseAccordion/index'></code>

### 控制

<code src='pages/CollapseControl/index'></code>

### 更多自定义

<code src='pages/CollapseCustom/index'></code>


## 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| accordion | boolean | 否 | - | 是否是手风琴模式，仅一个内容被展开 |
| current | number[] | 否 | - | 当前展开的索引 |
| className | string | 否 | - | 类名 |
| defaultCurrent | number[] | 否 | [] | 当前展开的索引 |
| items | Item[] | 是 | - | 折叠面板列表 |
| style | string | 否 | - | 样式 |
| onChange | 切换面板的回调 | ( current : `number[]`, e: `Event`) => void |

## 插槽
| slot | slot-scope | 说明 |
| -----|-----|-----|
| content | value: Item; index: number | 内容 |
| title | value: Item; index: number | 标题 |

Item 里每一项
| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| content | string | 否 | - | 内容 |
| title | string | 否 | - | 标题 |
