---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Postscript 附言

## 何时使用

需要在表单或内容下方添加补充说明时使用。

## 代码示例

### 基本使用

<code src='../../demo/pages/Postscript/index'></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 类名 | string | - |
| style | 样式 | string | - |
| content | 附言内容 | string | - |
| title | 标题 | string | - |
| quickInputs | 快捷输入选项 | string[] | - |
| placeholder | 占位符文本 | string | '给TA带句话吧~' |
| onChange | 内容变化时的回调 | (value: string) => void | - |
