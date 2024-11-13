---
nav:
  path: /components
group:
  title: Feedback
  order: 14
toc: 'content'
---

# Toast

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

## When to use
Lightweight feedback on the results of the operation, without user action can disappear. The longest copy can be no more than 2 lines and can display up to 24 characters. If the copy is too long, it will be truncated.

## Code example
<code src='../../demo/pages/Toast/index'></code>

## API
| Property   | Description                   | Type    | Default Value |
| ------ | ---------------------- | ------- | ------ |
| className | Component root node class name             | string  | -      |
| content   | Text content                 | string  | -      |
| duration  | Duration, does not automatically close when 0 | number  | 2000   |
| maskCloseable | Click whether the mask is closed        | boolean | false  |
| icon      | Icon, supports all types of Icon components | string  | -      |
| image     | Picture Link                 | string  | -      |
| maskStyle | Mat Style                 | string  | -      |
| showMask  | Whether to show the layer             | boolean | false  |
| style     | Style                    | string  | -      |
| type      | Built-in icon type, optional `success` `error` `warning` `loading` | string  | -      |
| visible   | Whether to hide                 | boolean | false  |
| onClose   | Callback after Toast is closed        | (e) => void | -      |
