---
nav:
  path: /components
group:
  title: 通用
  order: 2
toc: 'content'
---

# Button 按钮

用于开始一个即时操作。标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 引入

在 `index.json` 中引入组件

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

## 代码示例

### 基本使用

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
#if ALIPAY
<ant-button disabled type="primary" onTap="handleTap" onDisabledTap="handleDisabledTap"> 
Disable </ant-button>
#endif
#if WECHAT
<ant-button disabled type="primary" bindtap="handleTap" bindisabledtap="handleDisabledTap"> 
#endif
<ant-button type="primary" loading>Loading Status</ant-button>
<ant-button type="primary" danger>Danger</ant-button>
```

### 行内按钮

```xml
<ant-button type="primary" inline>行内按钮</ant-button>
<ant-button type="primary" inline size="large">按钮尺寸-大</ant-button>
<ant-button type="primary" inline size="medium">按钮尺寸-中</ant-button>
<ant-button type="primary" inline size="small">按钮尺寸-小</ant-button>
<ant-button type="primary" inline danger size="large">危险</ant-button>
```

### 带图标按钮

```xml
<ant-button type="primary" icon="SmileOutline">带图标按钮</ant-button>
<ant-button type="default" icon="SmileOutline">带图标按钮</ant-button>
<ant-button type="default" danger icon="ForbidFill">带图标按钮</ant-button>
<ant-button type="default" loading icon="ForbidFill">带图标按钮</ant-button>
<ant-button type="default" inline danger size="large" icon="ForbidFill">带图标按钮</ant-button>
```

### 更多自定义

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

### Demo 代码

<code src='../../demo/pages/Button/index'></code>

## API

### Button

以下表格介绍了 Button 组件的 API 属性：

| 属性                        | 说明                                                            | 类型                                                                          | 默认值    |
| --------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------- |
| type                        | 按钮类型，可选 `primary`、`default`、`text`                     | string                                                                        | `default` |
| danger                      | 是否为危险按钮                                                  | boolean                                                                       | false     |
| disabled                    | 是否为失效按钮                                                  | boolean                                                                       | false     |
| activeClassName             | 按下时的类名                                                    | string                                                                        | -         |
| className                   | 类名                                                            | string                                                                        | -         |
| style                       | 样式                                                            | string                                                                        | -         |
| inline                      | 是否为内联按钮                                                  | boolean                                                                       | false     |
| icon                        | 按钮左侧图标                                                    | string                                                                        | -         |
| loading                     | 是否加载中，加载中时不可点击                                    | boolean                                                                       | -         |
| size                        | 按钮大小。仅在 `inline` 下生效，可选 `small`、`medium`、`large` | string                                                                        | `medium`  |
| aide                        | 按钮是否是辅助按钮 只有 default 和 primary 按钮才消费该参数     | boolean                                                                       | false     |
| subText                     | 辅助文字，显示在第二行。`inline` 下不生效                       | string                                                                        | -         |
| #if ALIPAY catchTap         | 点击按钮，触发此回调，非冒泡                                    | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if ALIPAY onTap            | 点击按钮，触发此回调                                            | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if ALIPAY onDisabledTap    | 禁用时点击出发回调（微信不支持）                                | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if WECHAT catchtap        | 点击按钮，触发此回调，非冒泡                                    | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if WECHAT bindtap         | 点击按钮，触发此回调                                            | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |
| #if WECHAT binddisabledtap | 禁用时点击出发回调（微信不支持）                                | (e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -         |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                                   | 默认值                                                                                                                | 深色模式默认值                                                                                                        | 备注                 |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------- |
| --button-disabled-opacity                | 0.4                                                                                                                   | 0.4                                                                                                                   | 按钮禁用透明度       |
| --button-color                           | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #3086FF;">#3086FF</div>                                     | 按钮颜色             |
| --button-background-color                | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #1a1a1a; color: #FFFFFF;">#1a1a1a</div>                     | 按钮背景颜色         |
| --button-border-color                    | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #3086ff; color: #FFFFFF;">#3086ff</div>                     | 按钮边框颜色         |
| --button-primary-border-color            | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #3086FF;">#3086FF</div>                                     | 主要按钮边框颜色     |
| --button-primary-background-color        | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #3086FF;">#3086FF</div>                                     | 主要按钮背景颜色     |
| --button-primary-color                   | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #000000;">#FFFFFF</div>                     | 主要按钮颜色         |
| --button-primary-aide-border-color       | <div style="width: 150px; height: 40px; background-color: #E7F1FF; color: #333333;">#E7F1FF</div>                     | <div style="width: 150px; height: 40px; background-color: #0D2543; color: #FFFFFF;">#0D2543</div>                     | 主要辅助按钮边框颜色 |
| --button-primary-aide-color              | <div style="width: 150px; height: 40px; background-color: #1677FF;">#1677FF</div>                                     | <div style="width: 150px; height: 40px; background-color: #3086FF;">#3086FF</div>                                     | 主要辅助按钮颜色     |
| --button-default-aide-border-color       | <div style="width: 150px; height: 40px; background-color: #F5F5F5; color: #333333;">#F5F5F5</div>                     | <div style="width: 150px; height: 40px; background-color: #121212; color: #FFFFFF;">#121212</div>                     | 默认辅助按钮边框颜色 |
| --button-default-aide-background-color   | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #1a1a1a; color: #FFFFFF;">#1a1a1a</div>                     | 默认辅助按钮背景颜色 |
| --button-default-aide-color              | <div style="width: 150px; height: 40px; background-color: #333333; color: #FFFFFF;">#333333</div>                     | <div style="width: 150px; height: 40px; background-color: #C5CAD1; color: #FFFFFF;">#C5CAD1</div>                     | 默认辅助按钮颜色     |
| --button-primary-danger-background-color | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | 主要危险按钮背景颜色 |
| --button-primary-danger-border-color     | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | 主要危险按钮边框颜色 |
| --button-primary-danger-color            | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | 主要危险按钮颜色     |
| --button-default-danger-background-color | <div style="width: 150px; height: 40px; background-color: #FFFFFF; color: #333333;">#FFFFFF</div>                     | <div style="width: 150px; height: 40px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div>                     | 默认危险按钮背景颜色 |
| --button-default-danger-border-color     | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | 默认危险按钮边框颜色 |
| --button-default-danger-color            | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | 默认危险按钮颜色     |
| --button-text-danger-color               | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | 危险按钮文字颜色     |
| --button-danger-default-color            | <div style="width: 150px; height: 40px; background-color: #FF3141;">#FF3141</div>                                     | <div style="width: 150px; height: 40px; background-color: #FF4A58;">#FF4A58</div>                                     | 危险按钮默认颜色     |
| --button-active-bg                       | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.08);">rgba(255, 255, 255, 0.08)</div> | <div style="width: 150px; height: 40px; background-color: rgba(255, 255, 255, 0.08);">rgba(255, 255, 255, 0.08)</div> | 按钮激活背景颜色     |

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
