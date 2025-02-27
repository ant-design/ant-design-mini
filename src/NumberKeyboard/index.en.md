---
nav:
  path: /components
group:
  title: Information Entry
  order: 10
toc: 'content'
---

# NumberKeyboard

Customize the numeric keypad.

## Precautions

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
<ant-number-keyboard visible="{{visible}}" />
```

#### No decimal point

```xml
<ant-number-keyboard point="{{false}}" visible="{{visible}}" />
```

#### With confirmation button

```xml
<ant-number-keyboard confirmText="confirm" visible="{{visible}}" />
```

#### With closed arrow

```xml
<ant-number-keyboard closeable="{{true}}" visible="{{visible}}" />
```

#### scrambled keyboard

```xml
<ant-number-keyboard random="{{true}}" visible="{{visible}}" />
```

#### Custom Button

```xml
<ant-number-keyboard visible="{{visible}}" >
  <view
      slot="header"
      class="number-keyboard-header"
    >
      Custom Title
    </view>
</ant-number-keyboard>

<ant-number-keyboard visible="{{visible}}" >
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

| Property                    | Description             | Type                  | Default Value |
| ----------------------- | ---------------- | --------------------- | ------ |
| className               | Class Name             | string                | -      |
| style                   | Style             | string                | -      |
| value                   | Enter value           | string                | -      |
| visible                 | Show             | boolean               | false  |
| vibrate                 | Vibration             | boolean               | true   |
| closeable               | Close Arrow         | boolean               | false  |
| point                   | decimal point           | boolean               | true   |
| random                  | out of order             | boolean               | false  |
| confirmDisabled         | Disable confirmation button     | boolean               | false  |
| safeArea                | Safety distance         | boolean               | true   |
| confirmText             | Confirm the text of the button   | string                | -      |
| header                  | Override the title bar of the keyboard | slot                  | -      |
| confirm                 | Override keyboard confirmation button | slot                  | -      |
| #if ALIPAY onChange     | Callback when number changes | (val: string) => void | -      |
| #if ALIPAY onClose      | Callback when hiding keyboard | () => void            | -      |
| #if ALIPAY onConfirm    | Callback when clicking confirmation | () => void            | -      |
| #if WECHAT bindchange  | Callback when number changes | (val: string) => void | -      |
| #if WECHAT bindclose   | Callback when hiding keyboard | () => void            | -      |
| #if WECHAT bindconfirm | Callback when clicking confirmation | () => void            | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                                           | Default Value                                                                                            | Dark Mode Default                                                                                    | Remarks                               |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------- |
| --number-key-board-active-background-color       | <div style="width: 150px; height: 30px; background-color: #d3d3d3; color: #333333;">#d3d3d3</div> | <div style="width: 150px; height: 30px; background-color: #d3d3d3; color: #333333;">#d3d3d3</div> | Numeric keypad to activate background color               |
| --number-key-board-text-color                    | <div style="width: 150px; height: 30px; background-color: #333333; color: #ffffff;">#333333</div> | <div style="width: 150px; height: 30px; background-color: #c5cad1; color: #ffffff;">#c5cad1</div> | Number pad text color                   |
| --number-key-board-none-text-color               | <div style="width: 150px; height: 30px; background-color: #999999; color: #ffffff;">#999999</div> | <div style="width: 150px; height: 30px; background-color: #616161; color: #ffffff;">#616161</div> | No text color on numeric keypad                 |
| --number-key-board-iphonex-safe-background-color | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Digital Keyboard iPhone X Secure Area Background Color |
| --number-key-board-background-color              | <div style="width: 150px; height: 30px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div> | <div style="width: 150px; height: 30px; background-color: #121212; color: #ffffff;">#121212</div> | Numeric keypad background color                   |
| --number-key-board-border-color                  | <div style="width: 150px; height: 30px; background-color: #eeeeee; color: #333333;">#eeeeee</div> | <div style="width: 150px; height: 30px; background-color: #2b2b2b; color: #ffffff;">#2b2b2b</div> | Numeric keypad border color                   |
| --number-key-board-transfer-bg               | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1677ff; color: #ffffff;">#1677ff</div> | Numeric keypad button background               |
| --number-key-board-transfer-color                | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #3086ff; color: #ffffff;">#3086ff</div> | Numeric keypad button color               |
