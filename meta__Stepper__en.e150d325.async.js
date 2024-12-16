"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[5300],{17555:function(t,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),d=a(50366),I={"src-stepper-demo-stepper":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,64681))})),asset:{type:"BLOCK",id:"src-stepper-demo-stepper",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},93575:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(50366);const d=[{value:"A two-stage control used to increase, decrease, or modify values.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-stepper": "antd-mini/es/Stepper/index"
#endif
#if WECHAT
  "ant-stepper": "antd-mini/Stepper/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-stepper
  className="ant-stepper"
  value="{{0}}"
  min="{{0}}"
  max="{{10}}"
  step="{{1}}"
  disabled="{{false}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
/>
`,paraId:3,tocIndex:3},{value:`Page({
  handleChange(value) {
    console.log(value);
  },
});
`,paraId:4,tocIndex:3},{value:`<ant-stepper
  style=""
  className="ant-stepper"
  inputStyle=""
  inputClassName="ant-stepper-input"
/>
`,paraId:5,tocIndex:4},{value:`<ant-stepper
  className="ant-stepper"
  defaultValue="{{0}}"
  inputReadOnly="{{true}}"
/>
`,paraId:6,tocIndex:5},{value:`<ant-stepper
  className="ant-stepper"
  defaultValue="{{0}}"
  focus="{{true}}"
/>
`,paraId:7,tocIndex:6},{value:`<ant-stepper
  value="{{value}}"
#if ALIPAY
  onChange="handleChange"
  onBlur="handleBlur"
  onFocus="handleFocus"
  onConfirm="handleConfirm"
  onDisabledTap="handleDisabledTap"
#endif
#if WECHAT
  bindchange="handleChange"
  bindblur="handleBlur"
  bindfocus="handleFocus"
  bindconfirm="handleConfirm"
  binddisabledtap="handleDisabledTap"
#endif
/>
`,paraId:8,tocIndex:7},{value:"Property",paraId:9,tocIndex:9},{value:"Description",paraId:9,tocIndex:9},{value:"Type",paraId:9,tocIndex:9},{value:"Default Value",paraId:9,tocIndex:9},{value:"className",paraId:9,tocIndex:9},{value:"Class Name",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"disabled",paraId:9,tocIndex:9},{value:"Disable",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"inputReadOnly",paraId:9,tocIndex:9},{value:"Whether the input box is read-only",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"defaultValue",paraId:9,tocIndex:9},{value:"Initial value",paraId:9,tocIndex:9},{value:"number",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"focus",paraId:9,tocIndex:9},{value:"Input box check status",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"inputClassName",paraId:9,tocIndex:9},{value:"Input box type",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"inputStyle",paraId:9,tocIndex:9},{value:"Input box style",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"max",paraId:9,tocIndex:9},{value:"Maximum",paraId:9,tocIndex:9},{value:"number",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"min",paraId:9,tocIndex:9},{value:"Minimum",paraId:9,tocIndex:9},{value:"number",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"precision",paraId:9,tocIndex:9},{value:"Calculation accuracy, keep a few decimal places ",paraId:9,tocIndex:9},{value:"See details in",paraId:9,tocIndex:9},{value:"number",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"style",paraId:9,tocIndex:9},{value:"Style",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"step",paraId:9,tocIndex:9},{value:"Step distance, that is, the value of each addition and subtraction",paraId:9,tocIndex:9},{value:"number",paraId:9,tocIndex:9},{value:"1",paraId:9,tocIndex:9},{value:"type",paraId:9,tocIndex:9},{value:"Input box evokes keyboard type, optional ",paraId:9,tocIndex:9},{value:"number",paraId:9,tocIndex:9},{value:" ",paraId:9,tocIndex:9},{value:"digit",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"digit",paraId:9,tocIndex:9},{value:"value",paraId:9,tocIndex:9},{value:"The value of the input box is valid when the form is submitted.",paraId:9,tocIndex:9},{value:"number",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"#if ALIPAY onBlur",paraId:9,tocIndex:9},{value:"Trigger this callback when the input box loses focus",paraId:9,tocIndex:9},{value:"(value: number",paraId:9,tocIndex:9},{value:"null, event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if ALIPAY onChange",paraId:9,tocIndex:9},{value:"Trigger this callback after data changes",paraId:9,tocIndex:9},{value:"( value: number",paraId:9,tocIndex:9},{value:"null, ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if ALIPAY onConfirm",paraId:9,tocIndex:9},{value:"This callback is triggered when the keyboard is clicked to complete",paraId:9,tocIndex:9},{value:"(value: number",paraId:9,tocIndex:9},{value:"null, event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if ALIPAY onFocus",paraId:9,tocIndex:9},{value:"This callback is triggered when the input box is focused",paraId:9,tocIndex:9},{value:"(value: number",paraId:9,tocIndex:9},{value:"null, event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if ALIPAY onDisabledTap",paraId:9,tocIndex:9},{value:"Click departure callback when disabled",paraId:9,tocIndex:9},{value:"(event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if WECHAT bindblur",paraId:9,tocIndex:9},{value:"Trigger this callback when the input box loses focus",paraId:9,tocIndex:9},{value:"(value: number",paraId:9,tocIndex:9},{value:"null, event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if WECHAT bindchange",paraId:9,tocIndex:9},{value:"Trigger this callback after data changes",paraId:9,tocIndex:9},{value:"( value: number",paraId:9,tocIndex:9},{value:"null, ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if WECHAT bindconfirm",paraId:9,tocIndex:9},{value:"This callback is triggered when the keyboard is clicked to complete",paraId:9,tocIndex:9},{value:"(value: number",paraId:9,tocIndex:9},{value:"null, event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if WECHAT bindfocus",paraId:9,tocIndex:9},{value:"This callback is triggered when the input box is focused",paraId:9,tocIndex:9},{value:"(value: number",paraId:9,tocIndex:9},{value:"null, event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if WECHAT binddisabledtap",paraId:9,tocIndex:9},{value:"Click departure callback when disabled",paraId:9,tocIndex:9},{value:"(event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:10,tocIndex:11},{value:"Variable name",paraId:11,tocIndex:11},{value:"Default Value",paraId:11,tocIndex:11},{value:"Dark Mode Default",paraId:11,tocIndex:11},{value:"Remarks",paraId:11,tocIndex:11},{value:"--stepper-handler-tap-bg",paraId:11,tocIndex:11},{value:"#ddd",paraId:11,tocIndex:11},{value:"#ddd",paraId:11,tocIndex:11},{value:"stepper processor click background color",paraId:11,tocIndex:11},{value:"--stepper-handler-border-color",paraId:11,tocIndex:11},{value:"#e5e5e5",paraId:11,tocIndex:11},{value:"#444444",paraId:11,tocIndex:11},{value:"Step Processor Border Color",paraId:11,tocIndex:11},{value:"--stepper-border-color",paraId:11,tocIndex:11},{value:"#e5e5e5",paraId:11,tocIndex:11},{value:"#444444",paraId:11,tocIndex:11},{value:"Stepper border color",paraId:11,tocIndex:11},{value:"--stepper-background-color",paraId:11,tocIndex:11},{value:"#ffffff",paraId:11,tocIndex:11},{value:"#1a1a1a",paraId:11,tocIndex:11},{value:"Stepper background color",paraId:11,tocIndex:11},{value:"--stepper-hover-bg",paraId:11,tocIndex:11},{value:"rgba(0, 0, 0, 0.92)",paraId:11,tocIndex:11},{value:"rgba(0, 0, 0, 0.92)",paraId:11,tocIndex:11},{value:"Stepper hover background color",paraId:11,tocIndex:11}]}}]);
