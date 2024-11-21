"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[2826],{36938:function(t,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),d=a(2279),I={"src-toast-demo-toast":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,12971))})),asset:{type:"BLOCK",id:"src-toast-demo-toast",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},58254:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(2279);const d=[{value:"\u5BF9\u64CD\u4F5C\u7ED3\u679C\u7684\u8F7B\u91CF\u7EA7\u53CD\u9988\uFF0C\u65E0\u9700\u7528\u6237\u64CD\u4F5C\u5373\u53EF\u81EA\u884C\u6D88\u5931\u3002\u6700\u957F\u6587\u6848\u4E0D\u8D85\u8FC7 2 \u884C\uFF0C\u6700\u591A\u53EF\u4EE5\u663E\u793A 24 \u4E2A\u5B57\u7B26\uFF0C\u6587\u6848\u8FC7\u957F\u4F1A\u88AB\u622A\u65AD\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-toast": "antd-mini/es/Toast/index"
#endif
#if WECHAT
  "ant-toast": "antd-mini/Toast/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-toast
  content="toast content"
  visible="{{ toastShow }}"
  duration="{{ 0 }}"
  showMask="{{ true }}"
  maskCloseable="{{ true }}"
#if ALIPAY
  onClose="handleCloseToast"
#endif
#if WECHAT
  bind:close="handleCloseToast"
#endif
/>
`,paraId:3,tocIndex:3},{value:`Page({
  data: {
    toastShow: true,
  },
  handleCloseToast(e) {
    this.setData({
      toastShow: false,
    });
  },
});
`,paraId:4,tocIndex:3},{value:"\u4F20\u5165 ",paraId:5,tocIndex:4},{value:"type",paraId:5,tocIndex:4},{value:" \u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5185\u7F6E\u56FE\u6807\uFF0C\u53EF\u9009 ",paraId:5,tocIndex:4},{value:"success",paraId:5,tocIndex:4},{value:"\u3001",paraId:5,tocIndex:4},{value:"error",paraId:5,tocIndex:4},{value:"\u3001",paraId:5,tocIndex:4},{value:"warning",paraId:5,tocIndex:4},{value:"\u3001",paraId:5,tocIndex:4},{value:"loading",paraId:5,tocIndex:4},{value:"\u3002\u652F\u6301 ",paraId:5,tocIndex:4},{value:"icon",paraId:5,tocIndex:4},{value:" \u5C5E\u6027\u6307\u5B9A ",paraId:5,tocIndex:4},{value:"ant-icon",paraId:6,tocIndex:4},{value:" \u7C7B\u578B\uFF0C\u8FD8\u652F\u6301 ",paraId:5,tocIndex:4},{value:"image",paraId:5,tocIndex:4},{value:" \u5C5E\u6027\u81EA\u5B9A\u4E49\u56FE\u7247\u3002",paraId:5,tocIndex:4},{value:`<ant-toast content="success" type="success" visible="{{ true }}" />
<ant-toast content="error" type="error" visible="{{ true }}" />
<ant-toast content="warning" type="warning" visible="{{ true }}" />
<ant-toast content="loading" type="loading" visible="{{ true }}" />
<ant-toast content="icon" icon="LikeOutline" visible="{{ true }}" />
<ant-toast content="custom image" image="https://gw.alipayobjects.com/mdn/rms_5118be/afts/img/A*4NPGQ66arP0AAAAAAAAAAAAAARQnAQ" visible="{{ true }}" />
`,paraId:7,tocIndex:4},{value:"\u5C5E\u6027",paraId:8,tocIndex:6},{value:"\u8BF4\u660E",paraId:8,tocIndex:6},{value:"\u7C7B\u578B",paraId:8,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:6},{value:"className",paraId:8,tocIndex:6},{value:"\u7EC4\u4EF6\u6839\u8282\u70B9\u7C7B\u540D",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"content",paraId:8,tocIndex:6},{value:"\u6587\u672C\u5185\u5BB9",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"duration",paraId:8,tocIndex:6},{value:"\u6301\u7EED\u65F6\u95F4\uFF0C\u4E3A 0 \u65F6\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED",paraId:8,tocIndex:6},{value:"number",paraId:8,tocIndex:6},{value:"2000",paraId:8,tocIndex:6},{value:"maskCloseable",paraId:8,tocIndex:6},{value:"\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5173\u95ED",paraId:8,tocIndex:6},{value:"boolean",paraId:8,tocIndex:6},{value:"false",paraId:8,tocIndex:6},{value:"icon",paraId:8,tocIndex:6},{value:"\u56FE\u6807\uFF0C\u652F\u6301 Icon \u7EC4\u4EF6\u6240\u6709 type",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"image",paraId:8,tocIndex:6},{value:"\u56FE\u7247\u94FE\u63A5",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"maskStyle",paraId:8,tocIndex:6},{value:"\u8499\u5C42\u6837\u5F0F",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"showMask",paraId:8,tocIndex:6},{value:"\u662F\u5426\u5C55\u793A\u8499\u5C42",paraId:8,tocIndex:6},{value:"boolean",paraId:8,tocIndex:6},{value:"false",paraId:8,tocIndex:6},{value:"style",paraId:8,tocIndex:6},{value:"\u6837\u5F0F",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"type",paraId:8,tocIndex:6},{value:"\u5185\u7F6E\u56FE\u6807\u7C7B\u578B\uFF0C\u53EF\u9009 ",paraId:8,tocIndex:6},{value:"success",paraId:8,tocIndex:6},{value:" ",paraId:8,tocIndex:6},{value:"error",paraId:8,tocIndex:6},{value:" ",paraId:8,tocIndex:6},{value:"warning",paraId:8,tocIndex:6},{value:" ",paraId:8,tocIndex:6},{value:"loading",paraId:8,tocIndex:6},{value:" ",paraId:8,tocIndex:6},{value:"alipay",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"textType",paraId:8,tocIndex:6},{value:"\u6587\u5B57\u7C7B\u578B\uFF0C\u53EF\u9009 ",paraId:8,tocIndex:6},{value:"short",paraId:8,tocIndex:6},{value:" ",paraId:8,tocIndex:6},{value:"long",paraId:8,tocIndex:6},{value:"\uFF0Cshort \u7C7B\u578B\u7684\u5706\u89D2\u66F4\u5927",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"long",paraId:8,tocIndex:6},{value:"visible",paraId:8,tocIndex:6},{value:"\u662F\u5426\u9690\u85CF",paraId:8,tocIndex:6},{value:"boolean",paraId:8,tocIndex:6},{value:"false",paraId:8,tocIndex:6},{value:"#if ALIPAY onClose",paraId:8,tocIndex:6},{value:"Toast \u5173\u95ED\u540E\u7684\u56DE\u8C03",paraId:8,tocIndex:6},{value:"(e) => void",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"#if WECHAT bind:close",paraId:8,tocIndex:6},{value:"Toast \u5173\u95ED\u540E\u7684\u56DE\u8C03",paraId:8,tocIndex:6},{value:"(e) => void",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:9,tocIndex:8},{value:"\u53D8\u91CF\u540D",paraId:10,tocIndex:8},{value:"\u6D45\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:10,tocIndex:8},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:10,tocIndex:8},{value:"\u5907\u6CE8",paraId:10,tocIndex:8},{value:"--toast-default-bg",paraId:10,tocIndex:8},{value:"rgba(0, 0, 0, 0.75)",paraId:10,tocIndex:8},{value:"rgba(0, 0, 0, 0.75)",paraId:10,tocIndex:8},{value:"Toast \u9ED8\u8BA4\u80CC\u666F\u989C\u8272",paraId:10,tocIndex:8},{value:"--toast-default-color",paraId:10,tocIndex:8},{value:"#ffffff",paraId:10,tocIndex:8},{value:"#ffffff",paraId:10,tocIndex:8},{value:"Toast \u9ED8\u8BA4\u6587\u5B57\u989C\u8272",paraId:10,tocIndex:8}]}}]);
