---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Result

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Feedback the results of the previous step.

## When to use

The Result component should be used when important operations need to inform the user of the processing results and the feedback content is complex.

## Code Sample

<code src='../../demo/pages/Result/index'></code>

## API

| Property      | Description                                                                                     | Type           | Default Value |
| --------- | ---------------------------------------------------------------------------------------- | -------------- | ------ |
| className | Class Name                                                                                     | string         | -      |
| extra     | Bottom Custom Rendering                                                                           | slot           | -      |
| image     | Custom Picture                                                                               | string \| slot | -      |
| message   | Deputy Copywriter                                                                                   | string \| slot | -      |
| style     | Style                                                                                     | string         | -      |
| title     | Main copywriter                                                                                   | string \| slot | -      |
| type      | Built-in type `success`(success),`error`(error/danger),`info`(information prompt),`wait`(Waiting for processing) | string         | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                   | Default Value                                                                                            | Remarks                |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ------------------- |
| --result-main-background | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | Result Main background color   |
| --result-title-color     | <div style="width: 150px; height: 30px; background-color: #000000; color: #ffffff;">#000000</div> | Result Title Color     |
| --result-desc-color      | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | Result Description Text Color |
| --result-success-color   | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | Result Success status color |
| --result-error-color     | <div style="width: 150px; height: 30px; background-color: #ff3b30; color: #ffffff;">#ff3b30</div> | Result Error status color |
| --result-warning-color   | <div style="width: 150px; height: 30px; background-color: #ff8f1f; color: #ffffff;">#ff8f1f</div> | Result Warning Status Color |
| --result-wait-color      | <div style="width: 150px; height: 30px; background-color: #00b578; color: #ffffff;">#00b578</div> | Result Wait status color |
