"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[9015],{31754:function(d,a,e){e.r(a),e.d(a,{demos:function(){return o}});var t=e(67294),n=e(71814),o={"src-sticky-demo-sticky":{component:t.memo(t.lazy(function(){return e.e(2433).then(e.bind(e,80804))})),asset:{type:"BLOCK",id:"src-sticky-demo-sticky",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},84336:function(d,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(71814);const n=[{value:"Need to be adsorbed in some places in the rolling situation.",paraId:0,tocIndex:1},{value:"The Sticky component implementation relies on ",paraId:1,tocIndex:2},{value:"position: sticky",paraId:1,tocIndex:2},{value:" attribute, which may become invalid due to the influence of the parent element. ",paraId:1,tocIndex:2},{value:"This document",paraId:1,tocIndex:2},{value:" Check the element layout of the page.",paraId:1,tocIndex:2},{value:"In ",paraId:2,tocIndex:3},{value:"index.json",paraId:2,tocIndex:3},{value:" Introducing Components in",paraId:2,tocIndex:3},{value:`"usingComponents": {
#if ALIPAY
  "ant-sticky": "antd-mini/es/Sticky/index"
#endif
#if WECHAT
  "ant-sticky": "antd-mini/Sticky/index"
#endif
}
`,paraId:3,tocIndex:3},{value:`<ant-sticky>
  <view>
    I will ceiling
  </view>
</ant-sticky>
`,paraId:4,tocIndex:5},{value:`<ant-sticky top="100px">
  <view>
    I will top the place 100px from the top
  </view>
</ant-sticky>
`,paraId:5,tocIndex:6},{value:`<ant-sticky
  top="180px"
  check="{{true}}"
#if ALIPAY
  onStickyChange="handleStickyChange"
#endif
#if WECHAT
  bind:stickyChange="handleStickyChange"
#endif
>
  <view>
    <view>I will ceiling at 180px from the top</view>
    <view>Whether it has sucked {{stickyStatus}}</view>
  </view>
</ant-sticky>
`,paraId:6,tocIndex:7},{value:`Page({
  data: {
    stickyStatus: false,
  },
  handleStickyChange(status) {
    this.setData({ stickyStatus: status });
  },
});
`,paraId:7,tocIndex:7},{value:`<ant-sticky transparentTitle="{{true}}">
  <view>
    I will ceiling
  </view>
</ant-sticky>
`,paraId:8,tocIndex:8},{value:"Property",paraId:9,tocIndex:10},{value:"Type",paraId:9,tocIndex:10},{value:"Default Value",paraId:9,tocIndex:10},{value:"Description",paraId:9,tocIndex:10},{value:"className",paraId:9,tocIndex:10},{value:"string",paraId:9,tocIndex:10},{value:'""',paraId:9,tocIndex:10},{value:"Container className",paraId:9,tocIndex:10},{value:"top",paraId:9,tocIndex:10},{value:"string",paraId:9,tocIndex:10},{value:'""',paraId:9,tocIndex:10},{value:"The ceiling height, need to write units, such as 10px,24rpx",paraId:9,tocIndex:10},{value:"check",paraId:9,tocIndex:10},{value:"bool",paraId:9,tocIndex:10},{value:"false",paraId:9,tocIndex:10},{value:"Whether it is necessary to sense whether the ceiling has been absorbed, because the ceiling inspection still has a certain cost.",paraId:9,tocIndex:10},{value:"sticky",paraId:9,tocIndex:10},{value:"bool",paraId:9,tocIndex:10},{value:"true",paraId:9,tocIndex:10},{value:"Whether to ceiling, some scenes do not necessarily need",paraId:9,tocIndex:10},{value:"transparentTitle",paraId:9,tocIndex:10},{value:"bool",paraId:9,tocIndex:10},{value:"false",paraId:9,tocIndex:10},{value:"Whether it is a transparent head, the transparent head will automatically calculate the titleBar height, and the default adsorption is under the titlebar",paraId:9,tocIndex:10},{value:"#if ALIPAY onStickyChange",paraId:9,tocIndex:10},{value:"Function",paraId:9,tocIndex:10},{value:"(status) => {}",paraId:9,tocIndex:10},{value:"Whether it is in the ceiling state, note that the check function needs to be turned on to have this callback.",paraId:9,tocIndex:10},{value:"#if ALIPAY onGetHeaderHeight",paraId:9,tocIndex:10},{value:"Function",paraId:9,tocIndex:10},{value:"(height) => {}",paraId:9,tocIndex:10},{value:"Calculate the height of the head to complete",paraId:9,tocIndex:10},{value:"#if WECHAT bind:stickychange",paraId:9,tocIndex:10},{value:"Function",paraId:9,tocIndex:10},{value:"(status) => {}",paraId:9,tocIndex:10},{value:"Whether it is in the ceiling state, note that the check function needs to be turned on to have this callback.",paraId:9,tocIndex:10},{value:"#if WECHAT bind:getheaderheight",paraId:9,tocIndex:10},{value:"Function",paraId:9,tocIndex:10},{value:"(height) => {}",paraId:9,tocIndex:10},{value:"Calculate the height of the head to complete",paraId:9,tocIndex:10},{value:"There is only one default slot for wrapping elements and components that want to be capped.",paraId:10,tocIndex:11},{value:"It should be noted that the automatic calculation of head height in the transparent page scene is only convenient to suck on the top. If there is an offset, it still needs to be calculated by itself.",paraId:11,tocIndex:12},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:12,tocIndex:14},{value:"Variable name",paraId:13,tocIndex:14},{value:"Default Value",paraId:13,tocIndex:14},{value:"Dark Mode Default",paraId:13,tocIndex:14},{value:"Remarks",paraId:13,tocIndex:14},{value:"--sticky-check-bg",paraId:13,tocIndex:14},{value:"rgba(238, 238, 238, 0)",paraId:13,tocIndex:14},{value:"rgba(238, 238, 238, 0)",paraId:13,tocIndex:14},{value:"Selector Background Color",paraId:13,tocIndex:14}]}}]);
