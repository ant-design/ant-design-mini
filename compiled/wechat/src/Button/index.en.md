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

## Code Sample

### Basic use

```xml
#if ALIPAY
<ant-button type="primary">Alipay</ant-button>
#endif
#if WECHAT
<ant-button type="primary">WeChat</ant-button>
#endif
<ant-button type="primary">Main button</ant-button>
<ant-button type="default">Secondary button</ant-button>
<ant-button type="text">Text Button</ant-button>
<ant-button title="副标题" type="primary">With auxiliary copy button</ant-button>
<ant-button disabled type="primary" onTap="handleTap" onDisabledTap="handleDisabledTap"> Disable </ant-button>
<ant-button type="primary" loading>Loading Status</ant-button>
<ant-button type="primary" danger>Danger</ant-button>
```

### Inline Button

```xml
<ant-button type="primary" inline>Inline Button</ant-button>
<ant-button type="primary" inline size="large">Button Size-Large</ant-button>
<ant-button type="primary" inline size="medium">Button Size-Medium</ant-button>
<ant-button type="primary" inline size="small">Button Size-Small</ant-button>
<ant-button type="primary" inline danger size="large">Danger</ant-button>
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
<ant-button type="primary" icon="SmileOutline" className="custom-size">Custom Size</ant-button>
<ant-button type="primary" icon="SmileOutline" className="round">Custom Fillet</ant-button>
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
| subText                     | Secondary text, displayed on the second line.`inline` Not effective                       | string                                                                        | -         |
| #if ALIPAY catchTap         | Click the button to trigger this callback, non-bubbling                                    | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if ALIPAY onTap            | Click the button to trigger this callback                                            | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if ALIPAY onDisabledTap    | Click Departure Callback when disabled (not supported by WeChat)                                | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if WECHAT catch:tap        | Click the button to trigger this callback, non-bubbling                                    | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if WECHAT bind:tap         | Click the button to trigger this callback                                            | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if WECHAT bind:disabledtap | Click Departure Callback when disabled (not supported by WeChat)                                | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                                   | Default Value                                                                                                                | Remarks                 |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------- |
| --button-disabled-opacity                | 0.4                                                                                                                   | Button Disable Transparency       |
| --button-color                           | <div style="width: 150px; height: 30px; background-color: #1677FF;">#1677FF</div>                                     | Button Color             |
| --button-background-color                | <div style="width: 150px; height: 30px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | Button background color         |
| --button-border-color                    | <div style="width: 150px; height: 30px; background-color: #1677FF;">#1677FF</div>                                     | Button border color         |
| --button-primary-border-color            | <div style="width: 150px; height: 30px; background-color: #1677FF;">#1677FF</div>                                     | Main button border color     |
| --button-primary-background-color        | <div style="width: 150px; height: 30px; background-color: #1677FF;">#1677FF</div>                                     | Main button background color     |
| --button-primary-color                   | <div style="width: 150px; height: 30px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | Main button color         |
| --button-primary-aide-border-color       | <div style="width: 150px; height: 30px; background-color: #E7F1FF; color: #333333;">#E7F1FF</div>                     | Primary Secondary Button Border Color |
| --button-primary-aide-color              | <div style="width: 150px; height: 30px; background-color: #1677FF;">#1677FF</div>                                     | Primary Auxiliary Button Color     |
| --button-default-aide-border-color       | <div style="width: 150px; height: 30px; background-color: #F5F5F5; color: #333333;">#F5F5F5</div>                     | Default Secondary Button Border Color |
| --button-default-aide-background-color   | <div style="width: 150px; height: 30px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | Default Auxiliary Button Background Color |
| --button-default-aide-color              | <div style="width: 150px; height: 30px; background-color: #333333; color: #FFFFFF;">#333333</div>                     | Default Auxiliary Button Color     |
| --button-primary-danger-background-color | <div style="width: 150px; height: 30px; background-color: #FF3141;">#FF3141</div>                                     | Primary Danger Button Background Color |
| --button-primary-danger-border-color     | <div style="width: 150px; height: 30px; background-color: #FF3141;">#FF3141</div>                                     | Primary Hazard Button Border Color |
| --button-primary-danger-color            | <div style="width: 150px; height: 30px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | Primary Hazard Button Color     |
| --button-default-danger-background-color | <div style="width: 150px; height: 30px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | Default Hazard Button Background Color |
| --button-default-danger-border-color     | <div style="width: 150px; height: 30px; background-color: #FF3141;">#FF3141</div>                                     | Default Hazard Button Border Color |
| --button-default-danger-color            | <div style="width: 150px; height: 30px; background-color: #FF3141;">#FF3141</div>                                     | Default Hazard Button Color     |
| --button-text-danger-color               | <div style="width: 150px; height: 30px; background-color: #FF3141;">#FF3141</div>                                     | Hazard button text color     |
| --button-danger-default-color            | <div style="width: 150px; height: 30px; background-color: #FF3141;">#FF3141</div>                                     | Danger Button Default Color     |
| --button-active-bg                       | <div style="width: 150px; height: 30px; background-color: rgba(255, 255, 255, 0.08);">rgba(255, 255, 255, 0.08)</div> | Button to activate background color     |
| --button-inline-size                     | 30rpx                                                                                                                 | Button Inline Size         |
| --button-font-size                       | 38rpx                                                                                                                 | Button Font Size         |
| --button-large-font-size                 | 38rpx                                                                                                                 | Large Button Font Size       |
| --button-medium-font-size                | 34rpx                                                                                                                 | Medium Button Font Size       |
| --button-small-font-size                 | 30rpx                                                                                                                 | Small Button Font Size       |
| --button-icon-size                       | 44rpx                                                                                                                 | Button Icon Size         |
| --button-padding                         | 24rpx                                                                                                                 | Button interior margin           |
| --button-large-padding                   | 24rpx                                                                                                                 | Large Button Inner Margin         |
| --button-medium-padding-top              | 16rpx                                                                                                                 | Middle Button Upper Padding       |
| --button-medium-padding-left             | 24rpx                                                                                                                 | Middle Button Left Inner Margin       |
| --button-small-padding-top               | 8rpx                                                                                                                  | Small Button Upper Inner Margin       |
| --button-small-padding-left              | 24rpx                                                                                                                 | Small Button Left Inner Margin       |
| --button-subtext-size                    | 24rpx                                                                                                                 | Button secondary text size       |
| --button-border-size                     | 2rpx                                                                                                                  | Button border size         |

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
