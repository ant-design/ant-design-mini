---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: 'content'
---

# Container 容器
通用卡片容器
## 何时使用
可承载文字、列表、图片、段落等，便于用户浏览内容

## 代码示例
### 基本使用
<code src='pages/Container/index'></code>



## 属性

| 属性      | 类型   | 必填 | 默认值 | 说明       |
| --------- | ------ | ---- | ------ | ---------- |
| title     | string | 否   | -      | 标题       |
| className | string | 否   | -      | 类名       |
| style | string | 否   | -      | 类名       |
| headerInBox | boolean | 否   | true      | 标题是否在容器中       |

## 插槽

| 插槽名称 | 说明                                                       |
| -------- | ---------------------------------------------------------- |
| headerRight    | 头部右侧内容 |
| title    | 标题内容 |
| default | Container内容 |

