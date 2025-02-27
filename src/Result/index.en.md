---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Result

Feedback the results of the previous step. The Result component should be used when important operations need to inform the user of the processing results and the feedback content is complex.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-result": "antd-mini/es/Result/index"
#endif
#if WECHAT
  "ant-result": "antd-mini/Result/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-result type="success" title="success" message="subtitle content" />

<ant-result type="wait" title="wait" message="subtitle content" />

<ant-result type="info" title="info" message="subtitle content" />

<ant-result type="warning" title="warning" message="subtitle content" />

<ant-result type="error" title="error" message="subtitle content" />
```

### Slot

```xml
<ant-result
  image="https://gw.alipayobjects.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original">
  <view slot="title">Title slot</view>
  <view slot="message">Describe the slot</view>
  <view slot="extra" class="extra">
    Other Modules
  </view>
</ant-result>
```

### Demo Code

<code src='../../demo/pages/Result/index'></code>

## API

| Property      | Description                                                                                     | Type           | Default Value |
| --------- | ---------------------------------------------------------------------------------------- | -------------- | ------ |
| className | Class Name                                                                                     | string         | -      |
| extra     | Bottom Custom Rendering                                                                           | slot           | -      |
| image     | Custom Picture                                                                               | string \| slot | -      |
| message   | Deputy Copywriter                                                                                   | string \| slot | -      |
| style     | Style                                                                                     | string         | -      |
| title     | Main Copy                                                                                   | string \| slot | -      |
| type      | Built-in type `success`(success),`error`(error/danger),`info`(information prompt),`wait`(Waiting for processing) | string         | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                   | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks                |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------- |
| --result-main-background | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Result Main background color   |
| --result-title-color     | <div style="width: 150px; height: 30px; background-color: #000000; color: #ffffff;">#000000</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div> | Result Title Color     |
| --result-desc-color      | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Result Description Text Color |
| --result-success-color   | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Result Success status color |
| --result-error-color     | <div style="width: 150px; height: 30px; background-color: #ff3b30; color: #ffffff;">#ff3b30</div> | <div style="width: 150px; height: 30px; background-color: #ff544a; color: #ffffff;">#ff544a</div> | Result Error status color |
| --result-warning-color   | <div style="width: 150px; height: 30px; background-color: #ff8f1f; color: #ffffff;">#ff8f1f</div> | <div style="width: 150px; height: 30px; background-color: #ff9c38; color: #ffffff;">#ff9c38</div> | Result Warning Status Color |
| --result-wait-color      | <div style="width: 150px; height: 30px; background-color: #00b578; color: #ffffff;">#00b578</div> | <div style="width: 150px; height: 30px; background-color: #12b57e; color: #ffffff;">#12b57e</div> | Result Wait status color |
