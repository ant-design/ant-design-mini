"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[586],{71606:function(d,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),t=a(7713),I={"src-sticky-demo-sticky":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,80804))})),asset:{type:"BLOCK",id:"src-sticky-demo-sticky",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},3864:function(d,e,a){a.r(e),a.d(e,{texts:function(){return t}});var n=a(7713);const t=[{value:"\u7528\u5728\u9700\u8981\u5728\u6EDA\u52A8\u4E2D\u5438\u9644\u5728\u67D0\u4E9B\u5730\u65B9\u7684\u60C5\u51B5\u3002",paraId:0,tocIndex:0},{value:"Sticky \u7EC4\u4EF6\u5B9E\u73B0\u4F9D\u8D56\u4E86 ",paraId:1,tocIndex:1},{value:"position: sticky",paraId:1,tocIndex:1},{value:" \u7279\u6027\uFF0C\u8BE5\u7279\u6027\u53D7\u7236\u5143\u7D20\u7684\u5F71\u54CD\u53EF\u80FD\u4F1A\u5931\u6548\uFF0C\u82E5\u9047\u5230 Sticky \u7EC4\u4EF6\u4E0D\u751F\u6548\u7684\u60C5\u51B5\u53EF\u6839\u636E ",paraId:1,tocIndex:1},{value:"\u8FD9\u7BC7\u6587\u6863",paraId:1,tocIndex:1},{value:" \u68C0\u67E5\u9875\u9762\u7684\u5143\u7D20\u5E03\u5C40\u3002",paraId:1,tocIndex:1},{value:"\u5728 ",paraId:2,tocIndex:2},{value:"index.json",paraId:2,tocIndex:2},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:2,tocIndex:2},{value:`"usingComponents": {
#if ALIPAY
  "ant-sticky": "antd-mini/es/Sticky/index"
#endif
#if WECHAT
  "ant-sticky": "antd-mini/Sticky/index"
#endif
}
`,paraId:3,tocIndex:2},{value:`<ant-sticky>
  <view>
    \u6211\u4F1A\u5438\u9876
  </view>
</ant-sticky>
`,paraId:4,tocIndex:4},{value:`<ant-sticky top="100px">
  <view>
    \u6211\u4F1A\u5438\u9876\u5728\u8DDD\u79BB\u9876\u90E8 100px \u7684\u5730\u65B9
  </view>
</ant-sticky>
`,paraId:5,tocIndex:5},{value:`<ant-sticky
  top="180px"
  check="{{true}}"
#if ALIPAY
  onStickyChange="handleStickyChange"
#endif
#if WECHAT
  bindstickychange="handleStickyChange"
#endif
>
  <view>
    <view>\u6211\u4F1A\u5438\u9876\u5728\u8DDD\u79BB\u9876\u90E8 180px \u7684\u5730\u65B9</view>
    <view>\u662F\u5426\u5438\u4E0A\u4E86 {{stickyStatus}}</view>
  </view>
</ant-sticky>
`,paraId:6,tocIndex:6},{value:`Page({
  data: {
    stickyStatus: false,
  },
  handleStickyChange(status) {
    this.setData({ stickyStatus: status });
  },
});
`,paraId:7,tocIndex:6},{value:`<ant-sticky transparentTitle="{{true}}">
  <view>
    \u6211\u4F1A\u5438\u9876
  </view>
</ant-sticky>
`,paraId:8,tocIndex:7},{value:"\u5C5E\u6027",paraId:9,tocIndex:9},{value:"\u7C7B\u578B",paraId:9,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:9},{value:"\u8BF4\u660E",paraId:9,tocIndex:9},{value:"className",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:'""',paraId:9,tocIndex:9},{value:"\u5BB9\u5668 className",paraId:9,tocIndex:9},{value:"top",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:'""',paraId:9,tocIndex:9},{value:"\u5438\u9876\u9AD8\u5EA6\uFF0C\u9700\u8981\u5199\u5355\u4F4D\uFF0C\u6BD4\u5982 10px,24rpx",paraId:9,tocIndex:9},{value:"check",paraId:9,tocIndex:9},{value:"bool",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"\u662F\u5426\u9700\u8981\u611F\u77E5\u662F\u5426\u5438\u9876\u4E86\uFF0C\u56E0\u4E3A\u5438\u9876\u68C0\u67E5\u8FD8\u662F\u6709\u4E00\u5B9A\u6210\u672C\u7684",paraId:9,tocIndex:9},{value:"sticky",paraId:9,tocIndex:9},{value:"bool",paraId:9,tocIndex:9},{value:"true",paraId:9,tocIndex:9},{value:"\u662F\u5426\u8981\u5438\u9876\uFF0C\u67D0\u4E9B\u573A\u666F\u4E0D\u4E00\u5B9A\u9700\u8981",paraId:9,tocIndex:9},{value:"transparentTitle",paraId:9,tocIndex:9},{value:"bool",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"\u662F\u5426\u662F\u900F\u660E\u5934\uFF0C\u900F\u660E\u5934\u4F1A\u81EA\u52A8\u8BA1\u7B97 titleBar \u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5438\u9644\u5728 titlebar \u4E0B",paraId:9,tocIndex:9},{value:"#if ALIPAY onStickyChange",paraId:9,tocIndex:9},{value:"Function",paraId:9,tocIndex:9},{value:"(status) => {}",paraId:9,tocIndex:9},{value:"\u662F\u5426\u5728\u5438\u9876\u72B6\u6001\uFF0C\u6CE8\u610F\u9700\u8981\u6253\u5F00 check \u529F\u80FD\u624D\u6709\u8FD9\u4E2A\u56DE\u8C03",paraId:9,tocIndex:9},{value:"#if ALIPAY onGetHeaderHeight",paraId:9,tocIndex:9},{value:"Function",paraId:9,tocIndex:9},{value:"(height) => {}",paraId:9,tocIndex:9},{value:"\u8BA1\u7B97\u5934\u7684\u9AD8\u5EA6\u5B8C\u6210",paraId:9,tocIndex:9},{value:"#if WECHAT bindstickychange",paraId:9,tocIndex:9},{value:"Function",paraId:9,tocIndex:9},{value:"(status) => {}",paraId:9,tocIndex:9},{value:"\u662F\u5426\u5728\u5438\u9876\u72B6\u6001\uFF0C\u6CE8\u610F\u9700\u8981\u6253\u5F00 check \u529F\u80FD\u624D\u6709\u8FD9\u4E2A\u56DE\u8C03",paraId:9,tocIndex:9},{value:"#if WECHAT bindgetheaderheight",paraId:9,tocIndex:9},{value:"Function",paraId:9,tocIndex:9},{value:"(height) => {}",paraId:9,tocIndex:9},{value:"\u8BA1\u7B97\u5934\u7684\u9AD8\u5EA6\u5B8C\u6210",paraId:9,tocIndex:9},{value:"\u4EC5\u6709\u4E00\u4E2A\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u7528\u4E8E\u5305\u88F9\u60F3\u5438\u9876\u7684\u5143\u7D20\u3001\u7EC4\u4EF6\u3002",paraId:10,tocIndex:10},{value:"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u900F\u660E\u9875\u9762\u573A\u666F\u4E0B\u81EA\u52A8\u8BA1\u7B97\u5934\u9AD8\u5EA6\u4EC5\u65B9\u4FBF\u5438\u5728\u9876\u4E0A\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u6709\u504F\u79FB\uFF0C\u8FD8\u662F\u9700\u8981\u81EA\u884C\u8BA1\u7B97\u7684\u3002",paraId:11,tocIndex:11},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:12,tocIndex:13},{value:"\u53D8\u91CF\u540D",paraId:13,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:13},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:13,tocIndex:13},{value:"\u5907\u6CE8",paraId:13,tocIndex:13},{value:"--sticky-check-bg",paraId:13,tocIndex:13},{value:"rgba(238, 238, 238, 0)",paraId:13,tocIndex:13},{value:"rgba(238, 238, 238, 0)",paraId:13,tocIndex:13},{value:"\u9009\u62E9\u5668\u80CC\u666F\u989C\u8272",paraId:13,tocIndex:13}]}}]);
