---
nav:
  path: /components
group:
  title: Other
  order: 15
toc: 'content'
supportPlatform: ['alipay']
---

# PageContainer page container

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

The page-level container component provides common capabilities such as loading status, page exception handling, top/bottom safe margins, and so on, out of the box.

## Code example

<code src='../../demo/pages/PageContainer/index'></code>

## API

| Property             | Description                                                       | Type             | Default Value |
| -------------------- | ----------------------------------------------------------------- | ---------------- | ------------- |
| className            | Class Name                                                        | string           | -             |
| style                | Style                                                             | string           | -             |
| safeArea             | Location of margin inside the safety zone,`top`、`bottom`、`both` | string           | `both`        |
| loading              | Loading                                                           | boolean \| slot  | false         |
| loadingType          | Load style type,`spin`、`mini`                                    | string           | `spin`        |
| loadingSize          | Load Style Size,`small`、`medium`、`large`、`x-large`             | string           | `medium`      |
| loadingColor         | Load Style Color                                                  | string           | '#ccc'        |
| status               | Page exception status,`failed`、`busy`、`disconnected`、`empty`   | string \| slot   | -             |
| image                | Page Exception Status Custom Image                                | string           | -             |
| title                | Page Exception Status Custom Title                                | string           | -             |
| message              | Page Exception Status Custom Description                          | string           | -             |
| actionText           | Page Exception Status Button Copy                                 | string           | -             |
| secondaryActionText  | Page Exception Secondary Button Copy                              | string           | -             |
| extra                | Page Exception Custom Button                                      | slot             | -             |
| onActionTap          | Page abnormal state button click event                            | (e: any) => void | -             |
| onSecondaryActionTap | Page Exception Status Secondary Button Click Event                | (e: any) => void | -             |
