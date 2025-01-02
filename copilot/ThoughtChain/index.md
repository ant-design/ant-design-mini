---
nav:
  path: /copilot
group:
  title: 通用
  order: 1
toc: 'content'
---

# Copilot ThoughtChain 思考链

用于可视化展示AI处理请求、生成内容或执行任务的进程与状态。这是一个与动画相关的组件，需要提供各节点动画的props和API和使用方进行交互。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "prompts": "antd-mini/es/ThoughtChain/index"
#endif
#if WECHAT
  "prompts": "antd-mini/ThoughtChain/index"
#endif
}
```

## 代码示例

### 基本使用

WIP

### Demo 代码

<code src='../../copilot-demo/pages/ThoughtChain/index'></code>

## API

### ThoughtChain

以下表格介绍了 Prompts 组件的 API 属性：

| 属性                        | 说明                                                            | 类型                                                                          | 默认值    |
| --------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------- |
| promptsTitle             | 提示标题                                                    | string                                                                        | -         |
| className                   | 类名                                                            | string                                                                        | -         |
| list                       | 提示列表                                                         | IPromptsItem[]                                                                        | -         |

IPromptsItem 属性
| 属性                        | 说明                                                            | 类型                                                                          | 默认值    |
| --------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------- |
| image             | 提示项的图片                                                    | string                                                                        | -         |
| title                   |提示项标题                                                          | string                                                                        | -         |
| content                       | 提示内容                                                         | string       
| showArrow                       | 是否展示箭头                                                    | boolean     

插槽 slot 

| 插槽名称                      | 说明               |
| --------------------------- | --------------------------------------------------------------- |
| prompts-title             | 提示项的标题题                                                    |                                                                    |
| prompts-item               | 提示子项项                                               |                                                                       | 
