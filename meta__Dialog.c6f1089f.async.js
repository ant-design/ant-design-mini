"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[4470],{67300:function(t,e,a){a.r(e),a.d(e,{demos:function(){return o}});var n=a(67294),d=a(88782),o={"src-dialog-demo-dialog":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,63243))})),asset:{type:"BLOCK",id:"src-dialog-demo-dialog",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},50158:function(t,e,a){a.r(e),a.d(e,{texts:function(){return d}});var n=a(88782);const d=[{value:"\u5F53\u5E94\u7528\u4E2D\u9700\u8981\u6BD4\u8F83\u660E\u663E\u7684\u5BF9\u7528\u6237\u5F53\u524D\u7684\u64CD\u4F5C\u884C\u4E3A\u8FDB\u884C\u8B66\u793A\u6216\u63D0\u9192\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5BF9\u8BDD\u6846\u3002\u7528\u6237\u9700\u8981\u9488\u5BF9\u5BF9\u8BDD\u6846\u8FDB\u884C\u64CD\u4F5C\u540E\u65B9\u53EF\u7ED3\u675F\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-dialog": "antd-mini/es/Dialog/index"
#endif
#if WECHAT
  "ant-dialog": "antd-mini/Dialog/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-dialog
  content="\u4EBA\u5728\u5929\u8FB9\u6708\u4E0A\u660E"
  visible="{{visible}}"
  closable="{{false}}"
  footer="{{footer}}"
  primaryButtonText="\u6211\u77E5\u9053\u4E86"
#if ALIPAY
  onButtonTap="onButtonTap"
  onClose="handleClose"
#endif
#if WECHAT
  bind:buttontap="onButtonTap"
  bind:close="handleClose"
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
`,paraId:4,tocIndex:3},{value:"footer",paraId:5,tocIndex:4},{value:" \u5C5E\u6027\u652F\u6301\u4F20\u5165\u591A\u4E2A\u884C\u52A8\u70B9\uFF0C\u5E76\u4E14\u53EF\u4EE5\u6307\u5B9A ",paraId:5,tocIndex:4},{value:"layout",paraId:5,tocIndex:4},{value:" \u4E3A ",paraId:5,tocIndex:4},{value:"vertical",paraId:5,tocIndex:4},{value:"\u6216",paraId:5,tocIndex:4},{value:"horizontal",paraId:5,tocIndex:4},{value:"\uFF0C\u5373\u884C\u52A8\u70B9\u6A2A\u5411\u3001\u7EB5\u5411\u5E03\u5C40\u3002",paraId:5,tocIndex:4},{value:`<ant-dialog
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
`,paraId:7,tocIndex:4},{value:"\u5C5E\u6027",paraId:8,tocIndex:6},{value:"\u8BF4\u660E",paraId:8,tocIndex:6},{value:"\u7C7B\u578B",paraId:8,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:6},{value:"bodyClassName",paraId:8,tocIndex:6},{value:"body \u7C7B\u540D",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"bodyStyle",paraId:8,tocIndex:6},{value:"body \u6837\u5F0F",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"cancelButtonStyle",paraId:8,tocIndex:6},{value:"\u53D6\u6D88\u6309\u94AE\u6837\u5F0F",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"cancelButtonText",paraId:8,tocIndex:6},{value:"\u53D6\u6D88\u6309\u94AE\u6587\u672C",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"className",paraId:8,tocIndex:6},{value:"\u7C7B\u540D",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"closable",paraId:8,tocIndex:6},{value:"\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE\u3002\u4EC5\u5728 type \u4E3A focus \u751F\u6548",paraId:8,tocIndex:6},{value:"boolean",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"content",paraId:8,tocIndex:6},{value:"\u5185\u5BB9",paraId:8,tocIndex:6},{value:"string|slot",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"destroyOnClose",paraId:8,tocIndex:6},{value:"\u4E0D\u53EF\u89C1\u65F6\u662F\u5426\u5378\u8F7D\u5185\u5BB9",paraId:8,tocIndex:6},{value:"boolean",paraId:8,tocIndex:6},{value:"false",paraId:8,tocIndex:6},{value:"footer",paraId:8,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u6309\u94AE\u533A",paraId:8,tocIndex:6},{value:"slot",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"maskClosable",paraId:8,tocIndex:6},{value:"\u70B9\u51FB\u8499\u5C42\u662F\u5426\u89E6\u53D1 onClose",paraId:8,tocIndex:6},{value:"boolean",paraId:8,tocIndex:6},{value:"true",paraId:8,tocIndex:6},{value:"maskClassName",paraId:8,tocIndex:6},{value:"\u8499\u5C42\u7684\u7C7B\u540D",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"maskStyle",paraId:8,tocIndex:6},{value:"\u8499\u5C42\u7684\u6837\u5F0F",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"style",paraId:8,tocIndex:6},{value:"\u6837\u5F0F",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"title",paraId:8,tocIndex:6},{value:"\u6807\u9898",paraId:8,tocIndex:6},{value:"string|slot",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"visible",paraId:8,tocIndex:6},{value:"\u662F\u5426\u663E\u793A",paraId:8,tocIndex:6},{value:"boolean",paraId:8,tocIndex:6},{value:"false",paraId:8,tocIndex:6},{value:"#if ALIPAY onCancelButtonTap",paraId:8,tocIndex:6},{value:"\u53D6\u6D88\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6",paraId:8,tocIndex:6},{value:"()=>void",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"#if ALIPAY onClose",paraId:8,tocIndex:6},{value:"\u70B9\u51FB\u8499\u5C42\u6216\u5F3A\u8C03\u6A21\u5F0F\u4E0B\u70B9\u51FB\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:8,tocIndex:6},{value:"()=>void",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"#if ALIPAY onButtonTap",paraId:8,tocIndex:6},{value:"\u884C\u4E3A\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6",paraId:8,tocIndex:6},{value:"()=>void",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"#if WECHAT bind:close",paraId:8,tocIndex:6},{value:"\u70B9\u51FB\u8499\u5C42\u6216\u5F3A\u8C03\u6A21\u5F0F\u4E0B\u70B9\u51FB\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:8,tocIndex:6},{value:"()=>void",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"#if WECHAT bind:buttontap",paraId:8,tocIndex:6},{value:"\u884C\u4E3A\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6",paraId:8,tocIndex:6},{value:"()=>void",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:9,tocIndex:8},{value:"\u53D8\u91CF\u540D",paraId:10,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:8},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:10,tocIndex:8},{value:"\u5907\u6CE8",paraId:10,tocIndex:8},{value:"--dialog-background-color",paraId:10,tocIndex:8},{value:"#ffffff",paraId:10,tocIndex:8},{value:"#1a1a1a",paraId:10,tocIndex:8},{value:"\u6A21\u6001\u6846\u80CC\u666F\u989C\u8272",paraId:10,tocIndex:8},{value:"--dialog-title-color",paraId:10,tocIndex:8},{value:"#333333",paraId:10,tocIndex:8},{value:"#c5cad1",paraId:10,tocIndex:8},{value:"\u6A21\u6001\u6846\u6807\u9898\u989C\u8272",paraId:10,tocIndex:8},{value:"--dialog-content-color",paraId:10,tocIndex:8},{value:"#333333",paraId:10,tocIndex:8},{value:"#c5cad1",paraId:10,tocIndex:8},{value:"\u6A21\u6001\u6846\u5185\u5BB9\u989C\u8272",paraId:10,tocIndex:8},{value:"--dialog-close-text-color",paraId:10,tocIndex:8},{value:"#999999",paraId:10,tocIndex:8},{value:"#616161",paraId:10,tocIndex:8},{value:"\u6A21\u6001\u6846\u5173\u95ED\u6309\u94AE\u6587\u5B57\u989C\u8272",paraId:10,tocIndex:8}]}}]);
