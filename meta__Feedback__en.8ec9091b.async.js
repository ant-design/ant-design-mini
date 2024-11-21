"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[4303],{73320:function(t,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(67294),d=e(77378),o={"src-feedback-demo-feedback":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,72094))})),asset:{type:"BLOCK",id:"src-feedback-demo-feedback",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},92151:function(t,a,e){e.r(a),e.d(a,{texts:function(){return d}});var n=e(77378);const d=[{value:"Feedback mostly acts on distribution scenarios.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-feedback": "antd-mini/es/Feedback/index"
#endif
#if WECHAT
  "ant-feedback": "antd-mini/Feedback/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-feedback
  visible="{{ visible }}"
  type="popover"
  popoverType="default"
  placement="bottom-right"
#if ALIPAY
  onVisibleChange="onVisibleChange"
#endif
#if WECHAT
  bind:visiblechange="onVisibleChange"
#endif
>
  <view class="feedback-demo-target">
    <ant-icon style="font-size: 40px" type="MoreOutline" />
  </view>
  <view slot="popover-content" class="feedback-content">
    Here is the popover content
  </view>
</ant-feedback>
`,paraId:3,tocIndex:3},{value:`Page({
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
`,paraId:4,tocIndex:3},{value:`<ant-feedback
  type="popover"
  list="{{ feedList }}"
  visible="{{ visible }}"
  popoverType="circle"
  title="\u70B9\u5F15\u5BFC\u53CD\u9988"
  placement="bottom"
#if ALIPAY
  onVisibleChange="onVisibleChange"
  onTapFeedItem="onTapFeedItem"
#endif
#if WECHAT
  bind:visiblechange="onVisibleChange"
  bind:tapfeeditem="onTapFeedItem"
#endif
>
  <image mode="widthFix" style="width: 345rpx;" src="https://mdn.alipayobjects.com/huamei_mnxlps/afts/img/A*yhbvR5XObugAAAAAAAAAAAAADkqGAQ/original" />
</ant-feedback>
`,paraId:5,tocIndex:4},{value:`Page({
  data: {
    visible: true,
    feedList: [
      { icon: 'HeartOutline', text: '\u559C\u6B22\u63A8\u8350\u5185\u5BB9', id: '1', },
      { icon: 'FrownOutline', text: '\u6211\u4E0D\u611F\u5174\u8DA3', id: '2', },
      { image: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ', text: '\u770B\u8FC7\u7C7B\u4F3C\u5185\u5BB9', id: '3', },
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
    my.showToast({ content: \`\u70B9\u51FB\u4E86\u53CD\u9988\u9879\${feedItem.text}\`, });
#endif
#if WECHAT
    wx.showToast({ title: \`\u70B9\u51FB\u4E86\u53CD\u9988\u9879\${feedItem.text}\`, });
#endif
  },
});
`,paraId:6,tocIndex:4},{value:`<ant-feedback
  a:if="{{ visible }}"
  list="{{ feedList }}"
  type="card"
  title="\u559C\u6B22\u63A8\u8350\u7684\u5185\u5BB9\u5417\uFF1F"
#if ALIPAY
  onVisibleChange="onVisibleChange"
  onTapFeedItem="onTapFeedItem"
#endif
#if WECHAT
  bind:visiblechange="onVisibleChange"
  bind:tapfeeditem="onTapFeedItem"
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
  bind:tap="onShowFeedback"
#endif
>
  Click to show feedback card
</ant-button>
`,paraId:7,tocIndex:5},{value:`Page({
  data: {
    visible: true,
    feedList: [
      { icon: 'HeartOutline', text: '\u559C\u6B22\u63A8\u8350\u5185\u5BB9', id: '1', },
      { icon: 'FrownOutline', text: '\u6211\u4E0D\u611F\u5174\u8DA3', id: '2', },
      { image: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ', text: '\u770B\u8FC7\u7C7B\u4F3C\u5185\u5BB9', id: '3', },
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
    my.showToast({ content: \`\u70B9\u51FB\u4E86\u53CD\u9988\u9879\${feedItem.text}\`, });
#endif
#if WECHAT
    wx.showToast({ title: \`\u70B9\u51FB\u4E86\u53CD\u9988\u9879\${feedItem.text}\`, });
#endif
  },
  onShowFeedback() {
    this.setData({
      visible: true,
    });
  },
});
`,paraId:8,tocIndex:5},{value:"Property",paraId:9,tocIndex:7},{value:"Description",paraId:9,tocIndex:7},{value:"Type",paraId:9,tocIndex:7},{value:"Default Value",paraId:9,tocIndex:7},{value:"visible",paraId:9,tocIndex:7},{value:"Whether visible",paraId:9,tocIndex:7},{value:"boolean",paraId:9,tocIndex:7},{value:"false",paraId:9,tocIndex:7},{value:"type",paraId:9,tocIndex:7},{value:"Type of feedback",paraId:9,tocIndex:7},{value:"'popover' | 'card' | 'float'",paraId:9,tocIndex:7},{value:"card",paraId:9,tocIndex:7},{value:"title",paraId:9,tocIndex:7},{value:"Title of the feedback",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"placement",paraId:9,tocIndex:7},{value:"Bubble box position, optional ",paraId:9,tocIndex:7},{value:"top",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"top-right",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"top-left",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"bottom",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"bottom-left",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"bottom-right",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"left",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"left-top",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"left-bottom",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"right",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"right-top",paraId:9,tocIndex:7},{value:" or ",paraId:9,tocIndex:7},{value:"right-bottom",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"bottom-right",paraId:9,tocIndex:7},{value:"list",paraId:9,tocIndex:7},{value:"List of Feedback",paraId:9,tocIndex:7},{value:"FeedItem",paraId:10,tocIndex:7},{value:"[]",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"className",paraId:9,tocIndex:7},{value:"outermost style name",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"style",paraId:9,tocIndex:7},{value:"outermost style string",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"popoverType",paraId:9,tocIndex:7},{value:"Bootstrap style for bubble feedback",paraId:9,tocIndex:7},{value:"'circle' | 'default'",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"autoAdjustOverflow",paraId:9,tocIndex:7},{value:"Whether bubble position is adaptive",paraId:9,tocIndex:7},{value:"boolean",paraId:9,tocIndex:7},{value:"true",paraId:9,tocIndex:7},{value:"#if ALIPAY onVisibleChange",paraId:9,tocIndex:7},{value:"Hook showing state change",paraId:9,tocIndex:7},{value:"(visible: boolean) => void",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"#if ALIPAY onTapFeedItem",paraId:9,tocIndex:7},{value:"Feedback Item Click Callback",paraId:9,tocIndex:7},{value:"(item: any) => void",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"#if WECHAT bind:visiblechange",paraId:9,tocIndex:7},{value:"Hook showing state change",paraId:9,tocIndex:7},{value:"(visible: boolean) => void",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"#if WECHAT bind:tapfeeditem",paraId:9,tocIndex:7},{value:"Feedback Item Click Callback",paraId:9,tocIndex:7},{value:"(",paraId:9,tocIndex:7},{value:"FeedItem",paraId:11,tocIndex:7},{value:": any) => void",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"Property",paraId:12,tocIndex:8},{value:"Description",paraId:12,tocIndex:8},{value:"Type",paraId:12,tocIndex:8},{value:"Default Value",paraId:12,tocIndex:8},{value:"icon",paraId:12,tocIndex:8},{value:"Icons for feedback items",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"text",paraId:12,tocIndex:8},{value:"Copywriting of the feedback item",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"image",paraId:12,tocIndex:8},{value:"The image and the icon of the feedback item are mutually exclusive, and the icon is displayed first.",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"id",paraId:12,tocIndex:8},{value:"Unique identification of the feedback item",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:13,tocIndex:10},{value:"Variable name",paraId:14,tocIndex:10},{value:"Default Value",paraId:14,tocIndex:10},{value:"Dark Mode Default",paraId:14,tocIndex:10},{value:"Remarks",paraId:14,tocIndex:10},{value:"--feedback-text-color",paraId:14,tocIndex:10},{value:"#333333",paraId:14,tocIndex:10},{value:"#c5cad1",paraId:14,tocIndex:10},{value:"Feedback Text Color",paraId:14,tocIndex:10},{value:"--feedback-background-color",paraId:14,tocIndex:10},{value:"rgba(216, 216, 216, 0.42)",paraId:14,tocIndex:10},{value:"rgba(216, 216, 216, 0.42)",paraId:14,tocIndex:10},{value:"Feedback Background Color",paraId:14,tocIndex:10},{value:"--feedback-mask-color",paraId:14,tocIndex:10},{value:"rgba(0, 0, 0, 0.25)",paraId:14,tocIndex:10},{value:"rgba(0, 0, 0, 0.25)",paraId:14,tocIndex:10},{value:"Feedback Mask Color",paraId:14,tocIndex:10},{value:"--feedback-content-background-color",paraId:14,tocIndex:10},{value:"#ffffff",paraId:14,tocIndex:10},{value:"#1a1a1a",paraId:14,tocIndex:10},{value:"Feedback Content Background Color",paraId:14,tocIndex:10},{value:"--feedback-list-background-color",paraId:14,tocIndex:10},{value:"#f5f5f5",paraId:14,tocIndex:10},{value:"#121212",paraId:14,tocIndex:10},{value:"Feedback List Background Color",paraId:14,tocIndex:10},{value:"--feedback-list-text-color",paraId:14,tocIndex:10},{value:"#333333",paraId:14,tocIndex:10},{value:"#c5cad1",paraId:14,tocIndex:10},{value:"Feedback List Text Color",paraId:14,tocIndex:10}]}}]);
