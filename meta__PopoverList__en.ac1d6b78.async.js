"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[564],{14333:function(o,e,a){a.r(e),a.d(e,{demos:function(){return d}});var t=a(67294),n=a(58497),d={"src-popover-list-demo-popoverlist":{component:t.memo(t.lazy(function(){return a.e(2433).then(a.bind(a,38415))})),asset:{type:"BLOCK",id:"src-popover-list-demo-popoverlist",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},58172:function(o,e,a){a.r(e),a.d(e,{texts:function(){return n}});var t=a(58497);const n=[{value:"Click on the element to pop up the bubble menu. The bubble menu for navigation functions is evoked, usually used to accommodate functions used at low frequencies. This function can only be activated via the icon on the navigation bar.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-popover-list": "antd-mini/es/PopoverList/index"
#endif
#if WECHAT
  "ant-popover-list": "antd-mini/PopoverList/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<ant-popover-list
  visible="{{ visible }}"
  list="{{ list }}"
  placement="bottom-right"
#if ALIPAY
  onTapItem="handleTapItem"
  onVisibleChange="handleVisibleChange"
#endif
#if WECHAT
  bind:tapitem="handleTapItem"
  bind:visiblechange="handleVisibleChange"
#endif
  >
  <ant-button inline>Point me</ant-button>
</ant-popover-list>
`,paraId:3,tocIndex:3},{value:`Page({
  data: {
    visible: true,
    list: [
      { text: '\u626B\u4E00\u626B', icon: 'ScanningOutline', showBadge: true, id: 'scan', },
      { text: '\u4ED8\u94B1/\u6536\u94B1', icon: 'ReceivePaymentOutline', showBadge: false, id: 'pay', },
      { text: '\u4E58\u8F66\u7801', icon: 'TransportQRcodeOutline', showBadge: false, id: 'code', },
      { text: '\u56FE\u7247', iconImage: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ', showBadge: false, id: 'image', },
    ],
  },
  handleVisibleChange(visible, e) {
    console.log(visible, e);
#if ALIPAY
    this.setData({ visible });
#endif
#if WECHAT
    this.setData({ visible: visible.detail });
#endif
  },
  handleTapItem(e, item) {
    console.log(e, item);
    this.setData({ visible: false });
#if ALIPAY
    my.showToast({ content: '\u70B9\u51FB\u5217\u8868', duration: 1000 });
#endif
#if WECHAT
    wx.showToast({ title: '\u70B9\u51FB\u5217\u8868' });
#endif
  },
});
`,paraId:4,tocIndex:3},{value:"autoAdjustOverflow",paraId:5,tocIndex:4},{value:" Property to automatically adjust the position of the bubble when it is blocked",paraId:5,tocIndex:4},{value:`<ant-popover-list
  visible="{{ true }}"
  list="{{ list }}"
  autoAdjustOverflow="{{ true }}"
>
  <ant-button inline style="margin-top: 500px;">bubble position adaptive</ant-button>
</ant-popover-list>
`,paraId:6,tocIndex:4},{value:"Property",paraId:7,tocIndex:6},{value:"Description",paraId:7,tocIndex:6},{value:"Type",paraId:7,tocIndex:6},{value:"Default Value",paraId:7,tocIndex:6},{value:"autoAdjustOverflow",paraId:7,tocIndex:6},{value:"Automatically adjust the position when the bubble is blocked",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"true",paraId:7,tocIndex:6},{value:"className",paraId:7,tocIndex:6},{value:"Class Name",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"color",paraId:7,tocIndex:6},{value:"Background Color",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"contentClassName",paraId:7,tocIndex:6},{value:"content Class Name",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"contentStyle",paraId:7,tocIndex:6},{value:"content Style",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"content",paraId:7,tocIndex:6},{value:"Content",paraId:7,tocIndex:6},{value:"string | slot",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"defaultVisible",paraId:7,tocIndex:6},{value:"Display by default",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"false",paraId:7,tocIndex:6},{value:"destroyOnClose",paraId:7,tocIndex:6},{value:"Whether to unload content when invisible",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"false",paraId:7,tocIndex:6},{value:"maskClassName",paraId:7,tocIndex:6},{value:"Class name of the layer",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"maskStyle",paraId:7,tocIndex:6},{value:"The style of the layer",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"placement",paraId:7,tocIndex:6},{value:"Bubble box position, optional ",paraId:7,tocIndex:6},{value:"top",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"top-right",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"top-left",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"bottom",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"bottom-left",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"bottom-right",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"left",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"left-top",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"left-bottom",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"right",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"right-top",paraId:7,tocIndex:6},{value:" or ",paraId:7,tocIndex:6},{value:"right-bottom",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"top",paraId:7,tocIndex:6},{value:"showMask",paraId:7,tocIndex:6},{value:"Whether to show the layer, if true, click the blank to close the Popover.",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"true",paraId:7,tocIndex:6},{value:"style",paraId:7,tocIndex:6},{value:"Style",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"visible",paraId:7,tocIndex:6},{value:"Whether to display",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"#if ALIPAY onVisibleChange",paraId:7,tocIndex:6},{value:"Callback at the time of visible change",paraId:7,tocIndex:6},{value:"(visible: boolean, event: ",paraId:7,tocIndex:6},{value:"Event",paraId:7,tocIndex:6},{value:") => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"#if ALIPAY onTapItem",paraId:7,tocIndex:6},{value:"Callback at the time of visible change",paraId:7,tocIndex:6},{value:"(item: ",paraId:7,tocIndex:6},{value:"PopoverListItem",paraId:8,tocIndex:6},{value:", event: ",paraId:7,tocIndex:6},{value:"Event",paraId:7,tocIndex:6},{value:") => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"#if WECHAT bind:visiblechange",paraId:7,tocIndex:6},{value:"Callback at the time of visible change",paraId:7,tocIndex:6},{value:"(visible: boolean, event: ",paraId:7,tocIndex:6},{value:"Event",paraId:7,tocIndex:6},{value:") => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"#if WECHAT bind:tapitem",paraId:7,tocIndex:6},{value:"Callback at the time of visible change",paraId:7,tocIndex:6},{value:"(item: ",paraId:7,tocIndex:6},{value:"PopoverListItem",paraId:9,tocIndex:6},{value:", event: ",paraId:7,tocIndex:6},{value:"Event",paraId:7,tocIndex:6},{value:") => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"Property",paraId:10,tocIndex:7},{value:"Description",paraId:10,tocIndex:7},{value:"Type",paraId:10,tocIndex:7},{value:"Default Value",paraId:10,tocIndex:7},{value:"icon",paraId:10,tocIndex:7},{value:"The icon of the menu",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"iconImage",paraId:10,tocIndex:7},{value:"The icon picture of the menu is taken first iconImage the icon field is not taken again.",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"text",paraId:10,tocIndex:7},{value:"Class Name",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"showBadge",paraId:10,tocIndex:7},{value:"Disable",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"false",paraId:10,tocIndex:7},{value:"id",paraId:10,tocIndex:7},{value:"Extra right",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:11,tocIndex:9},{value:"Variable name",paraId:12,tocIndex:9},{value:"Default Value",paraId:12,tocIndex:9},{value:"Dark Mode Default",paraId:12,tocIndex:9},{value:"Remarks",paraId:12,tocIndex:9},{value:"--popover-list-content-bg",paraId:12,tocIndex:9},{value:"rgba(0, 0, 0, 0.93)",paraId:12,tocIndex:9},{value:"rgba(0, 0, 0, 0.93)",paraId:12,tocIndex:9},{value:"Popover List Content Background Color",paraId:12,tocIndex:9},{value:"--popover-list-content-color",paraId:12,tocIndex:9},{value:"#ffffff",paraId:12,tocIndex:9},{value:"#c5cad1",paraId:12,tocIndex:9},{value:"Popover List Content Color",paraId:12,tocIndex:9},{value:"--popover-list-badge-color",paraId:12,tocIndex:9},{value:"#ff411c",paraId:12,tocIndex:9},{value:"#ff411c",paraId:12,tocIndex:9},{value:"Popover List Badge Color",paraId:12,tocIndex:9},{value:"--popover-list-item-bg",paraId:12,tocIndex:9},{value:"#e5e5e5",paraId:12,tocIndex:9},{value:"#444444",paraId:12,tocIndex:9},{value:"Popover List Content Text Color",paraId:12,tocIndex:9}]}}]);
