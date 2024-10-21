---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
---

# Checkbox check box

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Make multiple selections in a set of options.

## When to use

- When making multiple selections in a set of options.
- When used alone, it can represent a switch between two states, similar to switch. The difference is that switching switches will directly trigger state changes, while checkbox are generally used for state markers and need to be combined with commit operations.

## Code example

### Basic use

<code src='../../demo/pages/Checkbox/index'></code>

### CheckboxGroup

<!-- <code src='pages/CheckboxGroup/index'></code> -->

### Checkbox custom grouping

<!-- <code src='pages/CheckboxCustomGroup/index'></code> -->

## API

#### Checkbox

| Property           | Description                    | Type                                                                                              | Default Value |
| -------------- | ----------------------- | ------------------------------------------------------------------------------------------------- | ------ |
| checked        | Whether selected                | boolean                                                                                           | -      |
| className      | Class Name                    | string                                                                                            | -      |
| color          | Selected color, same as CSS color value | string                                                                                            | -      |
| defaultChecked | Is selected by default            | boolean                                                                                           | -      |
| disabled       | Disable                | boolean                                                                                           | false  |
| style          | Style                    | string                                                                                            | -      |
| onChange       | Trigger callback when selection status changes  | (checked: boolean, event: `Event`(https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |

#### CheckboxGroup

| Property         | Description                                                         | Type                                                                                            | Default Value      |
| ------------ | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ----------- |
| className    | Class Name                                                         | string                                                                                          | -           |
| color        | Selected color, same as CSS color value                                      | string                                                                                          | -           |
| defaultValue | Default selected value                                                 | `string[]`                                                                                      | -           |
| disabled     | Disable                                                     | boolean                                                                                         | false       |
| label        | Label area slot, receiving value (current item optional item), index (index) | slot                                                                                            | -           |
| options      | Specify options                                                   | `{label: string; value: string; disabled: boolean}[]`                                           | -           |
| position     | layout, optional `horizontal`、`vertical`                          | string                                                                                          | `vertical`  |
| style        | Style                                                         | string                                                                                          | -           |
| value        | The value of the CheckboxGroup to determine whether the child element is checked.                       | `string[]`                                                                                      | -           |
| onChange     | Check to trigger this function when status changes                                     | (value: `string[]`, event: `Event`(https://opendocs.alipay.com/mini/framework/event-object)) => void | -           |
