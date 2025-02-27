"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[6304],{36606:function(o,e,a){a.r(e),a.d(e,{demos:function(){return t}});var n=a(67294),d=a(63592),t={"src-radio-demo-radio":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,87338))})),asset:{type:"BLOCK",id:"src-radio-demo-radio",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},30854:function(o,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(63592);const d=[{value:"Single selection from a set of options.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-radio": "antd-mini/es/Radio/index",
  "ant-radio-group": "antd-mini/es/Radio/RadioGroup/index"
#endif
#if WECHAT
  "ant-radio": "antd-mini/Radio/index",
  "ant-radio-group": "antd-mini/Radio/RadioGroup/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-radio defaultChecked>Initial value</ant-radio>
<ant-radio disabled>Disable button 1</ant-radio>
<ant-radio color="red" defaultChecked>Custom Colors</ant-radio>
<ant-radio
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bindchange="onChange"
#endif
>
  Basic Usage
</ant-radio>
`,paraId:3,tocIndex:3},{value:`Page({
  onChange(value, e) {
    console.log(value, e);
  },
});
`,paraId:4,tocIndex:3},{value:`<ant-radio
  checked="{{checked}}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bindchange="handleChange"
#endif
>
  Controlled Mode
</ant-radio>
`,paraId:5,tocIndex:4},{value:`Page({
  data: {
    checked: false,
  },
  handleChange(checked) {
#if WECHAT
    this.setData({
      checked: checked.detail,
    });
#endif
#if ALIPAY
    this.setData({
      checked,
    });
#endif
  },
});
`,paraId:6,tocIndex:4},{value:`<ant-radio-group
  value="{{value}}"
  options="{{options}}"
#if ALIPAY
  onChange="handleRadioGroupChange"
#endif
#if WECHAT
  bindchange="handleRadioGroupChange"
#endif
/>

`,paraId:7,tocIndex:5},{value:`Page({
  data: {
    value: 'banana',
    options: [
      { value: 'apple', label: '\u82F9\u679C' },
      { value: 'orange', label: '\u6A58\u5B50' },
      { value: 'banana', label: '\u9999\u8549' },
    ],
  },
  handleRadioGroupChange(value) {
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
`,paraId:8,tocIndex:5},{value:"Property",paraId:9,tocIndex:7},{value:"Description",paraId:9,tocIndex:7},{value:"Type",paraId:9,tocIndex:7},{value:"Default Value",paraId:9,tocIndex:7},{value:"checked",paraId:9,tocIndex:7},{value:"Whether selected",paraId:9,tocIndex:7},{value:"boolean",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"className",paraId:9,tocIndex:7},{value:"Class Name",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"disabled",paraId:9,tocIndex:7},{value:"Disable",paraId:9,tocIndex:7},{value:"boolean",paraId:9,tocIndex:7},{value:"false",paraId:9,tocIndex:7},{value:"color",paraId:9,tocIndex:7},{value:"Icon Color",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"defaultChecked",paraId:9,tocIndex:7},{value:"Is selected by default",paraId:9,tocIndex:7},{value:"boolean",paraId:9,tocIndex:7},{value:"false",paraId:9,tocIndex:7},{value:"style",paraId:9,tocIndex:7},{value:"Style",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"value",paraId:9,tocIndex:7},{value:"value carried",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"#if ALIPAY onChange",paraId:9,tocIndex:7},{value:"Callback when state changes",paraId:9,tocIndex:7},{value:"(checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"#if WECHAT bindchange",paraId:9,tocIndex:7},{value:"Callback when state changes",paraId:9,tocIndex:7},{value:"(checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"Property",paraId:10,tocIndex:8},{value:"Description",paraId:10,tocIndex:8},{value:"Type",paraId:10,tocIndex:8},{value:"Default Value",paraId:10,tocIndex:8},{value:"className",paraId:10,tocIndex:8},{value:"Class Name",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"color",paraId:10,tocIndex:8},{value:"Icon Color",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"disabled",paraId:10,tocIndex:8},{value:"Disable",paraId:10,tocIndex:8},{value:"boolean",paraId:10,tocIndex:8},{value:"false",paraId:10,tocIndex:8},{value:"defaultValue",paraId:10,tocIndex:8},{value:"Initial value",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"label",paraId:10,tocIndex:8},{value:"slots, receiving values and indexes",paraId:10,tocIndex:8},{value:"slot",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"options",paraId:10,tocIndex:8},{value:"Optional",paraId:10,tocIndex:8},{value:"{label?: string; value?: string; disabled?: boolean;}[]",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"position",paraId:10,tocIndex:8},{value:"Layout mode",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"vertical",paraId:10,tocIndex:8},{value:"style",paraId:10,tocIndex:8},{value:"Style",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"value",paraId:10,tocIndex:8},{value:"Selected value",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"#if ALIPAY onChange",paraId:10,tocIndex:8},{value:"Callback when state changes",paraId:10,tocIndex:8},{value:"(value: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"#if WECHAT bindchange",paraId:10,tocIndex:8},{value:"Callback when state changes",paraId:10,tocIndex:8},{value:"(value: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.",paraId:11,tocIndex:10},{value:"Variable name",paraId:12,tocIndex:10},{value:"Default Value",paraId:12,tocIndex:10},{value:"Dark Mode Default",paraId:12,tocIndex:10},{value:"Remarks",paraId:12,tocIndex:10},{value:"--progress-stroke-color",paraId:12,tocIndex:10},{value:"#1677ff",paraId:12,tocIndex:10},{value:"#3086ff",paraId:12,tocIndex:10},{value:"Progress bar main color",paraId:12,tocIndex:10},{value:"--progress-trail-color",paraId:12,tocIndex:10},{value:"#f5f5f5",paraId:12,tocIndex:10},{value:"#121212",paraId:12,tocIndex:10},{value:"Progress bar track color",paraId:12,tocIndex:10},{value:"--progress-success-color",paraId:12,tocIndex:10},{value:"#22b35e",paraId:12,tocIndex:10},{value:"#34b368",paraId:12,tocIndex:10},{value:"Progress bar success color",paraId:12,tocIndex:10},{value:"--progress-indicator-color",paraId:12,tocIndex:10},{value:"#333333",paraId:12,tocIndex:10},{value:"#c5cad1",paraId:12,tocIndex:10},{value:"Progress bar indicator color",paraId:12,tocIndex:10},{value:"--progress-exception-color",paraId:12,tocIndex:10},{value:"#ff3141",paraId:12,tocIndex:10},{value:"#ff4a58",paraId:12,tocIndex:10},{value:"Progress bar exception color",paraId:12,tocIndex:10},{value:"--progress-assist-color",paraId:12,tocIndex:10},{value:"#999999",paraId:12,tocIndex:10},{value:"#616161",paraId:12,tocIndex:10},{value:"Progress bar auxiliary color",paraId:12,tocIndex:10}]}}]);
