---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
---

# Switch

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Switch selector, compared to the native Switch, it achieves a consistent experience on iOS and Android.

## When to use

- Used when it is necessary to indicate the state of a switch or to switch between two states.
- The difference with Checkbox is that switching Switch will directly trigger a state change, while Checkbox is usually used for state markers and needs to be used in conjunction with commit operations.

## Code example

<code src='../../demo/pages/Switch/index'></code>

## API

| Property           | Description                                      | Type                                                                                                | Default Value   |
| -------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------- | -------- |
| className      | Class Name                                      | string                                                                                              | -        |
| checkedText    | Content when selected                              | string \| slot                                                                                      | -        |
| checked        | Check                                  | boolean                                                                                             | -        |
| color          | Selected background color                                | string                                                                                              | -        |
| defaultChecked | Checked by default                              | boolean                                                                                             | `false`  |
| disabled       | Disable                                  | boolean                                                                                             | `false`  |
| loading        | Load status                              | boolean                                                                                             | `false`  |
| uncheckedText  | Content when not selected                            | string \| slot                                                                                      | -        |
| size           | Component size, optional value is `medium`、`small`、`x-small` | string                                                                                              | `medium` |
| style          | Style                                      | string                                                                                              | -        |
| onChange       | Callback triggered when Switch is clicked                   | (checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -        |
