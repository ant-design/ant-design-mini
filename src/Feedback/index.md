---
nav:
  path: /components
group:
  title: 反馈引导
  order: 15
toc: content
supportPlatform: ['alipay', 'wechat']
---

# Feedback 信息反馈

反馈多作用于分发场景。

## 引入

在 `index.json` 中引入组件

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

## 代码示例

### 基本使用

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
    这里是 popover 内容
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

### 点状引导反馈

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

### 反馈卡片

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
  点击 展示反馈卡片
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

### Demo 代码

<code src='../../demo/pages/Feedback/index'></code>

## API

| 属性                          | 说明                                                                                                                                                                | 类型                                 | 默认值       |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------ |
| visible                       | 是否可见                                                                                                                                                            | boolean                              | false        |
| type                          | 反馈类型                                                                                                                                                            | 'popover' \| 'card' \| 'float'       | card         |
| title                         | 反馈的标题                                                                                                                                                          | string                               | -            |
| placement                     | 气泡框位置，可选 `top`、`top-right`、`top-left`、`bottom`、`bottom-left`、`bottom-right`、`left`、`left-top`、`left-bottom`、`right`、`right-top` 或 `right-bottom` | string                               | bottom-right |
| list                          | 反馈的列表                                                                                                                                                          | [FeedItem](#feeditem)[]              | -            |
| className                     | 最外层的样式名                                                                                                                                                      | string                               | -            |
| style                         | 最外层的样式字符串                                                                                                                                                  | string                               | -            |
| popoverType                   | 气泡反馈的引导样式                                                                                                                                                  | 'circle' \| 'default'                | -            |
| autoAdjustOverflow            | 气泡位置是否自适应                                                                                                                                                  | boolean                              | true         |
| #if ALIPAY onVisibleChange    | 展示状态改变的勾子                                                                                                                                                  | (visible: boolean) => void           | -            |
| #if ALIPAY onTapFeedItem      | 反馈项点击回调                                                                                                                                                      | (item: any) => void                  | -            |
| #if WECHAT bindvisiblechange | 展示状态改变的勾子                                                                                                                                                  | (visible: boolean) => void           | -            |
| #if WECHAT bindtapfeeditem   | 反馈项点击回调                                                                                                                                                      | ([FeedItem](#feeditem): any) => void | -            |

### FeedItem

| 属性  | 说明                                     | 类型   | 默认值 |
| ----- | ---------------------------------------- | ------ | ------ |
| icon  | 反馈项的图标                             | string | -      |
| text  | 反馈项的文案                             | string | -      |
| image | 反馈项的图片 和 icon 互斥，优先展示 icon | string | -      |
| id    | 反馈项的唯一标识                         | string | -      |

### 主题定制

#### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 变量名                              | 默认值                                                                                                                                | 深色模式默认值                                                                                                                        | 备注             |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| --feedback-text-color               | <div style="width: 150px; height: 40px; background-color: #333333; color: #FFFFFF;">#333333</div>                                     | <div style="width: 150px; height: 40px; background-color: #c5cad1; color: #FFFFFF;">#c5cad1</div>                                     | 反馈文本颜色     |
| --feedback-background-color         | <div style="width: 150px; height: 40px; background-color: rgba(216, 216, 216, 0.42); color: #333333;">rgba(216, 216, 216, 0.42)</div> | <div style="width: 150px; height: 40px; background-color: rgba(216, 216, 216, 0.42); color: #333333;">rgba(216, 216, 216, 0.42)</div> | 反馈背景颜色     |
| --feedback-mask-color               | <div style="width: 150px; height: 40px; background-color: rgba(0, 0, 0, 0.25); color: #FFFFFF;">rgba(0, 0, 0, 0.25)</div>             | <div style="width: 150px; height: 40px; background-color: rgba(0, 0, 0, 0.25); color: #FFFFFF;">rgba(0, 0, 0, 0.25)</div>             | 反馈遮罩颜色     |
| --feedback-content-background-color | <div style="width: 150px; height: 40px; background-color: #ffffff; color: #333333;">#ffffff</div>                                     | <div style="width: 150px; height: 40px; background-color: #1a1a1a; color: #fff;">#1a1a1a</div>                                     | 反馈内容背景颜色 |
| --feedback-list-background-color    | <div style="width: 150px; height: 40px; background-color: #f5f5f5; color: #333333;">#f5f5f5</div>                                     | <div style="width: 150px; height: 40px; background-color: #121212; color: #fff;">#121212</div>                                     | 反馈列表背景颜色 |
| --feedback-list-text-color          | <div style="width: 150px; height: 40px; background-color: #333333; color: #FFFFFF;">#333333</div>                                     | <div style="width: 150px; height: 40px; background-color: #c5cad1; color: #FFFFFF;">#c5cad1</div>                                     | 反馈列表文本颜色 |
