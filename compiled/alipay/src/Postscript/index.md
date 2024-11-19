---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Postscript 资金附言组件

## 何时使用

需要在表单或内容下方添加补充说明时使用。

## 代码示例

### 基础用法

<code src='../../demo/pages/Postscript/index'></code>

## API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 类名 | string | - |
| style | 样式 | string | - |
| title | 标题 | string | - |
| maxLength | 最大输入长度 | number | Infinity |
| quickInputs | 快捷输入选项 | string[] | [] |
| placeholder | 占位符文本 | string | '给TA带句话吧~' |
| placeholderClassName | 占位符类名 | string | - |
| combineSymbol | 快捷输入连接符号 | string | - |
| onChange | 内容变化时的回调 | (value: string) => void | - |


## FAQ

### 如何使用快捷输入拼接功能？

设置 combineSymbol 属性为需要的连接符号(如 "+" 或空格),点击快捷输入选项时会自动与已有内容拼接。

如果需要快捷输入内容覆盖已有内容,请移除 combineSymbol 属性。
