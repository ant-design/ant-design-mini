"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[62],{2941:function(I,e,a){a.r(e),a.d(e,{demos:function(){return t}});var n=a(67294),d=a(99257),t={"src-rate-demo-rate":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,17642))})),asset:{type:"BLOCK",id:"src-rate-demo-rate",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},4712:function(I,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(99257);const d=[{value:"\u7528\u4E8E\u5C55\u793A\u4E8B\u7269\u8BC4\u7EA7\u4EE5\u53CA\u5FEB\u901F\u6253\u5206\u7684\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-rate": "antd-mini/es/Rate/index"
#endif
#if WECHAT
  "ant-radio": "antd-mini/Rate/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"count",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u6307\u5B9A star \u603B\u6570\uFF0C ",paraId:3,tocIndex:3},{value:"allowHalf",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u5141\u8BB8\u534A\u661F\uFF0C ",paraId:3,tocIndex:3},{value:"allowClear",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u5141\u8BB8\u518D\u6B21\u70B9\u51FB\u540E\u6E05\u9664\u3002",paraId:3,tocIndex:3},{value:`<ant-rate
  defaultValue="{{ 3.5 }}"
  count="{{ 5 }}"
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
`,paraId:5,tocIndex:3},{value:`<ant-rate defaultValue="{{ 3 }}" readonly />
`,paraId:6,tocIndex:4},{value:"value",paraId:7,tocIndex:5},{value:" \u5C5E\u6027\u548C ",paraId:7,tocIndex:5},{value:"change",paraId:7,tocIndex:5},{value:" \u4E8B\u4EF6\uFF0C\u914D\u5408\u53EF\u4EE5\u5B9E\u73B0\u53D7\u63A7\u6A21\u5F0F\u3002\u8FD9\u91CC\u7684\u4F8B\u5B50\u4E2D\u901A\u8FC7 ",paraId:7,tocIndex:5},{value:"ant-stepper",paraId:7,tocIndex:5},{value:" \u7EC4\u4EF6\u6539\u53D8 ",paraId:7,tocIndex:5},{value:"value",paraId:7,tocIndex:5},{value:" \u72B6\u6001\uFF0C",paraId:7,tocIndex:5},{value:"ant-rate",paraId:7,tocIndex:5},{value:" \u7EC4\u4EF6 ",paraId:7,tocIndex:5},{value:"value",paraId:7,tocIndex:5},{value:" \u72B6\u6001\u4E5F\u80FD\u4E00\u8D77\u53D8\u5316\u3002",paraId:7,tocIndex:5},{value:`<ant-rate
  value="{{ value }}"
#if ALIPAY
  onChange="handleChange"
#endif
#if WECHAT
  bind:change="handleChange"
#endif
/>
<ant-stepper
  value="{{ value }}"
  min="{{ 0 }}"
  max="{{ 5 }}"
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
`,paraId:9,tocIndex:5},{value:"\u53C2\u8003\u4E0B\u9762 ",paraId:10,tocIndex:6},{value:"Demo \u4EE3\u7801",paraId:11,tocIndex:6},{value:" \u4E2D\u7684\u5B9E\u73B0\u3002",paraId:10,tocIndex:6},{value:"\u5C5E\u6027",paraId:12,tocIndex:8},{value:"\u8BF4\u660E",paraId:12,tocIndex:8},{value:"\u7C7B\u578B",paraId:12,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:8},{value:"allowHalf",paraId:12,tocIndex:8},{value:"\u662F\u5426\u5141\u8BB8\u534A\u661F",paraId:12,tocIndex:8},{value:"boolean",paraId:12,tocIndex:8},{value:"false",paraId:12,tocIndex:8},{value:"allowClear",paraId:12,tocIndex:8},{value:"\u662F\u5426\u5141\u8BB8\u518D\u6B21\u70B9\u51FB\u540E\u6E05\u9664",paraId:12,tocIndex:8},{value:"boolean",paraId:12,tocIndex:8},{value:"true",paraId:12,tocIndex:8},{value:"className",paraId:12,tocIndex:8},{value:"\u7C7B\u540D",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"character",paraId:12,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u5B57\u7B26",paraId:12,tocIndex:8},{value:"slot",paraId:12,tocIndex:8},{value:'<icon type="StarFill" />',paraId:12,tocIndex:8},{value:"characterActiveClassName",paraId:12,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u5B57\u7B26\u9009\u4E2D\u72B6\u6001\u7C7B\u540D",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"characterClassName",paraId:12,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u5B57\u7B26\u7C7B\u540D",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"count",paraId:12,tocIndex:8},{value:"star \u603B\u6570",paraId:12,tocIndex:8},{value:"number",paraId:12,tocIndex:8},{value:"5",paraId:12,tocIndex:8},{value:"defaultValue",paraId:12,tocIndex:8},{value:"\u521D\u59CB\u503C",paraId:12,tocIndex:8},{value:"number",paraId:12,tocIndex:8},{value:"0",paraId:12,tocIndex:8},{value:"gutter",paraId:12,tocIndex:8},{value:"\u95F4\u8DDD\uFF0C\u5355\u4F4D ",paraId:12,tocIndex:8},{value:"px",paraId:12,tocIndex:8},{value:"number",paraId:12,tocIndex:8},{value:"4",paraId:12,tocIndex:8},{value:"readonly",paraId:12,tocIndex:8},{value:"\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u8FDB\u884C\u4EA4\u4E92",paraId:12,tocIndex:8},{value:"boolean",paraId:12,tocIndex:8},{value:"false",paraId:12,tocIndex:8},{value:"style",paraId:12,tocIndex:8},{value:"\u6837\u5F0F",paraId:12,tocIndex:8},{value:"string",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"value",paraId:12,tocIndex:8},{value:"\u661F\u7EA7\uFF08\u53D7\u63A7\uFF09",paraId:12,tocIndex:8},{value:"number",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"#if ALIPAY onChange",paraId:12,tocIndex:8},{value:"\u6253\u5206\u56DE\u8C03\u51FD\u6570",paraId:12,tocIndex:8},{value:"(rate: number) => void",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"#if WECHAT bind:change",paraId:12,tocIndex:8},{value:"\u6253\u5206\u56DE\u8C03\u51FD\u6570",paraId:12,tocIndex:8},{value:"(rate: number) => void",paraId:12,tocIndex:8},{value:"-",paraId:12,tocIndex:8},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:13,tocIndex:10},{value:"\u53D8\u91CF\u540D",paraId:14,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:10},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:14,tocIndex:10},{value:"\u5907\u6CE8",paraId:14,tocIndex:10},{value:"--rate-active-icon",paraId:14,tocIndex:10},{value:"#ff9f18",paraId:14,tocIndex:10},{value:"#ffa930",paraId:14,tocIndex:10},{value:"Rate \u6FC0\u6D3B\u72B6\u6001\u7684\u56FE\u6807\u989C\u8272",paraId:14,tocIndex:10},{value:"--rate-icon-color",paraId:14,tocIndex:10},{value:"#eeeeee",paraId:14,tocIndex:10},{value:"#2b2b2b",paraId:14,tocIndex:10},{value:"Rate \u9ED8\u8BA4\u56FE\u6807\u989C\u8272",paraId:14,tocIndex:10}]}}]);
