"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[2313],{7051:function(t,e,a){a.r(e),a.d(e,{demos:function(){return o}});var n=a(67294),d=a(33257),o={"src-number-input-demo-numberinput":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,34600))})),asset:{type:"BLOCK",id:"src-number-input-demo-numberinput",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},24843:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(33257);const d=[{value:"Use when you need to enter an amount and provide a quick amount selection. Supports automatic conversion of units, maximum limit and other functions.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-number-input": "antd-mini/es/NumberInput/index"
#endif
#if WECHAT
  "ant-number-input": "antd-mini/NumberInput/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"Property",paraId:3,tocIndex:5},{value:"Description",paraId:3,tocIndex:5},{value:"Type",paraId:3,tocIndex:5},{value:"Default Value",paraId:3,tocIndex:5},{value:"className",paraId:3,tocIndex:5},{value:"Class Name",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"style",paraId:3,tocIndex:5},{value:"Style",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"value",paraId:3,tocIndex:5},{value:"Value of the input box",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"title",paraId:3,tocIndex:5},{value:"Title",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"linkText",paraId:3,tocIndex:5},{value:"Top right link copy",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"quickAmounts",paraId:3,tocIndex:5},{value:"Quick Amount Options",paraId:3,tocIndex:5},{value:"number[]",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"placeholder",paraId:3,tocIndex:5},{value:"Placeholder text",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"'Please enter amount'",paraId:3,tocIndex:5},{value:"prefix",paraId:3,tocIndex:5},{value:"Amount prefix",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"'\xA5'",paraId:3,tocIndex:5},{value:"maxValue",paraId:3,tocIndex:5},{value:"Maximum amount that can be entered",paraId:3,tocIndex:5},{value:"number",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"#if ALIPAY onChange",paraId:3,tocIndex:5},{value:"Callback when content changes",paraId:3,tocIndex:5},{value:"(value: string) => void",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"#if ALIPAY onLinkTap",paraId:3,tocIndex:5},{value:"Click on the callback link in the upper right corner",paraId:3,tocIndex:5},{value:"() => void",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"#if WECHAT bindchange",paraId:3,tocIndex:5},{value:"Callback when content changes",paraId:3,tocIndex:5},{value:"(value: string) => void",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"#if WECHAT bindlinktap",paraId:3,tocIndex:5},{value:"Click on the callback link in the upper right corner",paraId:3,tocIndex:5},{value:"() => void",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"Currently only one footer slot is provided for inserting custom content below the input box. More content may be opened later on demand.",paraId:4,tocIndex:6},{value:"Example of use:",paraId:5,tocIndex:6},{value:`<ant-number-input>
  <view slot="footer">
    <text>This is a piece of custom content</text>
  </view>
</ant-number-input>
`,paraId:6,tocIndex:6},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:7,tocIndex:8},{value:"Variable name",paraId:8,tocIndex:8},{value:"Light Mode Default",paraId:8,tocIndex:8},{value:"Dark Mode Default",paraId:8,tocIndex:8},{value:"Remarks",paraId:8,tocIndex:8},{value:"--number-input-background-color",paraId:8,tocIndex:8},{value:"#ffffff",paraId:8,tocIndex:8},{value:"#1a1a1a",paraId:8,tocIndex:8},{value:"Background Color",paraId:8,tocIndex:8},{value:"--number-input-title-color",paraId:8,tocIndex:8},{value:"#333333",paraId:8,tocIndex:8},{value:"#c5cad1",paraId:8,tocIndex:8},{value:"Title Color",paraId:8,tocIndex:8},{value:"--number-input-link-color",paraId:8,tocIndex:8},{value:"#4b6b99",paraId:8,tocIndex:8},{value:"#3f5980",paraId:8,tocIndex:8},{value:"Top Right Link Color",paraId:8,tocIndex:8},{value:"--number-input-unit-color",paraId:8,tocIndex:8},{value:"#999999",paraId:8,tocIndex:8},{value:"#616161",paraId:8,tocIndex:8},{value:"Unit color above input box",paraId:8,tocIndex:8},{value:"--number-input-border-color",paraId:8,tocIndex:8},{value:"#eeeeee",paraId:8,tocIndex:8},{value:"#2b2b2b",paraId:8,tocIndex:8},{value:"Split line color",paraId:8,tocIndex:8},{value:"--number-input-prefix-color",paraId:8,tocIndex:8},{value:"#333333",paraId:8,tocIndex:8},{value:"#c5cad1",paraId:8,tocIndex:8},{value:"Crop color",paraId:8,tocIndex:8},{value:"--number-input-caret-color",paraId:8,tocIndex:8},{value:"#1677ff",paraId:8,tocIndex:8},{value:"#3086ff",paraId:8,tocIndex:8},{value:"Cursor Color",paraId:8,tocIndex:8},{value:"--number-input-quick-text-color",paraId:8,tocIndex:8},{value:"#1677ff",paraId:8,tocIndex:8},{value:"#3086ff",paraId:8,tocIndex:8},{value:"Quick input text color",paraId:8,tocIndex:8},{value:"--number-input-quick-border-color",paraId:8,tocIndex:8},{value:"#1677ff",paraId:8,tocIndex:8},{value:"#3086ff",paraId:8,tocIndex:8},{value:"Quick input border color",paraId:8,tocIndex:8}]}}]);
