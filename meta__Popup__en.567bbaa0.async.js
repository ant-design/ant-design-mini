"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[9091],{70241:function(t,a,e){e.r(a),e.d(a,{demos:function(){return d}});var o=e(67294),n=e(62531),d={"src-popup-demo-popup":{component:o.memo(o.lazy(function(){return e.e(2433).then(e.bind(e,90751))})),asset:{type:"BLOCK",id:"src-popup-demo-popup",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},83897:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(62531);const n=[{value:"Slides or pops up a custom content area from the screen. It is used to display pop-up windows, information prompts, selection input, switching, and other content. It supports multiple pop-up layers for overlay display.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-popup": "antd-mini/es/Popup/index"
#endif
#if WECHAT
  "ant-popup": "antd-mini/Popup/index"
#endif
}
`,paraId:2,tocIndex:1},{value:"ant-popup",paraId:3,tocIndex:3},{value:" Components must pass ",paraId:3,tocIndex:3},{value:"visible",paraId:3,tocIndex:3},{value:" Property controls the show/hide state.",paraId:3,tocIndex:3},{value:"position",paraId:3,tocIndex:3},{value:" Specifies the direction of occurrence, optional ",paraId:3,tocIndex:3},{value:"top",paraId:3,tocIndex:3},{value:" ",paraId:3,tocIndex:3},{value:"bottom",paraId:3,tocIndex:3},{value:" ",paraId:3,tocIndex:3},{value:"left",paraId:3,tocIndex:3},{value:" ",paraId:3,tocIndex:3},{value:"right",paraId:3,tocIndex:3},{value:". The contents of the pop-up window are filled in the form of slots.",paraId:3,tocIndex:3},{value:"close",paraId:3,tocIndex:3},{value:" The event will be triggered when the icon is closed by clicking the upper right corner or when the layer is closed by clicking the layer.",paraId:3,tocIndex:3},{value:"clickBack",paraId:3,tocIndex:3},{value:" event is triggered when the back button in the upper left corner is clicked.",paraId:3,tocIndex:3},{value:`<ant-popup
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
  bindclickback="onClickBack"
  bindclose="handlePopupClose"
#endif
>
  <view style="padding: 12px">
    A custom content area slides out or pops up from the screen to display pop-up windows, information prompts, selection input, switching, etc.
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
`,paraId:5,tocIndex:3},{value:"backgroundImage",paraId:6,tocIndex:4},{value:" property, you can set the background for the entire bullet layer.",paraId:6,tocIndex:4},{value:`<ant-popup
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
`,paraId:7,tocIndex:4},{value:"If the content in the pop-up window is too long and needs to support scrolling, please use ",paraId:8,tocIndex:5},{value:"scroll-view",paraId:8,tocIndex:5},{value:" component and add the following properties:",paraId:8,tocIndex:5},{value:`<ant-popup
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
`,paraId:9,tocIndex:5},{value:"Property",paraId:10,tocIndex:7},{value:"Description",paraId:10,tocIndex:7},{value:"Type",paraId:10,tocIndex:7},{value:"Default Value",paraId:10,tocIndex:7},{value:"animation",paraId:10,tocIndex:7},{value:"Whether to turn on transition animation",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"true",paraId:10,tocIndex:7},{value:"animationType",paraId:10,tocIndex:7},{value:"Animation type, optional",paraId:10,tocIndex:7},{value:"transform",paraId:10,tocIndex:7},{value:" ",paraId:10,tocIndex:7},{value:"position",paraId:10,tocIndex:7},{value:", the default is used",paraId:10,tocIndex:7},{value:"transform",paraId:10,tocIndex:7},{value:"Animation performance is better. However, when there is a fixed positioning or picker-view element inside the pop-up window, there may be a style problem, which can be switched",paraId:10,tocIndex:7},{value:"position",paraId:10,tocIndex:7},{value:"Solve",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"transform",paraId:10,tocIndex:7},{value:"className",paraId:10,tocIndex:7},{value:"Class Name",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"title",paraId:10,tocIndex:7},{value:"Title",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"''",paraId:10,tocIndex:7},{value:"destroyOnClose",paraId:10,tocIndex:7},{value:"Unload content when invisible",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"false",paraId:10,tocIndex:7},{value:"duration",paraId:10,tocIndex:7},{value:"Transition animation duration, in milliseconds",paraId:10,tocIndex:7},{value:"number",paraId:10,tocIndex:7},{value:"300",paraId:10,tocIndex:7},{value:"height",paraId:10,tocIndex:7},{value:"height, in position ",paraId:10,tocIndex:7},{value:"top",paraId:10,tocIndex:7},{value:" or ",paraId:10,tocIndex:7},{value:"bottom",paraId:10,tocIndex:7},{value:" When used, the unit is px. Optional, when not transmitted, it is highly adaptive according to the content area.",paraId:10,tocIndex:7},{value:"number",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"maskClassName",paraId:10,tocIndex:7},{value:"Class name of the layer",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"maskStyle",paraId:10,tocIndex:7},{value:"The style of the layer",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"position",paraId:10,tocIndex:7},{value:"Pop-up window layout, optional",paraId:10,tocIndex:7},{value:"top",paraId:10,tocIndex:7},{value:" ",paraId:10,tocIndex:7},{value:"bottom",paraId:10,tocIndex:7},{value:" ",paraId:10,tocIndex:7},{value:"left",paraId:10,tocIndex:7},{value:" ",paraId:10,tocIndex:7},{value:"right",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"bottom",paraId:10,tocIndex:7},{value:"showMask",paraId:10,tocIndex:7},{value:"Whether to show the layer",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"true",paraId:10,tocIndex:7},{value:"style",paraId:10,tocIndex:7},{value:"Style",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"visible",paraId:10,tocIndex:7},{value:"Whether to display",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"false",paraId:10,tocIndex:7},{value:"width",paraId:10,tocIndex:7},{value:"The width, in position, is ",paraId:10,tocIndex:7},{value:"left",paraId:10,tocIndex:7},{value:" or ",paraId:10,tocIndex:7},{value:"right",paraId:10,tocIndex:7},{value:" unit px",paraId:10,tocIndex:7},{value:"number",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"zIndex",paraId:10,tocIndex:7},{value:"Pop-up Level",paraId:10,tocIndex:7},{value:"number",paraId:10,tocIndex:7},{value:"998",paraId:10,tocIndex:7},{value:"backgroundImage",paraId:10,tocIndex:7},{value:"Background map of the bullet box",paraId:10,tocIndex:7},{value:"string",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"showClose",paraId:10,tocIndex:7},{value:"Show icon with bullet box closed",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"false",paraId:10,tocIndex:7},{value:"showBack",paraId:10,tocIndex:7},{value:"Show the icon returned by the bullet box",paraId:10,tocIndex:7},{value:"boolean",paraId:10,tocIndex:7},{value:"false",paraId:10,tocIndex:7},{value:"#if ALIPAY onClose",paraId:10,tocIndex:7},{value:"Click the mask to close and trigger the callback.",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"#if ALIPAY onClickBack",paraId:10,tocIndex:7},{value:"Click the back button to trigger the callback",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"#if ALIPAY onAfterShow",paraId:10,tocIndex:7},{value:"Trigger after full display",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"#if ALIPAY onAfterClose",paraId:10,tocIndex:7},{value:"Trigger after full shutdown",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"#if WECHAT bindclose",paraId:10,tocIndex:7},{value:"Click the mask to close and trigger the callback.",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"#if WECHAT bindclickbackicon",paraId:10,tocIndex:7},{value:"Click the back button to trigger the callback",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"#if WECHAT bindaftershow",paraId:10,tocIndex:7},{value:"Trigger after full display",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"#if WECHAT bindafterclose",paraId:10,tocIndex:7},{value:"Trigger after full shutdown",paraId:10,tocIndex:7},{value:"() => void",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:11,tocIndex:9},{value:"Variable name",paraId:12,tocIndex:9},{value:"Default Value",paraId:12,tocIndex:9},{value:"Dark Mode Default",paraId:12,tocIndex:9},{value:"Remarks",paraId:12,tocIndex:9},{value:"--popover-list-content-bg",paraId:12,tocIndex:9},{value:"rgba(0, 0, 0, 0.93)",paraId:12,tocIndex:9},{value:"rgba(0, 0, 0, 0.93)",paraId:12,tocIndex:9},{value:"Popover List Content Background Color",paraId:12,tocIndex:9},{value:"--popover-list-content-color",paraId:12,tocIndex:9},{value:"#ffffff",paraId:12,tocIndex:9},{value:"#c5cad1",paraId:12,tocIndex:9},{value:"Popover List Content Color",paraId:12,tocIndex:9},{value:"--popover-list-badge-color",paraId:12,tocIndex:9},{value:"#ff411c",paraId:12,tocIndex:9},{value:"#ff411c",paraId:12,tocIndex:9},{value:"Popover List Badge Color",paraId:12,tocIndex:9},{value:"--popover-list-content-color",paraId:12,tocIndex:9},{value:"#333333",paraId:12,tocIndex:9},{value:"#c5cad1",paraId:12,tocIndex:9},{value:"Popover list content text color",paraId:12,tocIndex:9},{value:"Preventing page scrolling after the layer is currently not effective in IDE and emulator, please debug on real machine.",paraId:13,tocIndex:11},{value:"If you need to scroll in the pop-up window, use the scroll-view component and add the following attributes:",paraId:14,tocIndex:12},{value:`<popup height="{{250}}" visible="{{visible}}">
  <scroll-view
    scroll-y
    disable-lower-scroll="out-of-bounds"
    disable-upper-scroll="out-of-bounds"
  >
    ...\u4F60\u7684\u5185\u5BB9...
  </scroll-view>
</popup>
`,paraId:15,tocIndex:12},{value:"Popup is passed by default. ",paraId:16,tocIndex:13},{value:"display:none",paraId:16,tocIndex:13},{value:" Hidden, and picker-view cannot be placed in ",paraId:16,tocIndex:13},{value:"display:none",paraId:16,tocIndex:13},{value:" in the components. There are two solutions:",paraId:16,tocIndex:13},{value:"Add attribute on picker-view ",paraId:17,tocIndex:13},{value:'a:if="{{popupVisible}}"',paraId:17,tocIndex:13},{value:", the picker-view is displayed when the Popup is displayed.",paraId:17,tocIndex:13},{value:"Set on Popup ",paraId:17,tocIndex:13},{value:'destroyOnClose="{{true}}"',paraId:17,tocIndex:13},{value:"to unload content when the Popup is not visible.",paraId:17,tocIndex:13}]}}]);
