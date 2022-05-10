---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: false
---

# Container 容器
通用卡片容器
## 何时使用
可承载文字、列表、图片、段落等，便于用户浏览内容

## 代码示例
### 基本使用
<code src='../../demo/pages/Container'></code>



## 属性

| 属性      |  说明     | 类型 | 默认值 | 
| --------- | ------ | ---- | ------ |
| title     |  标题 | string   | -      | 
| image     |  缩略图 url | string  | -  |
| icon      |  右侧图标 | string  | -  |
| className |  类名   | string   | -  | 

## 事件

| 事件名    | 说明                   | 类型       |
| --------- | ---------------------- | ---------- |
| onIconTap | 点击右上角图标是的回调 | () => void |

## 插槽

| 插槽名称 | 说明                                                       |
| -------- | ---------------------------------------------------------- |
| title    | 组件标题插槽，当 title 属性存在时，插槽不生效 |

## 样式类

| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-container              | 整体样式         |
| amd-container-header       | 标题栏整体样式   |
| amd-container-header-image | 标题栏图片样式   |
| amd-container-header-title | 标题栏标题样式   |
| amd-container-header-icon  | 标题栏 Icon 样式 |
| amd-container-content      | 内容样式         |