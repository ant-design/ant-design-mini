---
nav:
  path: /form
group:
  title: 表单布局
  order: 3
---

# 自定义校验异常展示

表单自带异常校验的提示 UI 展示，在不少业务场景异常校验往往需要自定义来满足业务诉求。支持通过插槽的形式自定义表单校验异常的展示。`slot` 名称 `custom-error`，通过 `slot-scope` 获取当前异常信息 `errorInfo`。

默认的异常信息字段如下：
- field 校验未通过的表单项路径
- message 校验未通过的错误信息
- 自行定义的字段，通过全局 API 自己设置的错误字段，自行在插槽中消费




## Demo 代码

<code src='../../demo/pages/FormRenderMini/FormCustomError/index'></code>
