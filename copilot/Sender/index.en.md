---
nav:
  path: /copilot
group:
  title: Express
  order: 3
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Sender

## When to use

Used when user input is required and a message is sent. Support adaptive height, send status, custom slot and other functions.

## Code Sample

### Basic Usage

<code src='../../copilot-demo/pages/Sender/index'></code>

## API

### Property

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| className | Class Name | string | - |
| style | Style | string | - |
| value | Value of the input box | string | - |
| placeholder | Input box placeholder | string | "You can ask me any question ~' |
| disabled | Disable | boolean | false |
| loading | Sending | boolean | false |

### Event

| Event Name | Description | Type |
| --- | --- | --- |
| onChange | Triggered when input box content changes | (value: string) => void |
| onSubmit | Triggered when the send button is clicked | (value: string) => void |
| onCancel | Triggered when the Cancel button is clicked (in loading state) | () => void |

### Slots

| Name | Description |
| --- | --- |
| header | Custom header content, typically used to place input suggestions and shortcuts |
| input-header | Customize the content above the input box, which can be used to place pictures, reference copy, etc. |
| prefix | Custom input box prefix content |
| suffix | Customize the suffix content of the input box |
| footer | Custom bottom content that can be used to host some shortcut functions |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.

| Variable name | Default Value | Description |
| --- | --- | --- |
| --sender-background-color | #ffffff | Input box background color |
| --sender-text-color | #333333 | Input box text color |
| --sender-placeholder-color | rgba(0, 0, 0, 0.25) | Input box placeholder text color |
| --sender-send-color | #1677ff | Send Button Color |
| --sender-input-text-color | #000000 | Input box content text color |
| --sender-input-caret-color | #1677ff | Input box cursor color |
| --sender-focus-border-color | #1677ff | Border color when the input box is focused |
| --sender-max-height | 192rpx | Maximum height of input box |

## FAQ

### 1. How do I handle the sending status?

Component provides the loading properties and onCancel events for handling send status:
- Send button appears loaded when loading = true
- Clicking the button in the loading state will trigger the onCancel event
- It is recommended to set the loading to false after sending

