"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[6533],{8166:function(t,a,e){e.r(a),e.d(a,{demos:function(){return I}});var n=e(67294),d=e(359),I={"src-feedback-demo-feedback":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,72094))})),asset:{type:"BLOCK",id:"src-feedback-demo-feedback",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},7556:function(t,a,e){e.r(a),e.d(a,{texts:function(){return d}});var n=e(359);const d=[{value:"\u53CD\u9988\u591A\u4F5C\u7528\u4E8E\u5206\u53D1\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-feedback": "antd-mini/es/Feedback/index"
#endif
#if WECHAT
  "ant-feedback": "antd-mini/Feedback/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-feedback
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
    \u8FD9\u91CC\u662F popover \u5185\u5BB9
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
  list="{{feedList}}"
  visible="{{visible}}"
  popoverType="circle"
  title="\u70B9\u5F15\u5BFC\u53CD\u9988"
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
  a:if="{{visible}}"
  list="{{feedList}}"
  type="card"
  title="\u559C\u6B22\u63A8\u8350\u7684\u5185\u5BB9\u5417\uFF1F"
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
  \u70B9\u51FB \u5C55\u793A\u53CD\u9988\u5361\u7247
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
`,paraId:8,tocIndex:5},{value:"\u5C5E\u6027",paraId:9,tocIndex:7},{value:"\u8BF4\u660E",paraId:9,tocIndex:7},{value:"\u7C7B\u578B",paraId:9,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:7},{value:"visible",paraId:9,tocIndex:7},{value:"\u662F\u5426\u53EF\u89C1",paraId:9,tocIndex:7},{value:"boolean",paraId:9,tocIndex:7},{value:"false",paraId:9,tocIndex:7},{value:"type",paraId:9,tocIndex:7},{value:"\u53CD\u9988\u7C7B\u578B",paraId:9,tocIndex:7},{value:"'popover' | 'card' | 'float'",paraId:9,tocIndex:7},{value:"card",paraId:9,tocIndex:7},{value:"title",paraId:9,tocIndex:7},{value:"\u53CD\u9988\u7684\u6807\u9898",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"placement",paraId:9,tocIndex:7},{value:"\u6C14\u6CE1\u6846\u4F4D\u7F6E\uFF0C\u53EF\u9009 ",paraId:9,tocIndex:7},{value:"top",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"top-right",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"top-left",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"bottom",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"bottom-left",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"bottom-right",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"left",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"left-top",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"left-bottom",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"right",paraId:9,tocIndex:7},{value:"\u3001",paraId:9,tocIndex:7},{value:"right-top",paraId:9,tocIndex:7},{value:" \u6216 ",paraId:9,tocIndex:7},{value:"right-bottom",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"bottom-right",paraId:9,tocIndex:7},{value:"list",paraId:9,tocIndex:7},{value:"\u53CD\u9988\u7684\u5217\u8868",paraId:9,tocIndex:7},{value:"FeedItem",paraId:10,tocIndex:7},{value:"[]",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"className",paraId:9,tocIndex:7},{value:"\u6700\u5916\u5C42\u7684\u6837\u5F0F\u540D",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"style",paraId:9,tocIndex:7},{value:"\u6700\u5916\u5C42\u7684\u6837\u5F0F\u5B57\u7B26\u4E32",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"popoverType",paraId:9,tocIndex:7},{value:"\u6C14\u6CE1\u53CD\u9988\u7684\u5F15\u5BFC\u6837\u5F0F",paraId:9,tocIndex:7},{value:"'circle' | 'default'",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"autoAdjustOverflow",paraId:9,tocIndex:7},{value:"\u6C14\u6CE1\u4F4D\u7F6E\u662F\u5426\u81EA\u9002\u5E94",paraId:9,tocIndex:7},{value:"boolean",paraId:9,tocIndex:7},{value:"true",paraId:9,tocIndex:7},{value:"#if ALIPAY onVisibleChange",paraId:9,tocIndex:7},{value:"\u5C55\u793A\u72B6\u6001\u6539\u53D8\u7684\u52FE\u5B50",paraId:9,tocIndex:7},{value:"(visible: boolean) => void",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"#if ALIPAY onTapFeedItem",paraId:9,tocIndex:7},{value:"\u53CD\u9988\u9879\u70B9\u51FB\u56DE\u8C03",paraId:9,tocIndex:7},{value:"(item: any) => void",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"#if WECHAT bindvisiblechange",paraId:9,tocIndex:7},{value:"\u5C55\u793A\u72B6\u6001\u6539\u53D8\u7684\u52FE\u5B50",paraId:9,tocIndex:7},{value:"(visible: boolean) => void",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"#if WECHAT bindtapfeeditem",paraId:9,tocIndex:7},{value:"\u53CD\u9988\u9879\u70B9\u51FB\u56DE\u8C03",paraId:9,tocIndex:7},{value:"(",paraId:9,tocIndex:7},{value:"FeedItem",paraId:11,tocIndex:7},{value:": any) => void",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"\u5C5E\u6027",paraId:12,tocIndex:8},{value:"\u8BF4\u660E",paraId:12,tocIndex:8},{value:"\u7C7B\u578B",paraId:12,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:8},{value:"icon",paraId:12,tocIndex:8},{value:"\u53CD\u9988\u9879\u7684\u56FE\u6807",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"text",paraId:12,tocIndex:8},{value:"\u53CD\u9988\u9879\u7684\u6587\u6848",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"image",paraId:12,tocIndex:8},{value:"\u53CD\u9988\u9879\u7684\u56FE\u7247 \u548C icon \u4E92\u65A5\uFF0C\u4F18\u5148\u5C55\u793A icon",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"id",paraId:12,tocIndex:8},{value:"\u53CD\u9988\u9879\u7684\u552F\u4E00\u6807\u8BC6",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:13,tocIndex:10},{value:"\u53D8\u91CF\u540D",paraId:14,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:10},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:14,tocIndex:10},{value:"\u5907\u6CE8",paraId:14,tocIndex:10},{value:"--feedback-text-color",paraId:14,tocIndex:10},{value:"#333333",paraId:14,tocIndex:10},{value:"#c5cad1",paraId:14,tocIndex:10},{value:"\u53CD\u9988\u6587\u672C\u989C\u8272",paraId:14,tocIndex:10},{value:"--feedback-background-color",paraId:14,tocIndex:10},{value:"rgba(216, 216, 216, 0.42)",paraId:14,tocIndex:10},{value:"rgba(216, 216, 216, 0.42)",paraId:14,tocIndex:10},{value:"\u53CD\u9988\u80CC\u666F\u989C\u8272",paraId:14,tocIndex:10},{value:"--feedback-mask-color",paraId:14,tocIndex:10},{value:"rgba(0, 0, 0, 0.25)",paraId:14,tocIndex:10},{value:"rgba(0, 0, 0, 0.25)",paraId:14,tocIndex:10},{value:"\u53CD\u9988\u906E\u7F69\u989C\u8272",paraId:14,tocIndex:10},{value:"--feedback-content-background-color",paraId:14,tocIndex:10},{value:"#ffffff",paraId:14,tocIndex:10},{value:"#1a1a1a",paraId:14,tocIndex:10},{value:"\u53CD\u9988\u5185\u5BB9\u80CC\u666F\u989C\u8272",paraId:14,tocIndex:10},{value:"--feedback-list-background-color",paraId:14,tocIndex:10},{value:"#f5f5f5",paraId:14,tocIndex:10},{value:"#121212",paraId:14,tocIndex:10},{value:"\u53CD\u9988\u5217\u8868\u80CC\u666F\u989C\u8272",paraId:14,tocIndex:10},{value:"--feedback-list-text-color",paraId:14,tocIndex:10},{value:"#333333",paraId:14,tocIndex:10},{value:"#c5cad1",paraId:14,tocIndex:10},{value:"\u53CD\u9988\u5217\u8868\u6587\u672C\u989C\u8272",paraId:14,tocIndex:10}]}}]);
