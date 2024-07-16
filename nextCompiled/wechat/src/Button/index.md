---
nav:
  path: /components
group:
  title: 通用
  order: 2
toc: 'content'
---

# Button 按钮

<code src="../../docs/components/compatibility.tsx" inline="true"></code>

用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码示例

### 基本使用

<code src='pages/Button/index'></code>

### Inline

<code src='pages/ButtonInline/index'></code>

### Icon

<code src='pages/ButtonIcon/index'></code>

### 更多自定义

<code src='pages/ButtonCustom/index'></code>

## API

### Button

以下表格介绍了 Button 组件的 API 属性：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型，可选 `primary`、`default`、`text` | string | `default` |
| danger | 是否为危险按钮 | boolean | false |
| disabled | 是否为失效按钮 | boolean | false |
| activeClassName | 按下时的类名 | string | - |
| className | 类名 | string | - |
| style | 样式 | string | - |
| inline | 是否为内联按钮 | boolean | false |
| icon | 按钮左侧图标 | string | - |
| loading | 是否加载中，加载中时不可点击 | boolean | - |
| size | 按钮大小。仅在 `inline` 下生效，可选 `small`、`medium`、`large` | string | `medium` |
| subText | 辅助文字，显示在第二行。`inline` 下不生效 | string | - |
| catchTap | 点击按钮，触发此回调，非冒泡 | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
| onTap | 点击按钮，触发此回调 | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |

### 更多属性

以下是 Button 组件支持的其他属性：

- `public-id`
- `open-type`
- `scope`
- `form-type`
- `onGetAuthorize`
- `onFollowLifestyle`
- `onError`
- `onGetUserInfo`
- `onGetPhoneNumber`

具体的属性说明，请参考支付宝小程序的官方文档。

[Button 组件属性说明](https://opendocs.alipay.com/mini/component/button#%E5%B1%9E%E6%80%A7%E8%AF%B4%E6%98%8E)
