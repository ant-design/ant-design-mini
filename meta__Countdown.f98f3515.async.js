"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[5444],{11845:function(o,a,n){n.r(a),n.d(a,{demos:function(){return t}});var d=n(67294),e=n(53928),t={"src-countdown-demo-countdown":{component:d.memo(d.lazy(function(){return n.e(2433).then(n.bind(n,72470))})),asset:{type:"BLOCK",id:"src-countdown-demo-countdown",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},48884:function(o,a,n){n.r(a),n.d(a,{texts:function(){return e}});var d=n(53928);const e=[{value:"\u9700\u8981\u5C55\u793A\u5012\u8BA1\u65F6\u7684\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-countdown": "antd-mini/es/Countdown/index"
#endif
#if WECHAT
  "ant-countdown": "antd-mini/Countdown/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-countdown
  countdownEndTime="{{countdownDay}}"
  countdownType="day"
#if ALIPAY
  onCountdownChange="handleCountdownChange"
  onCountdownFinish="handleCountdownEnd"
#endif
#if WECHAT
  bindcountdownchange="handleCountdownChange"
  bindcountdownfinish="handleCountdownEnd"
#endif
>
  <text slot="prefix">\u5269\u4F59\u65F6\u95F4</text>
  <text slot="suffix">\u5C31\u5F00\u59CB\u62A2\u8D2D\u5566</text>
</ant-countdown>
`,paraId:3,tocIndex:3},{value:`Page({
  data: {
    countdownDay: +new Date() + 500000000,
  },
  handleCountdownChange(e) {
    console.log('\u5012\u8BA1\u65F6\u53D8\u5316', JSON.stringify(e));
  },
  handleCountdownEnd() {
    console.log('\u5012\u8BA1\u65F6\u7ED3\u675F');
  },
});
`,paraId:4,tocIndex:3},{value:"\u5C5E\u6027",paraId:5,tocIndex:5},{value:"\u8BF4\u660E",paraId:5,tocIndex:5},{value:"\u7C7B\u578B",paraId:5,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:5},{value:"className",paraId:5,tocIndex:5},{value:"\u5BB9\u5668 className",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"countdownEndTime",paraId:5,tocIndex:5},{value:"\u7ED3\u675F\u65F6\u95F4\u6233",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"| ",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"countdownStartTime",paraId:5,tocIndex:5},{value:"\u8D77\u59CB\u65F6\u95F4\u6233",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"| ",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"\u5F53\u524D\u65F6\u95F4\u6233",paraId:5,tocIndex:5},{value:"time",paraId:5,tocIndex:5},{value:"\u4E0E countdownEndTime \u4E8C\u9009\u4E00\uFF0C\u5355\u4F4D\u4E3A\u79D2",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"0",paraId:5,tocIndex:5},{value:"autoShowDay",paraId:5,tocIndex:5},{value:"\u5C0F\u4E8E\u4E00\u5929\u81EA\u52A8\u4E0D\u5C55\u793A\u5929",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"true",paraId:5,tocIndex:5},{value:"countdownType",paraId:5,tocIndex:5},{value:"\u8D85\u957F\u5012\u8BA1\u65F6\u9700\u8981\u5C55\u793A\u5929\u6570",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if ALIPAY onCountdownChange",paraId:5,tocIndex:5},{value:"\u5012\u8BA1\u65F6\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:5,tocIndex:5},{value:"Function",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if ALIPAY onCountdownFinish",paraId:5,tocIndex:5},{value:"\u5012\u8BA1\u65F6\u7ED3\u675F\u56DE\u8C03",paraId:5,tocIndex:5},{value:"Function",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if WECHAT bindcountdownchange",paraId:5,tocIndex:5},{value:"\u5012\u8BA1\u65F6\u53D8\u5316\u65F6\u7684\u56DE\u8C03",paraId:5,tocIndex:5},{value:"Function",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if WECHAT bindcountdownfinish",paraId:5,tocIndex:5},{value:"\u5012\u8BA1\u65F6\u7ED3\u675F\u56DE\u8C03",paraId:5,tocIndex:5},{value:"Function",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:6,tocIndex:7},{value:"\u53D8\u91CF\u540D",paraId:7,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:7},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:7,tocIndex:7},{value:"\u5907\u6CE8",paraId:7,tocIndex:7},{value:"--ant-countdown-color",paraId:7,tocIndex:7},{value:"#666666",paraId:7,tocIndex:7},{value:"#808080",paraId:7,tocIndex:7},{value:"\u5012\u8BA1\u65F6\u989C\u8272",paraId:7,tocIndex:7},{value:"--ant-countdown-number-color",paraId:7,tocIndex:7},{value:"#ffffff",paraId:7,tocIndex:7},{value:"#000000",paraId:7,tocIndex:7},{value:"\u5012\u8BA1\u65F6\u6570\u5B57\u989C\u8272",paraId:7,tocIndex:7},{value:"--ant-countdown-number-bg",paraId:7,tocIndex:7},{value:"#1677ff",paraId:7,tocIndex:7},{value:"#3086ff",paraId:7,tocIndex:7},{value:"\u5012\u8BA1\u65F6\u6570\u5B57\u80CC\u666F\u989C\u8272",paraId:7,tocIndex:7},{value:"\u540D\u79F0",paraId:8,tocIndex:8},{value:"\u8BF4\u660E",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"\u9ED8\u8BA4\u63D2\u69FD",paraId:8,tocIndex:8},{value:"prefix",paraId:8,tocIndex:8},{value:"\u5012\u8BA1\u65F6\u5934\u90E8",paraId:8,tocIndex:8},{value:"suffix",paraId:8,tocIndex:8},{value:"\u5012\u8BA1\u65F6\u5C3E\u90E8",paraId:8,tocIndex:8}]}}]);
