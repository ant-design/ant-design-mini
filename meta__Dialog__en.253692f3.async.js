"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[9530],{3206:function(o,e,a){a.r(e),a.d(e,{demos:function(){return d}});var t=a(67294),n=a(65846),d={"src-dialog-demo-dialog":{component:t.memo(t.lazy(function(){return a.e(2433).then(a.bind(a,63243))})),asset:{type:"BLOCK",id:"src-dialog-demo-dialog",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},93187:function(o,e,a){a.r(e),a.d(e,{texts:function(){return n}});var t=a(65846);const n=[{value:"When the application needs to alert or remind the current operation behavior of the user, the dialog box may be used. The user needs to operate on the dialog box before ending.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-dialog": "antd-mini/es/Dialog/index"
#endif
#if WECHAT
  "ant-dialog": "antd-mini/Dialog/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-dialog
  content="\u4EBAIn\u5929\u8FB9\u6708\u4E0A\u660E"
  visible="{{visible}}"
  closable="{{false}}"
  footer="{{footer}}"
  primaryButtonText="\u6211\u77E5\u9053\u4E86"
#if ALIPAY
  onButtonTap="onButtonTap"
  onClose="handleClose"
#endif
#if WECHAT
  bindbuttontap="onButtonTap"
  bindclose="handleClose"
#endif
  />
`,paraId:3,tocIndex:3},{value:`Page({
  data: {
    visible: false,
    footer: {
      buttons: [{ text: '\u6211\u77E5\u9053\u4E86' }],
    },
  },
  onButtonTap(buttonItem) {
    console.log('\u70B9\u51FB\u7684\u6309\u94AE: ', buttonItem);
#if ALIPAY
    my.showToast({ content: \`\u70B9\u51FB\u4E86\${buttonItem.text}\`, duration: 1000 });
#endif
#if WECHAT
    wx.showToast({ title: \`\u70B9\u51FB\u4E86\${buttonItem.text}\` });
#endif
    this.handleClose();
  },
  handleClose() {
    this.setData({
      visible: false,
    });
  },
});
`,paraId:4,tocIndex:3},{value:"footer",paraId:5,tocIndex:4},{value:" property supports the passing in of multiple action points, and you can specify ",paraId:5,tocIndex:4},{value:"layout",paraId:5,tocIndex:4},{value:" For ",paraId:5,tocIndex:4},{value:"vertical",paraId:5,tocIndex:4},{value:"or",paraId:5,tocIndex:4},{value:"horizontal",paraId:5,tocIndex:4},{value:"That is, the horizontal and vertical layout of the action point.",paraId:5,tocIndex:4},{value:`<ant-dialog
  title="\u786E\u5B9A\u5220\u9664\u5417\uFF1F"
  content="\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D"
  visible="{{true}}"
  footer="{{horizontalFooter}}"
/>
`,paraId:6,tocIndex:4},{value:`Page({
  data: {
    // \u6A2A\u5411\u5E03\u5C40
    horizontalFooter: {
      buttons: [
        { text: '\u53D6\u6D88', type: 'default' },
        { text: '\u786E\u5B9A', type: 'primary' },
      ],
      layout: 'horizontal',
    },
    // \u7EB5\u5411\u5E03\u5C40
    verticalFooter: {
      buttons: [
        { text: '\u4E3B\u6309\u94AE', type: 'primary' },
        { text: '\u66F4\u591A', type: 'default' },
        { text: '\u53D6\u6D88', type: 'text' },
      ],
    },
  },
});
`,paraId:7,tocIndex:4},{value:"Property",paraId:8,tocIndex:6},{value:"Description",paraId:8,tocIndex:6},{value:"Type",paraId:8,tocIndex:6},{value:"Default Value",paraId:8,tocIndex:6},{value:"bodyClassName",paraId:8,tocIndex:6},{value:"body class name",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"bodyStyle",paraId:8,tocIndex:6},{value:"body style",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"cancelButtonStyle",paraId:8,tocIndex:6},{value:"Cancel Button Style",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"cancelButtonText",paraId:8,tocIndex:6},{value:"Cancel Button Text",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"className",paraId:8,tocIndex:6},{value:"Class Name",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"closable",paraId:8,tocIndex:6},{value:"Whether to display the close button in the upper right corner. Valid only when type is focus",paraId:8,tocIndex:6},{value:"boolean",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"content",paraId:8,tocIndex:6},{value:"Content",paraId:8,tocIndex:6},{value:"string|slot",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"destroyOnClose",paraId:8,tocIndex:6},{value:"Whether to unload content when invisible",paraId:8,tocIndex:6},{value:"boolean",paraId:8,tocIndex:6},{value:"false",paraId:8,tocIndex:6},{value:"footer",paraId:8,tocIndex:6},{value:"Custom Button Area",paraId:8,tocIndex:6},{value:"slot",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"maskClosable",paraId:8,tocIndex:6},{value:"Click whether the layer triggers the onClose.",paraId:8,tocIndex:6},{value:"boolean",paraId:8,tocIndex:6},{value:"true",paraId:8,tocIndex:6},{value:"maskClassName",paraId:8,tocIndex:6},{value:"Class name of the layer",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"maskStyle",paraId:8,tocIndex:6},{value:"Mask Style",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"style",paraId:8,tocIndex:6},{value:"Style",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"title",paraId:8,tocIndex:6},{value:"Title",paraId:8,tocIndex:6},{value:"string|slot",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"visible",paraId:8,tocIndex:6},{value:"Whether to display",paraId:8,tocIndex:6},{value:"boolean",paraId:8,tocIndex:6},{value:"false",paraId:8,tocIndex:6},{value:"#if ALIPAY onCancelButtonTap",paraId:8,tocIndex:6},{value:"Cancel button click event",paraId:8,tocIndex:6},{value:"()=>void",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"#if ALIPAY onClose",paraId:8,tocIndex:6},{value:"Click the close button in the upper right corner in the layer or emphasis mode to trigger the callback",paraId:8,tocIndex:6},{value:"()=>void",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"#if ALIPAY onButtonTap",paraId:8,tocIndex:6},{value:"Behavior button click event",paraId:8,tocIndex:6},{value:"()=>void",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"#if WECHAT bindclose",paraId:8,tocIndex:6},{value:"Click the close button in the upper right corner in the layer or emphasis mode to trigger the callback",paraId:8,tocIndex:6},{value:"()=>void",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"#if WECHAT bindbuttontap",paraId:8,tocIndex:6},{value:"Behavior button click event",paraId:8,tocIndex:6},{value:"()=>void",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:9,tocIndex:8},{value:"Variable name",paraId:10,tocIndex:8},{value:"Default Value",paraId:10,tocIndex:8},{value:"Dark Mode Default",paraId:10,tocIndex:8},{value:"Remarks",paraId:10,tocIndex:8},{value:"--dialog-background-color",paraId:10,tocIndex:8},{value:"#ffffff",paraId:10,tocIndex:8},{value:"#1a1a1a",paraId:10,tocIndex:8},{value:"Modal Box Background Color",paraId:10,tocIndex:8},{value:"--dialog-title-color",paraId:10,tocIndex:8},{value:"#333333",paraId:10,tocIndex:8},{value:"#c5cad1",paraId:10,tocIndex:8},{value:"Modal Box Title Color",paraId:10,tocIndex:8},{value:"--dialog-content-color",paraId:10,tocIndex:8},{value:"#333333",paraId:10,tocIndex:8},{value:"#c5cad1",paraId:10,tocIndex:8},{value:"Modal Box Content Color",paraId:10,tocIndex:8},{value:"--dialog-close-text-color",paraId:10,tocIndex:8},{value:"#999999",paraId:10,tocIndex:8},{value:"#616161",paraId:10,tocIndex:8},{value:"Modal Box Close Button Text Color",paraId:10,tocIndex:8}]}}]);
