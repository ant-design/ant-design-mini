---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# List 列表

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

通用列表可以干净高效地承载文字、列表、图片、段落等元素。

## 何时使用
当需要以列表的形式展示信息时使用。

## 代码示例
<code src='pages/List/index'></code>

## API

### List
| 属性 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| className | 类名 | string | - | 
| footer | 底部说明 | string \| slot | - |
| header | 头部说明 | string \| slot | - |
| radius | 是否带圆角 | boolean | false | 
| style | 样式 | string | - |

### ListItem
| 属性 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| arrow | 右侧箭头，可选 `right`、`up`、`down`，传 true 为 `right` | string \| boolean | - |
| brief | 第二行信息 | string \| slot | - | 
| className | 类名 | string | - | 
| disabled | 是否禁用 | boolean | false | 
| extra | 右侧额外内容 | string \| slot | - | 
| extraBrief | 右侧辅助信息 | string \| slot | - | 
| image | 左侧图片 | string | - |  
| radius | 是否带圆角 | boolean | false | 
| showDivider | 是否显示下划线 | boolean | true | 
| style | 样式 | string | - |
| title | 标题信息 | string \| slot | - |
| catchTap | 点击时触发的回调 | (e: Event) => void |
| onTap | 点击时触发的回调 | (e: Event) => void |
