"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[7241],{98500:function(t,e,a){a.r(e),a.d(e,{demos:function(){return o}});var n=a(67294),d=a(99044),o={"src-rate-demo-rate":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,17642))})),asset:{type:"BLOCK",id:"src-rate-demo-rate",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},31678:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(99044);const d=[{value:"A component for showing things ratings and quick scoring.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-rate": "antd-mini/es/Rate/index"
#endif
#if WECHAT
  "ant-radio": "antd-mini/Rate/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"count",paraId:3,tocIndex:3},{value:" property specifies the total number of stars, ",paraId:3,tocIndex:3},{value:"allowHalf",paraId:3,tocIndex:3},{value:" Stats allow half a star, ",paraId:3,tocIndex:3},{value:"allowClear",paraId:3,tocIndex:3},{value:" Property allows to clear after clicking again.",paraId:3,tocIndex:3},{value:`<ant-rate
  defaultValue="{{3.5}}"
  count="{{5}}"
  allowHalf
  allowClear
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bind:change="onChange"
#endif
/>
`,paraId:4,tocIndex:3},{value:`Page({
  onChange(value) {
    console.log(value);
  },
});
`,paraId:5,tocIndex:3},{value:`<ant-rate defaultValue="{{3}}" readonly />
`,paraId:6,tocIndex:4},{value:"value",paraId:7,tocIndex:5},{value:" property and ",paraId:7,tocIndex:5},{value:"change",paraId:7,tocIndex:5},{value:" Events, cooperation can achieve a controlled mode. Here's the example through ",paraId:7,tocIndex:5},{value:"ant-stepper",paraId:7,tocIndex:5},{value:" Component change ",paraId:7,tocIndex:5},{value:"value",paraId:7,tocIndex:5},{value:" Status,",paraId:7,tocIndex:5},{value:"ant-rate",paraId:7,tocIndex:5},{value:" Components ",paraId:7,tocIndex:5},{value:"value",paraId:7,tocIndex:5},{value:" States can also change together.",paraId:7,tocIndex:5},{value:`<ant-rate
  value="{{value}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bind:change="handleChange"
#endif
/>
<ant-stepper
  value="{{value}}"
  min="{{0}}"
  max="{{5}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bind:change="handleChange"
#endif
/>
`,paraId:8,tocIndex:5},{value:`Page({
  data: {
    value: 3,
  },
  handleChange(value) {
    console.log(value);
#if WECHAT
    this.setData({
      value: value.detail,
    });
#endif
#if ALIPAY
    this.setData({
      value,
    });
#endif
  },
});
`,paraId:9,tocIndex:5},{value:"Reference below ",paraId:10,tocIndex:6},{value:"Demo Code",paraId:11,tocIndex:6},{value:" implementation in.",paraId:10,tocIndex:6},{value:"Property",paraId:12,tocIndex:8},{value:"Description",paraId:12,tocIndex:8},{value:"Type",paraId:12,tocIndex:8},{value:"Default Value",paraId:12,tocIndex:8},{value:"allowHalf",paraId:12,tocIndex:8},{value:"Whether to allow half a star",paraId:12,tocIndex:8},{value:"boolean",paraId:12,tocIndex:8},{value:"false",paraId:12,tocIndex:8},{value:"allowClear",paraId:12,tocIndex:8},{value:"Allow to clear after clicking again",paraId:12,tocIndex:8},{value:"boolean",paraId:12,tocIndex:8},{value:"true",paraId:12,tocIndex:8},{value:"className",paraId:12,tocIndex:8},{value:"Class Name",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"character",paraId:12,tocIndex:8},{value:"Custom Characters",paraId:12,tocIndex:8},{value:"slot",paraId:12,tocIndex:8},{value:'<icon type="StarFill" />',paraId:12,tocIndex:8},{value:"characterActiveClassName",paraId:12,tocIndex:8},{value:"Custom Character Checked State Class Name",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"characterClassName",paraId:12,tocIndex:8},{value:"Custom Character Class Name",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"count",paraId:12,tocIndex:8},{value:"total number of stars",paraId:12,tocIndex:8},{value:"number",paraId:12,tocIndex:8},{value:"5",paraId:12,tocIndex:8},{value:"defaultValue",paraId:12,tocIndex:8},{value:"Initial value",paraId:12,tocIndex:8},{value:"number",paraId:12,tocIndex:8},{value:"0",paraId:12,tocIndex:8},{value:"gutter",paraId:12,tocIndex:8},{value:"Spacing, unit ",paraId:12,tocIndex:8},{value:"px",paraId:12,tocIndex:8},{value:"number",paraId:12,tocIndex:8},{value:"4",paraId:12,tocIndex:8},{value:"readonly",paraId:12,tocIndex:8},{value:"Read-only, unable to interact",paraId:12,tocIndex:8},{value:"boolean",paraId:12,tocIndex:8},{value:"false",paraId:12,tocIndex:8},{value:"style",paraId:12,tocIndex:8},{value:"Style",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"value",paraId:12,tocIndex:8},{value:"Star rating (controlled)",paraId:12,tocIndex:8},{value:"number",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"#if ALIPAY onChange",paraId:12,tocIndex:8},{value:"scoring callback function",paraId:12,tocIndex:8},{value:"(rate: number) => void",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"#if WECHAT bind:change",paraId:12,tocIndex:8},{value:"scoring callback function",paraId:12,tocIndex:8},{value:"(rate: number) => void",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:13,tocIndex:10},{value:"Variable name",paraId:14,tocIndex:10},{value:"Default Value",paraId:14,tocIndex:10},{value:"Dark Mode Default",paraId:14,tocIndex:10},{value:"Remarks",paraId:14,tocIndex:10},{value:"--rate-active-icon",paraId:14,tocIndex:10},{value:"#ff9f18",paraId:14,tocIndex:10},{value:"#ffa930",paraId:14,tocIndex:10},{value:"Icon color of Rate activation state",paraId:14,tocIndex:10},{value:"--rate-icon-color",paraId:14,tocIndex:10},{value:"#eeeeee",paraId:14,tocIndex:10},{value:"#2b2b2b",paraId:14,tocIndex:10},{value:"Rate Default Icon Color",paraId:14,tocIndex:10}]}}]);
