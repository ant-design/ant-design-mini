---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# Modal

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

## When to use
When the application needs to alert or remind the current operation behavior of the user, the dialog box may be used. The user needs to operate on the dialog box before ending.

## Code example
<code src='../../demo/pages/Modal/index'></code>

## API
| Property              | Description                          | Type         | Default Value  |
| ----------------- | ----------------------------- | ------------ | ------- |
| bodyClassName     | body class name                     | string       | -       |
| bodyStyle         | body style                     | string       | -       |
| cancelButtonStyle | Cancel Button Style                  | string       | -       |
| cancelButtonText  | Cancel Button Text                  | string       | -       |
| className         | Class Name                          | string       | -       |
| closable          | Whether to display the close button in the upper right corner. Valid only when type is focus | boolean      | -       |
| content           | Content                          | string\|slot | -       |
| destroyOnClose    | Whether to unload content when invisible          | boolean      | false   |
| footer            | Custom Button Area                  | slot         | -       |
| maskClosable      | Click whether the layer triggers the onClose.     | boolean      | true    |
| maskClassName     | Class name of the layer                    | string       | -       |
| maskStyle         | Layer Style                    | string       | -       |
| primaryButtonStyle| Main Button Style                    | string       | -       |
| primaryButtonText | Main button text                    | string       | -       |
| secondaryButtonStyle| Auxiliary Button Style                | string       | -       |
| secondaryButtonText| Secondary Button Text                | string       | -       |
| style             | Style                          | string       | -       |
| title             | Title                          | string\|slot | -       |
| type              | type, optional `default`(default),`focus`(emphasis mode) | string | `default` |
| visible           | Display                      | boolean      | false   |
| onCancelButtonTap | Cancel button click event              | ()=>void     | -       |
| onClose           | Click the close button in the upper right corner in the layer or emphasis mode to trigger the callback | ()=>void | - |
| onPrimaryButtonTap| Main button click event                | ()=>void     | -       |
| onSecondaryButtonTap| Secondary Button Click Event            | ()=>void     | -       |
