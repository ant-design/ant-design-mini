---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# NumberKeyboard numeric keypad

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

## When to use

When a custom numeric keypad is required.

## Tip

1. The numeric keyboard has not yet solved the problem that the keyboard blocks the input box. Developers need to set up screen scrolling to solve such problems.

## Code Sample

### Basic use

<code src='../../demo/pages/NumberKeyboard/index'></code>

### Digital input box

<!-- <code src='pages/NumberKeyboardNumber/index'></code> -->

### Amount input box

<!-- <code src='pages/NumberKeyboardAmount/index'></code> -->

### Verification code input box

<!-- <code src='pages/NumberKeyboardCode/index'></code> -->

## API

| Property            | Description               | Type                     | Default Value |
|-----------------|-------------------|------------------------|-------|
| className       | Class Name              | string                | -     |
| style           | Style              | string                | -     |
| value           | Input value            | string               | -     |
| visible         | Show              | boolean              | false |
| vibrate         | Vibration              | boolean              | true  |
| closeable       | Close Arrow          | boolean              | false |
| point           | decimal point            | boolean              | true  |
| random          | out of order              | boolean              | false |
| confirmDisabled | Disable confirmation button      | boolean              | false |
| safeArea        | Safety distance          | boolean              | true  |
| confirmText     | Confirm the text of the button    | string                | -     |
| header          | Override the title bar of the keyboard  | slot                  | -     |
| confirm         | Override keyboard confirmation button  | slot                  | -     |
| onChange        | Callback when number changes  | (val: string) => void | -     |
| onClose         | Callback when keyboard is hidden  | () => void            | -     |
| onConfirm       | Callback when clicking confirmation  | () => void            | -     |
