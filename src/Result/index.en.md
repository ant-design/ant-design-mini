---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Result Operation Result

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Feedback the results of the previous step.

## When to use

The Result component should be used when important operations need to inform the user of the processing results and the feedback content is complex.

## Code example

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
| type      | Built-in type `success`(successful),`error`(error/danger),`info`(information prompt),`wait`(Waiting for processing) | string | -      |
