"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[2432],{34307:function(d,e,a){a.r(e),a.d(e,{demos:function(){return o}});var n=a(67294),t=a(79248),o={"src-empty-demo-empty":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,2819))})),asset:{type:"BLOCK",id:"src-empty-demo-empty",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},93627:function(d,e,a){a.r(e),a.d(e,{texts:function(){return t}});var n=a(79248);const t=[{value:"Use the scene illustration as a feedback prompt for the empty state scene, when you need to display the empty state page or local empty state block.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
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
      Custom Action Buttons
    </ant-button>
  </view>
</ant-empty>
`,paraId:7,tocIndex:6},{value:"Property",paraId:8,tocIndex:8},{value:"Description",paraId:8,tocIndex:8},{value:"Type",paraId:8,tocIndex:8},{value:"Default Value",paraId:8,tocIndex:8},{value:"className",paraId:8,tocIndex:8},{value:"Root node class name",paraId:8,tocIndex:8},{value:"string",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"title",paraId:8,tocIndex:8},{value:"Title Copy",paraId:8,tocIndex:8},{value:"string | slot",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"image",paraId:8,tocIndex:8},{value:"Picture. You can pass in a string as the picture address.",paraId:8,tocIndex:8},{value:"string | slot",paraId:8,tocIndex:8},{value:"message",paraId:8,tocIndex:8},{value:"Description Copy",paraId:8,tocIndex:8},{value:"string | slot",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"style",paraId:8,tocIndex:8},{value:"Style",paraId:8,tocIndex:8},{value:"string",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"size",paraId:8,tocIndex:8},{value:"Empty status size, optional ",paraId:8,tocIndex:8},{value:"normal",paraId:8,tocIndex:8},{value:" ",paraId:8,tocIndex:8},{value:"small",paraId:8,tocIndex:8},{value:"string",paraId:8,tocIndex:8},{value:"normal",paraId:8,tocIndex:8},{value:"buttonInfo",paraId:8,tocIndex:8},{value:"Custom Button",paraId:8,tocIndex:8},{value:"ButtonInfo",paraId:9,tocIndex:8},{value:"normal",paraId:8,tocIndex:8},{value:"#if ALIPAY onClickButton",paraId:8,tocIndex:8},{value:"Click button callback",paraId:8,tocIndex:8},{value:"(item: ",paraId:8,tocIndex:8},{value:"ButtonInfoItem",paraId:10,tocIndex:8},{value:") => void",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"#if WECHAT bindclickbutton",paraId:8,tocIndex:8},{value:"Click button callback",paraId:8,tocIndex:8},{value:"(item: ",paraId:8,tocIndex:8},{value:"ButtonInfoItem",paraId:11,tocIndex:8},{value:") => void",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"Property",paraId:12,tocIndex:9},{value:"Description",paraId:12,tocIndex:9},{value:"Type",paraId:12,tocIndex:9},{value:"Default Value",paraId:12,tocIndex:9},{value:"layout",paraId:12,tocIndex:9},{value:"Layout mode, optional ",paraId:12,tocIndex:9},{value:"horizontal",paraId:12,tocIndex:9},{value:" ",paraId:12,tocIndex:9},{value:"vertical",paraId:12,tocIndex:9},{value:"string",paraId:12,tocIndex:9},{value:"horizontal",paraId:12,tocIndex:9},{value:"list",paraId:12,tocIndex:9},{value:"Layout button configuration",paraId:12,tocIndex:9},{value:"ButtonInfoItem",paraId:13,tocIndex:9},{value:"[]",paraId:12,tocIndex:9},{value:"-",paraId:12,tocIndex:9},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:14,tocIndex:11},{value:"Variable name",paraId:15,tocIndex:11},{value:"Default Value",paraId:15,tocIndex:11},{value:"Dark Mode Default",paraId:15,tocIndex:11},{value:"Remarks",paraId:15,tocIndex:11},{value:"--empty-text-color",paraId:15,tocIndex:11},{value:"#333333",paraId:15,tocIndex:11},{value:"#c5cad1",paraId:15,tocIndex:11},{value:"Empty status text color",paraId:15,tocIndex:11},{value:"--empty-asisst-text-color",paraId:15,tocIndex:11},{value:"#999999",paraId:15,tocIndex:11},{value:"#616161",paraId:15,tocIndex:11},{value:"Empty state secondary text color",paraId:15,tocIndex:11}]}}]);
