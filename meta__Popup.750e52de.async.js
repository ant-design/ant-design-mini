"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[1141],{58595:function(o,e,a){a.r(e),a.d(e,{demos:function(){return t}});var d=a(67294),n=a(62077),t={"src-popup-demo-popup":{component:d.memo(d.lazy(function(){return a.e(2433).then(a.bind(a,90751))})),asset:{type:"BLOCK",id:"src-popup-demo-popup",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},86332:function(o,e,a){a.r(e),a.d(e,{texts:function(){return n}});var d=a(62077);const n=[{value:"\u4ECE\u5C4F\u5E55\u6ED1\u51FA\u6216\u5F39\u51FA\u4E00\u5757\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A\u3002\u7528\u4E8E\u5C55\u793A\u5F39\u7A97\u3001\u4FE1\u606F\u63D0\u793A\u3001\u9009\u62E9\u8F93\u5165\u3001\u5207\u6362\u7B49\u5185\u5BB9\uFF0C\u652F\u6301\u591A\u4E2A\u5F39\u51FA\u5C42\u53E0\u52A0\u5C55\u793A\u3002",paraId:0,tocIndex:0},{value:"\u5728 ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" \u4E2D\u5F15\u5165\u7EC4\u4EF6",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-popup": "antd-mini/es/Popup/index"
#endif
#if WECHAT
  "ant-popup": "antd-mini/Popup/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"ant-popup",paraId:3,tocIndex:3},{value:" \u7EC4\u4EF6\u5FC5\u987B\u901A\u8FC7 ",paraId:3,tocIndex:3},{value:"visible",paraId:3,tocIndex:3},{value:" \u5C5E\u6027\u63A7\u5236\u663E\u793A/\u9690\u85CF\u72B6\u6001\u3002",paraId:3,tocIndex:3},{value:"position",paraId:3,tocIndex:3},{value:" \u6307\u5B9A\u51FA\u73B0\u65B9\u5411\uFF0C\u53EF\u9009 ",paraId:3,tocIndex:3},{value:"top",paraId:3,tocIndex:3},{value:" ",paraId:3,tocIndex:3},{value:"bottom",paraId:3,tocIndex:3},{value:" ",paraId:3,tocIndex:3},{value:"left",paraId:3,tocIndex:3},{value:" ",paraId:3,tocIndex:3},{value:"right",paraId:3,tocIndex:3},{value:"\u3002\u5F39\u7A97\u4E2D\u7684\u5185\u5BB9\u901A\u8FC7\u63D2\u69FD\u7684\u5F62\u5F0F\u586B\u5165\u3002",paraId:3,tocIndex:3},{value:"close",paraId:3,tocIndex:3},{value:" \u4E8B\u4EF6\u4F1A\u5728\u70B9\u51FB\u53F3\u4E0A\u89D2\u5173\u95ED icon \u6216\u70B9\u51FB\u8499\u5C42\u5173\u95ED\u65F6\u89E6\u53D1\u3002",paraId:3,tocIndex:3},{value:"clickBack",paraId:3,tocIndex:3},{value:" \u4E8B\u4EF6\u4F1A\u5728\u70B9\u51FB\u5DE6\u4E0A\u89D2\u8FD4\u56DE\u6309\u94AE\u65F6\u89E6\u53D1\u3002",paraId:3,tocIndex:3},{value:`<ant-popup
  visible="{{visible}}"
  position="bottom"
  title="title"
  height="{{250}}"
  width="{{250}}"
  showClose="{{true}}"
  showBack="{{true}}"
#if ALIPAY
  onClickBack="onClickBack"
  onClose="handlePopupClose"
#endif
#if WECHAT
  bind:clickback="onClickBack"
  bind:close="handlePopupClose"
#endif
>
  <view style="padding: 12px">
    \u4ECE\u5C4F\u5E55\u6ED1\u51FA\u6216\u5F39\u51FA\u4E00\u5757\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A\uFF0C\u7528\u4E8E\u5C55\u793A\u5F39\u7A97\u3001\u4FE1\u606F\u63D0\u793A\u3001\u9009\u62E9\u8F93\u5165\u3001\u5207\u6362\u7B49\u5185\u5BB9\u3002
  </view>
</ant-popup>
`,paraId:4,tocIndex:3},{value:`Page({
  data: {
    visible: true,
  },
  onClickBack() {
#if ALIPAY
    my.showToast({ content: 'clicked icon', duration: 1000 });
#endif
#if WECHAT
    wx.showToast({ content: 'clicked icon', duration: 1000 });
#endif
  },
  handlePopupClose() {
    this.setData({
      visible: false,
    });
  },
});
`,paraId:5,tocIndex:3},{value:"backgroundImage",paraId:6,tocIndex:4},{value:" \u5C5E\u6027\uFF0C\u53EF\u4EE5\u4E3A\u6574\u4E2A\u5F39\u5C42\u8BBE\u7F6E\u80CC\u666F\u3002",paraId:6,tocIndex:4},{value:`<ant-popup
  visible="{{true}}"
  height="{{450}}"
  className="customize-top-image-popup"
  backgroundImage="https://mdn.alipayobjects.com/huamei_ahikbw/afts/img/A*jVxmQq4bhoUAAAAAAAAAAAAADiWwAQ/original"
  position="bottom"
  showClose="{{false}}">
  <view class="customize-content">
    Ea consectetur ipsum consequat exercitation laboris excepteur pariatur
    excepteur labore dolor cillum tempor esse. Ad adipisicing nostrud fugiat eu
    mollit. Proident nisi voluptate sunt ea laboris Lorem ullamco deserunt aute
    incididunt cillum tempor duis est. Elit voluptate laboris laborum anim
  </view>
</ant-popup>
`,paraId:7,tocIndex:4},{value:"\u5982\u679C\u5F39\u7A97\u5185\u5185\u5BB9\u8FC7\u957F\u9700\u8981\u652F\u6301\u6EDA\u52A8\uFF0C\u8BF7\u4F7F\u7528 ",paraId:8,tocIndex:5},{value:"scroll-view",paraId:8,tocIndex:5},{value:" \u7EC4\u4EF6\uFF0C\u5E76\u6DFB\u52A0\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:8,tocIndex:5},{value:`<ant-popup
  visible="{{true}}"
  position="bottom"
  showClose="{{true}}"
>
  <scroll-view
    scroll-y
    style="padding: 12px; height: 300px"
    disable-lower-scroll="out-of-bounds"
    disable-upper-scroll="out-of-bounds">
    Ea consectetur ipsum consequat exercitation laboris excepteur pariatur
    excepteur labore dolor cillum tempor esse. Ad adipisicing nostrud fugiat eu
    mollit. Proident nisi voluptate sunt ea laboris Lorem ullamco deserunt aute
    incididunt cillum tempor duis est. Elit voluptate laboris laborum anim
    exercitation consequat laboris ad. Quis ad enim fugiat.
  </scroll-view>
</ant-popup>
`,paraId:9,tocIndex:5},{value:"\u5C5E\u6027",paraId:10,tocIndex:7},{value:"\u8BF4\u660E",paraId:10,tocIndex:7},{value:"\u7C7B\u578B",paraId:10,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:7},{value:"animation",paraId:10,tocIndex:7},{value:"\u662F\u5426\u5F00\u542F\u8FC7\u6E21\u52A8\u753B",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"true",paraId:10,tocIndex:7},{value:"animationType",paraId:10,tocIndex:7},{value:"\u52A8\u753B\u7C7B\u578B\uFF0C\u53EF\u9009",paraId:10,tocIndex:7},{value:"transform",paraId:10,tocIndex:7},{value:" ",paraId:10,tocIndex:7},{value:"position",paraId:10,tocIndex:7},{value:"\uFF0C\u9ED8\u8BA4\u4F7F\u7528",paraId:10,tocIndex:7},{value:"transform",paraId:10,tocIndex:7},{value:"\u52A8\u753B\u6027\u80FD\u66F4\u597D\u3002\u4F46\u5F53\u5F39\u7A97\u5185\u90E8\u5B58\u5728 fixed \u5B9A\u4F4D\u6216\u8005 picker-view \u5143\u7D20\u65F6\u53EF\u80FD\u5B58\u5728\u6837\u5F0F\u95EE\u9898\uFF0C\u53EF\u5207\u6362\u4E3A",paraId:10,tocIndex:7},{value:"position",paraId:10,tocIndex:7},{value:"\u89E3\u51B3",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"transform",paraId:10,tocIndex:7},{value:"className",paraId:10,tocIndex:7},{value:"\u7C7B\u540D",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"destroyOnClose",paraId:10,tocIndex:7},{value:"\u4E0D\u53EF\u89C1\u65F6\u5378\u8F7D\u5185\u5BB9",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"false",paraId:10,tocIndex:7},{value:"duration",paraId:10,tocIndex:7},{value:"\u8FC7\u6E21\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u6BEB\u79D2",paraId:10,tocIndex:7},{value:"number",paraId:10,tocIndex:7},{value:"300",paraId:10,tocIndex:7},{value:"height",paraId:10,tocIndex:7},{value:"\u9AD8\u5EA6\uFF0C\u5728 position \u4E3A ",paraId:10,tocIndex:7},{value:"top",paraId:10,tocIndex:7},{value:" \u6216 ",paraId:10,tocIndex:7},{value:"bottom",paraId:10,tocIndex:7},{value:" \u65F6\u4F7F\u7528\uFF0C\u5355\u4F4D px\u3002\u53EF\u9009\uFF0C\u4E0D\u4F20\u65F6\u6839\u636E\u5185\u5BB9\u533A\u9AD8\u5EA6\u81EA\u9002\u5E94\u3002",paraId:10,tocIndex:7},{value:"number",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"maskClassName",paraId:10,tocIndex:7},{value:"\u8499\u5C42\u7684\u7C7B\u540D",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"maskStyle",paraId:10,tocIndex:7},{value:"\u8499\u5C42\u7684\u6837\u5F0F",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"position",paraId:10,tocIndex:7},{value:"\u5F39\u7A97\u5E03\u5C40\uFF0C\u53EF\u9009",paraId:10,tocIndex:7},{value:"top",paraId:10,tocIndex:7},{value:" ",paraId:10,tocIndex:7},{value:"bottom",paraId:10,tocIndex:7},{value:" ",paraId:10,tocIndex:7},{value:"left",paraId:10,tocIndex:7},{value:" ",paraId:10,tocIndex:7},{value:"right",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"bottom",paraId:10,tocIndex:7},{value:"showMask",paraId:10,tocIndex:7},{value:"\u662F\u5426\u5C55\u793A\u8499\u5C42",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"true",paraId:10,tocIndex:7},{value:"style",paraId:10,tocIndex:7},{value:"\u6837\u5F0F",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"visible",paraId:10,tocIndex:7},{value:"\u662F\u5426\u663E\u793A",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"false",paraId:10,tocIndex:7},{value:"width",paraId:10,tocIndex:7},{value:"\u5BBD\u5EA6, \u5728 position \u4E3A ",paraId:10,tocIndex:7},{value:"left",paraId:10,tocIndex:7},{value:" \u6216 ",paraId:10,tocIndex:7},{value:"right",paraId:10,tocIndex:7},{value:" \u65F6\u4F7F\u7528\uFF0C\u5355\u4F4D px",paraId:10,tocIndex:7},{value:"number",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"zIndex",paraId:10,tocIndex:7},{value:"\u5F39\u7A97\u5C42\u7EA7",paraId:10,tocIndex:7},{value:"number",paraId:10,tocIndex:7},{value:"998",paraId:10,tocIndex:7},{value:"backgroundImage",paraId:10,tocIndex:7},{value:"\u5F39\u6846\u7684\u80CC\u666F\u56FE",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"showClose",paraId:10,tocIndex:7},{value:"\u5C55\u793A\u5F39\u6846\u5173\u95ED\u7684 icon",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"false",paraId:10,tocIndex:7},{value:"showBack",paraId:10,tocIndex:7},{value:"\u5C55\u793A\u5F39\u6846\u8FD4\u56DE\u7684 icon",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"false",paraId:10,tocIndex:7},{value:"#if ALIPAY onClose",paraId:10,tocIndex:7},{value:"\u70B9\u51FB\u8499\u5C42\u5173\u95ED\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"#if ALIPAY onClickBack",paraId:10,tocIndex:7},{value:"\u70B9\u51FB\u8FD4\u56DE\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"#if ALIPAY onAfterShow",paraId:10,tocIndex:7},{value:"\u5B8C\u5168\u5C55\u793A\u540E\u89E6\u53D1",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"#if ALIPAY onAfterClose",paraId:10,tocIndex:7},{value:"\u5B8C\u5168\u5173\u95ED\u540E\u89E6\u53D1",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"#if WECHAT bind:close",paraId:10,tocIndex:7},{value:"\u70B9\u51FB\u8499\u5C42\u5173\u95ED\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"#if WECHAT bind:clickbackicon",paraId:10,tocIndex:7},{value:"\u70B9\u51FB\u8FD4\u56DE\u6309\u94AE\uFF0C\u89E6\u53D1\u56DE\u8C03",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"#if WECHAT bind:aftershow",paraId:10,tocIndex:7},{value:"\u5B8C\u5168\u5C55\u793A\u540E\u89E6\u53D1",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"#if WECHAT bind:afterclose",paraId:10,tocIndex:7},{value:"\u5B8C\u5168\u5173\u95ED\u540E\u89E6\u53D1",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ConfigProvider \u7EC4\u4EF6\u3002",paraId:11,tocIndex:9},{value:"\u53D8\u91CF\u540D",paraId:12,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:9},{value:"\u6DF1\u8272\u6A21\u5F0F\u9ED8\u8BA4\u503C",paraId:12,tocIndex:9},{value:"\u5907\u6CE8",paraId:12,tocIndex:9},{value:"--popover-list-content-bg",paraId:12,tocIndex:9},{value:"rgba(0, 0, 0, 0.93)",paraId:12,tocIndex:9},{value:"rgba(0, 0, 0, 0.93)",paraId:12,tocIndex:9},{value:"Popover \u5217\u8868\u5185\u5BB9\u80CC\u666F\u989C\u8272",paraId:12,tocIndex:9},{value:"--popover-list-content-color",paraId:12,tocIndex:9},{value:"#ffffff",paraId:12,tocIndex:9},{value:"#c5cad1",paraId:12,tocIndex:9},{value:"Popover \u5217\u8868\u5185\u5BB9\u989C\u8272",paraId:12,tocIndex:9},{value:"--popover-list-badge-color",paraId:12,tocIndex:9},{value:"#ff411c",paraId:12,tocIndex:9},{value:"#ff411c",paraId:12,tocIndex:9},{value:"Popover \u5217\u8868\u5FBD\u7AE0\u989C\u8272",paraId:12,tocIndex:9},{value:"--popover-list-content-color",paraId:12,tocIndex:9},{value:"#333333",paraId:12,tocIndex:9},{value:"#c5cad1",paraId:12,tocIndex:9},{value:"Popover \u5217\u8868\u5185\u5BB9\u6587\u5B57\u989C\u8272",paraId:12,tocIndex:9},{value:"\u963B\u6B62\u8499\u5C42\u540E\u9875\u9762\u6EDA\u52A8\u76EE\u524D\u5728 IDE \u548C\u6A21\u62DF\u5668\u4E0D\u751F\u6548\uFF0C\u8BF7\u5728\u771F\u673A\u4E0A\u8C03\u8BD5\u3002",paraId:13,tocIndex:11},{value:"\u5982\u679C\u5F39\u7A97\u5185\u9700\u8981\u6EDA\u52A8\uFF0C\u8BF7\u4F7F\u7528 scroll-view \u7EC4\u4EF6\uFF0C\u5E76\u6DFB\u52A0\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:14,tocIndex:12},{value:`<popup height="{{250}}" visible="{{visible}}">
  <scroll-view
    scroll-y
    disable-lower-scroll="out-of-bounds"
    disable-upper-scroll="out-of-bounds"
  >
    ...\u4F60\u7684\u5185\u5BB9...
  </scroll-view>
</popup>
`,paraId:15,tocIndex:12},{value:"Popup \u9ED8\u8BA4\u662F\u901A\u8FC7 ",paraId:16,tocIndex:13},{value:"display:none",paraId:16,tocIndex:13},{value:" \u9690\u85CF\u7684\uFF0C\u800C picker-view \u4E0D\u80FD\u653E\u5230 ",paraId:16,tocIndex:13},{value:"display:none",paraId:16,tocIndex:13},{value:" \u7684\u7EC4\u4EF6\u91CC\u3002\u6709\u4EE5\u4E0B\u4E24\u79CD\u89E3\u51B3\u65B9\u5F0F\uFF1A",paraId:16,tocIndex:13},{value:"\u5728 picker-view \u4E0A\u6DFB\u52A0\u5C5E\u6027 ",paraId:17,tocIndex:13},{value:'a:if="{{popupVisible}}"',paraId:17,tocIndex:13},{value:"\uFF0C\u5728 Popup \u663E\u793A\u65F6\u518D\u663E\u793A picker-view\u3002",paraId:17,tocIndex:13},{value:"\u5728 Popup \u4E0A\u8BBE\u7F6E ",paraId:17,tocIndex:13},{value:'destroyOnClose="{{true}}"',paraId:17,tocIndex:13},{value:"\uFF0C\u5728 Popup \u4E0D\u53EF\u89C1\u65F6\u5378\u8F7D\u5185\u5BB9\u3002",paraId:17,tocIndex:13}]}}]);
