---
nav:
  path: /components
group:
  title: Guide & Hint
  order: 14
toc: content
---

# NoticeBar

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Shows a set of message notifications.

## When to use

For the notification of information in the current page, it is a more eye-catching way of notification in the page.

## Code Sample

<code src='../../demo/pages/NoticeBar/index'></code>

## API

| Property          | Description                                                                                           | Type         | Default Value  |
| ------------- | ---------------------------------------------------------------------------------------------- | ------------ | ------- |
| className     | Class Name                                                                                           | string       | -       |
| enableMarquee | Whether to turn on scroll animation                                                                               | boolean      | false   |
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

| Variable name                            | Default Value                                                                                                              | Remarks             |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------- |
| --notice-background-color         | <div style="width: 150px; height: 40px; background-color: #fff9ed;">#fff9ed</div>                                   | Notification background color     |
| --notice-border-color             | <div style="width: 150px; height: 40px; background-color: #fff3d9;">#fff3d9</div>                                   | Notification border color     |
| --notice-color                    | <div style="width: 150px; height: 40px; background-color: #ff6010;">#ff6010</div>                                   | Notification Color         |
| --notice-error-border-color       | <div style="width: 150px; height: 40px; background-color: #fff3d9;">#fff3d9</div>                                   | Error notification border color |
| --notice-error-color              | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                   | Error notification color     |
| --notice-error-background-color   | <div style="width: 150px; height: 40px; background-color: #ff3141;">#ff3141</div>                                   | Error notification background color |
| --notice-primary-border-color     | <div style="width: 150px; height: 40px; background-color: rgba(22, 119, 255, 0.72);">rgba(22, 119, 255, 0.72)</div> | Primary notification border color |
| --notice-primary-color            | <div style="width: 150px; height: 40px; background-color: #1677ff;">#1677ff</div>                                   | Primary notification color     |
| --notice-primary-background-color | <div style="width: 150px; height: 40px; background-color: rgba(208, 228, 255, 1);">rgba(208, 228, 255, 1)</div>     | Primary notification background color |
| --notice-info-text-color          | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                   | Information notification text color |
| --notice-info-background-color    | <div style="width: 150px; height: 40px; background-color: #666666;">#666666</div>                                   | Information notification background color |
