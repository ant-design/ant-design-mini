"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[3231],{50306:function(o,a,n){n.r(a),n.d(a,{demos:function(){return t}});var e=n(67294),d=n(87605),t={"src-countdown-demo-countdown":{component:e.memo(e.lazy(function(){return n.e(2433).then(n.bind(n,72470))})),asset:{type:"BLOCK",id:"src-countdown-demo-countdown",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},71916:function(o,a,n){n.r(a),n.d(a,{texts:function(){return d}});var e=n(87605);const d=[{value:"Need to show the countdown scene.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
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
  <text slot="prefix">Remaining Time</text>
  <text slot="suffix">I started buying it.</text>
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
`,paraId:4,tocIndex:3},{value:"Property",paraId:5,tocIndex:5},{value:"Description",paraId:5,tocIndex:5},{value:"Type",paraId:5,tocIndex:5},{value:"Default Value",paraId:5,tocIndex:5},{value:"className",paraId:5,tocIndex:5},{value:"Container className",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"countdownEndTime",paraId:5,tocIndex:5},{value:"End timestamp",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"| ",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"countdownStartTime",paraId:5,tocIndex:5},{value:"Start timestamp",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"| ",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"Current timestamp",paraId:5,tocIndex:5},{value:"time",paraId:5,tocIndex:5},{value:"Choose one from the countdownEndTime, in seconds",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"0",paraId:5,tocIndex:5},{value:"autoShowDay",paraId:5,tocIndex:5},{value:"Less than one day automatically does not show days",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"true",paraId:5,tocIndex:5},{value:"countdownType",paraId:5,tocIndex:5},{value:"Extra-long countdown requires display days",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if ALIPAY onCountdownChange",paraId:5,tocIndex:5},{value:"Callback when countdown changes",paraId:5,tocIndex:5},{value:"Function",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if ALIPAY onCountdownFinish",paraId:5,tocIndex:5},{value:"Countdown End Callback",paraId:5,tocIndex:5},{value:"Function",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if WECHAT bindcountdownchange",paraId:5,tocIndex:5},{value:"Callback when countdown changes",paraId:5,tocIndex:5},{value:"Function",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if WECHAT bindcountdownfinish",paraId:5,tocIndex:5},{value:"Countdown End Callback",paraId:5,tocIndex:5},{value:"Function",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:6,tocIndex:7},{value:"Variable name",paraId:7,tocIndex:7},{value:"Default Value",paraId:7,tocIndex:7},{value:"Dark Mode Default",paraId:7,tocIndex:7},{value:"Remarks",paraId:7,tocIndex:7},{value:"--ant-countdown-color",paraId:7,tocIndex:7},{value:"#666666",paraId:7,tocIndex:7},{value:"#808080",paraId:7,tocIndex:7},{value:"Countdown Color",paraId:7,tocIndex:7},{value:"--ant-countdown-number-color",paraId:7,tocIndex:7},{value:"#ffffff",paraId:7,tocIndex:7},{value:"#000000",paraId:7,tocIndex:7},{value:"Countdown Digital Color",paraId:7,tocIndex:7},{value:"--ant-countdown-number-bg",paraId:7,tocIndex:7},{value:"#1677ff",paraId:7,tocIndex:7},{value:"#3086ff",paraId:7,tocIndex:7},{value:"Countdown digital background color",paraId:7,tocIndex:7},{value:"Name",paraId:8,tocIndex:8},{value:"Description",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"Default Slot",paraId:8,tocIndex:8},{value:"prefix",paraId:8,tocIndex:8},{value:"Countdown Head",paraId:8,tocIndex:8},{value:"suffix",paraId:8,tocIndex:8},{value:"Countdown Tail",paraId:8,tocIndex:8}]}}]);
