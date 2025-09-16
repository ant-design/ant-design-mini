---
nav:
  path: /components
group:
  title: Information Display
  order: 8
toc: 'content'
---

# Tag

Small labels for labeling and classification.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-tag": "antd-mini/es/Tag/index"
#endif
#if WECHAT
  "ant-tag": "antd-mini/Tag/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-tag>Label</ant-tag>
```

### semantic label

```xml
<ant-tag>primary</ant-tag>
<ant-tag color="success">success</ant-tag>
<ant-tag color="warning">warning</ant-tag>
<ant-tag color="danger">danger</ant-tag>
```

### Fill mode

```xml
<ant-tag type="fill">fill</ant-tag>
<ant-tag type="outline">outline</ant-tag>
<ant-tag type="fill-light">fill-light</ant-tag>
```

### Custom icon

```xml
<ant-tag icon="AlipayCircleFill">Label</ant-tag>
```

### Demo Code

<code src='../../demo/pages/Tag/index'></code>

## API

| Property      | Description                                                                                     | Type         | Default Value    |
| --------- | ---------------------------------------------------------------------------------------- | ------------ | --------- |
| className | Class Name                                                                                     | string       | -         |
| color     | Label color, built-in `primary`(blue),`success`(Green),`warning`(yellow),`danger`(Red) | string       | `primary` |
| icon      | Icon, support Icon type and slot                                                               | string\|slot | -         |
| style     | Style                                                                                     | string       | -         |
| type      | type, optional `outline`、`fill`、`fill-light`                                               | string       | `fill`    |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.


| Variable name                    | Light Mode Default                                                                                           | Dark Mode Default                                                                                           | Remarks                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | -------------------- |
| --tag-primary-color       | <div style="width: 150px; height: 40px; background-color: #1677ff; color: #ffffff;">#1677ff</div>       | <div style="width: 150px; height: 40px; background-color: #3086ff; color: #ffffff;">#3086ff</div>       | Primary Label Color         |
| --tag-warning-color       | <div style="width: 150px; height: 40px; background-color: #ff6430; color: #ffffff;">#ff6430</div>       | <div style="width: 150px; height: 40px; background-color: #e65a2b; color: #ffffff;">#e65a2b</div>       | Warning Label Color         |
| --tag-danger-color        | <div style="width: 150px; height: 40px; background-color: #ff3141; color: #ffffff;">#ff3141</div>       | <div style="width: 150px; height: 40px; background-color: #ff4a58; color: #ffffff;">#ff4a58</div>       | Hazard label color         |
| --tag-success-color       | <div style="width: 150px; height: 40px; background-color: #22b35e; color: #ffffff;">#22b35e</div>       | <div style="width: 150px; height: 40px; background-color: #34b368; color: #ffffff;">#34b368</div>       | Success Label Color         |
| --tag-primary-light-color | <div style="width: 150px; height: 40px; background-color: #e7f1ff; color: #333333;">#e7f1ff</div>       | <div style="width: 150px; height: 40px; background-color: #0d2543; color: #ffffff;">#0d2543</div>       | Main label light         |
| --tag-warning-light-color | <div style="width: 150px; height: 40px; background-color: #ffefdf; color: #333333;">#ffefdf</div>       | <div style="width: 150px; height: 40px; background-color: #ffefdf; color: #333333;">#ffefdf</div>       | Warning label light color         |
| --tag-danger-light-color  | <div style="width: 150px; height: 40px; background-color: #ffece3; color: #333333;">#ffece3</div>       | <div style="width: 150px; height: 40px; background-color: #ffece3; color: #333333;">#ffece3</div>       | Hazard label light         |
| --tag-success-light-color | <div style="width: 150px; height: 40px; background-color: #d4fff1; color: #333333;">#d4fff1</div>       | <div style="width: 150px; height: 40px; background-color: #d4fff1; color: #333333;">#d4fff1</div>       | Success Label Light         |
| --tag-base-color          | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>       | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>       | Base Label Color         |
| --tag-primary-color-faded | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.3); color: #ffffff;">rgba(22, 119, 255, 0.3)</div> | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.3); color: #ffffff;">rgba(22, 119, 255, 0.3)</div> | Main label color (faded) |
| --tag-warning-color-faded | <div style="width: 150px; height: 40px; background-color: rgba(255, 100, 48, 0.7); color: #ffffff;">rgba(255, 100, 48, 0.7)</div> | <div style="width: 150px; height: 40px; background-color: rgba(255, 100, 48, 0.7); color: #ffffff;">rgba(255, 100, 48, 0.7)</div> | Warning label color (faded) |
| --tag-danger-color-faded  | <div style="width: 150px; height: 40px; background-color: rgba(255, 49, 65, 0.7); color: #ffffff;">rgba(255, 49, 65, 0.7)</div>   | <div style="width: 150px; height: 40px; background-color: rgba(255, 49, 65, 0.7); color: #ffffff;">rgba(255, 49, 65, 0.7)</div>   | Hazard label color (faded) |
| --tag-success-color-faded | <div style="width: 150px; height: 40px; background-color: rgba(34, 179, 94, 0.7); color: #ffffff;">rgba(34, 179, 94, 0.7)</div>   | <div style="width: 150px; height: 40px; background-color: rgba(34, 179, 94, 0.7); color: #ffffff;">rgba(34, 179, 94, 0.7)</div>   | Success Label Color (Faded) |
