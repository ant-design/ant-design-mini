---
nav:
  path: /components
group:
  title: Feedback
  order: 12
toc: 'content'
---

# ActionSheet Action Panel

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Actions menu panel that pops up from the bottom.

## When to use

Triggered by a user action, providing a set of two or more options related to the action, allowing the user to complete the action without leaving the field. Compared with the dialog box, the position of the action panel is more suitable for the scene of one-handed operation in the era of large screen.

## Code Sample

<code src='../../demo/pages/ActionSheet/index'></code>

## API

| Property       | Description                               | Type                                                                                                                                          | Default Value |
| ---------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| actions    | Panel Options List                       | `[ActionSheetItem](#actionshetitem)`[]                                                                                                        | []     |
| cancelText | Cancel Button Text                       | string                                                                                                                                        | Cancel   |
| className  | Class Name                               | string                                                                                                                                        | -      |
| style      | Style                               | string                                                                                                                                        | -      |
| title      | Title                               | string                                                                                                                                        | -      |
| visible    | Whether to expand                           | boolean                                                                                                                                       | false  |
| zIndex     | Pop-up Level                           | number                                                                                                                                        | 998    |
| onClose    | Trigger on shutdown                         | `(event: [Event](https://opendocs.alipay.com/mini/framework/event-object))` => void                                                           | -      |
| onAction   | Triggered when option is clicked, not triggered when disabled | `(item: [ActionSheetItem](#actionsheetitem), index: number, event: [Event](https://opendocs.alipay.com/mini/framework/event-object))` => void | -      |

### ActionSheetItem

| Property        | Description         | Type    | Default Value |
| ----------- | ------------ | ------- | ------ |
| icon        | Icons         | -       | -      |
| danger      | Whether dangerous mode | boolean | false  |
| description | Description         | string  | -      |
| disabled    | Disable     | boolean | false  |
