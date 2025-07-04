---
nav:
  path: /form
group:
  title: 表单布局
  order: 1
---

# 表单必填标识

必填表单项的标识提供三种模式支持，根据自己的情况选择使用
- 必填项前面展示红色的 `*` 
- 必填项显示必填文案
- 选填项显示选填文档，用于表单必填项居多的场景

支持在 schema 最外层设置 requiredMarkStyle，在分组以及表单项设置都可以，优先级：表单项 > 分组 > 最外层schema



## Demo 代码

<code src='../../demo/pages/FormRenderMini/FormRequiredMark/index'></code>
