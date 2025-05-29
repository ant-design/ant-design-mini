---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Progress

Displays the progress of user operations and tasks.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-progress": "antd-mini/es/Progress/index"
#endif
#if WECHAT
  "ant-progress": "antd-mini/Progress/index"
#endif
}
```

## Code Sample

### Basic use

> The progress bar defaults to a blue bar,`percent` Property to set the current progress. Use `type`Property to set the shape, currently supports bar and ring two forms.

```xml
<ant-progress percent="{{50}}" />
<ant-progress type="line" percent="{{50}}" />
<ant-progress type="circle" percent="{{50}}" />
```

### Semantic progress bar

> In line mode, semantic status bars for success and failure states are supported by setting `status`Property implementation.

```xml
<ant-progress status="success" percent="100" />
<ant-progress status="exception" percent="50" />
```

### Style Customization

> `strokeWidth` You can set the thickness of the progress bar,`strokeColor` You can set the color of the progress bar,`trailColor` You can set the track color,`style` The style can be highly customized.

```xml
<ant-progress percent="{{50}}" strokeWidth="{{12}}" />
<ant-progress percent="{{50}}" strokeColor="#00B578" />
<ant-progress percent="{{50}}" trailColor="#FFCF9F" />
<ant-progress percent="{{50}}" style="width: 70%" />
```

### Demo Code

<code src='../../demo/pages/Progress/index'></code>

## API

| Property        | Description                                                 | Type    | Default Value |
| ----------- | ---------------------------------------------------- | ------- | ------ |
| className   | Class Name                                                 | string  | -      |
| percent     | Percentage                                               | number  | 0      |
| status      | status, available in line mode only, optional `success` `exception` | string  | -      |
| strokeColor | Progress bar color                                           | string  | -      |
| strokeWidth | Width of progress bar, in px                                  | number  | 8      |
| style       | Style                                                 | string  | -      |
| trailColor  | Track Color                                             | string  | -      |
| type        | type, optional `line` `circle`                           | string  | `line` |
| width       | Circular progress bar canvas width, in px                          | number  | 100    |
| animation   | Whether to turn on transition animation                                     | boolean | true   |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.


| Variable name                     | Light Mode Default                                                                                           | Dark Mode Default                                                                                           | Remarks             |
| -------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------- |
| --progress-stroke-color    | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div>       | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div>       | Progress bar main color     |
| --progress-trail-color     | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div>       | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div>       | Progress bar track color   |
| --progress-success-color   | <div style="width: 150px; height: 30px; background-color: #22b35e; color: #ffffff;">#22b35e</div>       | <div style="width: 150px; height: 30px; background-color: #34b368; color: #ffffff;">#34b368</div>       | Progress bar success color   |
| --progress-indicator-color | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div>       | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div>       | Progress bar indicator color |
| --progress-exception-color | <div style="width: 150px; height: 30px; background-color: #ff3141; color: #ffffff;">#ff3141</div>       | <div style="width: 150px; height: 30px; background-color: #ff4a58; color: #ffffff;">#ff4a58</div>       | Progress bar exception color   |
| --progress-assist-color    | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div>       | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div>       | Progress bar auxiliary color   |
