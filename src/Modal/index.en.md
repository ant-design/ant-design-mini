---
nav:
  path: /components
group:
  title: To Discard
  order: 99
toc: 'content'
---

# Modal

Not recommended, this component will be obsolete. recommend use [Dialog](/components/dialog) Components, with the latest design specifications.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-modal": "antd-mini/es/Modal/index"
#endif
#if WECHAT
  "ant-modal": "antd-mini/Modal/index"
#endif
}
```

### Demo Code

<code src='../../demo/pages/Modal/index'></code>

## API

| Property                               | Description                                              | Type         | Default Value    |
| ---------------------------------- | ------------------------------------------------- | ------------ | --------- |
| bodyClassName                      | body class name                                         | string       | -         |
| bodyStyle                          | body style                                         | string       | -         |
| cancelButtonStyle                  | Cancel Button Style                                      | string       | -         |
| cancelButtonText                   | Cancel Button Text                                      | string       | -         |
| className                          | Class Name                                              | string       | -         |
| closable                           | Whether to display the close button in the upper right corner. Only valid when type is focus | boolean      | -         |
| content                            | Content                                              | string\|slot | -         |
| destroyOnClose                     | Whether to unload content when invisible                              | boolean      | false     |
| footer                             | Custom Button Area                                      | slot         | -         |
| maskClosable                       | Click whether the layer triggers the onClose.                          | boolean      | true      |
| maskClassName                      | Class name of the layer                                        | string       | -         |
| maskStyle                          | Mask Style                                        | string       | -         |
| primaryButtonStyle                 | Main Button Style                                        | string       | -         |
| primaryButtonText                  | Main button text                                        | string       | -         |
| secondaryButtonStyle               | Auxiliary Button Style                                      | string       | -         |
| secondaryButtonText                | Secondary Button Text                                      | string       | -         |
| style                              | Style                                              | string       | -         |
| title                              | Title                                              | string\|slot | -         |
| type                               | type, optional `default`(default),`focus`(emphasis mode)     | string       | `default` |
| visible                            | Whether to display                                          | boolean      | false     |
| #if ALIPAY onCancelButtonTap       | Cancel button click event                                  | ()=>void     | -         |
| #if ALIPAY onClose                 | Click the close button in the upper right corner in the layer or emphasis mode to trigger the callback  | ()=>void     | -         |
| #if ALIPAY onPrimaryButtonTap      | Main button click event                                    | ()=>void     | -         |
| #if ALIPAY onSecondaryButtonTap    | Secondary button click event                                  | ()=>void     | -         |
| #if WECHAT bindcancelbuttontap    | Cancel button click event                                  | ()=>void     | -         |
| #if WECHAT bindclose              | Click the close button in the upper right corner in the layer or emphasis mode to trigger the callback  | ()=>void     | -         |
| #if WECHAT bindprimarybuttontap   | Main button click event                                    | ()=>void     | -         |
| #if WECHAT bindsecondarybuttontap | Secondary button click event                                  | ()=>void     | -         |
