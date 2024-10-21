---
nav:
  path: /components
group:
  title: Guide & Hint
  order: 14
toc: content
---

# NoticeBar notice board

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Shows a set of message notifications.

## When to use

For the notification of information in the current page, it is a more eye-catching way of notification in the page.

## Code example

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
