"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[5622],{15900:function(t,a,e){e.r(a),e.d(a,{demos:function(){return I}});var n=e(67294),d=e(86801),I={"src-action-sheet-demo-actionsheet":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,10634))})),asset:{type:"BLOCK",id:"src-action-sheet-demo-actionsheet",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},47055:function(t,a,e){e.r(a),e.d(a,{texts:function(){return d}});var n=e(86801);const d=[{value:"\u4ECE\u5E95\u90E8\u5F39\u51FA\u7684\u52A8\u4F5C\u83DC\u5355\u9762\u677F\u3002\u7531\u7528\u6237\u64CD\u4F5C\u89E6\u53D1\uFF0C\u63D0\u4F9B\u4E00\u7EC4\u4E0E\u64CD\u4F5C\u76F8\u5173\u7684\u4E24\u4E2A\u6216\u591A\u4E2A\u9009\u9879\uFF0C\u8BA9\u7528\u6237\u5728\u4E0D\u79BB\u573A\u7684\u60C5\u51B5\u4E0B\u5B8C\u6210\u64CD\u4F5C\u3002\u76F8\u6BD4\u4E8E\u5BF9\u8BDD\u6846\uFF0C\u52A8\u4F5C\u9762\u677F\u7684\u4F4D\u7F6E\u66F4\u9002\u5408\u4E8E\u5728\u5927\u5C4F\u5E55\u65F6\u4EE3\u5355\u624B\u64CD\u4F5C\u7684\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-action-sheet": "antd-mini/es/ActionSheet/index"
#endif
#if WECHAT
  "ant-action-sheet": "antd-mini/ActionSheet/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"ant-action-sheet",paraId:3,tocIndex:3},{value:" \u7EC4\u4EF6\u5FC5\u987B\u901A\u8FC7 ",paraId:3,tocIndex:3},{value:"visible",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u63A7\u5236\u663E\u793A/\u9690\u85CF\u72B6\u6001\u3002",paraId:3,tocIndex:3},{value:"actions",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u4F20\u5165\u6570\u636E\u9A71\u52A8\u9009\u9879\u6E32\u67D3\u3002",paraId:3,tocIndex:3},{value:`<ant-action-sheet
  title="choose your operation"
  visible="{{ visible }}"
  actions="{{ actions }}"
#if ALIPAY
  onAction="handleAction"
  onClose="handleClose"
#endif
#if WECHAT
  bind:action="handleAction"
  bind:close="handleClose"
#endif
/>

<ant-button
  inline="{{ true }}"
  size="large"
#if ALIPAY
  onTap="handleOpen"
#endif
#if WECHAT
  bind:tap="handleOpen"
#endif
>
  \u6253\u5F00\u9762\u677F
</ant-button>
`,paraId:4,tocIndex:3},{value:`Page({
  data: {
    visible: true,
    actions: [
      {
        text: 'copy',
        key: 'copy',
      },
      {
        text: 'modify',
        key: 'modify',
      },
    ],
  },
  handleOpen() {
    this.setData({
      visible: true,
    });
  },
  handleClose(e) {
    this.setData({
      visible: false,
    });
  },
  handleAction(item, index, e) {
#if ALIPAY
    if (item.key === 'delete') {
      my.confirm({
        content: 'are you sure?',
      });
      return;
    }
    my.alert({ content: \`you clicked \${item.key}\` });
#endif
#if WECHAT
    const [clickItem, clickIndex] = item.detail;
    wx.showToast({ title: \`you clicked \${clickItem.key}(\${clickIndex})\` });
#endif
  },
});
`,paraId:5,tocIndex:3},{value:"actions",paraId:6,tocIndex:4},{value:" \u7684\u6BCF\u4E00\u9879\u63D0\u4F9B ",paraId:7,tocIndex:4},{value:"icon",paraId:7,tocIndex:4},{value:" ",paraId:7,tocIndex:4},{value:"danger",paraId:7,tocIndex:4},{value:" ",paraId:7,tocIndex:4},{value:"description",paraId:7,tocIndex:4},{value:" ",paraId:7,tocIndex:4},{value:"disabled",paraId:7,tocIndex:4},{value:" \u7528\u6765\u8BBE\u7F6E\u9009\u9879\u72B6\u6001\u3002",paraId:7,tocIndex:4},{value:`<ant-action-sheet
  title="\u8BF7\u9009\u62E9\u4F60\u8981\u8FDB\u884C\u7684\u64CD\u4F5C"
  actions="{{ actions }}"
/>
`,paraId:8,tocIndex:4},{value:`Page({
  data: {
    actions: [
      {
        text: 'copy',
        key: 'copy',
        description: 'select copy content',
      },
      {
        text: 'modify',
        key: 'modify',
        disabled: true,
      },
      {
        text: 'delete',
        key: 'delete',
        danger: true,
      },
      {
        text: 'backup',
        key: 'backup',
        description: 'select backup content',
        icon: 'https://gw.alipayobjects.com/mdn/rms_e7937b/afts/img/A*I0oNS4RCQzUAAAAAAAAAAAAAARQnAQ',
      },
      {
        text: 'save',
        key: 'save',
        icon: 'https://gw.alipayobjects.com/mdn/rms_e7937b/afts/img/A*BNczQ7hmp2gAAAAAAAAAAAAAARQnAQ',
      },
      {
        text: 'sync',
        key: 'sync',
        icon: 'https://gw.alipayobjects.com/mdn/rms_e7937b/afts/img/A*eRaVSrV56dIAAAAAAAAAAAAAARQnAQ',
      },
    ],
  },
});
`,paraId:9,tocIndex:4},{value:"\u5C5E\u6027",paraId:10,tocIndex:6},{value:"\u8BF4\u660E",paraId:10,tocIndex:6},{value:"\u7C7B\u578B",paraId:10,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:6},{value:"actions",paraId:10,tocIndex:6},{value:"\u9762\u677F\u9009\u9879\u5217\u8868",paraId:10,tocIndex:6},{value:"ActionSheetItem",paraId:11,tocIndex:6},{value:"[]",paraId:10,tocIndex:6},{value:"[]",paraId:10,tocIndex:6},{value:"cancelText",paraId:10,tocIndex:6},{value:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:"\u53D6\u6D88",paraId:10,tocIndex:6},{value:"className",paraId:10,tocIndex:6},{value:"\u7C7B\u540D",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"style",paraId:10,tocIndex:6},{value:"\u6837\u5F0F",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"title",paraId:10,tocIndex:6},{value:"\u6807\u9898",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"visible",paraId:10,tocIndex:6},{value:"\u662F\u5426\u5C55\u5F00",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"false",paraId:10,tocIndex:6},{value:"zIndex",paraId:10,tocIndex:6},{value:"\u5F39\u7A97\u5C42\u7EA7",paraId:10,tocIndex:6},{value:"number",paraId:10,tocIndex:6},{value:"998",paraId:10,tocIndex:6},{value:"#if ALIPAY onClose",paraId:10,tocIndex:6},{value:"\u5173\u95ED\u65F6\u89E6\u53D1",paraId:10,tocIndex:6},{value:"(event: ",paraId:10,tocIndex:6},{value:"Event",paraId:10,tocIndex:6},{value:") => void",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"#if ALIPAY onAction",paraId:10,tocIndex:6},{value:"\u70B9\u51FB\u9009\u9879\u65F6\u89E6\u53D1\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u4E0D\u4F1A\u89E6\u53D1",paraId:10,tocIndex:6},{value:"(item: ",paraId:10,tocIndex:6},{value:"ActionSheetItem",paraId:12,tocIndex:6},{value:", index: number, event: ",paraId:10,tocIndex:6},{value:"Event",paraId:10,tocIndex:6},{value:") => void",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"#if WECHAT bind:close",paraId:10,tocIndex:6},{value:"\u5173\u95ED\u65F6\u89E6\u53D1",paraId:10,tocIndex:6},{value:"(event: ",paraId:10,tocIndex:6},{value:"Event",paraId:10,tocIndex:6},{value:") => void",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"#if WECHAT bind:action",paraId:10,tocIndex:6},{value:"\u70B9\u51FB\u9009\u9879\u65F6\u89E6\u53D1\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u4E0D\u4F1A\u89E6\u53D1",paraId:10,tocIndex:6},{value:"(item: ",paraId:10,tocIndex:6},{value:"ActionSheetItem",paraId:13,tocIndex:6},{value:", index: number, event: ",paraId:10,tocIndex:6},{value:"Event",paraId:10,tocIndex:6},{value:") => void",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"\u5C5E\u6027",paraId:14,tocIndex:7},{value:"\u8BF4\u660E",paraId:14,tocIndex:7},{value:"\u7C7B\u578B",paraId:14,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:7},{value:"text",paraId:14,tocIndex:7},{value:"\u6587\u672C",paraId:14,tocIndex:7},{value:"string",paraId:14,tocIndex:7},{value:"-",paraId:14,tocIndex:7},{value:"icon",paraId:14,tocIndex:7},{value:"\u56FE\u6807",paraId:14,tocIndex:7},{value:"-",paraId:14,tocIndex:7},{value:"-",paraId:14,tocIndex:7},{value:"danger",paraId:14,tocIndex:7},{value:"\u662F\u5426\u5371\u9669\u6A21\u5F0F",paraId:14,tocIndex:7},{value:"boolean",paraId:14,tocIndex:7},{value:"false",paraId:14,tocIndex:7},{value:"description",paraId:14,tocIndex:7},{value:"\u63CF\u8FF0",paraId:14,tocIndex:7},{value:"string",paraId:14,tocIndex:7},{value:"-",paraId:14,tocIndex:7},{value:"disabled",paraId:14,tocIndex:7},{value:"\u662F\u5426\u7981\u7528",paraId:14,tocIndex:7},{value:"boolean",paraId:14,tocIndex:7},{value:"false",paraId:14,tocIndex:7},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:15,tocIndex:9},{value:"\u53D8\u91CF\u540D",paraId:16,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:16,tocIndex:9},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:16,tocIndex:9},{value:"\u5907\u6CE8",paraId:16,tocIndex:9},{value:"--actionsheet-danger-color",paraId:16,tocIndex:9},{value:"#ff3141",paraId:16,tocIndex:9},{value:"#ff4a58",paraId:16,tocIndex:9},{value:"\u5371\u9669\u989C\u8272",paraId:16,tocIndex:9},{value:"--actionsheet-title-color",paraId:16,tocIndex:9},{value:"#999999",paraId:16,tocIndex:9},{value:"#616161",paraId:16,tocIndex:9},{value:"\u6807\u9898\u989C\u8272",paraId:16,tocIndex:9},{value:"--actionsheet-item-color",paraId:16,tocIndex:9},{value:"#333333",paraId:16,tocIndex:9},{value:"#c5cad1",paraId:16,tocIndex:9},{value:"\u6761\u76EE\u989C\u8272",paraId:16,tocIndex:9},{value:"--actionsheet-item-active-bg",paraId:16,tocIndex:9},{value:"#eeeeee",paraId:16,tocIndex:9},{value:"#2b2b2b",paraId:16,tocIndex:9},{value:"\u6761\u76EE\u6FC0\u6D3B\u80CC\u666F\u8272",paraId:16,tocIndex:9},{value:"--activesheet-item-cancel-bg",paraId:16,tocIndex:9},{value:"#f5f5f5",paraId:16,tocIndex:9},{value:"#121212",paraId:16,tocIndex:9},{value:"\u6761\u76EE\u53D6\u6D88\u80CC\u666F\u8272",paraId:16,tocIndex:9}]}}]);
