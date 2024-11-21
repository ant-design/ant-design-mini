"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[6426],{41028:function(t,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),d=a(58350),I={"src-guide-tour-demo-guidetour":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,95774))})),asset:{type:"BLOCK",id:"src-guide-tour-demo-guidetour",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},24135:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(58350);const d=[{value:"\u8499\u5C42\u4E0E\u81EA\u5B9A\u4E49\u5361\u7247\u7684\u5F15\u5BFC\u7EC4\u4EF6\u3002\u9002\u7528\u4E8E\u9875\u9762\u4E0A\u5173\u952E\u529F\u80FD\u7684\u4ECB\u7ECD\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-guide-tour": "antd-mini/es/GuideTour/index"
#endif
#if WECHAT
  "ant-guide-tour": "antd-mini/GuideTour/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-guide-tour
  items="{{ items }}"
  visible="{{ visible }}"
#if ALIPAY
  onCancel="closeTour"
  onChange="onChange"
#endif
#if WECHAT
  bind:cancel="closeTour"
  bind:change="onChange"
#endif
/>
`,paraId:3,tocIndex:3},{value:`Page({
  data: {
    visible: true,
    items: [
      { left: 20, top: 80, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/IV3MGP1qL/bianzu%25252013.png', imageMode: 'widthFix' },
      { left: 20, top: 160, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/%26B6d3lBJn/bianzu%25252020.png' },
      { left: 20, top: 220, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/lwVOkCcwb/bianzu%25252021.png' },
    ],
  },
  onChange(index) {
#if ALIPAY
    console.log('index', index);
#endif
  },
  closeTour() {
    this.setData({
      visible: false,
    });
  },
});
`,paraId:4,tocIndex:3},{value:`
<ant-guide-tour
  items="{{ items }}"
  current="{{ current }}"
  visible="{{ visible }}"
#if ALIPAY
  onCancel="closeTour"
  onChange="onChangeControlled"
#endif
#if WECHAT
  bind:cancel="closeTour"
  bind:change="onChangeControlled"
#endif
/>

`,paraId:5,tocIndex:4},{value:`Page({
  data: {
    visible: false,
    current: 0,
    items: [
      { left: 20, top: 80, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/IV3MGP1qL/bianzu%25252013.png', imageMode: 'widthFix' },
      { left: 20, top: 160, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/%26B6d3lBJn/bianzu%25252020.png' },
      { left: 20, top: 220, imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/lwVOkCcwb/bianzu%25252021.png' },
    ],
  },
  onChangeControlled(value) {
#if ALIPAY
    this.setData({ current: value });
#endif
#if WECHAT
    this.setData({ current: value.detail });
#endif
  },
  closeTour() {
    this.setData({
      visible: false
    });
  },
});


`,paraId:6,tocIndex:4},{value:"\u5C5E\u6027",paraId:7,tocIndex:6},{value:"\u8BF4\u660E",paraId:7,tocIndex:6},{value:"\u7C7B\u578B",paraId:7,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:6},{value:"className",paraId:7,tocIndex:6},{value:"\u7C7B\u540D",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"current",paraId:7,tocIndex:6},{value:"\u5F53\u524D\u6B65\u9AA4",paraId:7,tocIndex:6},{value:"number",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"defaultCurrent",paraId:7,tocIndex:6},{value:"\u9ED8\u8BA4\u5F53\u524D\u6B65\u9AA4",paraId:7,tocIndex:6},{value:"number",paraId:7,tocIndex:6},{value:"0",paraId:7,tocIndex:6},{value:"items",paraId:7,tocIndex:6},{value:"\u6B65\u9AA4\u4FE1\u606F",paraId:7,tocIndex:6},{value:"GuideTourItem",paraId:8,tocIndex:6},{value:"[]",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"maskClassName",paraId:7,tocIndex:6},{value:"\u8499\u5C42\u7684\u7C7B\u540D",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"maskStyle",paraId:7,tocIndex:6},{value:"\u8499\u5C42\u7684\u6837\u5F0F",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"style",paraId:7,tocIndex:6},{value:"\u6837\u5F0F",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"swiperable",paraId:7,tocIndex:6},{value:"\u662F\u5426\u5F00\u542F\u6ED1\u52A8\u6A21\u5F0F",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"false",paraId:7,tocIndex:6},{value:"visible",paraId:7,tocIndex:6},{value:"\u662F\u5426\u663E\u793A",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"false",paraId:7,tocIndex:6},{value:"jumpText",paraId:7,tocIndex:6},{value:"\u8DF3\u8FC7\u6309\u94AE\u7684\u6587\u6848",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"'\u8DF3\u8FC7'",paraId:7,tocIndex:6},{value:"prevStepText",paraId:7,tocIndex:6},{value:"\u4E0A\u4E00\u6B65\u6309\u94AE\u7684\u6587\u6848",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"'\u4E0A\u4E00\u6B65'",paraId:7,tocIndex:6},{value:"nextStepText",paraId:7,tocIndex:6},{value:"\u4E0B\u4E00\u6B65\u6309\u94AE\u7684\u6587\u6848",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"'\u4E0B\u4E00\u6B65'",paraId:7,tocIndex:6},{value:"gotItText",paraId:7,tocIndex:6},{value:"\u77E5\u9053\u4E86\u6309\u94AE\u7684\u6587\u6848",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"'\u77E5\u9053\u4E86'",paraId:7,tocIndex:6},{value:"#if ALIPAY onCancel",paraId:7,tocIndex:6},{value:"\u5173\u95ED\u56DE\u8C03",paraId:7,tocIndex:6},{value:"() => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"#if ALIPAY onChange",paraId:7,tocIndex:6},{value:"\u6B65\u9AA4\u6539\u53D8\u56DE\u8C03",paraId:7,tocIndex:6},{value:"(index: number) => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"#if WECHAT bind:cancel",paraId:7,tocIndex:6},{value:"\u5173\u95ED\u56DE\u8C03",paraId:7,tocIndex:6},{value:"() => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"#if WECHAT bind:change",paraId:7,tocIndex:6},{value:"\u6B65\u9AA4\u6539\u53D8\u56DE\u8C03",paraId:7,tocIndex:6},{value:"(index: number) => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"\u53C2\u6570",paraId:9,tocIndex:7},{value:"\u8BF4\u660E",paraId:9,tocIndex:7},{value:"\u7C7B\u578B",paraId:9,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:7},{value:"left",paraId:9,tocIndex:7},{value:"\u8DDD\u79BB\u5DE6\u8FB9\u8DDD\u79BB\uFF0C\u5355\u4F4D ",paraId:9,tocIndex:7},{value:"px",paraId:9,tocIndex:7},{value:"number",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"imageMode",paraId:9,tocIndex:7},{value:"\u56FE\u7247\u6A21\u5F0F\uFF0C\u540C image \u7684 mode",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"imageStyle",paraId:9,tocIndex:7},{value:"\u56FE\u7247\u5185\u8054\u6837\u5F0F",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"imageUrl",paraId:9,tocIndex:7},{value:"\u56FE\u7247\u5730\u5740",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"top",paraId:9,tocIndex:7},{value:"\u8DDD\u79BB\u9876\u90E8\u8DDD\u79BB\uFF0C\u5355\u4F4D ",paraId:9,tocIndex:7},{value:"px",paraId:9,tocIndex:7},{value:"number",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:10,tocIndex:9},{value:"\u53D8\u91CF\u540D",paraId:11,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:9},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:11,tocIndex:9},{value:"\u5907\u6CE8",paraId:11,tocIndex:9},{value:"--guide-tour-text-color",paraId:11,tocIndex:9},{value:"#ffffff",paraId:11,tocIndex:9},{value:"#ffffff",paraId:11,tocIndex:9},{value:"\u5F15\u5BFC\u6559\u7A0B\u6587\u672C\u989C\u8272",paraId:11,tocIndex:9},{value:"--guide-tour-clear-color",paraId:11,tocIndex:9},{value:"#999999",paraId:11,tocIndex:9},{value:"#616161",paraId:11,tocIndex:9},{value:"\u5F15\u5BFC\u6559\u7A0B\u6E05\u9664\u6309\u94AE\u989C\u8272",paraId:11,tocIndex:9},{value:"--guide-tour-dot-color",paraId:11,tocIndex:9},{value:"#999999",paraId:11,tocIndex:9},{value:"#616161",paraId:11,tocIndex:9},{value:"\u5F15\u5BFC\u6559\u7A0B\u6B65\u9AA4\u70B9\u989C\u8272",paraId:11,tocIndex:9},{value:"--guide-tour-border-color",paraId:11,tocIndex:9},{value:"#eeeeee",paraId:11,tocIndex:9},{value:"#2b2b2b",paraId:11,tocIndex:9},{value:"\u5F15\u5BFC\u6559\u7A0B\u8FB9\u6846\u989C\u8272",paraId:11,tocIndex:9},{value:"--guide-tour-btn-color",paraId:11,tocIndex:9},{value:"#333333",paraId:11,tocIndex:9},{value:"#c5cad1",paraId:11,tocIndex:9},{value:"\u5F15\u5BFC\u6559\u7A0B\u6309\u94AE\u989C\u8272",paraId:11,tocIndex:9}]}}]);
