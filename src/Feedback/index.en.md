---
nav:
  path: /components
group:
  title: Feedback
  order: 15
toc: content
supportPlatform: ['alipay', 'wechat']
---

# Feedback

Feedback mostly acts on distribution scenarios.

## Introduction

In `index.json` Introducing Components in

```json
"usingComponents": {
#if ALIPAY
  "ant-feedback": "antd-mini/es/Feedback/index"
#endif
#if WECHAT
  "ant-feedback": "antd-mini/Feedback/index"
#endif
}
```

## Code Sample

### Basic use

```xml
<ant-feedback
  visible="{{visible}}"
  type="popover"
  popoverType="default"
  placement="bottom-right"
#if ALIPAY
  onVisibleChange="onVisibleChange"
#endif
#if WECHAT
  bindvisiblechange="onVisibleChange"
#endif
>
  <view class="feedback-demo-target">
    <ant-icon style="font-size: 40px" type="MoreOutline" />
  </view>
  <view slot="popover-content" class="feedback-content">
    Here is the popover content
  </view>
</ant-feedback>
```

```js
Page({
  data: {
    visible: true,
  },
  onVisibleChange(value) {
#if ALIPAY
    this.setData({ visible: value });
#endif
#if WECHAT
    this.setData({ visible: value.detail });
#endif
  },
});
```

### Point Guide Feedback

```xml
<ant-feedback
  type="popover"
  list="{{feedList}}"
  visible="{{visible}}"
  popoverType="circle"
  title="点引导反馈"
  placement="bottom"
#if ALIPAY
  onVisibleChange="onVisibleChange"
  onTapFeedItem="onTapFeedItem"
#endif
#if WECHAT
  bindvisiblechange="onVisibleChange"
  bindtapfeeditem="onTapFeedItem"
#endif
>
  <image mode="widthFix" style="width: 345rpx;" src="https://mdn.alipayobjects.com/huamei_mnxlps/afts/img/A*yhbvR5XObugAAAAAAAAAAAAADkqGAQ/original" />
</ant-feedback>
```

```js
Page({
  data: {
    visible: true,
    feedList: [
      { icon: 'HeartOutline', text: '喜欢推荐内容', id: '1', },
      { icon: 'FrownOutline', text: '我不感兴趣', id: '2', },
      { image: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ', text: '看过类似内容', id: '3', },
    ],
  },
  onVisibleChange(value) {
#if ALIPAY
    this.setData({ visible: value });
#endif
#if WECHAT
    this.setData({ visible: value.detail });
#endif
  },
  onTapFeedItem(feedItem) {
#if ALIPAY
    my.showToast({ content: `点击了反馈项${feedItem.text}`, });
#endif
#if WECHAT
    wx.showToast({ title: `点击了反馈项${feedItem.text}`, });
#endif
  },
});
```

### Feedback Card

```xml
<ant-feedback
  a:if="{{visible}}"
  list="{{feedList}}"
  type="card"
  title="喜欢推荐的内容吗？"
#if ALIPAY
  onVisibleChange="onVisibleChange"
  onTapFeedItem="onTapFeedItem"
#endif
#if WECHAT
  bindvisiblechange="onVisibleChange"
  bindtapfeeditem="onTapFeedItem"
#endif
/>
<ant-button
  a:else
  size="small"
  inline
#if ALIPAY
  onTap="onShowFeedback"
#endif
#if WECHAT
  bindtap="onShowFeedback"
#endif
>
  Click to show feedback card
</ant-button>
```

```js
Page({
  data: {
    visible: true,
    feedList: [
      { icon: 'HeartOutline', text: '喜欢推荐内容', id: '1', },
      { icon: 'FrownOutline', text: '我不感兴趣', id: '2', },
      { image: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ', text: '看过类似内容', id: '3', },
    ],
  },
  onVisibleChange(value) {
#if ALIPAY
    this.setData({ visible: value });
#endif
#if WECHAT
    this.setData({ visible: value.detail });
#endif
  },
  onTapFeedItem(feedItem) {
#if ALIPAY
    my.showToast({ content: `点击了反馈项${feedItem.text}`, });
#endif
#if WECHAT
    wx.showToast({ title: `点击了反馈项${feedItem.text}`, });
#endif
  },
  onShowFeedback() {
    this.setData({
      visible: true,
    });
  },
});
```

### Demo Code

<code src='../../demo/pages/Feedback/index'></code>

## API

| Property                          | Description                                                                                                                                                                | Type                                 | Default Value       |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------ |
| visible                       | Whether visible                                                                                                                                                            | boolean                              | false        |
| type                          | Type of feedback                                                                                                                                                            | 'popover' \| 'card' \| 'float'       | card         |
| title                         | Title of the feedback                                                                                                                                                          | string                               | -            |
| placement                     | Bubble box position, optional `top`、`top-right`、`top-left`、`bottom`、`bottom-left`、`bottom-right`、`left`、`left-top`、`left-bottom`、`right`、`right-top` or `right-bottom` | string                               | bottom-right |
| list                          | List of Feedback                                                                                                                                                          | [FeedItem](#feeditem)[]              | -            |
| className                     | outermost style name                                                                                                                                                      | string                               | -            |
| style                         | outermost style string                                                                                                                                                  | string                               | -            |
| popoverType                   | Bootstrap style for bubble feedback                                                                                                                                                  | 'circle' \| 'default'                | -            |
| autoAdjustOverflow            | Whether bubble position is adaptive                                                                                                                                                  | boolean                              | true         |
| #if ALIPAY onVisibleChange    | Hook showing state change                                                                                                                                                  | (visible: boolean) => void           | -            |
| #if ALIPAY onTapFeedItem      | Feedback Item Click Callback                                                                                                                                                      | (item: any) => void                  | -            |
| #if WECHAT bindvisiblechange | Hook showing state change                                                                                                                                                  | (visible: boolean) => void           | -            |
| #if WECHAT bindtapfeeditem   | Feedback Item Click Callback                                                                                                                                                      | ([FeedItem](#feeditem): any) => void | -            |

### FeedItem

| Property  | Description                                     | Type   | Default Value |
| ----- | ---------------------------------------- | ------ | ------ |
| icon  | Icons for feedback items                             | string | -      |
| text  | Copy of the feedback item                             | string | -      |
| image | The image and the icon of the feedback item are mutually exclusive, and the icon is displayed first. | string | -      |
| id    | Unique identification of the feedback item                         | string | -      |

### Theme customization

#### Style Variables

Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.

| Variable name                              | Default Value                                                                                                                                | Dark Mode Default                                                                                                                        | Remarks             |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| --feedback-text-color               | <div style="width: 150px; height: 40px; background-color: #333333; color: #FFFFFF;">#333333</div>                                     | <div style="width: 150px; height: 40px; background-color: #c5cad1; color: #FFFFFF;">#c5cad1</div>                                     | Feedback Text Color     |
| --feedback-background-color         | <div style="width: 150px; height: 40px; background-color: rgba(216, 216, 216, 0.42); color: #333333;">rgba(216, 216, 216, 0.42)</div> | <div style="width: 150px; height: 40px; background-color: rgba(216, 216, 216, 0.42); color: #333333;">rgba(216, 216, 216, 0.42)</div> | Feedback Background Color     |
| --feedback-mask-color               | <div style="width: 150px; height: 40px; background-color: rgba(0, 0, 0, 0.25); color: #FFFFFF;">rgba(0, 0, 0, 0.25)</div>             | <div style="width: 150px; height: 40px; background-color: rgba(0, 0, 0, 0.25); color: #FFFFFF;">rgba(0, 0, 0, 0.25)</div>             | Feedback Mask Color     |
| --feedback-content-background-color | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                                     | <div style="width: 150px; height: 40px; background-color: #1a1a1a; color: #fff;">#1a1a1a</div>                                     | Feedback Content Background Color |
| --feedback-list-background-color    | <div style="width: 150px; height: 40px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div>                                     | <div style="width: 150px; height: 40px; background-color: #121212; color: #fff;">#121212</div>                                     | Feedback List Background Color |
| --feedback-list-text-color          | <div style="width: 150px; height: 40px; background-color: #333333; color: #FFFFFF;">#333333</div>                                     | <div style="width: 150px; height: 40px; background-color: #c5cad1; color: #FFFFFF;">#c5cad1</div>                                     | Feedback List Text Color |
