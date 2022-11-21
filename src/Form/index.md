---
nav:
  path: /components
group:
  title: 实验性质的组件
  order: 16
toc: 'content'
---

# Form 表单
Form 表单	高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式


## 何时使用
- 用于创建一个实体或收集信息
- 需要对输入的数据类型进行校验时

## 注意事项
- 使用条件：小程序项目需开启 `Component2` 选项
- 配合 a:for 指令使用时，推荐指定 key 值，否则可能出现异常情况
- Form 标签的 form 属性值与其内部 FormItem 标签 的form 属性值必须相同，且`全局唯一`；内部的 FormItem 标签的 name 属性必须`唯一`。详见下方代码示例。
- 配合组件库内的表单组件使用时候，需表单组件的 `mode` 属性值为 `form`。

## 代码示例

