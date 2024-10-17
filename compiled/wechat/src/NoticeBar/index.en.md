---
nav:
  path: /components
group:
  title: 引导提示
  order: 14
toc: content
---

# NoticeBar notice board

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
| loop          | 是否循环滚动，`enableMarquee` 为 true 时有效                                                   | boolean      | false   |
| mode          | 通告Type，`link` 表示连接，整行可点；`closeable` 表示点击 x 可以关闭；不填时表示右侧没有图标   | string       | -       |
| style         | Style                                                                                           | string       | -       |
| title         | Title                                                                                           | string\|slot | -       |
| type          | Type，可选 `default`, `error`, `primary`, `info`                                               | string       | default |
| slotIcon      | WeChat version needs to enable the slot of icon position through this field                                                     | boolean      | -       |
| onTap         | Click the icon (arrow or cross) on the right side of the notification bar to trigger the callback                                                   | () => void   | -       |
