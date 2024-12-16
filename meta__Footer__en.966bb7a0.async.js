"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[3143],{69826:function(d,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(67294),t=e(42068),o={"src-footer-demo-footer":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,52953))})),asset:{type:"BLOCK",id:"src-footer-demo-footer",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},77376:function(d,a,e){e.r(a),e.d(a,{texts:function(){return t}});var n=e(42068);const t=[{value:"appears at the bottom of the page and provides the user with additional instructions or assistance beyond the content of the page",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-footer": "antd-mini/es/Footer/index"
#endif
#if WECHAT
  "ant-footer": "antd-mini/Footer/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"If no split line is needed, pass in ",paraId:3,tocIndex:3},{value:"noLabelDivider",paraId:3,tocIndex:3},{value:" property.",paraId:3,tocIndex:3},{value:`<ant-footer label="\u6CA1\u6709\u66F4\u591A\u4E86" />

<ant-footer label="\u6CA1\u6709\u66F4\u591A\u4E86" noLabelDivider />

#if ALIPAY
<!-- \u652F\u6301\u63D2\u69FD\u81EA\u5B9A\u4E49 label\u3002 -->
<ant-footer label="placeholder">
  <view slot="label">
    Ant Wealth
  </view>
</ant-footer>
#endif
`,paraId:4,tocIndex:3},{value:`<ant-footer content="@ 2004-2020 Alipay.com All rights reserved" />

#if ALIPAY
<!-- \u652F\u6301\u63D2\u69FD\u81EA\u5B9A\u4E49 label\u3002 -->
<ant-footer content="placeholder">
  <view slot="content">
    \xA9Ant Technology Group Co., Ltd.
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
`,paraId:9,tocIndex:6},{value:"Property",paraId:10,tocIndex:8},{value:"Description",paraId:10,tocIndex:8},{value:"Type",paraId:10,tocIndex:8},{value:"Default Value",paraId:10,tocIndex:8},{value:"label",paraId:10,tocIndex:8},{value:"Top content with dividing line",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"content",paraId:10,tocIndex:8},{value:"Common Content Section",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"links",paraId:10,tocIndex:8},{value:"Link",paraId:10,tocIndex:8},{value:"Array<",paraId:10,tocIndex:8},{value:"ActionItem",paraId:11,tocIndex:8},{value:">",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"chips",paraId:10,tocIndex:8},{value:"Bottom Label",paraId:10,tocIndex:8},{value:"Array<",paraId:10,tocIndex:8},{value:"ActionItem",paraId:12,tocIndex:8},{value:">",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"noLabelDivider",paraId:10,tocIndex:8},{value:"There is no label dividing line.",paraId:10,tocIndex:8},{value:"boolean",paraId:10,tocIndex:8},{value:"false",paraId:10,tocIndex:8},{value:"#if ALIPAY onLinkTap",paraId:10,tocIndex:8},{value:"Callback after link click",paraId:10,tocIndex:8},{value:"(actionItem?: ",paraId:10,tocIndex:8},{value:"ActionItem",paraId:13,tocIndex:8},{value:") => void",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"#if ALIPAY onChipTap",paraId:10,tocIndex:8},{value:"Callback after bottom tab click",paraId:10,tocIndex:8},{value:"(actionItem?: ",paraId:10,tocIndex:8},{value:"ActionItem",paraId:14,tocIndex:8},{value:") => void",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"#if WECHAT bindlinktap",paraId:10,tocIndex:8},{value:"Callback after link click",paraId:10,tocIndex:8},{value:"(actionItem?: ",paraId:10,tocIndex:8},{value:"ActionItem",paraId:15,tocIndex:8},{value:") => void",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"#if WECHAT bindchiptap",paraId:10,tocIndex:8},{value:"Callback after bottom tab click",paraId:10,tocIndex:8},{value:"(actionItem?: ",paraId:10,tocIndex:8},{value:"ActionItem",paraId:16,tocIndex:8},{value:") => void",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"Property",paraId:17,tocIndex:9},{value:"Description",paraId:17,tocIndex:9},{value:"Type",paraId:17,tocIndex:9},{value:"Default Value",paraId:17,tocIndex:9},{value:"text",paraId:17,tocIndex:9},{value:"Show copy",paraId:17,tocIndex:9},{value:"string",paraId:17,tocIndex:9},{value:"-",paraId:17,tocIndex:9},{value:"key",paraId:17,tocIndex:9},{value:"Unique identification",paraId:17,tocIndex:9},{value:"string",paraId:17,tocIndex:9},{value:"-",paraId:17,tocIndex:9}]}}]);
