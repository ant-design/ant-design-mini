"use strict";(self.webpackChunkantd_mini=self.webpackChunkantd_mini||[]).push([[7381],{54175:function(o,e,a){a.r(e),a.d(e,{demos:function(){return d}});var n=a(67294),t=a(63392),d={"src-popover-demo-popover":{component:n.memo(n.lazy(function(){return a.e(2433).then(a.bind(a,53184))})),asset:{type:"BLOCK",id:"src-popover-demo-popover",refAtomIds:[],dependencies:{},entry:"index.ts"},context:{},renderOpts:void 0}}},58792:function(o,e,a){a.r(e),a.d(e,{texts:function(){return t}});var n=a(63392);const t=[{value:"Click on the element to pop up the bubble menu. The bubble menu for navigation functions is evoked, usually used to accommodate functions used at low frequencies. This function can only be activated via the icon on the navigation bar.",paraId:0,tocIndex:0},{value:"In ",paraId:1,tocIndex:1},{value:"index.json",paraId:1,tocIndex:1},{value:" Introducing Components in",paraId:1,tocIndex:1},{value:`"usingComponents": {
#if ALIPAY
  "ant-popover": "antd-mini/es/Popover/index"
#endif
#if WECHAT
  "ant-popover": "antd-mini/Popover/index"
#endif
}
`,paraId:2,tocIndex:1},{value:`<popover
  content="simple tips"
  placement="top-left"
  showCloseIcon="{{true}}"
  style="display: inline-block">
  <ant-button
    size="small"
    inline>
    Point me
  </ant-button>
</popover>
`,paraId:3,tocIndex:3},{value:`<popover
  content="\u8FD9\u91CC\u662F\u4E00\u4E2A\u63D0\u793A\u6587\u6848\u5F88\u957F\u7684Tips\uFF0C\u914C\u60C5\u4F7F\u7528\u6587\u6848\u3002\u5355\u4E00Tips\u6700\u591A\u53EF\u5BB9\u7EB32\u884C\u6587\u6848\u8FD9\u91CC\u662F\u4E00\u4E2A\u63D0\u793A\u6587\u6848\u5F88\u957F\u7684Tips\uFF0C\u914C\u60C5\u4F7F\u7528\u6587\u6848\u3002\u5355\u4E00Tips\u6700\u591A\u53EF\u5BB9\u7EB32\u884C\u6587\u6848\u2026"
  placement="top"
  actionText="operation"
  imageUrl="https://mdn.alipayobjects.com/huamei_mnxlps/afts/img/A*tLCBTqxataIAAAAAAAAAAAAADkqGAQ/original"
#if ALIPAY
  onVisibleChange="onVisibleChange"
  onTapAction="onTapAction"
#endif
#if WECHAT
  bindvisiblechange="onVisibleChange"
  bindtapaction="onTapAction"
#endif
  >
  <ant-button>Point me</ant-button>
</popover>
`,paraId:4,tocIndex:4},{value:`<popover
  content="red"
  color="red">
  <ant-button style="margin-right: 24rpx;" inline type="primary">Custom Colors</ant-button>
</popover>
`,paraId:5,tocIndex:6},{value:`<popover content="left & right slots">
  <ant-button inline style="margin-right: 24rpx;">Slot</ant-button>
  <icon slot="leftContent" style="font-size: 48rpx; margin-right: 24rpx;" type="FaceRecognitionOutline" />
  <icon slot="rightContent" style="font-size: 48rpx; margin-left: 24rpx;" type="FaceRecognitionOutline" />
</popover>
`,paraId:6,tocIndex:7},{value:"Optional ",paraId:7,tocIndex:8},{value:"top",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"top-right",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"top-left",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"bottom",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"bottom-left",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"bottom-right",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"left",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"left-top",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"left-bottom",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"right",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"right-top",paraId:7,tocIndex:8},{value:"\u3001",paraId:7,tocIndex:8},{value:"right-bottom",paraId:7,tocIndex:8},{value:`<popover placement="top-right">
  <ant-button size="small" inline>Point me</ant-button>
  <view slot="content" />
</popover>
`,paraId:8,tocIndex:8},{value:`<view>
  <popover
    content="prompt"
    placement="right"
    showMask="{{false}}"
    visible="{{visible}}"
    style="display: inline-block">
    <text>Click the button to modify the visible</text>
  </popover>
</view>
<ant-button
  size="small"
  inline
  style="margin-top: 8px"
#if ALIPAY
  onTap="handleVisibleChange"
#endif
#if WECHAT
  bindtap="handleVisibleChange"
#endif
>
  Change visible
</ant-button>
`,paraId:9,tocIndex:9},{value:`Page({
  data: { visible: false },
  handleVisibleChange() {
    this.setData({
      visible: !this.data.visible,
    });
  },
});
`,paraId:10,tocIndex:9},{value:"Property",paraId:11,tocIndex:11},{value:"Description",paraId:11,tocIndex:11},{value:"Type",paraId:11,tocIndex:11},{value:"Default Value",paraId:11,tocIndex:11},{value:"autoAdjustOverflow",paraId:11,tocIndex:11},{value:"Automatically adjust the position when the bubble is blocked",paraId:11,tocIndex:11},{value:"boolean",paraId:11,tocIndex:11},{value:"true",paraId:11,tocIndex:11},{value:"className",paraId:11,tocIndex:11},{value:"Class Name",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"color",paraId:11,tocIndex:11},{value:"Background Color",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"contentClassName",paraId:11,tocIndex:11},{value:"content Class Name",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"contentStyle",paraId:11,tocIndex:11},{value:"content Style",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"content",paraId:11,tocIndex:11},{value:"Content",paraId:11,tocIndex:11},{value:"string | slot",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"defaultVisible",paraId:11,tocIndex:11},{value:"Display by default",paraId:11,tocIndex:11},{value:"boolean",paraId:11,tocIndex:11},{value:"false",paraId:11,tocIndex:11},{value:"destroyOnClose",paraId:11,tocIndex:11},{value:"Whether to unload content when invisible",paraId:11,tocIndex:11},{value:"boolean",paraId:11,tocIndex:11},{value:"false",paraId:11,tocIndex:11},{value:"maskClassName",paraId:11,tocIndex:11},{value:"Class name of the layer",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"maskStyle",paraId:11,tocIndex:11},{value:"Mask Style",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"placement",paraId:11,tocIndex:11},{value:"Bubble box position, optional ",paraId:11,tocIndex:11},{value:"top",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"top-right",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"top-left",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"bottom",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"bottom-left",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"bottom-right",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"left",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"left-top",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"left-bottom",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"right",paraId:11,tocIndex:11},{value:"\u3001",paraId:11,tocIndex:11},{value:"right-top",paraId:11,tocIndex:11},{value:" or ",paraId:11,tocIndex:11},{value:"right-bottom",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"top",paraId:11,tocIndex:11},{value:"showMask",paraId:11,tocIndex:11},{value:"Whether to show the layer, if true, click the blank to close the Popover.",paraId:11,tocIndex:11},{value:"boolean",paraId:11,tocIndex:11},{value:"true",paraId:11,tocIndex:11},{value:"style",paraId:11,tocIndex:11},{value:"Style",paraId:11,tocIndex:11},{value:"string",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"visible",paraId:11,tocIndex:11},{value:"Whether to display",paraId:11,tocIndex:11},{value:"boolean",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"#if ALIPAY onVisibleChange",paraId:11,tocIndex:11},{value:"Callback at the time of visible change",paraId:11,tocIndex:11},{value:"(visible: boolean, event: ",paraId:11,tocIndex:11},{value:"Event",paraId:11,tocIndex:11},{value:") => void",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"#if ALIPAY onTapAction",paraId:11,tocIndex:11},{value:"Operation button click callback",paraId:11,tocIndex:11},{value:"() => void",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"#if WECHAT bindvisiblechange",paraId:11,tocIndex:11},{value:"Callback at the time of visible change",paraId:11,tocIndex:11},{value:"(visible: boolean, event: ",paraId:11,tocIndex:11},{value:"Event",paraId:11,tocIndex:11},{value:") => void",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"#if WECHAT bindtapaction",paraId:11,tocIndex:11},{value:"Operation button click callback",paraId:11,tocIndex:11},{value:"() => void",paraId:11,tocIndex:11},{value:"-",paraId:11,tocIndex:11},{value:"Component provides the following CSS variables, which can be used to customize styles. For details, see ConfigProvider Components.",paraId:12,tocIndex:13},{value:"Variable name",paraId:13,tocIndex:13},{value:"Default Value",paraId:13,tocIndex:13},{value:"Dark Mode Default",paraId:13,tocIndex:13},{value:"Remarks",paraId:13,tocIndex:13},{value:"--popover-color-background",paraId:13,tocIndex:13},{value:"#404040",paraId:13,tocIndex:13},{value:"#404040",paraId:13,tocIndex:13},{value:"Popover default background color",paraId:13,tocIndex:13},{value:"--popover-bg",paraId:13,tocIndex:13},{value:"#ffffff",paraId:13,tocIndex:13},{value:"#1a1a1a",paraId:13,tocIndex:13},{value:"Popover background color",paraId:13,tocIndex:13},{value:"--popover-text-color",paraId:13,tocIndex:13},{value:"#000000",paraId:13,tocIndex:13},{value:"#000000",paraId:13,tocIndex:13},{value:"Popover text color",paraId:13,tocIndex:13},{value:"--popover-inner-color",paraId:13,tocIndex:13},{value:"#ff3141",paraId:13,tocIndex:13},{value:"#ff4a58",paraId:13,tocIndex:13},{value:"Popover internal color",paraId:13,tocIndex:13}]}}]);
