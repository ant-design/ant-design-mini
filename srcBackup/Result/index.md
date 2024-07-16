---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---

# Result 操作结果

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

对前一步操作的结果进行反馈。

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时，应使用 Result 组件。

## 代码示例

<code src='pages/Result/index'></code>

## API

| 属性      | 说明         | 类型              | 默认值 |
| --------- | ------------ | ----------------- | ------ |
| className | 类名         | string            | -      |
| extra     | 底部自定义渲染 | slot             | -      |
| image     | 自定义图片   | string \| slot    | -      |
| message   | 副文案       | string \| slot    | -      |
| style     | 样式         | string            | -      |
| title     | 主文案       | string \| slot    | -      |
| type      | 内置类型 `success`（成功）、`error`（错误/危险）、`info`（信息提示）、`wait`（等待处理） | string | -      |
