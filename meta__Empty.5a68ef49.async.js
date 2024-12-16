"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[7413],{70721:function(d,e,a){a.r(e),a.d(e,{demos:function(){return I}});var n=a(67294),t=a(86910),I={"src-empty-demo-empty":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,2819))})),asset:{type:"BLOCK",id:"src-empty-demo-empty",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},46542:function(d,e,a){a.r(e),a.d(e,{texts:function(){return t}});var n=a(86910);const t=[{value:"\u4F7F\u7528\u573A\u666F\u63D2\u753B\u6765\u4F5C\u4E3A\u7A7A\u72B6\u6001\u573A\u666F\u7684\u53CD\u9988\u63D0\u793A\uFF0C\u5728\u9700\u8981\u5C55\u793A\u7A7A\u72B6\u6001\u9875\u9762\u6216\u8005\u5C40\u90E8\u7A7A\u72B6\u6001\u533A\u5757\u65F6\u4F7F\u7528\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-empty": "antd-mini/es/Empty/index"
#endif
#if WECHAT
  "ant-empty": "antd-mini/Empty/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-empty
  size="small"
  title="Nothing Here"
  message="See Others"
/>
`,paraId:3,tocIndex:3},{value:`<ant-empty
  title="Nothing Here"
  message="See Others"
  image="{{imageUrl}}"
/>
`,paraId:4,tocIndex:4},{value:`<ant-empty
  title="Nothing Here"
  message="See Others"
  buttonInfo="{{horizontalButtonInfo}}"
#if ALIPAY
  onClickButton="onClickButton"
#endif
#if WECHAT
  bindclickbutton="onClickButton"
#endif
/>
`,paraId:5,tocIndex:5},{value:`const BUTTON_LIST = [
  {
    type: 'primary',
    text: 'refresh',
  },
  {
    type: 'default',
    text: 'checkout internet',
  },
];

Page({
  data: {
    // \u6C34\u5E73\u6309\u94AE\u5E03\u5C40
    horizontalButtonInfo: {
      layout: 'horizontal',
      list: BUTTON_LIST,
    },
    // \u5782\u76F4\u6309\u94AE\u5E03\u5C40
    verticalButtonInfo: {
      layout: 'vertical',
      list: BUTTON_LIST,
    },
  },
});
`,paraId:6,tocIndex:5},{value:`<ant-empty
  title="Nothing Here"
  message="See Others"
>
  <view slot="extra">
    <ant-button
      size="small"
      inline
    >
      \u81EA\u5B9A\u4E49\u64CD\u4F5C\u6309\u94AE
    </ant-button>
  </view>
</ant-empty>
`,paraId:7,tocIndex:6},{value:"\u5C5E\u6027",paraId:8,tocIndex:8},{value:"\u8BF4\u660E",paraId:8,tocIndex:8},{value:"\u7C7B\u578B",paraId:8,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:8},{value:"className",paraId:8,tocIndex:8},{value:"\u6839\u8282\u70B9\u7C7B\u540D",paraId:8,tocIndex:8},{value:"string",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"title",paraId:8,tocIndex:8},{value:"\u6807\u9898\u6587\u6848",paraId:8,tocIndex:8},{value:"string | slot",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"image",paraId:8,tocIndex:8},{value:"\u56FE\u7247\uFF0C\u53EF\u4F20\u5165\u5B57\u7B26\u4E32\u4F5C\u4E3A\u56FE\u7247\u5730\u5740",paraId:8,tocIndex:8},{value:"string | slot",paraId:8,tocIndex:8},{value:"message",paraId:8,tocIndex:8},{value:"\u63CF\u8FF0\u6587\u6848",paraId:8,tocIndex:8},{value:"string | slot",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"style",paraId:8,tocIndex:8},{value:"\u6837\u5F0F",paraId:8,tocIndex:8},{value:"string",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"size",paraId:8,tocIndex:8},{value:"\u7A7A\u72B6\u6001\u5C3A\u5BF8\uFF0C\u53EF\u9009 ",paraId:8,tocIndex:8},{value:"normal",paraId:8,tocIndex:8},{value:" ",paraId:8,tocIndex:8},{value:"small",paraId:8,tocIndex:8},{value:"string",paraId:8,tocIndex:8},{value:"normal",paraId:8,tocIndex:8},{value:"buttonInfo",paraId:8,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u6309\u94AE",paraId:8,tocIndex:8},{value:"ButtonInfo",paraId:9,tocIndex:8},{value:"normal",paraId:8,tocIndex:8},{value:"#if ALIPAY onClickButton",paraId:8,tocIndex:8},{value:"\u70B9\u51FB\u6309\u94AE\u56DE\u8C03",paraId:8,tocIndex:8},{value:"(item: ",paraId:8,tocIndex:8},{value:"ButtonInfoItem",paraId:10,tocIndex:8},{value:") => void",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"#if WECHAT bindclickbutton",paraId:8,tocIndex:8},{value:"\u70B9\u51FB\u6309\u94AE\u56DE\u8C03",paraId:8,tocIndex:8},{value:"(item: ",paraId:8,tocIndex:8},{value:"ButtonInfoItem",paraId:11,tocIndex:8},{value:") => void",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"\u5C5E\u6027",paraId:12,tocIndex:9},{value:"\u8BF4\u660E",paraId:12,tocIndex:9},{value:"\u7C7B\u578B",paraId:12,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:9},{value:"layout",paraId:12,tocIndex:9},{value:"\u5E03\u5C40\u65B9\u5F0F\uFF0C\u53EF\u9009 ",paraId:12,tocIndex:9},{value:"horizontal",paraId:12,tocIndex:9},{value:" ",paraId:12,tocIndex:9},{value:"vertical",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"horizontal",paraId:12,tocIndex:9},{value:"list",paraId:12,tocIndex:9},{value:"\u5E03\u5C40\u6309\u94AE\u914D\u7F6E",paraId:12,tocIndex:9},{value:"ButtonInfoItem",paraId:13,tocIndex:9},{value:"[]",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:14,tocIndex:11},{value:"\u53D8\u91CF\u540D",paraId:15,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:15,tocIndex:11},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:15,tocIndex:11},{value:"\u5907\u6CE8",paraId:15,tocIndex:11},{value:"--empty-text-color",paraId:15,tocIndex:11},{value:"#333333",paraId:15,tocIndex:11},{value:"#c5cad1",paraId:15,tocIndex:11},{value:"\u7A7A\u72B6\u6001\u6587\u672C\u989C\u8272",paraId:15,tocIndex:11},{value:"--empty-asisst-text-color",paraId:15,tocIndex:11},{value:"#999999",paraId:15,tocIndex:11},{value:"#616161",paraId:15,tocIndex:11},{value:"\u7A7A\u72B6\u6001\u8F85\u52A9\u6587\u672C\u989C\u8272",paraId:15,tocIndex:11}]}}]);
