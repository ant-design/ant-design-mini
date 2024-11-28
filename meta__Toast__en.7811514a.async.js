"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[6656],{99483:function(o,e,a){a.r(e),a.d(e,{demos:function(){return d}});var t=a(67294),n=a(97443),d={"src-toast-demo-toast":{component:t.memo(t.lazy(function(){return a.e(2433).then(a.bind(a,12971))})),asset:{type:"BLOCK",id:"src-toast-demo-toast",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},44106:function(o,e,a){a.r(e),a.d(e,{texts:function(){return n}});var t=a(97443);const n=[{value:"Lightweight feedback on the results of the operation, without user action can disappear. The longest copy can be no more than 2 lines and can display up to 24 characters. If the copy is too long, it will be truncated.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-toast": "antd-mini/es/Toast/index"
#endif
#if WECHAT
  "ant-toast": "antd-mini/Toast/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-toast
  content="toast content"
  visible="{{toastShow}}"
  duration="{{0}}"
  showMask="{{true}}"
  maskCloseable="{{true}}"
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
`,paraId:4,tocIndex:3},{value:"Incoming ",paraId:5,tocIndex:4},{value:"type",paraId:5,tocIndex:4},{value:" property, you can use the built-in icon, optional ",paraId:5,tocIndex:4},{value:"success",paraId:5,tocIndex:4},{value:"\u3001",paraId:5,tocIndex:4},{value:"error",paraId:5,tocIndex:4},{value:"\u3001",paraId:5,tocIndex:4},{value:"warning",paraId:5,tocIndex:4},{value:"\u3001",paraId:5,tocIndex:4},{value:"loading",paraId:5,tocIndex:4},{value:". Support ",paraId:5,tocIndex:4},{value:"icon",paraId:5,tocIndex:4},{value:" property specifies ",paraId:5,tocIndex:4},{value:"ant-icon",paraId:6,tocIndex:4},{value:" type, also supports ",paraId:5,tocIndex:4},{value:"image",paraId:5,tocIndex:4},{value:" Property to customize the image.",paraId:5,tocIndex:4},{value:`<ant-toast content="success" type="success" visible="{{true}}" />
<ant-toast content="error" type="error" visible="{{true}}" />
<ant-toast content="warning" type="warning" visible="{{true}}" />
<ant-toast content="loading" type="loading" visible="{{true}}" />
<ant-toast content="icon" icon="LikeOutline" visible="{{true}}" />
<ant-toast content="custom image" image="https://gw.alipayobjects.com/mdn/rms_5118be/afts/img/A*4NPGQ66arP0AAAAAAAAAAAAAARQnAQ" visible="{{true}}" />
`,paraId:7,tocIndex:4},{value:"Property",paraId:8,tocIndex:6},{value:"Description",paraId:8,tocIndex:6},{value:"Type",paraId:8,tocIndex:6},{value:"Default Value",paraId:8,tocIndex:6},{value:"className",paraId:8,tocIndex:6},{value:"Component root node class name",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"content",paraId:8,tocIndex:6},{value:"Text content",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"duration",paraId:8,tocIndex:6},{value:"Duration, does not automatically close when 0",paraId:8,tocIndex:6},{value:"number",paraId:8,tocIndex:6},{value:"2000",paraId:8,tocIndex:6},{value:"maskCloseable",paraId:8,tocIndex:6},{value:"Click whether the mask is closed",paraId:8,tocIndex:6},{value:"boolean",paraId:8,tocIndex:6},{value:"false",paraId:8,tocIndex:6},{value:"icon",paraId:8,tocIndex:6},{value:"Icon, supports all types of Icon components",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"image",paraId:8,tocIndex:6},{value:"Picture Link",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"maskStyle",paraId:8,tocIndex:6},{value:"Mat Style",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"showMask",paraId:8,tocIndex:6},{value:"Whether to show the layer",paraId:8,tocIndex:6},{value:"boolean",paraId:8,tocIndex:6},{value:"false",paraId:8,tocIndex:6},{value:"style",paraId:8,tocIndex:6},{value:"Style",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"type",paraId:8,tocIndex:6},{value:"Built-in icon type, optional ",paraId:8,tocIndex:6},{value:"success",paraId:8,tocIndex:6},{value:" ",paraId:8,tocIndex:6},{value:"error",paraId:8,tocIndex:6},{value:" ",paraId:8,tocIndex:6},{value:"warning",paraId:8,tocIndex:6},{value:" ",paraId:8,tocIndex:6},{value:"loading",paraId:8,tocIndex:6},{value:" ",paraId:8,tocIndex:6},{value:"alipay",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"textType",paraId:8,tocIndex:6},{value:"Text type, optional ",paraId:8,tocIndex:6},{value:"short",paraId:8,tocIndex:6},{value:" ",paraId:8,tocIndex:6},{value:"long",paraId:8,tocIndex:6},{value:"the short type has a larger fillet",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"long",paraId:8,tocIndex:6},{value:"visible",paraId:8,tocIndex:6},{value:"Whether to hide",paraId:8,tocIndex:6},{value:"boolean",paraId:8,tocIndex:6},{value:"false",paraId:8,tocIndex:6},{value:"#if ALIPAY onClose",paraId:8,tocIndex:6},{value:"Callback after Toast is closed",paraId:8,tocIndex:6},{value:"(e) => void",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"#if WECHAT bind:close",paraId:8,tocIndex:6},{value:"Callback after Toast is closed",paraId:8,tocIndex:6},{value:"(e) => void",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:9,tocIndex:8},{value:"Variable name",paraId:10,tocIndex:8},{value:"Light Mode Default",paraId:10,tocIndex:8},{value:"Dark Mode Default",paraId:10,tocIndex:8},{value:"Remarks",paraId:10,tocIndex:8},{value:"--toast-default-bg",paraId:10,tocIndex:8},{value:"rgba(0, 0, 0, 0.75)",paraId:10,tocIndex:8},{value:"rgba(0, 0, 0, 0.75)",paraId:10,tocIndex:8},{value:"Toast Default Background Color",paraId:10,tocIndex:8},{value:"--toast-default-color",paraId:10,tocIndex:8},{value:"#ffffff",paraId:10,tocIndex:8},{value:"#ffffff",paraId:10,tocIndex:8},{value:"Toast default text color",paraId:10,tocIndex:8}]}}]);
