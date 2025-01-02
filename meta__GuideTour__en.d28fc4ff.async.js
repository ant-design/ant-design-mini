"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[8825],{82394:function(t,e,a){a.r(e),a.d(e,{demos:function(){return o}});var n=a(67294),d=a(25769),o={"src-guide-tour-demo-guidetour":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,95774))})),asset:{type:"BLOCK",id:"src-guide-tour-demo-guidetour",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},72067:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(25769);const d=[{value:"Layer and custom card boot components. Applies to an introduction to key features on the page.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-guide-tour": "antd-mini/es/GuideTour/index"
#endif
#if WECHAT
  "ant-guide-tour": "antd-mini/GuideTour/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-guide-tour
  items="{{items}}"
  visible="{{visible}}"
#if ALIPAY
  onCancel="closeTour"
  onChange="onChange"
#endif
#if WECHAT
  bindcancel="closeTour"
  bindchange="onChange"
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
  items="{{items}}"
  current="{{current}}"
  visible="{{visible}}"
#if ALIPAY
  onCancel="closeTour"
  onChange="onChangeControlled"
#endif
#if WECHAT
  bindcancel="closeTour"
  bindchange="onChangeControlled"
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


`,paraId:6,tocIndex:4},{value:"Property",paraId:7,tocIndex:6},{value:"Description",paraId:7,tocIndex:6},{value:"Type",paraId:7,tocIndex:6},{value:"Default Value",paraId:7,tocIndex:6},{value:"className",paraId:7,tocIndex:6},{value:"Class Name",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"current",paraId:7,tocIndex:6},{value:"Current step",paraId:7,tocIndex:6},{value:"number",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"defaultCurrent",paraId:7,tocIndex:6},{value:"Default Current Step",paraId:7,tocIndex:6},{value:"number",paraId:7,tocIndex:6},{value:"0",paraId:7,tocIndex:6},{value:"items",paraId:7,tocIndex:6},{value:"Step Information",paraId:7,tocIndex:6},{value:"GuideTourItem",paraId:8,tocIndex:6},{value:"[]",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"maskClassName",paraId:7,tocIndex:6},{value:"Class name of the layer",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"maskStyle",paraId:7,tocIndex:6},{value:"The style of the layer",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"style",paraId:7,tocIndex:6},{value:"Style",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"swiperable",paraId:7,tocIndex:6},{value:"Whether sliding mode is on",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"false",paraId:7,tocIndex:6},{value:"visible",paraId:7,tocIndex:6},{value:"Whether to display",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"false",paraId:7,tocIndex:6},{value:"jumpText",paraId:7,tocIndex:6},{value:"Copy of skip button",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"'Skip'",paraId:7,tocIndex:6},{value:"prevStepText",paraId:7,tocIndex:6},{value:"Copy of the previous button",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"'One step'",paraId:7,tocIndex:6},{value:"nextStepText",paraId:7,tocIndex:6},{value:"Copy of the next button",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"'Next step'",paraId:7,tocIndex:6},{value:"gotItText",paraId:7,tocIndex:6},{value:"I know the copy of the button.",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:`"I know'`,paraId:7,tocIndex:6},{value:"#if ALIPAY onCancel",paraId:7,tocIndex:6},{value:"Close Callback",paraId:7,tocIndex:6},{value:"() => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"#if ALIPAY onChange",paraId:7,tocIndex:6},{value:"Step Change Callback",paraId:7,tocIndex:6},{value:"(index: number) => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"#if WECHAT bindcancel",paraId:7,tocIndex:6},{value:"Close Callback",paraId:7,tocIndex:6},{value:"() => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"#if WECHAT bindchange",paraId:7,tocIndex:6},{value:"Step Change Callback",paraId:7,tocIndex:6},{value:"(index: number) => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"Parameters",paraId:9,tocIndex:7},{value:"Description",paraId:9,tocIndex:7},{value:"Type",paraId:9,tocIndex:7},{value:"Default Value",paraId:9,tocIndex:7},{value:"left",paraId:9,tocIndex:7},{value:"Distance from left, in units ",paraId:9,tocIndex:7},{value:"px",paraId:9,tocIndex:7},{value:"number",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"imageMode",paraId:9,tocIndex:7},{value:"Image mode, same as image mode",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"imageStyle",paraId:9,tocIndex:7},{value:"Picture Inline Style",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"imageUrl",paraId:9,tocIndex:7},{value:"Picture Address",paraId:9,tocIndex:7},{value:"string",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"top",paraId:9,tocIndex:7},{value:"Distance from top, in units ",paraId:9,tocIndex:7},{value:"px",paraId:9,tocIndex:7},{value:"number",paraId:9,tocIndex:7},{value:"-",paraId:9,tocIndex:7},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:10,tocIndex:9},{value:"Variable name",paraId:11,tocIndex:9},{value:"Default Value",paraId:11,tocIndex:9},{value:"Dark Mode Default",paraId:11,tocIndex:9},{value:"Remarks",paraId:11,tocIndex:9},{value:"--guide-tour-text-color",paraId:11,tocIndex:9},{value:"#ffffff",paraId:11,tocIndex:9},{value:"#ffffff",paraId:11,tocIndex:9},{value:"Bootstrap Tutorial Text Color",paraId:11,tocIndex:9},{value:"--guide-tour-clear-color",paraId:11,tocIndex:9},{value:"#999999",paraId:11,tocIndex:9},{value:"#616161",paraId:11,tocIndex:9},{value:"Bootstrap Tutorial Clear Button Color",paraId:11,tocIndex:9},{value:"--guide-tour-dot-color",paraId:11,tocIndex:9},{value:"#999999",paraId:11,tocIndex:9},{value:"#616161",paraId:11,tocIndex:9},{value:"Guided Tutorial Step Point Color",paraId:11,tocIndex:9},{value:"--guide-tour-border-color",paraId:11,tocIndex:9},{value:"#eeeeee",paraId:11,tocIndex:9},{value:"#2b2b2b",paraId:11,tocIndex:9},{value:"Bootstrap Tutorial Border Color",paraId:11,tocIndex:9},{value:"--guide-tour-btn-color",paraId:11,tocIndex:9},{value:"#333333",paraId:11,tocIndex:9},{value:"#c5cad1",paraId:11,tocIndex:9},{value:"Bootstrap Tutorial Button Color",paraId:11,tocIndex:9}]}}]);
