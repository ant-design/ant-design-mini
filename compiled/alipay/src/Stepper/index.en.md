---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
---

# Stepper

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

A two-stage control used to increase, decrease, or modify values.

## When to use

Used to enter and adjust the current value within a certain range.

## Code example

<code src='../../demo/pages/Stepper/index'></code>

## API

| Property           | Description                                                                                | Type                                                                              | Default Value                                                                                 |
| -------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| className      | Class Name                                                                                | string                                                                            | -                                                                                      |
| disabled       | Disable                                                                            | boolean                                                                           | false                                                                                  |
| inputReadOnly  | Whether the input box is read-only                                                                  | boolean                                                                           | false                                                                                  |
| defaultValue   | Initial value                                                                              | number                                                                            | -                                                                                      |
| focus          | Input box check status                                                                      | boolean                                                                           | false                                                                                  |
| inputClassName | Input box type                                                                          | string                                                                            | -                                                                                      |
| inputStyle     | Input box style                                                                          | string                                                                            | -                                                                                      |
| max            | Maximum                                                                              | number                                                                            | -                                                                                      |
| min            | Minimum                                                                              | number                                                                            | -                                                                                      |
| precision      | Calculation accuracy, keep a few decimal places [See details in](https://github.com/ant-design/ant-design/issues/5998) | number                                                                            | -                                                                                      |
| style          | Style                                                                                | string                                                                            | -                                                                                      |
| step           | Step distance, that is, the value of each addition and subtraction                                                                | number                                                                            | 1                                                                                      |
| type           | Input box evokes keyboard type, optional `number` `digit`                                           | string                                                                            | `digit`                                                                                |
| value          | The value of the input box is valid when the form is submitted.                                                      | number                                                                            | -                                                                                      |
| onBlur         | Trigger this callback when the input box loses focus                                                        | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onChange       | Trigger this callback after data changes                                                              | ( value: number                                                                   | null, [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void        |
| onConfirm      | This callback is triggered when the keyboard is clicked to complete                                                            | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onFocus        | This callback is triggered when the input box is focused                                                            | (value: number                                                                    | null, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
| onDisabledTap  | Click departure callback when disabled                                                                  | (event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |
