---
nav:
  path: /components
group:
  title: General
  order: 2
toc: 'content'
---

# Button

Used to start an immediate operation.

## When to use

Marks a (or encapsulates a set of) operation commands that trigger the corresponding business logic in response to user click behavior.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-button": "antd-mini/es/Button/index"
#endif
#if WECHAT
  "ant-button": "antd-mini/Button/index"
#endif
}
```

## Code example

### Basic use

```xml
#if ALIPAY
<ant-button type="primary">Alipay</ant-button>
#endif
#if WECHAT
<ant-button type="primary">Wechat</ant-button>
#endif
<ant-button type="primary">Primary Button</ant-button>
<ant-button type="default">Default Button</ant-button>
<ant-button type="text">Text Button</ant-button>
<ant-button title="subtitle" type="primary">Button with subtitle</ant-button>
<ant-button disabled type="primary" onTap="handleTap" onDisabledTap="handleDisabledTap"> disabled </ant-button>
<ant-button type="primary" loading>loading status</ant-button>
<ant-button type="primary" danger>danger</ant-button>
```

### Inline Button

```xml
<ant-button type="primary" inline>Inline Button</ant-button>
<ant-button type="primary" inline size="large">按钮尺寸-大</ant-button>
<ant-button type="primary" inline size="medium">按钮尺寸-中</ant-button>
<ant-button type="primary" inline size="small">按钮尺寸-小</ant-button>
<ant-button type="primary" inline danger size="large">危险</ant-button>
```

### Button with icon

```xml
<ant-button type="primary" icon="SmileOutline">Button with icon</ant-button>
<ant-button type="default" icon="SmileOutline">Button with icon</ant-button>
<ant-button type="default" danger icon="ForbidFill">Button with icon</ant-button>
<ant-button type="default" loading icon="ForbidFill">Button with icon</ant-button>
<ant-button type="default" inline danger size="large" icon="ForbidFill">Button with icon</ant-button>
```

### More Customizations

```xml
<ant-button type="primary" icon="SmileOutline" className="custom-size">自定义大小</ant-button>
<ant-button type="primary" icon="SmileOutline" className="round">自定义圆角</ant-button>
```

```css
.custom-size {
  font-size: 22rpx;
}
.round {
  border-radius: 50rpx;
}
```

### Demo Code

<code src='../../demo/pages/Button/index'></code>

## API

### Button

The following table describes the API properties for the Button component:

| Property                        | Description                                                            | Type                                                                          | Default Value    |
| --------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------- |
| type                        | Button type, optional `primary`、`default`、`text`                     | string                                                                        | `default` |
| danger                      | Whether it is a danger button                                                  | boolean                                                                       | false     |
| disabled                    | Whether it is an invalid button                                                  | boolean                                                                       | false     |
| activeClassName             | Class name when pressed                                                    | string                                                                        | -         |
| className                   | Class Name                                                            | string                                                                        | -         |
| style                       | Style                                                            | string                                                                        | -         |
| inline                      | Inline button                                                  | boolean                                                                       | false     |
| icon                        | Icon on the left side of the button                                                    | string                                                                        | -         |
| loading                     | Whether it is loading or not, it cannot be clicked during loading.                                    | boolean                                                                       | -         |
| size                        | Button size. Only in `inline` Effective under, optional `small`、`medium`、`large` | string                                                                        | `medium`  |
| subText                     | Secondary text, displayed on the second line.`inline` DOWN NOT EFFECTIVE                       | string                                                                        | -         |
| #if ALIPAY catchTap         | Click the button to trigger this callback, non-bubbling                                    | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if ALIPAY onTap            | Click the button to trigger this callback                                            | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if ALIPAY onDisabledTap    | Click Departure Callback when disabled (not supported by WeChat)                                | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if WECHAT catch:tap        | Click the button to trigger this callback, non-bubbling                                    | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if WECHAT bind:tap         | Click the button to trigger this callback                                            | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if WECHAT bind:disabledtap | Click Departure Callback when disabled (not supported by WeChat)                                | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |

### WIP Theme Customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                                    | Default Value  | Remarks |
| ----------------------------------------- | ------- | ---- |
| --button-primary-background-color         | #1677FF | -    |
| --button-primary-color                    | #FFFFFF | -    |
| --button-default-background-color         | #FFFFFF | -    |
| --button-default-color                    | #333333 | -    |
| --button-default-border-color             | #D8D8D8 | -    |
| --button-danger-background-color          | #FF3B30 | -    |
| --button-danger-color                     | #FFFFFF | -    |
| --button-danger-border-color              | #FF3B30 | -    |
| --button-disabled-background-color        | #F5F5F5 | -    |
| --button-disabled-color                   | #CCCCCC | -    |
| --button-disabled-border-color            | #E5E5E5 | -    |
| --button-inline-background-color          | #FFFFFF | -    |
| --button-inline-color                     | #333333 | -    |
| --button-inline-border-color              | #D8D8D8 | -    |
| --button-inline-disabled-background-color | #F5F5F5 | -    |
| --button-inline-disabled-color            | #CCCCCC | -    |

### More Properties

The following are additional properties that the Button component supports:

- `public-id`
- `open-type`
- `scope`
- `form-type`
- `onGetAuthorize`
- `onFollowLifestyle`
- `onError`
- `onGetUserInfo`
- `onGetPhoneNumber`

For specific attribute descriptions, please refer to the official documents of Alipay applet.

[Button component property description](https://opendocs.alipay.com/mini/component/button#%E5%B1%9E%E6%80%A7%E8%AF%B4%E6%98%8E)
