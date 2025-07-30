---
nav:
  path: /components
group:
  title: 反馈引导
  order: 12
toc: 'content'
supportPlatform: ['alipay', 'wechat']
---

# Popover 气泡

点击元素，弹出气泡式的菜单。用于导航功能的气泡菜单唤起，通常用于收纳低频使用的功能。该功能只能通过导航栏上的图标激活。

## 引入

在 `index.json` 中引入组件

```json
"usingComponents": {
#if ALIPAY
  "ant-popover": "antd-mini/es/Popover/index"
#endif
#if WECHAT
  "ant-popover": "antd-mini/Popover/index"
#endif
}
```

## 代码示例

### 基本使用

```xml
<popover
  content="simple tips"
  placement="top-left"
  showCloseIcon="{{true}}"
  style="display: inline-block">
  <ant-button
    size="small"
    inline>
    点我
  </ant-button>
</popover>
```

### 支持图片和行动点按钮

```xml
<popover
  content="这里是一个提示文案很长的Tips，酌情使用文案。单一Tips最多可容纳2行文案这里是一个提示文案很长的Tips，酌情使用文案。单一Tips最多可容纳2行文案…"
  placement="top"
  actionText="operation"
  imageUrl="https://mdn.alipayobjects.com/huamei_mnxlps/afts/img/A*tLCBTqxataIAAAAAAAAAAAAADkqGAQ/original"
#if ALIPAY
  onVisibleChange="onVisibleChange"
  onTapAction="onTapAction"
#endif
#if WECHAT
  bindvisiblechange="onVisibleChange"
  bindtapaction="onTapAction"
#endif
  >
  <ant-button>点我</ant-button>
</popover>
```

### 自定义

#### 颜色

```xml
<popover
  content="red"
  color="red">
  <ant-button style="margin-right: 24rpx;" inline type="primary">自定义颜色</ant-button>
</popover>
```

#### 插槽

```xml
<popover content="left & right slots">
  <ant-button inline style="margin-right: 24rpx;">插槽</ant-button>
  <icon slot="leftContent" style="font-size: 48rpx; margin-right: 24rpx;" type="FaceRecognitionOutline" />
  <icon slot="rightContent" style="font-size: 48rpx; margin-left: 24rpx;" type="FaceRecognitionOutline" />
</popover>
```

#### 位置

可选 `top`、`top-right`、`top-left`、`bottom`、`bottom-left`、`bottom-right`、`left`、`left-top`、`left-bottom`、`right`、`right-top`、`right-bottom`

```xml
<popover placement="top-right">
  <ant-button size="small" inline>点我</ant-button>
  <view slot="content" />
</popover>
```

### 受控

```xml
<view>
  <popover
    content="prompt"
    placement="right"
    showMask="{{false}}"
    visible="{{visible}}"
    style="display: inline-block">
    <text>点击按钮修改visible</text>
  </popover>
</view>
<ant-button
  size="small"
  inline
  style="margin-top: 8px"
#if ALIPAY
  onTap="handleVisibleChange"
#endif
#if WECHAT
  bindtap="handleVisibleChange"
#endif
>
  更改visible
</ant-button>
```

```js
Page({
  data: { visible: false },
  handleVisibleChange() {
    this.setData({
      visible: !this.data.visible,
    });
  },
});
```

### Demo 代码

<code src='../../demo/pages/Popover/index' noChangeButton></code>

## API

| 属性                          | 说明                                                                                                                                                                | 类型                                                                                                | 默认值 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------ |
| autoAdjustOverflow            | 气泡被遮挡时的自动调整位置                                                                                                                                          | boolean                                                                                             | true   |
| className                     | 类名                                                                                                                                                                | string                                                                                              | -      |
| color                         | 背景颜色                                                                                                                                                            | string                                                                                              | -      |
| contentClassName              | content 类名                                                                                                                                                        | string                                                                                              | -      |
| contentStyle                  | content 样式                                                                                                                                                        | string                                                                                              | -      |
| content                       | 内容                                                                                                                                                                | string \| slot                                                                                      | -      |
| defaultVisible                | 默认是否显示                                                                                                                                                        | boolean                                                                                             | false  |
| destroyOnClose                | 不可见时是否卸载内容                                                                                                                                                | boolean                                                                                             | false  |
| maskClassName                 | 蒙层的类名                                                                                                                                                          | string                                                                                              | -      |
| maskStyle                     | 蒙层的样式                                                                                                                                                          | string                                                                                              | -      |
| placement                     | 气泡框位置，可选 `top`、`top-right`、`top-left`、`bottom`、`bottom-left`、`bottom-right`、`left`、`left-top`、`left-bottom`、`right`、`right-top` 或 `right-bottom` | string                                                                                              | top    |
| showMask                      | 是否展示蒙层，为 true 时点击空白处可关闭 Popover                                                                                                                    | boolean                                                                                             | true   |
| style                         | 样式                                                                                                                                                                | string                                                                                              | -      |
| visible                       | 是否显示                                                                                                                                                            | boolean                                                                                             | -      |
| #if ALIPAY onVisibleChange    | visible 变更时的回调                                                                                                                                                | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |
| #if ALIPAY onTapAction        | 操作按钮点击回调                                                                                                                                                    | () => void                                                                                          | -      |
| #if WECHAT bindvisiblechange | visible 变更时的回调                                                                                                                                                | (visible: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | -      |
| #if WECHAT bindtapaction     | 操作按钮点击回调                                                                                                                                                    | () => void                                                                                          | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                     | 默认值                                                                                            | 深色模式默认值                                                                                    | 备注             |
| -------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| --popover-color-background | <div style="width: 150px; height: 30px; background-color: #404040; color: #ffffff;">#404040</div> | <div style="width: 150px; height: 30px; background-color: #404040; color: #ffffff;">#404040</div> | Popover 默认底色 |
| --popover-bg               | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #333333;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #1a1a1a; color: #ffffff;">#1a1a1a</div> | Popover 背景颜色 |
| --popover-inner-color      | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div> | Popover 内部文字颜色 |
| --popover-text-color       | <div style="width: 150px; height: 30px; background-color: #000000; color: #ffffff;">#000000</div> | <div style="width: 150px; height: 30px; background-color: #ffffff; color: #000000;">#ffffff</div> | Popover 操作按钮文字颜色 |
