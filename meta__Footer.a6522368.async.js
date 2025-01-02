"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[9858],{39184:function(t,e,a){a.r(e),a.d(e,{demos:function(){return o}});var n=a(67294),d=a(9608),o={"src-footer-demo-footer":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,52953))})),asset:{type:"BLOCK",id:"src-footer-demo-footer",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},98162:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(9608);const d=[{value:"\u51FA\u73B0\u5728\u9875\u9762\u5E95\u90E8\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u9875\u9762\u5185\u5BB9\u5916\u7684\u989D\u5916\u8BF4\u660E\u6216\u8F85\u52A9\u64CD\u4F5C",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-footer": "antd-mini/es/Footer/index"
#endif
#if WECHAT
  "ant-footer": "antd-mini/Footer/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"\u5982\u679C\u4E0D\u9700\u8981\u5206\u5272\u7EBF\uFF0C\u4F20\u5165 ",paraId:3,tocIndex:3},{value:"noLabelDivider",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u3002",paraId:3,tocIndex:3},{value:`<ant-footer label="\u6CA1\u6709\u66F4\u591A\u4E86" />

<ant-footer label="\u6CA1\u6709\u66F4\u591A\u4E86" noLabelDivider />

#if ALIPAY
<!-- \u652F\u6301\u63D2\u69FD\u81EA\u5B9A\u4E49 label\u3002 -->
<ant-footer label="placeholder">
  <view slot="label">
    \u8682\u8681\u8D22\u5BCC
  </view>
</ant-footer>
#endif
`,paraId:4,tocIndex:3},{value:`<ant-footer content="@ 2004-2020 Alipay.com All rights reserved" />

#if ALIPAY
<!-- \u652F\u6301\u63D2\u69FD\u81EA\u5B9A\u4E49 label\u3002 -->
<ant-footer content="placeholder">
  <view slot="content">
    \xA9 \u8682\u8681\u79D1\u6280\u96C6\u56E2\u80A1\u4EFD\u6709\u9650\u516C\u53F8
  </view>
</ant-footer>
#endif
`,paraId:5,tocIndex:4},{value:`<ant-footer
  links="{{links}}"
#if ALIPAY
  onLinkTap="handleLinkTap"
#endif
#if WECHAT
  bindlinktap="handleLinkTap"
#endif
/>
`,paraId:6,tocIndex:5},{value:`Page({
  data: {
    links: [
      { key: 'alicloud', text: '\u963F\u91CC\u4E91' },
      { key: 'alipay', text: '\u652F\u4ED8\u5B9D' }
    ],
  },
  handleLinkTap(item) {
#if ALIPAY
    if (item.disabled) return;
    my.showToast({ content: item.key });
#endif
#if WECHAT
    if (item.detail.disabled) return;
    wx.showToast({
      title: item.detail.key,
    });
#endif
  },
});
`,paraId:7,tocIndex:5},{value:`<ant-footer
  chips="{{chips}}"
#if ALIPAY
  onChipTap="handleChipTap"
#endif
#if WECHAT
  bindchiptap="handleLinkTap"
#endif
/>
`,paraId:8,tocIndex:6},{value:`Page({
  data: {
    chips: [
      { key: 'jiebei', text: '\u8682\u8681\u501F\u5457' },
      { key: 'beiyongjin', text: '\u5907\u7528\u91D1' },
      { key: 'huabei', text: '\u82B1\u5457\u6536\u94B1', disabled: true }
    ],
  },
  handleChipTap(item) {
#if ALIPAY
    if (item.disabled) return;
    my.showToast({ content: item.key });
#endif
#if WECHAT
    if (item.detail.disabled) return;
    wx.showToast({
      title: item.detail.key,
    });
#endif
  },
});
`,paraId:9,tocIndex:6},{value:"\u5C5E\u6027",paraId:10,tocIndex:8},{value:"\u8BF4\u660E",paraId:10,tocIndex:8},{value:"\u7C7B\u578B",paraId:10,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:8},{value:"label",paraId:10,tocIndex:8},{value:"\u5E26\u5206\u5272\u7EBF\u7684\u9876\u90E8\u5185\u5BB9",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"content",paraId:10,tocIndex:8},{value:"\u666E\u901A\u7684\u5185\u5BB9\u90E8\u5206",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"links",paraId:10,tocIndex:8},{value:"\u94FE\u63A5",paraId:10,tocIndex:8},{value:"Array<",paraId:10,tocIndex:8},{value:"ActionItem",paraId:11,tocIndex:8},{value:">",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"chips",paraId:10,tocIndex:8},{value:"\u5E95\u90E8\u6807\u7B7E",paraId:10,tocIndex:8},{value:"Array<",paraId:10,tocIndex:8},{value:"ActionItem",paraId:12,tocIndex:8},{value:">",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"noLabelDivider",paraId:10,tocIndex:8},{value:"\u6CA1\u6709 label \u7684\u5206\u5272\u7EBF",paraId:10,tocIndex:8},{value:"boolean",paraId:10,tocIndex:8},{value:"false",paraId:10,tocIndex:8},{value:"#if ALIPAY onLinkTap",paraId:10,tocIndex:8},{value:"\u94FE\u63A5\u70B9\u51FB\u540E\u7684\u56DE\u8C03",paraId:10,tocIndex:8},{value:"(actionItem?: ",paraId:10,tocIndex:8},{value:"ActionItem",paraId:13,tocIndex:8},{value:") => void",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"#if ALIPAY onChipTap",paraId:10,tocIndex:8},{value:"\u5E95\u90E8\u6807\u7B7E\u70B9\u51FB\u540E\u7684\u56DE\u8C03",paraId:10,tocIndex:8},{value:"(actionItem?: ",paraId:10,tocIndex:8},{value:"ActionItem",paraId:14,tocIndex:8},{value:") => void",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"#if WECHAT bindlinktap",paraId:10,tocIndex:8},{value:"\u94FE\u63A5\u70B9\u51FB\u540E\u7684\u56DE\u8C03",paraId:10,tocIndex:8},{value:"(actionItem?: ",paraId:10,tocIndex:8},{value:"ActionItem",paraId:15,tocIndex:8},{value:") => void",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"#if WECHAT bindchiptap",paraId:10,tocIndex:8},{value:"\u5E95\u90E8\u6807\u7B7E\u70B9\u51FB\u540E\u7684\u56DE\u8C03",paraId:10,tocIndex:8},{value:"(actionItem?: ",paraId:10,tocIndex:8},{value:"ActionItem",paraId:16,tocIndex:8},{value:") => void",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"\u5C5E\u6027",paraId:17,tocIndex:9},{value:"\u8BF4\u660E",paraId:17,tocIndex:9},{value:"\u7C7B\u578B",paraId:17,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:17,tocIndex:9},{value:"text",paraId:17,tocIndex:9},{value:"\u5C55\u793A\u6587\u6848",paraId:17,tocIndex:9},{value:"string",paraId:17,tocIndex:9},{value:"-",paraId:17,tocIndex:9},{value:"key",paraId:17,tocIndex:9},{value:"\u552F\u4E00\u6807\u8BC6",paraId:17,tocIndex:9},{value:"string",paraId:17,tocIndex:9},{value:"-",paraId:17,tocIndex:9}]}}]);
