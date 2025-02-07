"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[706],{87711:function(d,a,e){e.r(a),e.d(a,{demos:function(){return o}});var n=e(67294),t=e(94987),o={"src-action-sheet-demo-actionsheet":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,10634))})),asset:{type:"BLOCK",id:"src-action-sheet-demo-actionsheet",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},31366:function(d,a,e){e.r(a),e.d(a,{texts:function(){return t}});var n=e(94987);const t=[{value:"Actions menu panel that pops up from the bottom. Triggered by a user action, providing a set of two or more options related to the action, allowing the user to complete the action without leaving the field. Compared with the dialog box, the position of the action panel is more suitable for the scene of one-handed operation in the era of large screen.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-action-sheet": "antd-mini/es/ActionSheet/index"
#endif
#if WECHAT
  "ant-action-sheet": "antd-mini/ActionSheet/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"ant-action-sheet",paraId:3,tocIndex:3},{value:" components must pass through ",paraId:3,tocIndex:3},{value:"visible",paraId:3,tocIndex:3},{value:" Property controls the show/hide state.",paraId:3,tocIndex:3},{value:"actions",paraId:3,tocIndex:3},{value:" property passes in the data to drive the options rendering.",paraId:3,tocIndex:3},{value:`<ant-action-sheet
  title="choose your operation"
  visible="{{visible}}"
  actions="{{actions}}"
#if ALIPAY
  onAction="handleAction"
  onClose="handleClose"
#endif
#if WECHAT
  bindaction="handleAction"
  bindclose="handleClose"
#endif
/>

<ant-button
  inline="{{true}}"
  size="large"
#if ALIPAY
  onTap="handleOpen"
#endif
#if WECHAT
  bindtap="handleOpen"
#endif
>
  Open Panel
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
`,paraId:5,tocIndex:3},{value:"actions",paraId:6,tocIndex:4},{value:" Each of the provided ",paraId:7,tocIndex:4},{value:"icon",paraId:7,tocIndex:4},{value:" ",paraId:7,tocIndex:4},{value:"danger",paraId:7,tocIndex:4},{value:" ",paraId:7,tocIndex:4},{value:"description",paraId:7,tocIndex:4},{value:" ",paraId:7,tocIndex:4},{value:"disabled",paraId:7,tocIndex:4},{value:" Used to set the option state.",paraId:7,tocIndex:4},{value:`<ant-action-sheet
  title="\u8BF7\u9009\u62E9\u4F60\u8981\u8FDB\u884C\u7684\u64CD\u4F5C"
  actions="{{actions}}"
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
`,paraId:9,tocIndex:4},{value:"Property",paraId:10,tocIndex:6},{value:"Description",paraId:10,tocIndex:6},{value:"Type",paraId:10,tocIndex:6},{value:"Default Value",paraId:10,tocIndex:6},{value:"actions",paraId:10,tocIndex:6},{value:"Panel Options List",paraId:10,tocIndex:6},{value:"ActionSheetItem",paraId:11,tocIndex:6},{value:"[]",paraId:10,tocIndex:6},{value:"[]",paraId:10,tocIndex:6},{value:"cancelText",paraId:10,tocIndex:6},{value:"Cancel Button Text",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:"Cancel",paraId:10,tocIndex:6},{value:"className",paraId:10,tocIndex:6},{value:"Class Name",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"style",paraId:10,tocIndex:6},{value:"Style",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"title",paraId:10,tocIndex:6},{value:"Title",paraId:10,tocIndex:6},{value:"string",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"visible",paraId:10,tocIndex:6},{value:"Whether to expand",paraId:10,tocIndex:6},{value:"boolean",paraId:10,tocIndex:6},{value:"false",paraId:10,tocIndex:6},{value:"zIndex",paraId:10,tocIndex:6},{value:"Pop-up Level",paraId:10,tocIndex:6},{value:"number",paraId:10,tocIndex:6},{value:"998",paraId:10,tocIndex:6},{value:"#if ALIPAY onClose",paraId:10,tocIndex:6},{value:"Trigger on shutdown",paraId:10,tocIndex:6},{value:"(event: ",paraId:10,tocIndex:6},{value:"Event",paraId:10,tocIndex:6},{value:") => void",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"#if ALIPAY onAction",paraId:10,tocIndex:6},{value:"Triggered when option is clicked, not triggered when disabled",paraId:10,tocIndex:6},{value:"(item: ",paraId:10,tocIndex:6},{value:"ActionSheetItem",paraId:12,tocIndex:6},{value:", index: number, event: ",paraId:10,tocIndex:6},{value:"Event",paraId:10,tocIndex:6},{value:") => void",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"#if WECHAT bindclose",paraId:10,tocIndex:6},{value:"Trigger on shutdown",paraId:10,tocIndex:6},{value:"(event: ",paraId:10,tocIndex:6},{value:"Event",paraId:10,tocIndex:6},{value:") => void",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"#if WECHAT bindaction",paraId:10,tocIndex:6},{value:"Triggered when option is clicked, not triggered when disabled",paraId:10,tocIndex:6},{value:"(item: ",paraId:10,tocIndex:6},{value:"ActionSheetItem",paraId:13,tocIndex:6},{value:", index: number, event: ",paraId:10,tocIndex:6},{value:"Event",paraId:10,tocIndex:6},{value:") => void",paraId:10,tocIndex:6},{value:"-",paraId:10,tocIndex:6},{value:"Property",paraId:14,tocIndex:7},{value:"Description",paraId:14,tocIndex:7},{value:"Type",paraId:14,tocIndex:7},{value:"Default Value",paraId:14,tocIndex:7},{value:"text",paraId:14,tocIndex:7},{value:"Text",paraId:14,tocIndex:7},{value:"string",paraId:14,tocIndex:7},{value:"-",paraId:14,tocIndex:7},{value:"icon",paraId:14,tocIndex:7},{value:"Icons",paraId:14,tocIndex:7},{value:"-",paraId:14,tocIndex:7},{value:"-",paraId:14,tocIndex:7},{value:"danger",paraId:14,tocIndex:7},{value:"Whether dangerous mode",paraId:14,tocIndex:7},{value:"boolean",paraId:14,tocIndex:7},{value:"false",paraId:14,tocIndex:7},{value:"description",paraId:14,tocIndex:7},{value:"Description",paraId:14,tocIndex:7},{value:"string",paraId:14,tocIndex:7},{value:"-",paraId:14,tocIndex:7},{value:"disabled",paraId:14,tocIndex:7},{value:"Disable",paraId:14,tocIndex:7},{value:"boolean",paraId:14,tocIndex:7},{value:"false",paraId:14,tocIndex:7},{value:"Component provides the following CSS variables, which can be used to customize styles. For more information, see ConfigProvider Components.",paraId:15,tocIndex:9},{value:"Variable name",paraId:16,tocIndex:9},{value:"Default Value",paraId:16,tocIndex:9},{value:"Dark Mode Default",paraId:16,tocIndex:9},{value:"Remarks",paraId:16,tocIndex:9},{value:"--actionsheet-danger-color",paraId:16,tocIndex:9},{value:"#ff3141",paraId:16,tocIndex:9},{value:"#ff4a58",paraId:16,tocIndex:9},{value:"Hazardous color",paraId:16,tocIndex:9},{value:"--actionsheet-title-color",paraId:16,tocIndex:9},{value:"#999999",paraId:16,tocIndex:9},{value:"#616161",paraId:16,tocIndex:9},{value:"Title Color",paraId:16,tocIndex:9},{value:"--actionsheet-item-color",paraId:16,tocIndex:9},{value:"#333333",paraId:16,tocIndex:9},{value:"#c5cad1",paraId:16,tocIndex:9},{value:"Item Color",paraId:16,tocIndex:9},{value:"--actionsheet-item-active-bg",paraId:16,tocIndex:9},{value:"#eeeeee",paraId:16,tocIndex:9},{value:"#2b2b2b",paraId:16,tocIndex:9},{value:"Entries Activate Background Color",paraId:16,tocIndex:9},{value:"--activesheet-item-cancel-bg",paraId:16,tocIndex:9},{value:"#f5f5f5",paraId:16,tocIndex:9},{value:"#121212",paraId:16,tocIndex:9},{value:"Entries cancel background color",paraId:16,tocIndex:9}]}}]);
