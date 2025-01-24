---
nav:
  path: /copilot
group:
  title: 唤醒
  order: 2
toc: 'content'
---

# Welcome 欢迎

这是一个基于 Ant Design 设计系统的欢迎提示组件，用于向用户展示产品身份和核心价值主张。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-welcome": "antd-mini/es/Welcome/index"
#endif
#if WECHAT
  "ant-welcome": "antd-mini/Welcome/index"
#endif
}
```

## 代码示例

### 基本使用
```xml
  <ant-welcome title="👋🏻 你好，我是 Ant Design X" description="基于 Ant Design 的 AGI 产品界面解决方案，创造更美好的智能视界～" />
```

### Demo 代码

<code src='../../copilot-demo/pages/Welcome/index'></code>

## API

### Welcome

以下表格介绍了 Welcome 组件的 API 属性：

| 属性      | 说明     | 类型                     | 默认值 |
| --------- | -------- | ------------------------ | ------ |
| className | 类名     | string                   | -      |
| styles      | 自定义样式 | string | -      |
| title      | 标题 | string | -      |
| description      | 描述介绍 | string | -      |


### 事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| onTap | 点击描述时触发 | (e) => void |
