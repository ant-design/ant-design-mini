"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[7186],{2567:function(t,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),d=a(27203),I={"src-tab-bar-demo-tabbar":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,69291))})),asset:{type:"BLOCK",id:"src-tab-bar-demo-tabbar",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},58488:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(27203);const d=[{value:"\u7528\u4E8E\u5728\u4E0D\u540C\u9875\u9762\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-tab-bar": "antd-mini/es/TabBar/index"
#endif
#if WECHAT
  "ant-tab-bar": "antd-mini/TabBar/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-tab-bar items="{{tabs}}" />
<ant-tab-bar items="{{tabs}}" activeStyle="color:red;" />
#if ALIPAY
<ant-tab-bar items="{{tabs}}" current="{{current}}" onChange="handleChange" />
#endif
#if WECHAT
<ant-tab-bar items="{{tabs}}" current="{{current}}" bind:change="handleChange" />
#endif
`,paraId:3,tocIndex:3},{value:`Page({
  data: {
    tabs: [
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: 'homr',
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: 'favor',
      },
      {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: 'like',
      },
    ],
    current: 0,
  },
  handleChange(index) {
    console.log(index);
  },
});
`,paraId:4,tocIndex:3},{value:"\u5C5E\u6027",paraId:5,tocIndex:5},{value:"\u8BF4\u660E",paraId:5,tocIndex:5},{value:"\u7C7B\u578B",paraId:5,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:5},{value:"activeClassName",paraId:5,tocIndex:5},{value:"\u9009\u9879\u5361\u6FC0\u6D3B\u7C7B\u540D",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"activeStyle",paraId:5,tocIndex:5},{value:"\u9009\u9879\u5361\u6FC0\u6D3B\u6837\u5F0F",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"className",paraId:5,tocIndex:5},{value:"\u7C7B\u540D",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"current",paraId:5,tocIndex:5},{value:"\u9009\u4E2D\u9879",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"defaultCurrent",paraId:5,tocIndex:5},{value:"\u521D\u59CB\u9009\u4E2D\u9879",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"0",paraId:5,tocIndex:5},{value:"icon",paraId:5,tocIndex:5},{value:"\u9009\u9879\u5361\u56FE\u6807\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0C\u63A5\u6536 item\u3001index\u3001active \u53C2\u6570",paraId:5,tocIndex:5},{value:"slot",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"items",paraId:5,tocIndex:5},{value:"\u5E95\u90E8\u56FE\u6807\u914D\u7F6E",paraId:5,tocIndex:5},{value:"TabItem",paraId:6,tocIndex:5},{value:"[]",paraId:5,tocIndex:5},{value:"[]",paraId:5,tocIndex:5},{value:"style",paraId:5,tocIndex:5},{value:"\u6837\u5F0F",paraId:5,tocIndex:5},{value:"string",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"text",paraId:5,tocIndex:5},{value:"\u9009\u9879\u5361\u5E95\u90E8\u6587\u5B57\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0C\u63A5\u6536 item\u3001index\u3001active \u53C2\u6570",paraId:5,tocIndex:5},{value:"slot",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if ALIPAY onChange",paraId:5,tocIndex:5},{value:"Tab \u5207\u6362\u65F6\u89E6\u53D1\u56DE\u8C03",paraId:5,tocIndex:5},{value:"(index: number) => void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"#if WECHAT bind:change",paraId:5,tocIndex:5},{value:"Tab \u5207\u6362\u65F6\u89E6\u53D1\u56DE\u8C03",paraId:5,tocIndex:5},{value:"(index: number) => void",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"\u53C2\u6570",paraId:7,tocIndex:6},{value:"\u8BF4\u660E",paraId:7,tocIndex:6},{value:"\u7C7B\u578B",paraId:7,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:6},{value:"icon",paraId:7,tocIndex:6},{value:"\u5E95\u90E8\u56FE\u6807\uFF0C\u652F\u6301 ",paraId:7,tocIndex:6},{value:"Icon",paraId:8,tocIndex:6},{value:" \u6216\u56FE\u7247\u5730\u5740",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"activeIcon",paraId:7,tocIndex:6},{value:"\u6FC0\u6D3B\u72B6\u6001\u7684\u5E95\u90E8\u56FE\u6807\uFF0C\u652F\u6301 ",paraId:7,tocIndex:6},{value:"Icon",paraId:9,tocIndex:6},{value:" \u6216\u56FE\u7247\u5730\u5740",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"text",paraId:7,tocIndex:6},{value:"\u5E95\u90E8\u6587\u5B57",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"badge",paraId:7,tocIndex:6},{value:"\u5FBD\u6807\u7C7B\u578B\uFF0C\u53C2\u89C1 ",paraId:7,tocIndex:6},{value:"Badge",paraId:10,tocIndex:6},{value:" \u7EC4\u4EF6",paraId:7,tocIndex:6},{value:"object",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:11,tocIndex:8},{value:"\u53D8\u91CF\u540D",paraId:12,tocIndex:8},{value:"\u6D45\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:12,tocIndex:8},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:12,tocIndex:8},{value:"\u5907\u6CE8",paraId:12,tocIndex:8},{value:"--tabbar-bg",paraId:12,tocIndex:8},{value:"#ffffff",paraId:12,tocIndex:8},{value:"#1a1a1a",paraId:12,tocIndex:8},{value:"TabBar \u80CC\u666F\u989C\u8272",paraId:12,tocIndex:8},{value:"--tabbar-item-color",paraId:12,tocIndex:8},{value:"#666666",paraId:12,tocIndex:8},{value:"#808080",paraId:12,tocIndex:8},{value:"TabBar \u6761\u76EE\u989C\u8272",paraId:12,tocIndex:8},{value:"--tabbar-active-color",paraId:12,tocIndex:8},{value:"#1677ff",paraId:12,tocIndex:8},{value:"#3086ff",paraId:12,tocIndex:8},{value:"TabBar \u6FC0\u6D3B\u989C\u8272",paraId:12,tocIndex:8}]}}]);
