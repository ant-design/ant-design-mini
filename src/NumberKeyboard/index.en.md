---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
---

# NumberKeyboard

## When to use

When a custom numeric keypad is required.

## Tip

1. The numeric keyboard has not yet solved the problem that the keyboard blocks the input box. Developers need to set up screen scrolling to solve such problems.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-number-keyboard": "antd-mini/es/NumberKeyboard/index"
#endif
#if WECHAT
  "ant-number-keyboard": "antd-mini/NumberKeyboard/index"
#endif
}
```

## Code Sample

### Basic use
#### Default Keyboard
```xml
<ant-number-keyboard visible="{{ visible }}" onClose="onTap" />
```

#### No decimal point
```xml
<ant-number-keyboard point="{{ false }}" visible="{{ visible }}" onClose="onTap" />
```

#### With confirmation button
```xml
<ant-number-keyboard confirmText="确认" visible="{{ visible }}" onClose="onTap" />
```

#### With closed arrow
```xml
<ant-number-keyboard closeable="{{ true }}" visible="{{ visible }}" onClose="onTap" />
```

#### scrambled keyboard
```xml
<ant-number-keyboard random="{{ true }}" visible="{{ visible }}" onClose="onTap" />
```
#### Custom Button
```xml
<ant-number-keyboard visible="{{ visible }}" onClose="onTap" >
  <view
      slot="header"
      class="number-keyboard-header"
    >
      Custom Title
    </view>
</ant-number-keyboard>

<ant-number-keyboard visible="{{ visible }}" onClose="onTap" >
  <view
    slot="confirm"
    class="number-keyboard-confirm"
  >
    <!-- 自定义确认按钮 -->
    <ant-icon type="DownOutline"></ant-icon>
  </view>
</ant-number-keyboard>
```


### Digital input box
<code src='../../demo/pages/NumberKeyboardNumber/index'></code>


### Verification code input box
<code src='../../demo/pages/NumberKeyboardCode/index'></code>

### Demo Code
<code src='../../demo/pages/NumberKeyboard/index'></code>

## API

| Property            | Description             | Type                  | Default Value |
| --------------- | ---------------- | --------------------- | ------ |
| className       | Class Name             | string                | -      |
| style           | Style             | string                | -      |
| value           | Enter value           | string                | -      |
| visible         | Show             | boolean               | false  |
| vibrate         | Vibration             | boolean               | true   |
| closeable       | Close Arrow         | boolean               | false  |
| point           | decimal point           | boolean               | true   |
| random          | out of order             | boolean               | false  |
| confirmDisabled | Disable confirmation button     | boolean               | false  |
| safeArea        | Safety distance         | boolean               | true   |
| confirmText     | Confirm the text of the button   | string                | -      |
| header          | Override the title bar of the keyboard | slot                  | -      |
| confirm         | Override keyboard confirmation button | slot                  | -      |
| onChange        | Callback when number changes | (val: string) => void | -      |
| onClose         | Callback when hiding keyboard | () => void            | -      |
| onConfirm       | Callback when clicking confirmation | () => void            | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                                           | Default Value                                                                                            | Remarks                               |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ---------------------------------- |
| --number-key-board-active-background-color       | <div style="width: 150px; height: 30px; background-color: #d3d3d3; color: #333333;">#d3d3d3</div> | Numeric keypad to activate background color               |
| --number-key-board-text-color                    | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | Number pad text color                   |
| --number-key-board-none-text-color               | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | No text color on numeric keypad                 |
| --number-key-board-iphonex-safe-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | Digital Keyboard iPhone X Secure Area Background Color |
| --number-key-board-background-color              | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | Numeric keypad background color                   |
| --number-key-board-border-color                  | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | Numeric keypad border color                   |
| --number-key-board-transfer-color                | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | Numeric keypad transfer button color               |