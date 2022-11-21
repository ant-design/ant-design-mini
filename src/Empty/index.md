---
nav:
  path: /components
group:
  title: 信息展示
  order: 9
toc: 'content'
---

# Empty 空状态

使用场景插画来作为空状态场景的反馈提示

## 何时使用
需要展示空状态页面或者局部空状态区块时使用

## 代码示例
### 基本使用
<code src='pages/Empty/index'></code>

## 属性 

| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|----- |
| className | 根节点类名 |  `string` | - | 
| title | 标题文案 | `string` | - | 
| image | 图片区内容 | `slot` | - | 
| mode |  空状态模式, 'page'表示整页空状态，'section'表示局部空状态 | `'page' \| 'section'` | `'page'` |
| message | 描述文案 | `string` | - | 
| style | 样式 | `string` | - | 



