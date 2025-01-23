---
nav:
  path: /copilot
group:
  title: 表达
  order: 3
toc: 'content'
---

# Actions 操作列表

## 何时使用

需要展示一组操作选项时使用。

## 代码示例

### 基础用法

<code src='../../copilot-demo/pages/Actions/index'></code>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 类名 | string | - |
| style | 样式 | string | - |
| items | 动作项列表 | ActionItem[] | [] |
| onItemTap | 点击动作项时触发 | (item: ActionItem) => void | - |

### ActionItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 动作项文本 | string | - |
| icon | 动作项图标 | string | - |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名 | 默认值 | 说明 |
| --- | --- | --- |
| --actions-background-color | #F7F7F7 | 背景色 |
| --actions-item-hover-background-color | #EEEEEE | 点击态背景色 |

