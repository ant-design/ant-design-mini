---
nav:
  path: /components
group:
  title: 通用
  order: 2
toc: 'content'
---

# Button Button

<!-- <code src="../../docs/components/compatibility.tsx" inline="true"></code> -->

Used to start an immediate operation.

## When to use

Marks a (or encapsulates a set of) operation commands that trigger the corresponding business logic in response to user click behavior.

## Code Sample

### Basic use

<code src='../../demo/pages/Button/index'></code>

### Inline

<!-- <code src='pages/ButtonInline/index'></code> -->

### Icon

<!-- <code src='pages/ButtonIcon/index'></code> -->

### More Customizations

<!-- <code src='pages/ButtonCustom/index'></code> -->

```js
通用代码
#if ALIPAY
支付宝示例代码;
#endif
#if WECHAT
微信示例代码;
#endif
```

## API

### Button

The following table describes the API properties for the Button component:

| Property                   | Description                                                            | Type                                                                          | Default Value    |
| ---------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------- |
| type                   | 按钮Type，可选 `primary`、`default`、`text`                     | string                                                                        | `default` |
| danger                 | Whether it is a danger button                                                  | boolean                                                                       | false     |
| disabled               | Whether it is an invalid button                                                  | boolean                                                                       | false     |
| activeClassName        | Class name when pressed                                                    | string                                                                        | -         |
| className              | Class Name                                                            | string                                                                        | -         |
| style                  | Style                                                            | string                                                                        | -         |
| inline                 | Inline button                                                  | boolean                                                                       | false     |
| icon                   | Icon on the left side of the button                                                    | string                                                                        | -         |
| loading                | Whether it is loading or not, it cannot be clicked during loading.                                    | boolean                                                                       | -         |
| size                   | 按钮大小。仅在 `inline` 下生效，可选 `small`、`medium`、`large` | string                                                                        | `medium`  |
| subText                | 辅助文字，显示在第二行。`inline` 下不生效                       | string                                                                        | -         |
| #if ALIPAY catchTap      | Click the button to trigger this callback, non-bubbling                                    | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if ALIPAY onTap         | Click the button to trigger this callback                                            | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if ALIPAY onDisabledTap | Click Departure Callback when disabled (not supported by WeChat)                                | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |

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

[Button Component Property Description](https://opendocs.alipay.com/mini/component/button#%E5%B1%9E%E6%80%A7%E8%AF%B4%E6%98%8E)
