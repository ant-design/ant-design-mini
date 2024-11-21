"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[8776],{49935:function(t,e,a){a.r(e),a.d(e,{demos:function(){return I}});var d=a(67294),n=a(95445),I={"src-popover-list-demo-popoverlist":{component:d.memo(d.lazy(function(){return a.e(2433).then(a.bind(a,38415))})),asset:{type:"BLOCK",id:"src-popover-list-demo-popoverlist",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},30398:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});var d=a(95445);const n=[{value:"\u70B9\u51FB\u5143\u7D20\uFF0C\u5F39\u51FA\u6C14\u6CE1\u5F0F\u7684\u83DC\u5355\u3002\u7528\u4E8E\u5BFC\u822A\u529F\u80FD\u7684\u6C14\u6CE1\u83DC\u5355\u5524\u8D77\uFF0C\u901A\u5E38\u7528\u4E8E\u6536\u7EB3\u4F4E\u9891\u4F7F\u7528\u7684\u529F\u80FD\u3002\u8BE5\u529F\u80FD\u53EA\u80FD\u901A\u8FC7\u5BFC\u822A\u680F\u4E0A\u7684\u56FE\u6807\u6FC0\u6D3B\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
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
  <ant-button inline>\u70B9\u6211</ant-button>
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
`,paraId:4,tocIndex:3},{value:"autoAdjustOverflow",paraId:5,tocIndex:4},{value:" \u5C5E\u6027\uFF0C\u53EF\u4EE5\u8BA9\u6C14\u6CE1\u88AB\u906E\u6321\u65F6\u81EA\u52A8\u8C03\u6574\u4F4D\u7F6E",paraId:5,tocIndex:4},{value:`<ant-popover-list
  visible="{{ true }}"
  list="{{ list }}"
  autoAdjustOverflow="{{ true }}"
>
  <ant-button inline style="margin-top: 500px;">\u6C14\u6CE1\u4F4D\u7F6E\u81EA\u9002\u5E94</ant-button>
</ant-popover-list>
`,paraId:6,tocIndex:4},{value:"\u5C5E\u6027",paraId:7,tocIndex:6},{value:"\u8BF4\u660E",paraId:7,tocIndex:6},{value:"\u7C7B\u578B",paraId:7,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:6},{value:"autoAdjustOverflow",paraId:7,tocIndex:6},{value:"\u6C14\u6CE1\u88AB\u906E\u6321\u65F6\u7684\u81EA\u52A8\u8C03\u6574\u4F4D\u7F6E",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"true",paraId:7,tocIndex:6},{value:"className",paraId:7,tocIndex:6},{value:"\u7C7B\u540D",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"color",paraId:7,tocIndex:6},{value:"\u80CC\u666F\u989C\u8272",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"contentClassName",paraId:7,tocIndex:6},{value:"content \u7C7B\u540D",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"contentStyle",paraId:7,tocIndex:6},{value:"content \u6837\u5F0F",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"content",paraId:7,tocIndex:6},{value:"\u5185\u5BB9",paraId:7,tocIndex:6},{value:"string | slot",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"defaultVisible",paraId:7,tocIndex:6},{value:"\u9ED8\u8BA4\u662F\u5426\u663E\u793A",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"false",paraId:7,tocIndex:6},{value:"destroyOnClose",paraId:7,tocIndex:6},{value:"\u4E0D\u53EF\u89C1\u65F6\u662F\u5426\u5378\u8F7D\u5185\u5BB9",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"false",paraId:7,tocIndex:6},{value:"maskClassName",paraId:7,tocIndex:6},{value:"\u8499\u5C42\u7684\u7C7B\u540D",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"maskStyle",paraId:7,tocIndex:6},{value:"\u8499\u5C42\u7684\u6837\u5F0F",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"placement",paraId:7,tocIndex:6},{value:"\u6C14\u6CE1\u6846\u4F4D\u7F6E\uFF0C\u53EF\u9009 ",paraId:7,tocIndex:6},{value:"top",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"top-right",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"top-left",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"bottom",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"bottom-left",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"bottom-right",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"left",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"left-top",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"left-bottom",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"right",paraId:7,tocIndex:6},{value:"\u3001",paraId:7,tocIndex:6},{value:"right-top",paraId:7,tocIndex:6},{value:" \u6216 ",paraId:7,tocIndex:6},{value:"right-bottom",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"top",paraId:7,tocIndex:6},{value:"showMask",paraId:7,tocIndex:6},{value:"\u662F\u5426\u5C55\u793A\u8499\u5C42\uFF0C\u4E3A true \u65F6\u70B9\u51FB\u7A7A\u767D\u5904\u53EF\u5173\u95ED Popover",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"true",paraId:7,tocIndex:6},{value:"style",paraId:7,tocIndex:6},{value:"\u6837\u5F0F",paraId:7,tocIndex:6},{value:"string",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"visible",paraId:7,tocIndex:6},{value:"\u662F\u5426\u663E\u793A",paraId:7,tocIndex:6},{value:"boolean",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"#if ALIPAY onVisibleChange",paraId:7,tocIndex:6},{value:"visible \u53D8\u66F4\u65F6\u7684\u56DE\u8C03",paraId:7,tocIndex:6},{value:"(visible: boolean, event: ",paraId:7,tocIndex:6},{value:"Event",paraId:7,tocIndex:6},{value:") => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"#if ALIPAY onTapItem",paraId:7,tocIndex:6},{value:"visible \u53D8\u66F4\u65F6\u7684\u56DE\u8C03",paraId:7,tocIndex:6},{value:"(item: ",paraId:7,tocIndex:6},{value:"PopoverListItem",paraId:8,tocIndex:6},{value:", event: ",paraId:7,tocIndex:6},{value:"Event",paraId:7,tocIndex:6},{value:") => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"#if WECHAT bind:visiblechange",paraId:7,tocIndex:6},{value:"visible \u53D8\u66F4\u65F6\u7684\u56DE\u8C03",paraId:7,tocIndex:6},{value:"(visible: boolean, event: ",paraId:7,tocIndex:6},{value:"Event",paraId:7,tocIndex:6},{value:") => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"#if WECHAT bind:tapitem",paraId:7,tocIndex:6},{value:"visible \u53D8\u66F4\u65F6\u7684\u56DE\u8C03",paraId:7,tocIndex:6},{value:"(item: ",paraId:7,tocIndex:6},{value:"PopoverListItem",paraId:9,tocIndex:6},{value:", event: ",paraId:7,tocIndex:6},{value:"Event",paraId:7,tocIndex:6},{value:") => void",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"\u5C5E\u6027",paraId:10,tocIndex:7},{value:"\u8BF4\u660E",paraId:10,tocIndex:7},{value:"\u7C7B\u578B",paraId:10,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:7},{value:"icon",paraId:10,tocIndex:7},{value:"\u83DC\u5355\u7684 icon",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"iconImage",paraId:10,tocIndex:7},{value:"\u83DC\u5355\u7684 icon \u7684\u56FE\u7247, \u4F18\u5148\u53D6 iconImage \u6CA1\u6709\u518D\u53D6 icon \u5B57\u6BB5",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"text",paraId:10,tocIndex:7},{value:"\u7C7B\u540D",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"showBadge",paraId:10,tocIndex:7},{value:"\u662F\u5426\u7981\u7528",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"false",paraId:10,tocIndex:7},{value:"id",paraId:10,tocIndex:7},{value:"\u53F3\u4FA7\u989D\u5916\u5185\u5BB9",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:11,tocIndex:9},{value:"\u53D8\u91CF\u540D",paraId:12,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:9},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:12,tocIndex:9},{value:"\u5907\u6CE8",paraId:12,tocIndex:9},{value:"--popover-list-content-bg",paraId:12,tocIndex:9},{value:"rgba(0, 0, 0, 0.93)",paraId:12,tocIndex:9},{value:"rgba(0, 0, 0, 0.93)",paraId:12,tocIndex:9},{value:"Popover \u5217\u8868\u5185\u5BB9\u80CC\u666F\u989C\u8272",paraId:12,tocIndex:9},{value:"--popover-list-content-color",paraId:12,tocIndex:9},{value:"#ffffff",paraId:12,tocIndex:9},{value:"#c5cad1",paraId:12,tocIndex:9},{value:"Popover \u5217\u8868\u5185\u5BB9\u989C\u8272",paraId:12,tocIndex:9},{value:"--popover-list-badge-color",paraId:12,tocIndex:9},{value:"#ff411c",paraId:12,tocIndex:9},{value:"#ff411c",paraId:12,tocIndex:9},{value:"Popover \u5217\u8868\u5FBD\u7AE0\u989C\u8272",paraId:12,tocIndex:9},{value:"--popover-list-item-bg",paraId:12,tocIndex:9},{value:"#e5e5e5",paraId:12,tocIndex:9},{value:"#444444",paraId:12,tocIndex:9},{value:"Popover \u5217\u8868\u5185\u5BB9\u6587\u5B57\u989C\u8272",paraId:12,tocIndex:9}]}}]);
