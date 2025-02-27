---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: content
---

# NoticeBar

Shows a set of message notifications. Usually used for the notification of information in the current page, is a more eye-catching in-page notification.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-notice": "antd-mini/es/NoticeBar/index"
#endif
#if WECHAT
  "ant-notice": "antd-mini/NoticeBar/index"
#endif
}
```

## Code Sample

### Basic use

```xml
 <ant-notice type="default">default</ant-notice>
 <ant-notice type="info">info</ant-notice>
 <ant-notice type="error">error</ant-notice>
```

### Can close the notice board

```xml
<ant-notice mode="closeable">
  This notification can be turned off
</ant-notice>
```

### Multi-line display notice board
```xml
<ant-notice type="default" ellipsisRow="{{2}}">
  Turn on line feed when text overflows. Not enough text to continue adding text to make up. Not enough text to continue adding text to make up.
</ant-notice>
```

### Scrollable notice board

```xml
<ant-notice
  type="default"
  enableMarquee="{{true}}"
  loop="{{true}}"
  onTap="handleTapLink"
  mode="link">
  Turn on circular scrolling when text overflows. Not enough text to continue adding text to make up.
</ant-notice>
```

### Custom

```xml
<ant-notice type="primary" icon="GlobalOutline" mode="link">
  Customize Left Icon
</ant-notice>

<ant-notice type="primary" mode="link"
  icon="https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ"
>Customize the left icon image</ant-notice>

<ant-notice mode="link" onTap="handleTapLink">
  Customize right button
  <view slot="extra" class="extra">
    <view onTap="handleTapAction">No more prompting</view>
    <view onTap="handleTapAction">View Details</view>
  </view>
</ant-notice>
```

### Demo Code

<code src='../../demo/pages/NoticeBar/index'></code>

## API

| Property          | Description                                                                                           | Type         | Default Value  |
| ------------- | ---------------------------------------------------------------------------------------------- | ------------ | ------- |
| className     | Class Name                                                                                           | string       | -       |
| enableMarquee | Whether to turn on scroll animation                                                                               | boolean      | false   |
| ellipsisRow     | The copy multi-line shows the maximum number of rows, and`enableMarquee`Cannot be configured simultaneously             | number\|boolean       | false       |
| extra         | Customize right content                                                                                 | slot         | -       |
| icon          | The icon on the left supports all built-in iconType and custom links, as well as custom slots (WeChat version requires slotIcon settings) | string       | -       |
| loop          | Whether to cycle scrolling,`enableMarquee` Valid when true                                                   | boolean      | false   |
| mode          | the type of announcement,`link` Indicates connection, the whole line can be dotted;`closeable` Indicates that clicking x can be closed; If you do not fill in, there is no icon on the right.   | string       | -       |
| style         | Style                                                                                           | string       | -       |
| title         | Title                                                                                           | string\|slot | -       |
| type          | type, optional `default`, `error`, `primary`, `info`                                               | string       | default |
| slotIcon      | WeChat version needs to enable the slot of icon position through this field                                                     | boolean      | -       |
| onTap         | Click the icon (arrow or cross) on the right side of the notification bar to trigger the callback                                                   | () => void   | -       |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                            | Default Value                                                                                                              | Dark Mode Default                                                                                                                      | Remarks             |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| --notice-background-color         | <div style="width: 150px; height: 40px; background-color: #fff9ed; color: #333;">#fff9ed</div>                                   | <div style="width: 150px; height: 40px; background-color: #fff9ed; color: #000000;">#fff9ed</div>                                   | Notification background color     |
| --notice-border-color             | <div style="width: 150px; height: 40px; background-color: #fff3d9; color: #333;">#fff3d9</div>                                   | <div style="width: 150px; height: 40px; background-color: #fff3d9; color: #000000;">#fff3d9</div>                                   | Notification border color     |
| --notice-color                    | <div style="width: 150px; height: 40px; background-color: #ff6010;">#ff6010</div>                                   | <div style="width: 150px; height: 40px; background-color: #ff6010; color: #ffffff;">#ff6010</div>                                   | Notification Color         |
| --notice-error-border-color       | <div style="width: 150px; height: 40px; background-color: #fff3d9; color: #333;">#fff3d9</div>                                   | <div style="width: 150px; height: 40px; background-color: #fff3d9; color: #000000;">#fff3d9</div>                                   | Error notification border color |
| --notice-error-color              | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                   | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                                   | Error notification color     |
| --notice-error-background-color   | <div style="width: 150px; height: 40px; background-color: #ff3141;">#ff3141</div>                                   | <div style="width: 150px; height: 40px; background-color: #ff4a58; color: #ffffff;">#ff4a58</div>                                   | Error notification background color |
| --notice-primary-border-color     | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.72);">rgba(22, 119, 255, 0.72)</div> | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.72); color: #ffffff;">rgba(22, 119, 255, 0.72)</div> | Primary notification border color |
| --notice-primary-color            | <div style="width: 150px; height: 40px; background-color: #1677ff;">#1677ff</div>                                   | <div style="width: 150px; height: 40px; background-color: #3086ff; color: #ffffff;">#3086ff</div>                                   | Primary notification color     |
| --notice-primary-background-color | <div style="width: 150px; height: 40px; background-color: rgba(208, 228, 255, 1); color: #333;">rgba(208, 228, 255, 1)</div>     | <div style="width: 150px; height: 40px; background-color: rgba(208, 228, 255, 1); color: #000000;">rgba(208, 228, 255, 1)</div>     | Primary notification background color |
| --notice-info-text-color          | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                   | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                                   | Information notification text color |
| --notice-info-background-color    | <div style="width: 150px; height: 40px; background-color: #666666;">#666666</div>                                   | <div style="width: 150px; height: 40px; background-color: #808080; color: #ffffff;">#808080</div>                                   | Information notification background color |
