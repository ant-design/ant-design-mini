---
nav:
  path: /components
group:
  title: 反馈
  order: 12
toc: 'content'
---

# Result Operation Result

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Feedback the results of the previous step.

## When to use

The Result component should be used when important operations need to inform the user of the processing results and the feedback content is complex.

## Code Sample

<code src='../../demo/pages/Result/index'></code>

## API

| Property      | Description         | Type              | Default Value |
| --------- | ------------ | ----------------- | ------ |
| className | Class Name         | string            | -      |
| extra     | Bottom Custom Rendering | slot             | -      |
| image     | Custom Picture   | string \| slot    | -      |
| message   | Deputy Copywriter       | string \| slot    | -      |
| style     | Style         | string            | -      |
| title     | Main Copy       | string \| slot    | -      |
| type      | 内置Type `success`（成功）、`error`（错误/危险）、`info`（信息提示）、`wait`（等待处理） | string | -      |
