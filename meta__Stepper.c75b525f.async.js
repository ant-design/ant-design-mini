"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[3336],{18626:function(I,e,a){a.r(e),a.d(e,{demos:function(){return t}});var d=a(67294),n=a(74618),t={"src-stepper-demo-stepper":{component:d.memo(d.lazy(function(){return a.e(2433).then(a.bind(a,64681))})),asset:{type:"BLOCK",id:"src-stepper-demo-stepper",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},31547:function(I,e,a){a.r(e),a.d(e,{texts:function(){return n}});var d=a(74618);const n=[{value:"\u4E00\u79CD\u4E24\u6BB5\u5F0F\u63A7\u5236\uFF0C\u7528\u4E8E\u589E\u52A0\u3001\u51CF\u5C11\u6216\u4FEE\u6539\u6570\u503C\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
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
`,paraId:8,tocIndex:7},{value:"\u5C5E\u6027",paraId:9,tocIndex:9},{value:"\u8BF4\u660E",paraId:9,tocIndex:9},{value:"\u7C7B\u578B",paraId:9,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:9},{value:"className",paraId:9,tocIndex:9},{value:"\u7C7B\u540D",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"disabled",paraId:9,tocIndex:9},{value:"\u662F\u5426\u7981\u7528",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"inputReadOnly",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u662F\u5426\u53EA\u8BFB\u72B6\u6001",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"defaultValue",paraId:9,tocIndex:9},{value:"\u521D\u59CB\u503C",paraId:9,tocIndex:9},{value:"number",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"focus",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u9009\u4E2D\u72B6\u6001",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"inputClassName",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u7C7B\u578B",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"inputStyle",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u6837\u5F0F",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"max",paraId:9,tocIndex:9},{value:"\u6700\u5927\u503C",paraId:9,tocIndex:9},{value:"number",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"min",paraId:9,tocIndex:9},{value:"\u6700\u5C0F\u503C",paraId:9,tocIndex:9},{value:"number",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"precision",paraId:9,tocIndex:9},{value:"\u8BA1\u7B97\u7CBE\u5EA6\uFF0C\u4FDD\u7559\u51E0\u4F4D\u5C0F\u6570 ",paraId:9,tocIndex:9},{value:"\u8BE6\u89C1",paraId:9,tocIndex:9},{value:"number",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"style",paraId:9,tocIndex:9},{value:"\u6837\u5F0F",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"step",paraId:9,tocIndex:9},{value:"\u6B65\u8DDD\uFF0C\u5373\u6BCF\u6B21\u52A0\u51CF\u7684\u503C",paraId:9,tocIndex:9},{value:"number",paraId:9,tocIndex:9},{value:"1",paraId:9,tocIndex:9},{value:"type",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u5524\u8D77\u952E\u76D8\u7C7B\u578B\uFF0C\u53EF\u9009 ",paraId:9,tocIndex:9},{value:"number",paraId:9,tocIndex:9},{value:" ",paraId:9,tocIndex:9},{value:"digit",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"digit",paraId:9,tocIndex:9},{value:"value",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u7684\u503C, \u8868\u5355\u63D0\u4EA4\u7684\u65F6\u5019\u6709\u6548",paraId:9,tocIndex:9},{value:"number",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"#if ALIPAY onBlur",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\uFF0C\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(value: number",paraId:9,tocIndex:9},{value:"null, event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if ALIPAY onChange",paraId:9,tocIndex:9},{value:"\u6570\u636E\u53D8\u5316\u540E\uFF0C\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:9,tocIndex:9},{value:"( value: number",paraId:9,tocIndex:9},{value:"null, ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if ALIPAY onConfirm",paraId:9,tocIndex:9},{value:"\u70B9\u51FB\u952E\u76D8\u5B8C\u6210\u65F6\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(value: number",paraId:9,tocIndex:9},{value:"null, event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if ALIPAY onFocus",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u805A\u7126\u65F6\uFF0C\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(value: number",paraId:9,tocIndex:9},{value:"null, event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if ALIPAY onDisabledTap",paraId:9,tocIndex:9},{value:"\u7981\u7528\u65F6\u70B9\u51FB\u51FA\u53D1\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if WECHAT bindblur",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\uFF0C\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(value: number",paraId:9,tocIndex:9},{value:"null, event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if WECHAT bindchange",paraId:9,tocIndex:9},{value:"\u6570\u636E\u53D8\u5316\u540E\uFF0C\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:9,tocIndex:9},{value:"( value: number",paraId:9,tocIndex:9},{value:"null, ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if WECHAT bindconfirm",paraId:9,tocIndex:9},{value:"\u70B9\u51FB\u952E\u76D8\u5B8C\u6210\u65F6\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(value: number",paraId:9,tocIndex:9},{value:"null, event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if WECHAT bindfocus",paraId:9,tocIndex:9},{value:"\u8F93\u5165\u6846\u805A\u7126\u65F6\uFF0C\u89E6\u53D1\u6B64\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(value: number",paraId:9,tocIndex:9},{value:"null, event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"#if WECHAT binddisabledtap",paraId:9,tocIndex:9},{value:"\u7981\u7528\u65F6\u70B9\u51FB\u51FA\u53D1\u56DE\u8C03",paraId:9,tocIndex:9},{value:"(event: ",paraId:9,tocIndex:9},{value:"Event",paraId:9,tocIndex:9},{value:") => void",paraId:9,tocIndex:9},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:10,tocIndex:11},{value:"\u53D8\u91CF\u540D",paraId:11,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:11},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:11,tocIndex:11},{value:"\u5907\u6CE8",paraId:11,tocIndex:11},{value:"--stepper-handler-tap-bg",paraId:11,tocIndex:11},{value:"#ddd",paraId:11,tocIndex:11},{value:"#ddd",paraId:11,tocIndex:11},{value:"\u6B65\u8FDB\u5668\u5904\u7406\u5668\u70B9\u51FB\u80CC\u666F\u989C\u8272",paraId:11,tocIndex:11},{value:"--stepper-handler-border-color",paraId:11,tocIndex:11},{value:"#e5e5e5",paraId:11,tocIndex:11},{value:"#444444",paraId:11,tocIndex:11},{value:"\u6B65\u8FDB\u5668\u5904\u7406\u5668\u8FB9\u6846\u989C\u8272",paraId:11,tocIndex:11},{value:"--stepper-border-color",paraId:11,tocIndex:11},{value:"#e5e5e5",paraId:11,tocIndex:11},{value:"#444444",paraId:11,tocIndex:11},{value:"\u6B65\u8FDB\u5668\u8FB9\u6846\u989C\u8272",paraId:11,tocIndex:11},{value:"--stepper-background-color",paraId:11,tocIndex:11},{value:"#ffffff",paraId:11,tocIndex:11},{value:"#1a1a1a",paraId:11,tocIndex:11},{value:"\u6B65\u8FDB\u5668\u80CC\u666F\u989C\u8272",paraId:11,tocIndex:11},{value:"--stepper-hover-bg",paraId:11,tocIndex:11},{value:"rgba(0, 0, 0, 0.92)",paraId:11,tocIndex:11},{value:"rgba(0, 0, 0, 0.92)",paraId:11,tocIndex:11},{value:"\u6B65\u8FDB\u5668\u60AC\u505C\u80CC\u666F\u989C\u8272",paraId:11,tocIndex:11}]}}]);
