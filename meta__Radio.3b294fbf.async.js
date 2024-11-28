"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[3135],{64051:function(o,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),d=a(28623),I={"src-radio-demo-radio":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,87338))})),asset:{type:"BLOCK",id:"src-radio-demo-radio",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},9035:function(o,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(28623);const d=[{value:"\u5728\u4E00\u7EC4\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u5355\u9009\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-radio": "antd-mini/es/Radio/index",
  "ant-radio-group": "antd-mini/es/Radio/RadioGroup/index"
#endif
#if WECHAT
  "ant-radio": "antd-mini/Radio/index",
  "ant-radio-group": "antd-mini/Radio/RadioGroup/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-radio defaultChecked>\u521D\u59CB\u503C</ant-radio>
<ant-radio disabled>\u7981\u7528\u6309\u94AE1</ant-radio>
<ant-radio color="red" defaultChecked>\u81EA\u5B9A\u4E49\u989C\u8272</ant-radio>
<ant-radio
#if ALIPAY
  onChange="onChange"
#endif
#if WECHAT
  bind:change="onChange"
#endif
>
  \u57FA\u7840\u7528\u6CD5
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
  bind:change="handleChange"
#endif
>
  \u53D7\u63A7\u6A21\u5F0F
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
  bind:change="handleRadioGroupChange"
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
`,paraId:8,tocIndex:5},{value:"\u5C5E\u6027",paraId:9,tocIndex:7},{value:"\u8BF4\u660E",paraId:9,tocIndex:7},{value:"\u7C7B\u578B",paraId:9,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:7},{value:"checked",paraId:9,tocIndex:7},{value:"\u662F\u5426\u9009\u4E2D",paraId:9,tocIndex:7},{value:"boolean",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"className",paraId:9,tocIndex:7},{value:"\u7C7B\u540D",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"disabled",paraId:9,tocIndex:7},{value:"\u662F\u5426\u7981\u7528",paraId:9,tocIndex:7},{value:"boolean",paraId:9,tocIndex:7},{value:"false",paraId:9,tocIndex:7},{value:"color",paraId:9,tocIndex:7},{value:"\u56FE\u6807\u989C\u8272",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"defaultChecked",paraId:9,tocIndex:7},{value:"\u662F\u5426\u9ED8\u8BA4\u9009\u4E2D",paraId:9,tocIndex:7},{value:"boolean",paraId:9,tocIndex:7},{value:"false",paraId:9,tocIndex:7},{value:"style",paraId:9,tocIndex:7},{value:"\u6837\u5F0F",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"value",paraId:9,tocIndex:7},{value:"\u643A\u5E26\u7684 value \u503C",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"#if ALIPAY onChange",paraId:9,tocIndex:7},{value:"\u72B6\u6001\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:9,tocIndex:7},{value:"(checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"#if WECHAT bind:change",paraId:9,tocIndex:7},{value:"\u72B6\u6001\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:9,tocIndex:7},{value:"(checked: boolean, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"\u5C5E\u6027",paraId:10,tocIndex:8},{value:"\u8BF4\u660E",paraId:10,tocIndex:8},{value:"\u7C7B\u578B",paraId:10,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:8},{value:"className",paraId:10,tocIndex:8},{value:"\u7C7B\u540D",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"color",paraId:10,tocIndex:8},{value:"\u56FE\u6807\u989C\u8272",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"disabled",paraId:10,tocIndex:8},{value:"\u662F\u5426\u7981\u7528",paraId:10,tocIndex:8},{value:"boolean",paraId:10,tocIndex:8},{value:"false",paraId:10,tocIndex:8},{value:"defaultValue",paraId:10,tocIndex:8},{value:"\u521D\u59CB\u503C",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"label",paraId:10,tocIndex:8},{value:"\u63D2\u69FD\uFF0C\u63A5\u6536\u503C\u548C\u7D22\u5F15",paraId:10,tocIndex:8},{value:"slot",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"options",paraId:10,tocIndex:8},{value:"\u53EF\u9009\u9879",paraId:10,tocIndex:8},{value:"{label?: string; value?: string; disabled?: boolean;}[]",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"position",paraId:10,tocIndex:8},{value:"\u5E03\u5C40\u65B9\u5F0F",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"vertical",paraId:10,tocIndex:8},{value:"style",paraId:10,tocIndex:8},{value:"\u6837\u5F0F",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"value",paraId:10,tocIndex:8},{value:"\u9009\u4E2D\u7684\u503C",paraId:10,tocIndex:8},{value:"string",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"#if ALIPAY onChange",paraId:10,tocIndex:8},{value:"\u72B6\u6001\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:10,tocIndex:8},{value:"(value: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"#if WECHAT bind:change",paraId:10,tocIndex:8},{value:"\u72B6\u6001\u6539\u53D8\u65F6\u7684\u56DE\u8C03",paraId:10,tocIndex:8},{value:"(value: string, event: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void",paraId:10,tocIndex:8},{value:"-",paraId:10,tocIndex:8},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:11,tocIndex:10},{value:"\u53D8\u91CF\u540D",paraId:12,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:10},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:12,tocIndex:10},{value:"\u5907\u6CE8",paraId:12,tocIndex:10},{value:"--progress-stroke-color",paraId:12,tocIndex:10},{value:"#1677ff",paraId:12,tocIndex:10},{value:"#3086ff",paraId:12,tocIndex:10},{value:"\u8FDB\u5EA6\u6761\u4E3B\u989C\u8272",paraId:12,tocIndex:10},{value:"--progress-trail-color",paraId:12,tocIndex:10},{value:"#f5f5f5",paraId:12,tocIndex:10},{value:"#121212",paraId:12,tocIndex:10},{value:"\u8FDB\u5EA6\u6761\u8F68\u9053\u989C\u8272",paraId:12,tocIndex:10},{value:"--progress-success-color",paraId:12,tocIndex:10},{value:"#22b35e",paraId:12,tocIndex:10},{value:"#34b368",paraId:12,tocIndex:10},{value:"\u8FDB\u5EA6\u6761\u6210\u529F\u989C\u8272",paraId:12,tocIndex:10},{value:"--progress-indicator-color",paraId:12,tocIndex:10},{value:"#333333",paraId:12,tocIndex:10},{value:"#c5cad1",paraId:12,tocIndex:10},{value:"\u8FDB\u5EA6\u6761\u6307\u793A\u5668\u989C\u8272",paraId:12,tocIndex:10},{value:"--progress-exception-color",paraId:12,tocIndex:10},{value:"#ff3141",paraId:12,tocIndex:10},{value:"#ff4a58",paraId:12,tocIndex:10},{value:"\u8FDB\u5EA6\u6761\u5F02\u5E38\u989C\u8272",paraId:12,tocIndex:10},{value:"--progress-assist-color",paraId:12,tocIndex:10},{value:"#999999",paraId:12,tocIndex:10},{value:"#616161",paraId:12,tocIndex:10},{value:"\u8FDB\u5EA6\u6761\u8F85\u52A9\u989C\u8272",paraId:12,tocIndex:10}]}}]);
